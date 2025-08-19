"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export interface JobDetailSectionData {
  title?: string;
  jobDescription?: string[];
  keySkills?: string[];
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  cta?: {
    primary?: { label: string; href?: string };
    secondary?: { label: string; href?: string };
  };
}

interface JobDetailSectionProps {
  id?: string;
  className?: string;
  data?: JobDetailSectionData;
}

export default function JobDetailSection({ id, className, data = {} }: JobDetailSectionProps) {
  const {
    title = "Marketing Executive",
    jobDescription = [
      "Source new sales opportunities through lead follow-up and outbound cold calls and emails.",
      "Visit leads/clients, have initial discussion and give demo/presentation on ERP software.",
      "Understand client requirements and do the gap analysis of project.",
      "Route qualified opportunities to the appropriate delivery team(s) for further development and closure.",
      "Close sales and aggressively achieve the sales target.",
      "Continuous follow up with existing customers and acquiring new customers.",
    ],
    keySkills = [
      "Analytical skills with strong logical reasoning.",
      "Strong phone presence and experience dialing dozens of calls per day.",
      "Proven inside sales experience will be an added advantage.",
      "Strong communication skills and ability to conduct user training.",
      "Prior experience in the field of IT sales will be great.",
    ],
    image = {
      src: "/job-illustration.png",
      alt: "Job illustration",
      width: 520,
      height: 420,
    },
    cta = {
      primary: { label: "Know More", href: "#" },
      secondary: { label: "Apply Now", href: "#" },
    },
  } = data;

  return (
    <section id={id} className={`py-16 bg-white ${className || ""}`.trim()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">{title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Job Description</h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                  {jobDescription.map((item, idx) => (
                    <li key={`desc-${idx}`}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Skills</h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                  {keySkills.map((item, idx) => (
                    <li key={`skill-${idx}`}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width || 520}
                height={image.height || 420}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          {cta.primary?.label && (
            <Button asChild size="lg" className="rounded-full">
              <a href={cta.primary.href || "#"}>{cta.primary.label}</a>
            </Button>
          )}
          {cta.secondary?.label && (
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href={cta.secondary.href || "#"}>{cta.secondary.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}


