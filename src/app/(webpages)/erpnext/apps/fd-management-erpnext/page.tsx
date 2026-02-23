'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import YouTubeEmbed from '@/components/sections/YouTubeEmbed';

import HowToUseFDAppSteps from '@/components/ai_components/HowToUseFDAppSteps';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="FD Management In ERPNext"
        highlightWords={["FD Management"]}
        description="Discover how ERPNext simplifies fixed deposit management with automated tracking, interest accrual, and seamless integration into your financial asset portfolio."
        primaryButton={{
          text: 'Get Started',
          action: "#fd-managment"
        }}
        secondaryButton={{
          text: 'Download App',
          action: () => {
            window.open('https://frappecloud.com/marketplace/apps/fd_management', '_blank');
          }
        }}
        heroImage={{
          alt: 'FD Management In ERPNext',
          src: '/images/FD-Management-PageDesign.svg',

        }}
      />

      <Section useGradient>
        <div className="container-custom py-8 flex flex-col md:flex-row items-center gap-8 animate-fade-in-up" >
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1A5276]">
              <span className="inline-block w-2 h-6 bg-primary rounded-sm" />
              Introduction
            </h2>
            <p  className="text-muted-foreground text-lg leading-relaxed text-justify" >
              In ERPNext, Fixed Deposit (FD) management is a vital component of effective financial asset planning. A fixed deposit is a secure investment option offered by banks and NBFCs, providing higher returns than a standard savings account over a fixed period. With FD management in ERPNext, businesses can track, manage, and automate their fixed deposit operations directly within the ERP system, ensuring accuracy and compliance.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/images/FD-Management-PageDesign.svg" alt="FD Management In ERPNext" width={420} height={320} className="rounded-xl shadow-lg object-contain bg-white" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8" id="fd-managment">
          <YouTubeEmbed
            url="https://www.youtube.com/watch?v=hZTaBWUbmf0"
            title="FD Management In ERPNext Demo"
            className="rounded-xl shadow-lg w-full aspect-video"
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[#1A5276]">
            <span className="inline-block w-2 h-6 bg-primary rounded-sm mr-2" />
            How to use the App
          </h2>
          <HowToUseFDAppSteps
            steps={[
              {
                title: 'Creating a Fixed Deposit',
                items: [
                  'To initiate a fixed deposit entry, navigate to the ERPNext Fixed Deposit list and click on "Add Fixed Deposit."',
                  'Fill in all required fields such as FD Number, Posting Date, Bank Account, FD Account, Interest Account, FD Start Date, FD Amount, Maturity Date, and Maturity Amount for accurate FD management in ERPNext.',
                  'Click "Save and Submit" to finalize the entry.',
                  'Upon submission, ERPNext automatically generates a journal entry: Bank Account is credited and the financial asset (FD account) is debited, ensuring transparent accounting.'
                ]
              },
              {
                title: 'When the Fixed Deposit Matures',
                items: [
                  'Go to the Fixed Deposit list, select the relevant deposit, and mark it as "Matured".',
                  'Enter the Maturity Amount and click on "Update" to proceed.',
                  'ERPNext automatically generates a journal entry to reflect the maturity: the Bank Account is debited, while the FD Account and Interest Income Account are credited. This simplifies ERPNext financial asset tracking and reporting.'
                ]
              },
              {
                title: 'When The Fixed Deposit is Renewed',
                items: [
                  'From the Fixed Deposit list, select the deposit to renew and check the "Renewed" option.',
                  'Provide the Renewed Amount, New Maturity Date, and updated Maturity Amount. Click on "Update" to process.',
                  'ERPNext will create a journal entry where the FD Account is debited with the Renewal Amount and credited with the previous Principal. The interest difference is posted to the FD Interest Account. A new ERPNext Fixed Deposit entry is automatically generated, keeping the asset lifecycle traceable within your ERPNext financial asset management.'
                ]
              }
            ]}
          />
        </div>
      </Section>

      

      <Section useGradient>
        <div className="container-custom py-8 flex flex-col items-center text-center">
        </div>
      </Section>
    </>
  );
}
