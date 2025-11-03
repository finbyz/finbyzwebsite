'use client';

import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import { List } from '@/components/sections/list';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import ContactInfo from '@/components/sections/contact-info';
import CTA from '@/components/sections/cta';
import { Book, ShieldCheck, KeyRound, Gavel, Mail, Phone, MapPin, FileWarning } from 'lucide-react';

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <DynamicHero
        headline="Legal Agreement for Software Services and Platform Use"
        highlightWords={[ "Software Services", "Platform Use"]}
        description="Understand the terms governing your use of our innovative IT consulting, software development, and ERPNext services. Review our legal agreement for digital solutions."
        primaryButton={{ text: "Get Started",action:'/contact' }}
        secondaryButton={{ text: "Learn More" ,action: () => {
            const el = document.getElementById('term-resources');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}}
        heroImage={{
          alt: "Legal Agreement for Software Services and Platform Use",
          src:"/images/terms-of-service.png",
          
        }}
        accentColor="orange"
      />

      {/* OVERVIEW SECTION */}
      <section>
        <div className="container-custom mt-5">
          <h2 className="text-3xl font-bold mb-4 text-[#1A5276] inline-block animate-fade-in">Overview</h2>
          <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            This page presents the comprehensive Terms of Service governing all Finbyz Tech offerings, including our website, software products, and IT consulting services. Finbyz Tech is dedicated to clear communication, secure operations, and a mutually beneficial partnership with our clients. By reviewing these terms, you will understand the rights and responsibilities for users engaging with our digital solutions, the boundaries and commitments in place, and the underlying legal framework that protects both you and Finbyz Tech. Our ISO 27001:2013 certification further emphasizes our commitment to data security and privacy, ensuring your information and business are managed to the highest standards in the industry.
          </p>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            Whether you are leveraging our ERPNext implementation expertise, utilizing our custom-developed applications, partnering with us for IT consulting or exploring our AI-driven modules, these terms clarify what you can expect from us—and our expectations for you as a valued user or client. Please review these guidelines thoroughly to ensure a smooth, transparent, and secure collaboration with Finbyz Tech.
          </p>
        </div>
      </section>

      {/* TERMS INTRO SECTION */}
      <section>
        <div className="container-custom" id='term-resources'>
          <h2 className="text-3xl font-semibold mb-2 text-[#1A5276] animate-fade-in ">Terms of Service</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">Welcome to Finbyz Tech! These Terms of Service ("Terms") govern your access to and use of our website, products, and services (collectively, the "Services"). By accessing or using any part of our Services, you agree to be bound by these Terms. If you do not agree to all the Terms, then you may not access the Services.</p>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">Finbyz Tech Pvt Ltd is an ISO 27001:2013 Certified IT Consulting & Software Development Company dedicated to delivering innovative ERPNext implementations, custom software solutions, AI-driven automation, and expert IT consulting. Our commitment to excellence is matched by our dedication to transparent and ethical operations, as reflected in these Terms.</p>
          {/* <TextSection data={{
            paragraphs: [
              ''
            ]
          }} /> */}
        </div>
      </section>

      {/* 1. ACCEPTANCE OF TERMS */}
      <section>
        <div className="container-custom ">
          <h3 className="text-3xl font-semibold text-[#1A5276] mb-2">1. Acceptance of Terms</h3>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            By creating an account, accessing our website, or using any of our software, consulting, or related services, you confirm that you have read, understood, and agree to be bound by these Terms, including any additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms apply to all users of the Services, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
          </p>
          {/* <TextSection data={{
            paragraphs: [
              ''
            ]
          }} /> */}
        </div>
      </section>

      {/* 2. SERVICES PROVIDED BY FINBYZ TECH */}
      <section>
        <div className="container-custom ">
          <h3 className="text-3xl font-semibold text-[#1A5276] mb-4">2. Services Provided by Finbyz Tech</h3>
         
        </div>
         <ResponsiveCardGrid
            data={{
              title: '',
              cards: [
                {
                  id: 1,
                  title: 'ERPNext Implementation',
                  description: 'End-to-end deployment, customization, and support for ERPNext.',
                  icon: 'Book',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 2,
                  title: 'Custom Software Development',
                  description: 'Tailored applications for business process automation.',
                  icon: 'KeyRound',
                  iconColor: "#ffffff",
                   iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 3,
                  title: 'Web & Mobile Applications',
                  description: 'Responsive, user-centric design and development.',
                  icon: 'Phone',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 4,
                  title: 'IT Consulting',
                  description: 'Strategic advisory for digital transformation.',
                  icon: 'Gavel',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 5,
                  title: 'AI Automations',
                  description: 'Advanced AI-driven tools for CRM, HR, content, and lead intelligence.',
                  icon: 'ShieldCheck',
                 iconColor: "#ffffff",
                iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 6,
                  title: 'Proprietary Modules & Products',
                  description: 'Industry-specific ERPNext modules and solutions like Productify.',
                  icon: 'FileWarning',
                  iconColor: "#ffffff",
                  iconBg: '#FFB347',
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ],
              variant: 'iconCard'
            }}
          />
          <div className="container-custom mt-5">
         <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
         These Services are provided subject to these Terms and any specific agreements or statements of work (SOWs) that may be executed between Finbyz Tech and you, the client.
          </p>
         
          {/* <TextSection data={{
            paragraphs: [
              ''
            ]
          }} /> */}
        </div>
      </section>

      {/* 3. USER ACCOUNTS AND RESPONSIBILITIES */}
      <section>
        <div className="container-custom ">
          <h3 className="text-3xl font-semibold text-[#1A5276] mb-2">3. User Accounts and Responsibilities</h3>
          <List
            title="To access certain features of our Services, you may be required to create an account. You agree to:"
            items={[
              'Provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.',
              'Maintain the confidentiality of your account password and to notify Finbyz Tech immediately of any unauthorized use of your account.',
              'Be fully responsible for all activities that occur under your account.',
              'Use the Services only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else\'s use and enjoyment of the Services.'
            ]}
            accentColor="#ef7f1b"
            iconColor="#ef7f1b"
            // Icon={KeyRound}
            iconSize={22}
          />
        </div>
      </section>

      {/* 4. INTELLECTUAL PROPERTY RIGHTS */}
      <section>
        <div className="container-custom ">
          <h3 className="text-3xl font-semibold text-[#1A5276] mb-2">4. Intellectual Property Rights</h3>
               <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
All content on the Finbyz Tech website and within our Services, including text, graphics, logos, images, software, and the compilation thereof, is the property of Finbyz Tech Pvt Ltd or its suppliers and protected by copyright and other intellectual property laws. Our proprietary modules, marketplace apps, and products, such as Productify, Chemical Manufacturing Module, and AI automation frameworks, are exclusive intellectual property of Finbyz Tech.
               </p>
               <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
                You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Services strictly in accordance with these Terms. You may not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found within the Services, without the express written permission of Finbyz Tech.
               </p>
          {/* <TextSection data={{
            paragraphs: [
              ''
            ]
          }} /> */}
        </div>
      </section>

      {/* 5. PRIVACY POLICY */}
      <section>
        <div className="container-custom ">
          <h3 className="text-3xl font-semibold text-[#1A5276] mb-2">5. Privacy Policy</h3>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
               Your use of our Services is also governed by our Privacy Policy, which is incorporated into these Terms by this reference. Our Privacy Policy explains how we collect, use, and disclose information that pertains to your privacy. By using the Services, you consent to all actions taken by us with respect to your information in compliance with the Privacy Policy. We are ISO 27001:2013 certified, reinforcing our commitment to data security and privacy.
               </p>
          {/* <TextSection data={{
            paragraphs: [
              ''
            ]
          }} /> */}
        </div>
      </section>

      {/* 6. DISCLAIMERS */}
      <section>
        <div className="container-custom ">
          <h3 className="text-3xl font-semibold text-[#1A5276] mb-2">6. Disclaimers</h3>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
               Finbyz Tech provides its Services on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of our Services or the information, content, materials, or products included on our Services. You expressly agree that your use of our Services is at your sole risk.
               </p>
           <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
               While we strive to provide accurate and reliable information and services, we do not warrant that our Services will be uninterrupted, timely, secure, or error-free. We disclaim all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.
               </p>
          {/* <TextSection data={{
            paragraphs: [
              '.'
            ]
          }} /> */}
        </div>
      </section>

      {/* 7. LIMITATION OF LIABILITY */}
      <section>
        <div className="container-custom ">
          <h3 className="text-3xl font-semibold text-[#1A5276] mb-2">7. Limitation of Liability</h3>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
               In no event shall Finbyz Tech, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Services; (ii) any conduct or content of any third party on the Services; (iii) any content obtained from the Services; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
               </p>
          {/* <TextSection data={{
            paragraphs: [
              ''
            ]
          }} /> */}
        </div>
      </section>

      {/* 8. INDEMNIFICATION */}
      <section>
        <div className="container-custom ">
          <h3 className="text-3xl font-semibold text-[#1A5276] mb-2">8. Indemnification</h3>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
               You agree to indemnify, defend, and hold harmless Finbyz Tech Pvt Ltd, its directors, officers, employees, consultants, agents, and affiliates, from any and all third-party claims, liability, damages, and costs (including, but not limited to, attorneys\' fees) arising from your use of our Services, your violation of these Terms, or your infringement of any intellectual property or other right of any person or entity.
               </p>
          {/* <TextSection data={{
            paragraphs: [
              ''
            ]
          }} /> */}
        </div>
      </section>

      {/* 9. GOVERNING LAW AND JURISDICTION */}
      <section>
        <div className="container-custom ">
          <h3 className="text-3xl font-semibold text-[#1A5276] mb-2">9. Governing Law and Jurisdiction</h3>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
               These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in Ahmedabad, Gujarat, India, for the resolution of any disputes arising out of or relating to these Terms or your use of the Services.
               </p>
          {/* <TextSection data={{
            paragraphs: [
              ''
            ]
          }} /> */}
        </div>
      </section>

      {/* 10. CHANGES TO TERMS */}
      <section>
        <div className="container-custom ">
          <h3 className="text-3xl font-semibold text-[#1A5276] mb-2">10. Changes to Terms</h3>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
               Finbyz Tech reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days\' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.
               </p>
          {/* <TextSection data={{
            paragraphs: [
              ''
            ]
          }} /> */}
        </div>
      </section>

      {/* 11. TERMINATION */}
      <section>
        <div className="container-custom ">
          <h3 className="text-3xl font-semibold text-[#1A5276] mb-2">11. Termination</h3>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
              We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Services will immediately cease. 
               </p>
          {/* <TextSection data={{
            paragraphs: [
              ''
            ]
          }} /> */}
        </div>
      </section>

      {/* 12. CONTACT INFORMATION */}
      <section>
        <div className="container-custom ">
          <h3 className="text-3xl font-semibold text-[#1A5276] mb-4">12. Contact Information</h3>
          <ContactInfo
            data={{
              title: 'Legal & Contact Details',
              subtitle: 'Reach out to us with any questions regarding these Terms.',
              contactMethods: [
                {
                  icon: 'Mail',
                  title: 'Email',
                  value: 'inquiry@finbyz.tech',
                  description: 'For legal and general inquiries.'
                },
                {
                  icon: 'Phone',
                  title: 'Phone (India)',
                  value: '+91 9925701446',
                  description: 'Call us during business hours.'
                },
                {
                  icon: 'MapPin',
                  title: 'Registered Address',
                  value: '504, Addor Ambition, Near Vimal House, Navrangpura, Ahmedabad, Gujarat 380009, India',
                  description: 'Visit or send correspondence.'
                }
              ]
            }}
          />
          {/* <TextSection data={{
            paragraphs: [
              ''
            ]
          }} /> */}
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
         We are committed to clarity and transparency in all our operations and value your understanding of these terms. Thank you for choosing Finbyz Tech as your partner in digital transformation and innovation.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section>
        <div className="mt-5">
          <CTA
            data={{
              subheading: { text: 'Ready for a Secure Partnership?', icon: 'ShieldCheck' },
              title: 'Start Your Digital Journey with Confidence',
              highlightText:'Journey with Confidence',
              description: 'Agree to our Terms of Service and begin working with Finbyz Tech for reliable, secure, and innovative IT solutions tailored for you.',
              primaryButton: { text: 'Get Started', action: '/contact' },
              secondaryButton: { text: 'Learn More', action: () => {
            const el = document.getElementById('term-resources');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          } },
              trustIndicator: { text: 'Trusted by industry leaders', icon: 'Gavel' }
            }}
          />
        </div>
      </section>
    </>
  );
}
