'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import List from '@/components/sections/list';
import InvestmentProcessStepCard from '@/components/ai_components/InvestmentProcessStepCard';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Investment Portfolio Management in ERPNext"
        highlightWords={["Portfolio", "ERPNext"]}
        description="Discover how ERPNext empowers you to seamlessly track and optimize your financial assets. Manage stocks, bonds, mutual funds, and more with a unified dashboard for insightful decision-making."
        primaryButton={{
          text: 'Get Started',
          action: () => {
            const section = document.querySelector('#aal-section');
            section?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        secondaryButton={{
          text: 'Request Demo',
          action: () => {
            window.location.href = '/contact';
          },
        }}
        heroImage={{
          alt: 'Investment Portfolio Management in ERPNext',
          src: 'portfolio management1.svg',

        }}
      />

      <Section id="aal-section">
        <div className="container-custom py-8 flex flex-col gap-6 animate-fade-in">
          <p className="text-lg text-black">
            ERPNext Investment Management empowers you to seamlessly track and manage your financial assets in one place.
            From stocks and bonds to mutual funds, equity, and ETFs, this portfolio overview ERPNext solution simplifies
            your investment tracking and provides a unified dashboard for insightful decision-making.
          </p>
        </div>
      </Section>


      <Section>
        <div className="container-custom py-8" id="how-to-use">
          <h2 className="text-2xl font-bold mb-6 text-[#1A5276] flex items-center gap-2">
            <CheckCircle className="text-green-500 w-6 h-6" />
            How to Use ERPNext Investment Portfolio
          </h2>

          <div className="grid  gap-8">
            <div className="flex flex-col gap-6">
              <InvestmentProcessStepCard
                title="Add Investment Segment and Category"
                description="Begin your ERPNext portfolio setup by creating an Investment Segment and Investment Category to classify your investments effectively."
                image="/images/1.png"
                alt="Investment Form"
              />
              <InvestmentProcessStepCard
                title="Configure Investment Accounts"
                description="Define default accounts under the Investment Portfolio Accounts section, including your bank, capital, charges, and income accounts. These settings streamline portfolio tracking and automate journal entries for investment transactions."
              // image="/images/1.png"
              // alt="Configure Accounts"
              />
              <InvestmentProcessStepCard
                title="Fill Portfolio Investment Form"
                description="Enter key details such as Segment, Category, Script (investment name), and Investment Date in the Portfolio Investment Form. This lays the foundation for accurate ERPNext portfolio tracking."
              // image="/images/1.png"
              // alt="Investment Form"
              />
            </div>
            <div className="flex flex-col gap-6">
              <InvestmentProcessStepCard
                title="Enter Investment Details"
                description="Provide essential details like quantity, entry price, entry charges, and total cost of ownership. You can set entry charges manually or let the system calculate them. Default accounts are picked automatically but can be changed for specific transactions. After submission, a journal entry is created, and your portfolio entry status updates to 'Holding'. For existing portfolios, link the Journal Voucher and mark as 'Is Existing'."
              // image="/images/1.png"
              // alt="Investment Entry"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-6 text-[#1A5276] flex items-center gap-2">
            <CheckCircle className="text-blue-500 w-6 h-6" />
            Exit Process of Investment Portfolio in ERPNext
          </h2>

          <div className="grid gap-8">
            <div className="flex flex-col gap-6">
              <InvestmentProcessStepCard
                title="Provide Exit Details"
                description="To sell or exit assets, enter details against the corresponding portfolio record—whether partial or full exit."
                image="/images/2df25a0.png"
                alt="Exit Process"
              />
              <InvestmentProcessStepCard
                title="Fill Exit Form"
                description="In the Exit section, provide details like Exit Quantity, Exit Price, Exit Charges, and Net Exit Amount. You can set exit charges manually or let the system calculate them."
              // image="/images/2df25a0.png"
              // alt="Exit Form"
              />
              <InvestmentProcessStepCard
                title="Create Exit Journal Voucher"
                description="Click 'Create Exit JV' to automatically generate a journal entry. ERPNext will debit the bank and investment charges accounts while crediting capital and income accounts, keeping your investment records in sync."
              // image="/images/2df25a0.png"
              // alt="Exit JV"
              />
            </div>
            <div className="flex flex-col gap-6">
              <InvestmentProcessStepCard
                title="Update Investment Portfolio"
                description="After submitting the journal entry, it will be added to the Investment Portfolio Segment table. The exit transaction appears in the table, and you can perform multiple partial exits as needed. The system updates the investment status as 'Exited' or 'Partially Exited' based on remaining quantity, ensuring end-to-end tracking with automatic financial journal entries."
              // image="/images/3.png"
              // alt="Investment Portfolio Segment"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className='container-custom py-8'>
        <List
          title="Key Benefits of ERPNext Investment Portfolio Management"
          items={[
            'Unified dashboard for all investment types',
            'Automated journal entries for transactions',
            'Flexible configuration for accounts and charges',
            'Real-time status updates (Holding, Exited, Partially Exited)',
            'Supports multiple partial exits and existing portfolios',
            'Streamlined tracking and reporting for better decision-making'
          ]}
        />
      </Section>

      <Section>
        <div className="py-8 flex flex-col items-center text-center ">
          {/* <h3 className="text-xl font-semibold text-black"> */}
          {/* Ready to optimize your investment management?</h3> */}
          <CTA
            data={{
              subheading: {
                text: 'Get Started with ERPNext',
                icon: 'TrendingUp',
              },
              title: 'Transform Your Investment Portfolio Management',
              description: 'Experience seamless, automated, and insightful investment tracking with ERPNext. Contact us to get started or request a demo today.',
              primaryButton: {
                text: 'Request Demo',
                icon: 'ArrowRight',
                action: () => {
                  window.location.href = '/contact';
                },
              },
              secondaryButton: {
                text: 'Contact Us',
                icon: 'Mail',
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
