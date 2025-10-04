'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import YouTubeEmbed from '@/components/sections/YouTubeEmbed';
import CTA from '@/components/sections/cta';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import ForwardContractGifImage from '@/components/ai_components/ForwardContractGifImage';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Forward Contract Management in ERPNext"
        highlightWords={["Forward Contract", "ERPNext", "Management"]}
        description="Master forward contract management in ERPNext. Learn setup, utilization, cancellation, and seamless accounting integration for effective currency hedging."
        primaryButton={{
          text: 'Get Started',
          action: () => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          }
        }}
        secondaryButton={{
          text: 'Download App',
          action: () => {
            window.open('https://frappecloud.com/marketplace/apps/forward_contract', '_blank');
          }
        }}
        heroImage={{
          alt: 'Forward Contract Management in ERPNext',
          src: 'api/fb/n/files/Forward-Contract-PageDesign.svg',
          videoSrc: null
        }}
      />

      {/* Overview Section */}
      <Section>
        <div className="container-custom py-8">
          <Card className="border-none bg-muted/40 shadow-none animate-fade-in-up">
            <CardHeader className="flex flex-row items-center gap-3">
              <CheckCircle className="text-primary shrink-0" size={28} />
              <CardTitle className="text-lg font-semibold">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                Forward contracting in ERPNext is a powerful tool for currency hedging, allowing businesses to lock in exchange rates for future international transactions. Through the forward contract ERPNext feature, importers and exporters can minimize the impact of currency fluctuations by setting a fixed rate in advance. With integrated forward contract accounting ERPNext capabilities, companies can efficiently track forward contracts, manage gains or losses, and maintain accurate financial records aligned with their forex exposures.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Introduction Section */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 animate-fade-in-up">
            <CheckCircle className="text-primary" size={24} />
            Introduction
          </h2>
          <List
            items={[
              'A forward contract in ERPNext is primarily used for currency hedging ERPNext, helping businesses mitigate foreign exchange risks for future settlements. For example, an importer or exporter with an FX contract limit can lock in the current exchange rate through a forward contract to avoid potential adverse currency fluctuations.',
              'The key benefit of using a forward contract ERPNext feature is to fix the exchange rate in advance, thus eliminating uncertainty from exchange rate movements. Forward Rates = Spot Rate +/- Premium/Discount.',
              'This custom currency hedging ERPNext application integrates seamlessly with ERPNext, enabling you to manage your forward contracts efficiently and align them with your financial operations.'
            ]}
            style={{
              paddingLeft: 0
            }}
          />
        </div>
      </Section>

      {/* Video Section */}
      <Section>
        <div className="container-custom py-8 flex justify-center">
          <YouTubeEmbed
            url="https://www.youtube.com/embed/iFIIVCgj_Zc"
            title="Forward Contract Management in ERPNext"
            className="rounded-lg shadow-lg w-full md:w-2/3 aspect-video animate-fade-in"
          />
        </div>
      </Section>

      {/* How to create Forward Contracts Section */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 animate-fade-in-up">How to create Forward Contracts</h2>
          <List
            items={[
              'Navigate to the Forward Contract List and click on "Add Forward Contract".',
              'Enter the Booking Reference Number provided by the bank.',
              'Choose whether the hedge is for an Export or Import transaction.',
              'Select the Contract Currency.',
              'Enter the contract amount.',
              'Add the current rate and premium. Optionally, you can include any spread or margin charged by the bank.',
              'Specify the Booking Rate and Booking Date.',
              'Select the bank where the forward has been booked.',
              'Set the Maturity Date (contract start date) and Maturity To (contract end date).',
              'Click on Save and Submit to record the forward contract ERPNext entry.'
            ]}
          />
          <ForwardContractGifImage
            src="api/fb/n/files/fwd-cnt-14-to-23.gif"
            alt="How to create Forward Contracts"
          />
        </div>
      </Section>

      {/* How to utilize Forward Contracts Section */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 animate-fade-in-up">How to utilize Forward Contracts</h2>
          <List
            items={[
              'A forward contract can be utilized at the time of payment receipt or disbursement. In such cases, the multi-currency transaction is executed at the forward contract rate configured in ERPNext.',
              'The outstanding amount of the forward contract is reduced by the amount utilized. For forward contract accounting ERPNext steps:'
            ]}
          />
          <List
            items={[
              'Go to the Payment Entry list and click on "New".',
              'Select the Party Type and the relevant Customer/Supplier.',
              'Choose the Bank or Cash Account for "Paid To" and "Paid From". If it’s a multi-currency transaction, the forward contract section will automatically appear.',
              'In the Forward Utilization table, select the applicable forward contract and enter the amount utilized.',
              'Partial forward contract amounts can be utilized. Multiple forward contracts can also be applied to a single payment.',
              'Enter the Amount Paid.',
              'Provide the bank reference and date if the payment is through bank transfer.',
              'Save and Submit the entry for proper forward contract accounting ERPNext integration.'
            ]}
            style={{ marginTop: 0 }}
          />
          <ForwardContractGifImage
            src="api/fb/n/files/fwd-cnt-42-to-52.gif"
            alt="How to utilize Forward Contracts"
          />
        </div>
      </Section>

      {/* How to Cancel Forward Contracts Section */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 animate-fade-in-up">How to Cancel Forward Contracts</h2>
          <List
            items={[
              'If a forward contract cannot be utilized before maturity, or you decide to terminate it for other reasons, ERPNext provides functionality for forward contract cancellation. This process decreases the outstanding forward contract amount and records any gain or loss under the correct profit or loss account, ensuring accuracy in forward contract accounting ERPNext.'
            ]}
          />
          <List
            items={[
              'Go to the Forward Contract List and open the specific forward contract to be cancelled.',
              'In the Cancellation Section, input the Cancellation Date, Cancellation Amount, and Cancellation Rate. Also, choose the bank account where gain/loss should be posted.',
              'Click on button add Cancellation details. This will add cancellation detail in table below and pass Journal entry for exchange rate gain/loss'
            ]}
            style={{ marginTop: 0 }}
          />
          <ForwardContractGifImage
            src="api/fb/n/files/fwd-cnt-1.21-to-1.32.gif"
            alt="How to Cancel Forward Contracts"
          />
        </div>
      </Section>

      {/* Download Section */}
      <Section>
        <div className="container-custom py-8 flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-2">Download:</h4>
          <Link
            href="https://frappecloud.com/marketplace/apps/forward_contract"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-white font-medium shadow hover:bg-primary/90 transition-colors animate-fade-in-up"
          >
            Forward Contract
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section useGradient>
        <div className="container-custom py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to streamline your currency hedging?',
                icon: 'TrendingUp'
              },
              title: 'Start Managing Forward Contracts in ERPNext',
              description: 'Take control of your forex risk and automate your forward contract management. Download the app or get in touch for a personalized demo.',
              primaryButton: {
                text: 'Download App',
                icon: 'Download',
                action: () => {
                  window.open('https://frappecloud.com/marketplace/apps/forward_contract', '_blank');
                }
              },
              secondaryButton: {
                text: 'Contact Us',
                icon: 'Mail',
                action: () => {
                  window.location.href = '/contact';
                }
              },
              trustIndicator: {
                text: 'Trusted by leading exporters & importers',
                icon: 'ShieldCheck'
              }
            }}
          />
        </div>
      </Section>
    </>
  );
}
