'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import YouTubeEmbed from '@/components/sections/YouTubeEmbed';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import HowToUseEMDSteps from '@/components/ai_components/HowToUseEMDSteps';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="EMD Management in ERPNext"
        highlightWords={["EMD", "Management"]}
        description="Optimize your Earnest Money Deposit processes with ERPNext. Manage EMDs efficiently, automate accounting entries, and ensure compliance with ease."
        primaryButton={{
          text: 'Download App',
          action: () => window.open('https://frappecloud.com/marketplace/apps/emd_management', '_blank'),
        }}
        secondaryButton={{
          text: 'Learn More',
          action: "#introduction"
        }}
        heroImage={{
          alt: 'EMD Management in ERPNext',
          src: '/images/EMD-PageDesign-for-Apps.svg',
        }}
      />
      
      

      <Section useGradient >
        <div className="container-custom py-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-[#1A5276]">
              {/* <CheckCircle2 className="text-primary" size={28} /> */}
              Introduction
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Earnest Money Deposit (EMD) is a financial guarantee required from bidders to show their commitment to a contract or tender process. Usually a percentage of the bid or a fixed amount, the EMD is held by the inviting organization. If a bidder fails to honor the contract, the EMD may be forfeited. A clear understanding of EMD terms is vital for participants in procurement or bidding activities.
            </p>
          </div>
        </div>
      </Section>

      <Section id="introduction">
        <div className="container-custom py-8 flex flex-col items-center">
          <YouTubeEmbed
            url="https://www.youtube.com/embed/oArobHyygSQ"
            title="EMD Management in ERPNext Overview"
            className="rounded-lg shadow-lg w-full aspect-video max-h-[420px]"
            aspectRatio='21:9'
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <List
            title="Why do you Need this App in ERPNext"
            items={[
              'Centralized EMD Handling: The app allows users to centrally manage all ERPNext EMD accounting operations, streamlining data entry and tracking across all departments involved in earnest money deposit management.',
              'Financial Control & Compliance: Set rules for EMD amounts, deadlines, interest management, and forfeiture. This ensures that ERPNext security deposit activities stay within policy frameworks and are transparent.',
              'Live Status Tracking: Gain real-time insights into EMDs – whether they are paid, refunded, due, or forfeited – with status updates reflected instantly within ERPNext EMD accounting reports.',
              'Automated Follow-ups: The system can automatically send reminders to customers for pending earnest money deposit refunds after the maturity date, ensuring timely recovery of funds.',
              'Interest & Refund Handling: When customers return the EMD with interest, the system processes it via journal entries, updating the ERPNext security deposit status and crediting interest accurately.',
              'Using the EMD app in ERPNext enhances transparency, automates critical steps, and aligns earnest money deposit management with your organization’s accounting and compliance needs.'
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-6 text-[#1A5276]">How to use EMD Management in ERPNext</h2>
          <HowToUseEMDSteps
            steps={[
              {
                title: 'At Time of Giving EMD',
                description: 'Fill out the EMD form by entering Customer, Due Date, Deposit Account, Bank Account, Tender Name/No, Amount, Charges, and Payment Details. On submission, a Journal Entry will be created reflecting charges and receivables under ERPNext EMD accounting. Status will update as “Paid.”',
                image: '/images/EMD Paid-26-36.gif',
                alt: 'EMD Paid',
              },
              {
                title: 'When EMD is Due',
                description: 'For overdue EMDs, the system flags the status as “Due.” You can choose to enable “Send Weekly Reminder,” and the app will automate reminder emails using templates and recipient details pulled from the system. This helps in timely follow-ups for earnest money deposit returns.',
                image: '/images/EMD Due-52-62.gif',
                alt: 'EMD Due',
              },
              {
                title: 'When EMD is Returned',
                description: 'Open the returned EMD, mark it as “Returned,” enter the interest amount and receiving bank details. The app will automatically create a journal entry reflecting the interest income and mark the ERPNext security deposit as refunded.',
                image: '/images/EMD Returned-90-100.gif',
                alt: 'EMD Returned',
              },
              {
                title: 'If EMD Forfeited',
                description: 'In case of forfeiture, mark the EMD as “Forfeited,” select the write-off account, and the system will generate the appropriate Journal Entry to remove the balance from books, aligning with proper ERPNext EMD accounting practices.',
                image: '/images/EMD Forfieted-115-125.gif',
                alt: 'EMD Forfeited',
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to streamline EMD management?',
                icon: 'CheckCircle2',
              },
              title: 'Get Started with EMD Management in ERPNext',
              highlightText:"EMD Management in ERPNext",
              description: 'Automate, track, and ensure compliance for all your Earnest Money Deposits. Download the app or contact us for a personalized demo.',
              primaryButton: {
                text: 'Download Now',
                icon: 'Download',
                action: () => window.open('https://frappecloud.com/marketplace/apps/emd_management', '_blank'),
              },
              secondaryButton: {
                text: 'Request Demo',
                icon: 'PlayCircle',
                action: () => window.location.href = '/contact',
              },
              trustIndicator: {
                text: 'Trusted by ERPNext users',
                icon: 'ShieldCheck',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
