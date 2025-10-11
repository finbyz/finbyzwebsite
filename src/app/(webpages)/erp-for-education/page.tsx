'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import List from '@/components/sections/list';
import EducationFeatureGrid from '@/components/ai_components/EducationFeatureGrid';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

const heroImage = {
  alt: 'ERP For Education',
  src: '/images/icon-order-management.svg',
  videoSrc: undefined,
};

const handlePrimary = () => {
  // TODO: Add primary action logic
};
const handleSecondary = () => {
  // TODO: Add secondary action logic
};

const featureList = [
  {
    title: 'Student Applicants',
    image: '/images/icon-order-management.svg',
    alt: 'Student Applicants',
    description:
      'Manage applications for all your programs in one place. Create Student Applicant records, approve them, and start communication directly from ERP.'
  },
  {
    title: 'Student Information',
    image: '/images/documentation.svg',
    alt: 'Student Information',
    description:
      "Maintain student details like personal info, photo, date of birth, address, guardians, siblings, and attach documents such as certificates and photos."
  },
  {
    title: 'Document Storage',
    image: '/images/Document Storage.svg',
    alt: 'Document Storage',
    description:
      "Upload and share multimedia files (images, videos, documents) for each student. Choose to upload directly or use a web link for easy access."
  },
  {
    title: 'Instructors',
    image: '/images/Instructors.svg',
    alt: 'Instructors',
    description:
      "Define course schedules, link instructors and students, and assign examiners or supervisors for assessments."
  },
  {
    title: 'Program Enrollment',
    image: '/images/lack-of-participation.svg',
    alt: 'Program Enrollment',
    description:
      "Track student enrollment and chosen courses for each academic year and term. Mandatory courses are auto-filled, electives can be selected manually."
  },
  {
    title: 'Programs & Courses',
    image: '/images/training and development.svg',
    alt: 'Programs & Courses',
    description:
      "Easily set up educational programs, include courses or electives, set mandatory courses, and link programs to departments."
  },
  {
    title: 'Student Attendance',
    image: '/images/Student Attendance.svg',
    alt: 'Student Attendance',
    description:
      "Track and manage student attendance daily. Teachers can mark attendance with simple checkboxes, and records are created automatically."
  },
  {
    title: 'Student Fees',
    image: '/images/Student fees.svg',
    alt: 'Student Fees',
    description:
      "Maintain records of fees collected, including categories like tutorials, visits, and accommodation. View paid and outstanding amounts easily."
  },
  {
    title: 'Assessment Plan',
    image: '/images/lack-of-adequate-planning.svg',
    alt: 'Assessment Plan',
    description:
      "Schedule assessments for student groups, capture details like group, grade scale, criteria, examiner, and supervisor. Generate results easily."
  },
  {
    title: 'Learning Management System (LMS)',
    image: '/images/Learning management system.svg',
    alt: 'Learning Management System (LMS)',
    description:
      "Publish programs on your website with articles, videos, and quizzes. Track student progress through the desk and portal. LMS is easily enabled."
  },
];

const benefits = [
  'Centralized management of students, teachers, and courses',
  'Streamlined admissions and enrollment processes',
  'Efficient document and information storage',
  'Automated attendance and fee management',
  'Integrated learning management and assessment tools',
  'Enhanced communication between stakeholders',
  'Open-source and customizable for any institution size',
];

export default function Page() {
  return (
    <>
      <HeroSection
        headline="ERP For Education"
        highlightWords={["ERP", "Education"]}
        description="Discover the best ERP for schools. Our education ERP software streamlines operations, enhancing efficiency and learning outcomes for educational institutions."
        primaryButton={{
          text: 'Get Started',
          action: handlePrimary,
        }}
        secondaryButton={{
          text: 'Request Demo',
          action: handleSecondary,
        }}
        heroImage={heroImage}
      />

      <Section>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">ERP software for the Education Purpose</h2>
          <p className="mb-2">Finbyz ERP is an open source, modern ERP software for educational institutes and schools. It helps schools of any size to manage students, teachers, courses, and academic programs with an interactive portal built on our platform, all out of the box.</p>
          <p className="mb-2">With recent government initiatives to provide education in every nook and corner of the world, the future of education looks promising. Meanwhile, with growing competition between educational institutes and businesses, everyone is looking to next-gen enterprise technology solutions.</p>
          <p className="mb-2">Increase productivity, stand out from the pack, and focus on what matters — academics. Finbyz ERP is an open-source solution for student information management, employee management and expenses that can help you keep all critical information in one integrated system.</p>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 animate-fade-in-up">
          <List
            title="Here are some of the benefits that ERP software provides in education:"
            items={benefits}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <EducationFeatureGrid features={featureList.slice(0, 2)} />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <EducationFeatureGrid features={featureList.slice(2, 4)} />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <EducationFeatureGrid features={featureList.slice(4, 6)} />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <EducationFeatureGrid features={featureList.slice(6, 8)} />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <EducationFeatureGrid features={featureList.slice(8, 10)} />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 flex flex-col items-center">
          <CTA
            data={{
              subheading: {
                text: 'Ready to transform your institution?',
                icon: 'School',
              },
              title: 'Experience the Future of Education Management',
              highlightText:"Education Management",
              description: 'Empower your school or institute with a modern, open-source ERP. Streamline operations, boost efficiency, and focus on what matters most — academics.',
              primaryButton: {
                text: 'Get Started',
                icon: 'ArrowRight',
                action: handlePrimary,
              },
              secondaryButton: {
                text: 'Request Demo',
                icon: 'MonitorPlay',
                action: handleSecondary,
              },
              trustIndicator: {
                text: 'Trusted by leading educational institutions',
                icon: 'ShieldCheck',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
