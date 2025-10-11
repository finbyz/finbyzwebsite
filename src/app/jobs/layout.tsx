"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

interface Job {
  id?: number;
  title?: string;
  job_title?: string;
  description?: string;
  department?: string;
  skills?: string[];
  location?: string;
  employment_type?: string;
  posted_date?: string;
  creation?: string;
  date_posted?: string;
  posting_date?: string;
  valid_till?: string;
  salary?: number;
  salary_currency?: string;
  salary_unit_text?: string;
  salary_min?: number;
  salary_max?: number;
  small_description?:string;
  route?:string;
}

const cleanHtmlContent = (html: string): string => {
  if (!html) return "";
  return html
    .replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      ""
    )
    .replace(
      /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,
      ""
    )
    .replace(/on\w+="[^"]*"/gi, "")
    .replace(/javascript:/gi, "");
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        if (!res.ok) return;
        const data = await res.json();
        if (data?.success && Array.isArray(data.data)) {
          setJobs(data.data as Job[]);
        }
      } catch (_) {
        // ignore fetch errors
      }
    };
    fetchJobs();
  }, []);

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "CollectionPage",
    name: "Jobs",
    hasPart: jobs.map((job) => {
      const title = job.job_title || job.title || "Job Opening";
      const locationText = (job.location || "").trim();
      const isRemote = locationText.toLowerCase().includes("remote");

      const jobPosting: any = {
        "@type": "JobPosting",
        title,
        description: cleanHtmlContent(job.description || ""),
        employmentType: job.employment_type || "Full-time",
        department: job.department,
      };

      // ✅ Handle location
      if (isRemote) {
        jobPosting.jobLocationType = "TELECOMMUTE";
      } else if (locationText) {
        jobPosting.jobLocation = {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: locationText,
          },
        };
      }
      // console.log(jobPosting);
      console.log(job.posted_date)
      // ✅ Handle datePosted with fallbacks + ISO formatting

      jobPosting.datePosted = job.posted_date;

      // ✅ Organization info
      jobPosting.hiringOrganization = {
        "@type": "Organization",
        name: "FinByz Tech Pvt Ltd",
        url: "https://finbyz.tech",
        logo: {
          "@type": "ImageObject",
          url: "https://finbyz.tech/files/FinbyzLogo.png",
        },
      };

      // ✅ Salary info
      jobPosting.baseSalary = job.salary;
      // ✅ Valid through
      jobPosting.validThrough = job.valid_till;

      // ✅ Qualifications example
      jobPosting.qualifications = {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Bachelor of Science",
        about: "Computer Science",
        recognizedBy: {
          "@type": "Organization",
          name: "ABET",
          url: "https://www.abet.org/",
        },
      };
      jobPosting.jobLocation = {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "FinByz Tech Pvt Ltd, 504-Addor Ambition, Nr. Navrang Circle, Navrangpura, Ahmedabad, Gujarat 380009",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          addressCountry: "IN",
          postalCode: "380009",
        },
      };

      return jobPosting;
    }),
  };

  return (
    <>
      {jobs.length > 0 && (
        <Script
          id="jobs-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
      {children}
    </>
  );
}
