'use client';
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import FlipCard from '@/components/ai_components/FlipCard';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const handlePrimaryAction = () => {
  // Implement primary CTA action
};
const handleSecondaryAction = () => {
  // Implement secondary CTA action
};

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Advanced Human Resource Software"
        highlightWords={["Human Resource", "Software", "Payroll"]}
        description="Discover Finbyz Tech's human resource software designed to streamline HR and payroll processes. Enhance efficiency, ensure compliance, and empower your workforce."
        primaryButton={{
          text: 'Get Started',
          action: () => {
            const el = document.getElementById('human-resources');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        secondaryButton={{
          text: 'Request Demo',
          action: () => {
            window.location.href = '/contact';
          },
        }}
        heroImage={{
          alt: 'Advanced Human Resource Software',
          src: '/images/hr_system 2019-07-27 18_25_22.svg',
          videoSrc: undefined,
        }}
      />

      {/* Quote Section */}
      <Section>
        <div className="container-custom py-8 flex flex-col gap-6 items-center" id="human-resources">
         <span className='text-lg'><b>Looking for a Complete HR and Payroll Software Solution for Your Business?</b></span>
          <div className="text-gray-700 text-justify text-lg leading-relaxed">
            <p className="mb-4">
              Human resource, often considered the backbone of any organization, is the only function with a strong human element at its core. As businesses move toward complete automation, it’s essential for HR departments to embrace technology through advanced human resource software. While automation may seem to reduce the “human touch,” it actually empowers HR professionals by simplifying complex processes. With increasing business demands, automating HR functions—especially recruitment—has become a necessity. Our HR software offers the perfect solution to streamline your operations, reduce manual workload, and enhance productivity.
            </p>
            <p>
              Every business has a unique structure, but core HR functions remain largely similar. Implementing effective human resource software simplifies day-to-day activities, increases efficiency, and accelerates task execution across all departments.
            </p>
          </div>
        </div>
      </Section>

      {/* Modern Feature Cards Section (from second HTML block) */}
      <Section>
        <div className="container-custom py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recruitment Modern */}
          <Card className="border-none shadow-md flex flex-col items-center p-6 animate-fadeInUp">
            <Image src="/images/icon Real-time information.svg" alt="Flawless UI with Real-time information" width={80} height={80} className="mb-2 " />
            <CardTitle className="text-2xl font-bold mb-2">Recruitment</CardTitle>
            <CardDescription className="text-justify text-lg mb-2">
              Finding and hiring the right talent is crucial to organizational growth. As the pool of skilled candidates grows, selecting the best fit becomes more challenging. Our recruitment module within the HR software reduces hiring time and costs while improving candidate quality. The system helps you:
            </CardDescription>
            <ul className="space-y-1 text-left w-full">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>Systematically store and manage candidate data.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>Improve the quality of talent hired.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>Reduce per hire costs and leads to efficiency.</span>
              </li>
            </ul>
          </Card>

          {/* Employee and Attendance Modern */}
          <Card className="border-none shadow-md flex flex-col items-center p-6 animate-fadeInUp">
            <Image src="/images/icon Improved Collaboration.svg" alt="Improved Collaboration" width={80} height={80} className="mb-2" />
            <CardTitle className="text-2xl font-bold mb-2">Employee and Attendance</CardTitle>
            <CardDescription className="text-justify text-lg mb-2">
              With flexible work hours becoming common, tracking attendance manually is no longer feasible. Our HR and payroll software includes biometric integration for accurate attendance tracking, helping businesses maintain discipline and transparency.
            </CardDescription>
          </Card>

          {/* Leave Management Modern */}
          <Card className="border-none shadow-md flex flex-col items-center p-6 animate-fadeInUp">
            <Image src="/images/icon Improved Collaboration.svg" alt="Improved Collaboration" width={80} height={80} className="mb-2" />
            <CardTitle className="text-2xl font-bold mb-2">Leave Management</CardTitle>
            <CardDescription className="text-justify text-lg mb-2">
              While occasional leaves are important for employee well-being, excessive absence can impact productivity. Our HR software includes leave management tools that monitor leave balances, track patterns, and evaluate their impact on performance.
            </CardDescription>
          </Card>

          {/* Appraisal Modern */}
          <Card className="border-none shadow-md flex flex-col items-center p-6 animate-fadeInUp">
            <Image src="/images/icon Real-time information.svg" alt="Flawless UI with Real-time information" width={80} height={80} className="mb-2" />
            <CardTitle className="text-2xl font-bold mb-2">Appraisal</CardTitle>
            <CardDescription className="text-justify text-lg mb-2">
              Appraisals are key to motivating employees. Manual performance reviews are time-consuming and error-prone. Our human resource software automates the appraisal process, making it consistent, objective, and data-driven. Benefits include:
            </CardDescription>
            <ul className="space-y-1 text-left w-full">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>Improved communication between HR and employees.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>Structured performance reviews aligned with goals.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>Reliable and transparent evaluation process.</span>
              </li>
            </ul>
          </Card>

          {/* Expense Claim Modern */}
          <Card className="border-none shadow-md flex flex-col items-center p-6 animate-fadeInUp">
            <Image src="/images/icon Real-time information.svg" alt="Flawless UI with Real-time information" width={80} height={80} className="mb-2" />
            <CardTitle className="text-2xl font-bold mb-2">Expense Claim</CardTitle>
            <CardDescription className="text-justify text-lg mb-2">
              Employee-incurred expenses such as travel and utilities need efficient tracking. Our HR and payroll software includes an expense claim system that:
            </CardDescription>
            <ul className="space-y-1 text-left w-full">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>Eliminates excessive paperwork for reimbursements.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>Enables quick and accurate employee reimbursements.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>Reduces expense processing time and cost.</span>
              </li>
            </ul>
          </Card>

          {/* Payroll Modern */}
          <Card className="border-none shadow-md flex flex-col items-center p-6 animate-fadeInUp">
            <Image src="/images/icon Improved Collaboration.svg" alt="Improved Collaboration" width={80} height={80} className="mb-2" />
            <CardTitle className="text-2xl font-bold mb-2">Payroll</CardTitle>
            <CardDescription className="text-justify text-lg mb-2">
              Timely and accurate compensation is critical to employee satisfaction. Our payroll module within the HR software ensures accurate calculations, tax compliance, and punctual salary disbursements. Automation in payroll management reduces errors, ensures compliance, and increases overall trust in the system.
            </CardDescription>
          </Card>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-[#1A5276]">Benefits of Human Resource Software for Your Business</h2>
          <div className="text-gray-700 text-lg text-justify leading-relaxed mb-6">
            <p className="mb-2">
              In addition to core functionalities, a robust human resource software also streamlines activities such as time tracking, skill management, employee training, and detailed reporting with analytics.
            </p>
            <p>
              HR software integrates all essential HR functions into a centralized system, simplifying repetitive and time-consuming tasks. This results in improved organizational efficiency and helps businesses stay organized and focused. With enhanced accuracy and transparency, HR and payroll software ensures that employees receive clear insights into their performance, growth, and compensation.
            </p>
          </div>
          <List
            title="Key Benefits that Human Resource Software Provides"
            items={[
              'Enhances overall business efficiency through automation and streamlined HR operations.',
              'Improves employee experience by offering clarity on leaves, appraisals, and payroll through user-friendly HR software.',
              'Effectively manages HR and payroll costs by reducing manual processes and human errors.',
              'Enables better decision-making with accurate data and insights provided by the HR and payroll software dashboard.'
            ]}
            conclusion={undefined}
          />
        </div>
      </Section>

      {/* Insightful Quote Section */}
      <Section>
        <div className="container-custom py-8 flex flex-col items-center">
          <h2 className="text-center text-2xl font-semibold mb-2">
            The main objective of using software in the Human resource departments is to have insights for effective decision making as
            <span className="block italic text-primary mt-2">“The goal is to turn data into information, and information into insights” (Carly Fiorina).</span>
          </h2>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Transform Your HR?',
                icon: 'UserCheck',
              },
              title: 'Experience the Power of Advanced Human Resource Software',
              highlightText:"Advanced Human Resource Software",
              description: 'Streamline your HR and payroll processes, empower your workforce, and drive business growth. Get started with Finbyz Tech today!',
              primaryButton: {
                text: 'Request a Demo',
                icon: 'ArrowRight',
                action: () => {
                  window.location.href = '/contact';
                },
              },
              secondaryButton: {
                text: 'Contact Sales',
                icon: 'Phone',
                action: () => {
                  window.location.href = '/contact';
                },
              },
              trustIndicator: {
                text: 'Trusted by leading businesses',
                icon: 'ShieldCheck',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
