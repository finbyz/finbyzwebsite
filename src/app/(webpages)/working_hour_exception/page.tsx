'use client'
import React from "react";
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import WorkingHourExceptionForm from '@/components/ai_components/WorkingHourExceptionForm';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { FileText } from 'lucide-react';

export default function Page() {
  const router = useRouter();

  const handleFormSuccess = React.useCallback(() => {
    toast.success('Submitted successfully!');
    setTimeout(() => {
      router.push('/thank-you');
    }, 1200);
  }, [router]);

  return (
    <>
      <HeroSection
        headline="Working Hour Exception"
        highlightWords={["Exception", "Working Hour"]}
        description="Submit your reason for incomplete working hours or low productivity. This helps us understand and address your situation better."
        primaryButton={{
          text: "Submit Reason",
          action: () => {
            const el = document.getElementById('exception-form-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        secondaryButton={{
          text: "Learn More",
          action: () => {
            const el = document.getElementById('about-exception-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        heroImage={{
          alt: 'Working Hour Exception',
          src: '/images/working-hour-exception-hero.png',
          
        }}
      />

      <Section useGradient>
        <div className="container-custom py-8" id="about-exception-section">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            What is a Working Hour Exception?
          </h2>
          <p className="text-base text-muted-foreground mb-2">
            A working hour exception occurs when an employee is unable to complete the expected working hours or productivity score for a given day. This form allows you to submit a valid reason for such exceptions, ensuring transparency and helping the organization support you better.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>All fields are auto-filled except the reason.</li>
            <li>Your response will be reviewed by the HR/Admin team.</li>
            <li>Providing a clear reason helps in accurate record keeping.</li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8" id="exception-form-section">
          <WorkingHourExceptionForm onSuccess={handleFormSuccess} />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h3 className="text-xl font-semibold mb-2">Why is this form important?</h3>
          <p className="text-base text-muted-foreground mb-2">
            Submitting a reason for incomplete working hours or low productivity ensures that your situation is properly documented and considered. It helps the organization maintain accurate records and provide necessary support or flexibility when needed.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <CTA
            data={{
              subheading: {
                text: 'Need Help?',
                icon: 'HelpCircle',
              },
              title: 'Contact HR or Admin for Assistance',
              description: 'If you have any questions or face issues submitting your exception, reach out to the HR/Admin team for support.',
              primaryButton: {
                text: 'Contact HR',
                icon: 'Mail',
                action: () => {
                  window.open('mailto:hr@yourcompany.com', '_blank');
                },
              },
              secondaryButton: {
                text: 'Back to Home',
                icon: 'Home',
                action: () => {
                  window.location.href = '/';
                },
              },
              trustIndicator: {
                text: 'Your data is confidential',
                icon: 'ShieldCheck',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
