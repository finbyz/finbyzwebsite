'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import EmployeeJoiningForm from '@/components/ai_components/EmployeeJoiningForm';
import { UserPlus } from 'lucide-react';
import { Suspense } from "react";
const excludedFieldnames = [
  "employee_name", "status", "company_email", "designation", "department", "salary_mode", "job_applicant", "job_offer", "naming_series", "url", "employment_type", "salary_slip", "is_intern"
];

// Simulated fields for demo. In real, fetch from API.
const fields = [
  { fieldname: "first_name", label: "First Name", fieldtype: "Data", reqd: true },
  { fieldname: "last_name", label: "Last Name", fieldtype: "Data", reqd: true },
  { fieldname: "date_of_joining", label: "Date of Joining", fieldtype: "Date", reqd: true },
  { fieldname: "applicant_type", label: "Applicant Type", fieldtype: "Select", options: "Fresher\nExperienced", reqd: true, default: "Fresher" },
  { fieldname: "salary_slip", label: "Salary Slip", fieldtype: "Attach", reqd: false },
  { fieldname: "address", label: "Address", fieldtype: "Text", reqd: false },
  { fieldname: "token", label: "Token", fieldtype: "Data", reqd: false, default: "" },
  { fieldname: "resume", label: "Resume", fieldtype: "Attach", reqd: false },
  { fieldname: "notes", label: "Notes", fieldtype: "Text", reqd: false },
  { fieldname: "agreement", label: "Agreement Signed", fieldtype: "Check", reqd: false },
];

export default function Page() {
  // In real, fetch fields from API and set state
  // const [fields, setFields] = useState([]);
  // useEffect(() => { fetchFields().then(setFields); }, []);

  return (
    <>
      <HeroSection
        headline="Employee Joining details"
        highlightWords={["Employee", "Joining", "details"]}
        description="Easily submit and manage your joining details. Fill out the form to complete your onboarding process quickly and securely."
        primaryButton={{
          text: "Start Now",
          action: "#employee-joining-form-section"
        }}
        secondaryButton={{
          text: "Contact Us",
          action: () => {
            window.open('/contact', '_blank');
          }
        }}
        heroImage={{
          alt: "Employee Joining details",
          src: "/emp-details.jpg",
        }}
      />
      <Section>
        <div className="container-custom py-8 flex flex-col md:flex-row items-center gap-8 animate-fade-in-up">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#1A5276]">
              <UserPlus className="text-[#1A5276]" size={28} />
              Welcome to Your New Journey
            </h2>
            <p className="text-base text-muted-foreground mb-2">
              Please fill out the employee joining form below. This information helps us onboard you efficiently and ensures all your details are up to date.
            </p>
            <ul className="list-disc pl-6 text-sm text-muted-foreground">
              <li>All required fields are marked with <span className="text-red-500">*</span>.</li>
              <li>Upload your documents securely.</li>
              <li>Contact HR for any queries.</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            {/* <Image src="/images/employee-joining-form-illustration.png" alt="Employee Joining Form Illustration" width={500} height={500} className="rounded-xl shadow-lg w-full md:w-96 h-auto object-contain animate-fade-in" loading="lazy" /> */}
          </div>
        </div>
      </Section>
      <Section>
        <div className="container-custom py-8" id="employee-joining-form-section">
          {/* <EmployeeJoiningForm fields={fields} excludedFieldnames={excludedFieldnames} /> */}
          <Suspense fallback={<div>Loading form...</div>}>
            <EmployeeJoiningForm />
          </Suspense>
        </div>
      </Section>
      <Section useGradient>
        <div className="container-custom py-8 text-center">
          <h3 className="text-xl font-semibold mb-2 text-[#1A5276]">Need Help?</h3>
          <p className="text-base text-muted-foreground mb-4">If you have any questions or need assistance with the joining process, our HR team is here to help you every step of the way.</p>
          <a href="mailto:hr@company.com" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            {/* <UserPlus size={18} /> */}
            {/* <button className="bg-orange-500 text-white px-6 py-2 rounded-2xl hover:bg-orange-600">
            Contact HR
          </button> */}
          </a>
        </div>
      </Section>
      <Section>
        <div className="py-1">
          <CTA
            data={{
              subheading: {
                text: "Ready to Join?",
                icon: "UserPlus"
              },
              title: "Complete Your Onboarding Today!",
              highlightText: "Onboarding",
              description: "Submit your joining details and start your journey with us. We look forward to working with you!",
              primaryButton: {
                text: "Submit Now",
                icon: "Save",
                action: "#employee-joining-form-section"
              },
              secondaryButton: {
                text: "Contact HR",
                icon: "UserPlus",
                action: () => {
                  window.open('https://finbyz.tech/contact', '_blank');
                }
              },
              trustIndicator: {
                text: "100% Secure & Confidential",
                icon: "ShieldCheck"
              }
            }}
          />
        </div>
      </Section>
    </>
  );
}
