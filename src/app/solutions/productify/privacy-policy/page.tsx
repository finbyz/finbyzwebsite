'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import List from '@/components/sections/list';
import PrivacySectionHeading from '@/components/ai_components/PrivacySectionHeading';
import PrivacySubsectionHeading from '@/components/ai_components/PrivacySubsectionHeading';
import { Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Productify Privacy Policy"
        highlightWords={["Privacy", "Policy", "Productify"]}
        description="Learn how Productify collects, uses, and protects your data. We are committed to transparency and security for all our users."
        primaryButton={{
          text: 'Contact Support',
          action: () => {
            window.location.href = './contact';
          },
        }}
        secondaryButton={{
          text: 'Back to Productify',
          action: () => {
            window.location.href = '/solutions/productify';
          },
        }}
        heroImage={{
          alt: 'Productify Privacy Policy',
          // src: '/images/productify/privacy-hero.png',
          src:"/productify-privacy.jpg",
          videoSrc: undefined,
        }}
      />

      <Section>
        <div className="container-custom py-8 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-base text-muted-foreground mb-2">
                <span className="font-semibold">Effective Date:</span> 01-OCT-2024
              </p>
            </div>
            <div className="flex items-center gap-2">
              {/* <Image src="/images/productify/privacy-lock.svg" alt="Privacy Lock Illustration" width={56} height={56} className="rounded-lg bg-muted p-2 shadow-sm" /> */}
            </div>
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 animate-fade-in-up">
          <PrivacySectionHeading>Introduction</PrivacySectionHeading>
          <p className="ml-6 text-muted-foreground text-justify">
            This Privacy Policy ("Policy") governs the use of the Productify application (“Productify” or “the App”), a productivity management solution provided by Finbyz Tech Pvt Ltd ("we," "us," or "our"), and outlines the manner in which we collect, use, store, and protect information provided by our clients and their employees ("you" or "your"). Productify respects your privacy and is committed to protecting the information that may be collected, used, or disclosed during your use of our App. By using Productify, you consent to the data practices described in this Policy. Should you have any questions, you may contact us using the information provided in Section 7.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 animate-fade-in-up">
          <PrivacySectionHeading>1. Data Collection and Use</PrivacySectionHeading>
          <PrivacySubsectionHeading>1.1 Sign-Up Information</PrivacySubsectionHeading>
          <p className="ml-8 text-muted-foreground text-justify">
            To provide access to Productify, we require basic identification information upon user registration, specifically Employee Name and Email ID. This information is collected solely to manage your subscription and access to Productify and is not shared with third parties. No other identifying or personal information is requested, stored, or accessed by Productify for account management purposes.
          </p>
          <PrivacySubsectionHeading>1.2 ERP Data Access</PrivacySubsectionHeading>
          <p className="ml-8 text-muted-foreground text-justify">
            Productify does not access, collect, or store any data contained within your ERPNext instance other than the necessary data identified above. The App strictly adheres to your ERPNext data access permissions, and no additional data will be collected, retained, or processed outside of what is explicitly identified within this Policy.
          </p>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 animate-fade-in-up">
          <PrivacySectionHeading>2. Activity Data Collection and Purpose of Use</PrivacySectionHeading>
          <PrivacySubsectionHeading>2.1 Activity Data Collection</PrivacySubsectionHeading>
          <p className="ml-8 text-muted-foreground text-justify">
            Productify tracks specific user activities to support productivity analysis and time management improvement. Data collected may include:
          </p>
          <PrivacySubsectionHeading>2.2 Tracking Mechanism</PrivacySubsectionHeading>
          <p className="ml-8 text-muted-foreground text-justify">
            Location tracking is activated based on user instruction (e.g., start/stop tracking) or for a defined time period.<br />
            When enabled, location tracking may occur in the background, even if the app is not active, to ensure uninterrupted data collection.
          </p>
          <PrivacySubsectionHeading>2.3 Scope of Data Use</PrivacySubsectionHeading>
          <p className="ml-8 text-muted-foreground text-justify">
            All activity data, including location data, collected by Productify is solely intended for use by the client organization to improve productivity and resource management. Productify does not utilize, analyze, or retain this data for independent purposes. Productify has no access to this data once it is transmitted to your ERPNext server.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 animate-fade-in-up">
          <PrivacySectionHeading>3. Data Security and Transmission</PrivacySectionHeading>
          <PrivacySubsectionHeading>3.1 Encrypted Data Transmission to ERPNext</PrivacySubsectionHeading>
          <p className="ml-8 text-muted-foreground text-justify">
            To ensure data security, all user activity data gathered through Productify’s desktop app, mobile app, and browser extension—including location data—is directly transmitted to the client’s ERPNext server in an encrypted format. We use industry-standard encryption protocols (such as SSL/TLS) to secure the transmission of this data, protecting it from unauthorized access during transfer.
          </p>
          <PrivacySubsectionHeading>3.2 No Internal Data Storage</PrivacySubsectionHeading>
          <p className="ml-8 text-muted-foreground text-justify">
            Productify does not store any activity data collected from users on its own servers. All user activity data, including location data, is exclusively stored on the ERPNext server of the client organization. Productify serves as a data conduit, ensuring secure delivery of the activity data without any internal storage or retention. Productify also complies with data protection regulations, ensuring data integrity and confidentiality.
          </p>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 animate-fade-in-up">
          <PrivacySectionHeading>4. No Third-Party Data Sharing or Access</PrivacySectionHeading>
          <PrivacySubsectionHeading>4.1 No Disclosure to Third Parties</PrivacySubsectionHeading>
          <p className="ml-8 text-muted-foreground text-justify">
            Productify does not share, sell, rent, or otherwise disclose any of the information it collects to third parties. Productify does not process, analyze, or use the activity data outside the client’s ERPNext environment, and no third-party services are utilized to process, manage, or store the data.
          </p>
          <PrivacySubsectionHeading>4.2 Data Ownership and Control</PrivacySubsectionHeading>
          <p className="ml-8 text-muted-foreground text-justify">
            The client retains full ownership and control of all data collected by Productify, including location data. All information resides within the client’s ERPNext instance, and Productify does not access this data post-transmission. The client can review, update, or delete data independently within their ERPNext environment.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 animate-fade-in-up">
          <PrivacySectionHeading>5. User Rights and Data Transparency</PrivacySectionHeading>
          <PrivacySubsectionHeading>5.1 Access and Control</PrivacySubsectionHeading>
          <p className="ml-8 text-muted-foreground text-justify">
            Clients using Productify have complete and exclusive control over the data collected by the App. At any time, clients may review, update, modify, or delete information within the ERPNext environment as they deem necessary to comply with their internal policies and applicable privacy laws.
          </p>
          <PrivacySubsectionHeading>5.2 Data Integrity and Confidentiality</PrivacySubsectionHeading>
          <p className="ml-8 text-muted-foreground text-justify">
            Productify respects the confidentiality and integrity of client data. All activity data, including location data, collected by Productify is intended for productivity analysis and will not be accessed by Productify for independent purposes. Clients are encouraged to notify users of the monitoring of activity data in compliance with relevant employment, privacy, and data protection regulations.
          </p>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 animate-fade-in-up">
          <PrivacySectionHeading>6. Changes to this Privacy Policy</PrivacySectionHeading>
          <PrivacySubsectionHeading>6.1 Policy Updates</PrivacySubsectionHeading>
          <p className="ml-8 text-muted-foreground text-justify">
            Productify reserves the right to update this Privacy Policy from time to time to reflect changes in data practices, operational practices, or regulatory requirements. Any significant changes will be communicated to clients via email or notification within the App.
          </p>
          <PrivacySubsectionHeading>6.2 Client Consent to Policy Changes</PrivacySubsectionHeading>
          <p className="ml-8 text-muted-foreground text-justify">
            Continued use of Productify following updates to this Policy constitutes acceptance of such changes. Clients may choose to review the Policy periodically to stay informed about how we are helping to protect their data.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 animate-fade-in-up">
          <PrivacySectionHeading>7. Contact Information</PrivacySectionHeading>
          <p className="ml-8 text-muted-foreground text-justify">
            If you have any questions, concerns, or comments regarding this Privacy Policy, you may contact us at:
          </p>
          <div className="ml-8 mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-base">504-Addor Ambition, Nr. Navrang Circle, Navrangpura, Ahmedabad, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:support@finbyz.tech" className="text-base underline hover:text-primary transition-colors">support@finbyz.tech</a>
            </div>
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 animate-fade-in-up">
          <CTA
            data={{
              subheading: {
                text: 'Ready to get started?',
                icon: 'ShieldCheck',
              },
              title: 'Experience Secure Productivity with Productify',
              highlightText:'Productify',
              description: 'Contact us for any privacy concerns or to learn more about how we protect your data.',
              primaryButton: {
                text: 'Contact Support',
                icon: 'Mail',
                // action: () => {
                //   window.location.href = 'mailto:support@finbyz.tech';
                // },
                action: () => {
                  window.location.href = './contact';
                },

              },
              secondaryButton: {
                text: 'Back to Productify',
                icon: 'ArrowLeft',
                action: () => {
                  window.location.href = '/solutions/productify';
                },
              },
              trustIndicator: {
                text: 'Trusted by leading organizations',
                icon: 'ShieldCheck',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
