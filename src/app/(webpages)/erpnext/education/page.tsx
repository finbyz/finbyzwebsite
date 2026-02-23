'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';

import List from '@/components/sections/list';
import EducationFeatureGrid from '@/components/ai_components/EducationFeatureGrid';

const heroImage = {
  alt: 'ERP For Education',
  src: '/images/icon-order-management.svg',
  videoSrc: undefined,
};

const featureList = [
  {
    title: 'Student Applicants',
    image: '/images/icon-order-management.svg',
    alt: 'Student Applicants',
    description:
    'Manage applications for all your programs in one place. Once a student applies to your program, you can create a Student Applicant record. If you approve the student, you can add them to your student master and start emailing them from within ERP.'
  },
  {
    title: 'Student Information',
    image: '/images/documentation.svg',
    alt: 'Student Information',
    description:
      "The Student doctype maintains details like personal information, photo, date of birth, and address. It also records the student's guardian and any siblings. You can also attach documents such as student's photo, educational certificates, and more!."
  },
  {
    title: 'Document Storage',
    image: '/images/Document Storage.svg',
    alt: 'Document Storage',
    description:
      "With all the external documentation in education, it's crucial that everyone can find and access important documents for each student. Finbyz ERP lets you upload and share multimedia files (such as images, videos, documents). You can choose to upload the files directly or use a web link."
  },
  {
    title: 'Instructors',
    image: '/images/Instructors.svg',
    alt: 'Instructors',
    description:
      "In Finbyz ERP, you can define a course schedule (including class dates and room numbers) and link it to the appropriate instructor and students. While creating the assessment plan for a student group, you can also link an instructor as the examiner or the supervisor for that assessment."
  },
  {
    title: 'Program Enrollment',
    image: '/images/lack-of-participation.svg',
    alt: 'Program Enrollment',
    description:
      "Program Enrollment is a student's record of enrollment and chosen courses for a particular academic year and (optionally) academic term. If a student is enrolled in a program, then you can create his/her Program Enrollment. The mandatory courses in that program will be automatically filled in the student's Enrolled Courses table, while elective or optional courses can be selected manually."
  },
  {
    title: 'Programs & Courses',
    image: '/images/training and development.svg',
    alt: 'Programs & Courses',
    description:
      "With Finbyz ERP, it's easy to set up your own educational programs — the learning progress for each subject in all stages of formal education. You can include courses or electives under a program, and you can even set courses as mandatory. Enter a unique code for every program, and you can also link each program to its department."
  },
  {
    title: 'Student Attendance',
    image: '/images/Student Attendance.svg',
    alt: 'Student Attendance',
    description:
      "Our Attendance doctype allows you to track and manage each student's attendance, every day at any time. The Attendance module is designed to help teachers easily mark student attendance during class. The Student Attendance Tool allows instructors to mark attendance of students faster with simple checkboxes, while the system creates corresponding attendance records in the backend. It's attendance management made simpler."
  },
  {
    title: 'Student Fees',
    image: '/images/Student fees.svg',
    alt: 'Student Fees',
    description:
      "Maintain a record of fees collected from students. Before collecting fees, the Fee Structure has to be created. It can include various categories such as classroom tutorials, industrial visit, and accommodation. This structure is based on the selected program and academic term. Student details and a detailed fee structure will be available in the Fee module. You also can get paid amount and outstanding amount details there."
  },
  {
    title: 'Assessment Plan',
    image: '/images/lack-of-adequate-planning.svg',
    alt: 'Assessment Plan',
    description:
      "Need to schedule an assessment or examination for a student group, for a specific course? Just create an Assessment Plan. With this doctype, you can capture details like student group, grade scale, assessment criteria, examiner, supervisor, and more! Create your assessment plans in ERP and watch the results get generated easily with our Assessment Result Tool."
  },
  {
    title: 'Learning Management System (LMS)',
    image: '/images/Learning management system.svg',
    alt: 'Learning Management System (LMS)',
    description:
      "Finbyz ERP’s Education module is bundled with a Learning Management System (LMS) out of the box. This allows institutes to publish their programs on their website. Programs can contain rich text articles, videos, and even quizzes. Students' progress can be tracked through the desk as well as the portal. LMS is disabled by default and can be enabled from Education Settings."
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
        highlightWords={["Education"]}
        description="Discover the best ERP for schools. Our education ERP software streamlines operations, enhancing efficiency and learning outcomes for educational institutions."
        primaryButton={{
          text: 'Get Started',
          action: "#erp-education"
        }}
        secondaryButton={{
          text: 'Request Demo',
          action: () => {
            window.location.href = '/contact';
          },
        }}
        heroImage={heroImage}
      />

      <Section>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4 text-[#1A5276]">ERP software for the Education Purpose</h2>
          <p className="mb-2">Finbyz ERP is an open source, modern ERP software for educational institutes and schools. It helps schools of any size to manage students, teachers, courses, and academic programs with an interactive portal built on our platform, all out of the box.</p>
          <p className="mb-2">With recent government initiatives to provide education in every nook and corner of the world, the future of education looks promising. Meanwhile, with growing competition between educational institutes and businesses, everyone is looking to next-gen enterprise technology solutions.</p>
          <p className="mb-2" id="erp-education">Increase productivity, stand out from the pack, and focus on what matters — academics. Finbyz ERP is an open-source solution for student information management, employee management and expenses that can help you keep all critical information in one integrated system.</p>
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
        </div>
      </Section>
    </>
  );
}
