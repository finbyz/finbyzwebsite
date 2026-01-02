'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import Image from 'next/image';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import ProblemList from '@/components/ai_components/ProblemList';
import SolutionList from '@/components/ai_components/SolutionList';
import ErpModulesTabs from '@/components/ai_components/ErpModuleTabs';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="DyeChem Industry"
        highlightWords={["DyeChem", "Industry"]}
        description="ERP Software for DyeChem industry solves problems of batch-wise Inventory management, Samples management, and Manufacturing of dyes and Pigment with yield, concentration and purity."
        primaryButton={{
          text: 'Get a Demo',
          action: () => {
            if (typeof window !== 'undefined') {
              window.location.href = '/contact';
            }
          },
        }}
        secondaryButton={{
          text: 'Learn More',
          action: "#DyeChem"
        }}
        heroImage={{
          alt: 'DyeChem Industry',
          src: '/images/chemical_Module 2019-04-12 12_42_16.svg',
          videoSrc: '/images/Chemical_without_watermark.mp4',
        }}
      />

      <Section>
        <div className="container-custom py-8">
          <QuoteBlock text="Change the way you manage the Samples, Recipe and Inventory!" isHeading={false} />
          <div className="mt-6 space-y-4 text-muted-foreground text-base animate-fade-in-up">
            <p>
              Companies in the industry of Chemicals like Dye chem, Paints & Intermediaries face challenges in managing the recipes of the products they supply. Even the consumption of raw material changes each time based on the reaction process. This requires BOM which allows fluctuation and consumption of raw material and production of finished goods.
            </p>
            <p>
              The whole chemical industry works based on yield, concentration or purity of the chemicals used or produced. The costing changes dynamically based on these parameters of same item. So they need inventory management with not only quantity for each item, but also batch-wise quality parameters with price.
            </p>
            <p id="DyeChem">
              Given samples play an important role in deciding the quality of chemical, most of the orders are based on a sample provided. This creates a requirement to manage the samples and their recipes. The raw material cost (RMC) may change for each sample if you customize your standard products as per customer requirement. Fluctuating raw material prices may make it difficult to quote for old samples if client inquiries.
            </p>
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center mb-8 animate-fade-in-down text-[#1A5276]">Problems of Dye Chem Industry</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="flex-1">
              <ProblemList
                items={[
                  'Fluctuation in Raw Material used in Production',
                  'Manage inventory with yield, concentration, purity and packaging details',
                  'Calculate the valuation of each batch based on the consumption of raw materials',
                ]}
              />
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/images/problem.svg" alt="Problems" width={250} height={220} className="rounded-xl shadow-lg animate-fade-in" />
            </div>
            <div className="flex-1">
              <ProblemList
                items={[
                  'Maintain samples log as orders are based on samples provided',
                  'Track samples delivery and Follow-up on samples status',
                  'Calculate RMC of samples based on change in the raw material pricing',
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center mb-8 animate-fade-in-down text-[#1A5276]">Software Solution for Dye Chem Industry</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="flex-1">
              <SolutionList
                items={[
                  {
                    description: 'To overcome these challenges, we designed special ERP Software for the chemical industry which allows you to increase your operational efficiency and management.',
                    link: { href: '/erp/services/erp-software-development', text: 'ERP Software ' },
                  },
                  {
                    description: 'Define standards in BOM and compare it with actual consumption in each work order.'
                  },
                  {
                    description: 'Manage batch-wise inventory with details of yield, concentration, purity, and packaging.'
                  },
                ]}
              />
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/images/idea.svg" alt="Solution" width={250} height={220} className="rounded-xl shadow-lg animate-fade-in" />
            </div>
            <div className="flex-1">
              <SolutionList
                items={[
                  {
                    description: 'Manage the blending of raw materials and calculate valuation rate based on consumption.'
                  },
                  {
                    description: 'Samples database with details of recipe and Spectro report attachment.'
                  },
                  {
                    description: 'Automated emails for sample status follow-up. Dynamically calculate Raw Material Cost for samples from recipe created by Lab department.'
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <ErpModulesTabs />
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to transform your DyeChem business?',
                icon: 'rocket',
              },
              title: 'Get Started with ERP for DyeChem Industry',
              description: 'Experience seamless batch-wise inventory, recipe, and sample management. Request a demo or talk to our experts today!',
              highlightText:'DyeChem',
              primaryButton: {
                text: 'Request Demo',
                icon: 'arrowRight',
                action: () => {
                  if (typeof window !== 'undefined') {
                    window.location.href = '/contact';
                  }
                },
              },
              secondaryButton: {
                text: 'Contact Sales',
                icon: 'phone',
                action: () => {
                  if (typeof window !== 'undefined') {
                    window.location.href = '/contact';
                  }
                },
              },
              trustIndicator: {
                text: 'Trusted by leading chemical manufacturers',
                icon: 'checkCircle',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
