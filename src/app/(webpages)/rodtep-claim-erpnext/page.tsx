'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import YouTubeEmbed from '@/components/sections/YouTubeEmbed';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import HowToUseRodtepAppList from '@/components/ai_components/HowToUseRodtepAppList';
import Image from 'next/image';
import { LucideDownload } from 'lucide-react';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="RODTEP Claim Management in ERPNext"
        highlightWords={["RODTEP", "Claim" , "Management"]}
        description="Streamline your RODTEP and Duty Drawback claims using ERPNext. Finbyz Tech, a leading ERPNext Implementation Partner in Ahmedabad, offers tailored solutions for exporters."
        primaryButton={{
          text: 'Download App',
          action: () => window.open('https://frappecloud.com/marketplace/apps/rodtep_claim_management', '_blank'),
        }}
        secondaryButton={{
          text: 'Contact Us',
          action: () => window.open('https://web.finbyz.tech/contact', '_blank'),
        }}
        heroImage={{
          alt: 'RODTEP Claim Management in ERPNext',
          src: '/images/Rodtep-App-PageDesign-SVG.svg',
        }}
      />
      {/* https://finbyz.tech/contact */}

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1A5276]">
            <span className="inline-block ">
              {/* <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check"><path d="M7.5 4.21a2 2 0 0 1 3-2.42 2 2 0 0 1 3 0 2 2 0 0 1 3 2.42 2 2 0 0 1 1.16 2.63 2 2 0 0 1 0 3.32 2 2 0 0 1-1.16 2.63 2 2 0 0 1-3 2.42 2 2 0 0 1-3 0 2 2 0 0 1-3-2.42 2 2 0 0 1-1.16-2.63 2 2 0 0 1 0-3.32A2 2 0 0 1 7.5 4.21Z"/><path d="m9 12 2 2 4-4"/></svg> */}
            </span>
            Introduction
          </h2>
          <p className="text-muted-foreground text-lg mb-2">
            As an exporter, you are eligible to receive government incentives like RODTEP and Duty Drawback for your exports. This app streamlines the management of these benefits, offering complete export-wise tracking and automation for your RODTEP claim process in ERPNext.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <YouTubeEmbed
            url="https://www.youtube.com/embed/svHYM6eOAIM"
            title="RODTEP Claim Management in ERPNext Demo"
            className="rounded-lg shadow-lg w-full aspect-video"
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-6 text-[#1A5276]">How to use the App</h2>
          <HowToUseRodtepAppList
            steps={[
              {
                title: 'After installing the app, begin with the ERPNext RODTEP setup. Navigate to Company Details under Accounts settings and create the following accounts in the Chart of Accounts. Then, link them accordingly:',
                items: [
                  'Duty Drawback Receivable Account',
                  'Duty Drawback Income Account',
                  'Duty Drawback Cost Center',
                  'RODTEP Receivable Account',
                  'RODTEP Income Account',
                  'RODTEP Cost Center',
                ],
              },
              {
                title: 'Create an Export Sales Invoice. In the item table, under the Exim section, fill in the RODTEP rate, Duty Drawback rate, freight, and insurance. The app will auto-calculate the FOB amount and corresponding RODTEP and Duty Drawback values.',
              },
              {
                title: 'Save and submit the invoice. A Journal Entry will be automatically created using the accounts defined in the ERPNext RODTEP setup.',
              },
              {
                title: 'To manage RODTEP claims, go to RODTEP Claim Process in ERPNext:',
                items: [
                  'Click on Add RODTEP Claim.',
                  'Enter Script No, Posting Date, Start Date (Goods Exported), End Date.',
                  'Click on Get RODTEP Entries, and you will get the journal entry with shipping bill no. which type is RODTEP, and the entry will be between Start date to End Date.',
                  'Remove the journal entry that is not included in the RODTEP Script.',
                  'Enter RODTEP Script Account.',
                  'Click Save and Submit.',
                  'After submission of RODTEP Claim, a Journal Entry will be created for Script Account Debit and RODTEP Receivable Account Credit.',
                ],
              },
              {
                title: 'Note: The same Journal Entry number cannot be reused. It links with the RODTEP Claim during the “Get RODTEP Entries” process.',
              },
              {
                title: 'To sell RODTEP License:',
                items: [
                  'Create an item named "RODTEP License" and set the RODTEP Script Account as the default income account.',
                  'Create a sales invoice as you would for a regular invoice. In the item table, select the "RODTEP License" item and enter the sales amount.',
                  'Any difference between the sale value and the script amount should be recorded as a discount in the tax and charges section.',
                ],
              },
              {
                title: 'To use the RODTEP License against imports:',
                items: [
                  'You need to pass a Journal Entry.',
                  'Credit the RODTEP Script Account.',
                  'Debit the custom duty charges.',
                ],
              },
              {
                title: 'To manage Duty Drawback Claim, go to Duty Drawback Claim in ERP:',
                items: [
                  'Click on Add Duty Drawback Claim.',
                  'Fill in Posting Date, Start Date (Goods Exported), and End Date.',
                  'Click on “Get Duty Drawback Entries” to fetch related journal entries for the specified date range with type Drawback.',
                  'Remove the journal entry for the drawback that has not been received.',
                  'Enter the bank account where you received the Duty Drawback.',
                  'Click Save and Submit.',
                  'After submission of Duty Drawback Claim, a Journal Entry will be created for Bank Account Debit and RODTEP Receivable Account Credit.',
                ],
              },
            ]}
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to streamline your RODTEP claims?',
                icon: 'check-circle',
              },
              title: 'Get Started with RODTEP Claim Management in ERPNext',
              highlightText:"RODTEP Claim Management in ERPNext",
              description: 'Simplify your export incentive process and automate your RODTEP and Duty Drawback claims. Download the app or contact us for a personalized demo.',
              primaryButton: {
                text: 'Download App',
                icon: 'download',
                action: () => window.open('https://frappecloud.com/marketplace/apps/rodtep_claim_management', '_blank'),
              },
              secondaryButton: {
                text: 'Contact Us',
                icon: 'mail',
                action: () => window.open('https://web.finbyz.tech/contact', '_blank'),
              },
              trustIndicator: {
                text: 'Trusted ERPNext Partner',
                icon: 'star',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
