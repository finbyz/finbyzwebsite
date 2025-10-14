'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import YouTubeEmbed from '@/components/sections/YouTubeEmbed';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import ImportExportInfoCards from '@/components/ai_components/ImportExportInfoCards';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Advanced Authorisation Licence In ERPNext"
        highlightWords={["Advanced", "Authorisation", "Licence"]}
        description="Optimize your import-export operations with ERPNext. Streamline Advanced Authorisation Licence management, ensure compliance, and enhance efficiency."
        primaryButton={{
          text: 'Get Started',
          action: () => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          },
        }}
        secondaryButton={{
          text: 'Download App',
          action: () => {
            window.open('https://frappecloud.com/marketplace/apps/advance_authorisation_licence', '_blank');
          },
        }}
        heroImage={{
          alt: 'Advanced Authorisation Licence In ERPNext',
          src: '/images/Advance-Authorization-License-PageDesign.svg',
        }}
      />

      <Section>
        <div className="container-custom py-8">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground animate-fade-in">
              This app in ERPNext for Advanced Authorisation Licence helps automate and streamline Import Export Licence management. It ensures proper utilisation of licences that exempt import duties on raw materials used for manufacturing export products. With this app, businesses can avoid overutilization of the advanced authorisation licence, preventing penalties and loss of duty drawback benefits. Users can create, track, and manage licences efficiently, while the system automatically calculates remaining quantities and values for each declared item.
            </p>
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 animate-fade-in text-[#1A5276]">
            Introduction
          </h2>
          <p className="text-muted-foreground mb-6 animate-fade-in delay-100">
            The Advanced Authorisation Licence (also known as the Advance License Scheme) is a vital duty exemption initiative under India’s Foreign Trade Policy (2015-2020). This scheme allows businesses to import raw materials at zero customs duty, provided they are used in the manufacture of export products. The goal is to make Indian goods more competitive globally by lowering production costs. Integrating this licence with ERPNext for Advanced Authorisation Licence improves visibility and compliance in Import Export Licence management.
          </p>
          <div className="w-full flex justify-center animate-fade-in delay-200">
            <YouTubeEmbed url="https://www.youtube.com/embed/jvesPBJBrf4?si=Mp3kgAhi-EAtUER9" title="Advanced Authorisation Licence in ERPNext" className="rounded-lg shadow-lg w-full md:w-2/3 aspect-video" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <List
            title="Why do you Need this App in ERPNext ?"
            items={[
              'For each advanced authorisation licence, you must declare the export quantity and amount, which in turn determines the benefits of import duty exemption. The licence limits both import and export quantities and values. Two major challenges arise from this:',
            ]}
          />
          <ImportExportInfoCards
            importCard={{
              title: 'For Imports',
              image: '/images/import.svg',
              alt: 'Import',
              description:
                'You cannot import declared items duty-free beyond the approved quantity or value under the advanced authorisation licence. Over-utilizing the licence during import may lead to non-compliance, attracting penalties. Our ERPNext app helps in monitoring and preventing such overuse in real time.',
            }}
            exportCard={{
              title: 'For Exports',
              image: '/images/export.svg',
              alt: 'Export',
              description:
                'Exporting under the Advanced Authorisation Licence forfeits your eligibility for duty drawback on that shipment. If the export quantity exceeds the declared value under the licence, the excess will not qualify for any export incentive, causing a financial loss. ERPNext for Advanced Authorisation Licence keeps track of this to avoid such issues.',
            }}
          />
          <List
            title=''
            items={[
              'When importing or exporting under an advanced authorisation licence, exceeding the permitted limits can result in penalties or loss of incentives. Our ERPNext application solves this by providing accurate, automated control and visibility into each licence’s usage. It simplifies Import Export Licence management with minimal manual effort, ensuring compliance with DGFT regulations.'
            ]}
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 animate-fade-in text-[#1A5276]">How to Manage or Create an Advanced Authorisation Licence in ERPNext</h2>
          <ol className="list-decimal pl-6 space-y-3 animate-fade-in">
            <li>
              <span className="font-semibold">Go to the Advance Authorisation Licence list in ERPNext and click on add Advance Authorisation Licence.</span>
            </li>
            <li>
              <span className="font-semibold">Enter License details:</span>
              <ol className="list-[lower-alpha] pl-6 mt-2 space-y-2">
                <li><span>License Number</span></li>
                <li><span >Export Item: Select item Which can you use import material to produce</span></li>
                <li><span >Application File No.</span></li>
                <li><span >Export Approved Qty and Export Approved Amount</span></li>
                <li><span >License Amount</span></li>
                <li><span >Currency</span></li>
                <li><span >Date: License Date</span></li>
                <li><span >Due Date: License End Date</span></li>
                <li><span >Application File Date</span></li>
              </ol>
            </li>
            <li>
              <span className="font-semibold">The items you have declared for import and their ratio against export should be mentioned in the Item import ratio table. Ratio must be between 0.01 to 1.</span>
            </li>
          </ol>
          <p className="mt-6 text-muted-foreground animate-fade-in delay-100">
            Once this licence is created, it can be linked to corresponding import and export consignments to ensure compliance and accuracy in Import Export Licence management.
          </p>
          <div className="flex justify-center mt-8 animate-fade-in delay-200">
            <img src="/images/AA-34-to-44.gif" alt="How to Manage Advanced Authorisation Licence" className="rounded-lg shadow-lg w-full md:w-2/3" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 animate-fade-in text-[#1A5276]">How to use Advance Authorisation licence for Import in ERPNext</h2>
          <ol className="list-decimal pl-6 space-y-3 animate-fade-in">
            <li><span>Create import purchase invoice with all the details.</span></li>
            <li><span >In Items table you will see fields to select Advance Authorization license.</span></li>
            <li><span >Enter CIF Value and FOB value for imported product.</span></li>
            <li><span >On submit of this purchase invoice these import details will be updated against the license.</span></li>
            <li><span >System will automatically calculate remaining quantities and amount for each declared import item.</span></li>
            <li><span >If sufficient quantity or amount is not available to utilize in any license, system will not allow you to submit this purchase invoice, throwing exact error of maximum available quantity of license.</span></li>
          </ol>
          <p className="mt-4 text-muted-foreground animate-fade-in delay-100">
            This will ensure license is never overutilized by the user.
          </p>
          <div className="flex justify-center mt-8 animate-fade-in delay-200">
            <img src="/images/AA-1.40-to-1.47.gif" alt="Import License Usage" className="rounded-lg shadow-lg w-full md:w-2/3" />
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 animate-fade-in text-[#1A5276]">How to use Advance Authorisation licence at the time of Export in ERPNext</h2>
          <ol className="list-decimal pl-6 space-y-3 animate-fade-in">
            <li><span >Create Export Sales Invoice with all the details.</span></li>
            <li><span >Select the applicable Advanced Authorisation Licence in the Items table.</span></li>
            <li><span >Enter Freight and Insurance amount in invoice currency to get FOB Value.</span></li>
            <li><span >On submit of this Sales Invoice these export details will be updated against the license.</span></li>
            <li><span >System will automatically calculate remaining export quantity and amount.</span></li>
            <li><span >If sufficient quantity or amount is not available to utilize in any license, system will not allow you to submit this purchase invoice, throwing exact error of maximum available quantity of license.</span></li>
          </ol>
          <p className="mt-4 text-muted-foreground animate-fade-in delay-100">
            The system allows for permissible variation on the higher side for export quantity, ensuring the committed export target under the licence is achieved without forfeiting duty drawback benefits. This feature ensures better control over the Import Export Licence management process.
          </p>
          <div className="flex justify-center mt-8 animate-fade-in delay-200">
            <img src="/images/AA-1.16-to-1.29.gif" alt="Export License Usage" className="rounded-lg shadow-lg w-full md:w-2/3" />
          </div>
        </div>
      </Section>

      {/* <Section>
        <div className="container-custom py-8 flex flex-col items-center">
          <Card className="border-none shadow-none bg-transparent flex flex-col items-center">
            <CardHeader className="flex flex-col items-center">
              <CardTitle className="text-xl font-semibold">Download:</CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href="https://frappecloud.com/marketplace/apps/advance_authorisation_licence"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg font-medium shadow-md animate-fade-in"
              >
                Advanced Authorisation Licence
              </Link>
            </CardContent>
          </Card>
        </div>
      </Section> */}

      <Section useGradient>
        <div className="container-custom py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to streamline your import-export compliance?',
                icon: 'CheckCircle',
              },
              title: 'Get Advanced Authorisation Licence App for ERPNext',
              highlightText:"Authorisation Licence App for ERPNext",
              description: 'Automate, track, and manage your licences with ease. Ensure compliance and maximize your export-import benefits today.',
              primaryButton: {
                text: 'Get Started',
                icon: 'ArrowRight',
                action: () => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                },
              },
              secondaryButton: {
                text: 'Download App',
                icon: 'Download',
                action: () => {
                  window.open('https://frappecloud.com/marketplace/apps/advance_authorisation_licence', '_blank');
                },
              },
              trustIndicator: {
                text: 'Trusted by leading exporters',
                icon: 'ShieldCheck',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
