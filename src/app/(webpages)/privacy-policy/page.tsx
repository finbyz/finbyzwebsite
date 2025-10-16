'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import ContactDetailsBlock from '@/components/ai_components/ContactDetailsBlock';
import { ShieldCheck, Cloud, UserCheck, Mail, Cookie, RefreshCw, Users, Lock, Link2, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import React from 'react';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Finbyz Tech Privacy Policy"
        highlightWords={["Privacy", "Policy", "Finbyz Tech"]}
        description="Learn how Finbyz Tech collects, uses, and protects your personal data. Your privacy and data security are our top priorities."
        primaryButton={{
          text: 'Contact Us',
          action: () => {
            window.location.href = '/contact';
          },
        }}
        secondaryButton={{
          text: 'Visit Website',
          action: () => {
            window.open('https://web.finbyz.tech', '_blank');
          }
        }}
        heroImage={{
          alt: 'Finbyz Tech Privacy Policy',
          src: '/privacy-policy.jpg',
          
        }}
      />

      <Section>
        <div className="container-custom py-8 animate-fade-in-up">
          {/* <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ShieldCheck className="text-primary" />
             Introduction</h2> */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1A5276]">Key Points : </h2>
          <List
            title=""
            items={[
              "When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.",
              "This Privacy Policy is meant to help you understand what information we collect, why we collect it, and what you can do to protect your information.",
              "Some key terms are defined as follows, and throughout this document:",
              "Finbyz Tech Private Limited (“Finbyz”, “Finbyz Tech”, “we”, “us”, or “our”) is the company that collects and processes Personal Data for the purposes described in this Policy.",
              "Personal Data is any information relating to an identified or identifiable natural person (“Data Subject”).",
              "Customer or Client is a legal business entity with whom Finbyz Tech has an agreement to provide the Services."
            ]}
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1A5276]">What is Finbyz Tech ?</h2>
          <List
            title=''
            items={[
              "Finbyz Tech Pvt Ltd is an IT business solutions provider. We have technology in our genes and provide innovative solutions for all industries and businesses. We help fit an ERP solution that exactly meets your goals.",
              "Finbyz Tech is a third party service provider of the 'WhatsApp Business CRM' tool. The product provides a 'Conversation Cloud Platform' with WhatsApp Business that allows our Customers to store, manipulate, analyze and transfer messages between their business systems and their customers on a variety of third-party messaging channels (the 'Service').",
              "We are committed to the protection of Personal Data, including data that we use for our own purposes, and that we maintain on behalf of our Clients."
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1A5276]">
            Collection and Use of Personal Data</h2>
          <List
            title=''
            items={[
              "Finbyz Tech collects information, including Personal Data, for the following purposes:",
              "Providing and managing the Service",
              "Internal business purposes (including communicating with you and marketing, recruiting and managing personnel)",
              "Collecting payment for the Service",
              "To understand and improve our Service and Website",
              "In order to provide our services to our clients we collect the user’s name, email address and phone number and upload these details into our secure servers.",
              "These details are used only to identify the users and deliver the content that they need on the app.",
              "For a better experience, and in order to provide our Service, we may require you to provide us, either directly or indirectly, with certain personally identifiable information, including but not limited to the user name, and OAuth2 credentials.",
              "The information that we request will be retained by us and used as described in this privacy policy.",
              "The app uses third-party services that may collect information used to identify you.",
              "Finbyz Services are not directed to children under 16. If you learn that a child under 16 has provided us with Personal Data without consent, please contact us."
            ]}
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1A5276]">
            {/* <Cloud className="text-primary" />  */}
            Cloud API</h2>
          <p className="mb-2">Finbyz sends messages to Cloud API. The cloud API service stores the messages temporarily. Then, it takes on the task of sending the message to the WhatsApp platform. First, messages are stored for any necessary transmissions. Then, the WhatsApp messages are deleted automatically after 30 days.</p>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1A5276]">
            {/* <UserCheck className="text-primary" /> */}
             Providing and Managing the Service</h2>
          <List
            title=''
            items={[
              "In the course of providing the Service, Finbyz Tech may receive, access, analyze, process and maintain Personal Data on behalf of our Customers.",
              "Our Customers determine the types of Personal Data that will be collected and used within the Service, how it will be used and disclosed, and how long it will be stored. For any questions related to how your Personal Data is used by our Customers, please contact them directly.",
              "Service Data is the information that is processed on behalf of our Customers during the provision of the Service:",
              "- This data privacy statement explains how and what personal data we collect from you through our website. Personal data means all data that can relate to you personally, such as your name, address, e-mail account(s), and user behaviour.",
              "- Your data is stored in secure cloud servers, and we try our best to encrypt all personally identifiable information.",
              "- Upon termination, all your data (contacts, conversations, etc.) is deleted permanently from our database unless you request otherwise.",
              "Account Information, including contact information, user profile information, and information about your payment method, is collected from you when you register or authenticate into our Service and is used to manage payment for the Service, enable us to provide support, and facilitate communication.",
              "Service Usage Information is collected, including information about how you are accessing and using the Service. We use this information to understand and improve our Services and to investigate and prevent security issues, abuse, and fraud."
            ]}
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1A5276]">
            {/* <Mail className="text-primary" />  */}
            Communicating with You and Marketing Practices</h2>
          <List
            title=''
            items={[
              "Responding to your request for a product demo: When you request a free demo, we may collect your first and last name, job title, WhatsApp number, business email address, and information about your company. We use this information to contact you and otherwise facilitate your free demo.",
              "Responding to your inquiries: When you contact us with a comment, question or complaint, you may be asked for information that identifies you, such as your name, address and telephone number, along with additional information we need to help us promptly answer your question or respond to your comment. We may retain this information to assist you in the future and to improve our customer service and service offerings (including the Service and Website).",
              "Informing you about products and services. We may use your contact information for our own marketing or advertising purposes. We do not sell or rent your Personal Data to third parties. You can opt out of these at any time by following the steps outlined below:",
              "- Opt out of our emailing list",
              "- Send us a communication to request the deletion of your contact details.",
              "Managing employees and contractors. If you join the Finbyz Tech team as an employee or contractor, we will use the information you provided, as well as information we create about you, for human resources purposes, including verifying your eligibility and qualifications, performance management, to provide compensation and benefits, investigate incidents, and otherwise facilitate the relationship."
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1A5276]">
            {/* <FileText className="text-primary" />  */}
            Collecting Payment for the Service</h2>
          <p>For Clients that purchase a paid version of our Service, we collect and process information about how you use the Service, and your Account Information (including contact information, user profile information, and information about your payment method) for the purpose of billing you.</p>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1A5276]">
            {/* <RefreshCw className="text-primary" /> */}
             To Understand and Improve our Services and Website</h2>
          <List
            title=''
            items={[
              "Understanding how you use the Service. Service Usage Information is collected, including information about how you are accessing and using the Service. We use this information to understand and improve our Services and to investigate and prevent security issues, abuse, and fraud.",
              "Visiting our Website. We collect the IP (Internet protocol) addresses of all visitors to our Website and other related information such as page requests, browser type, operating system and average time spent on our Website. We use this information to help us understand our Website activity and to monitor and improve our Website. In addition to the information described above, our Website uses Cookies. Please refer to the Cookie Policy below for additional details.",
              "Third-Party Links. Our Website may contain links to other websites that Finbyz Tech does not own or operate. We provide links to third-party websites as a convenience to the user. These links are not intended as an endorsement of or referral to the linked websites. The linked websites have separate and independent privacy policies, notices and terms of use. We do not have any control over such websites. Therefore we have no responsibility or liability for the manner in which the organisations that operate such linked websites may collect, use or disclose, secure and otherwise treat Personal Data. We encourage you to read the privacy policy of every website you visit."
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1A5276]">
            {/* <Link2 className="text-primary" />  */}
            Disclosure of your Personal Data</h2>
          <List
            title=''
            items={[
              "As a matter of practice, Finbyz Tech does not disclose, trade, rent, sell or otherwise transfer Personal Data, except as set out in this policy.",
              "We may transfer or disclose Personal Data as follows:",
              "- Service Provider Arrangements. We may transfer (or otherwise make available) Personal Data to third parties who process it on our behalf for the purposes noted above. These third parties may access, process or store personal data in the course of providing these services, but based on our instructions only.",
              "  - As of the date hereof, these third-party providers include technical operations such as database monitoring, data storage and hosting services and customer support software tools.",
              "- Changes to our Business Structure. Finbyz Tech may share or disclose data if we engage in a merger, acquisition, bankruptcy, dissolution, reorganisation, sale of some or all assets, financing, acquisition of all or a portion of our business, a similar transaction or proceeding, or steps in contemplation of such activities (e.g. due diligence).",
              "- Compliance with Laws. Finbyz and our Partner Service Providers of other countries may share or disclose Personal Data to comply with legal or regulatory requirements and to respond to lawful requests, court orders and legal processes.",
              "- Enforcing Our Rights, Preventing Fraud, and Safety. Finbyz Tech may share or disclose data to protect and defend the rights, property, or safety of third parties or us, including enforcing contracts or policies, or in connection with the investigation and preventing fraud."
            ]}
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1A5276]">
            {/* <Users className="text-primary" />  */}
            Access and Correction of Personal Data</h2>
          <List
            title=''
            items={[
              "If we receive a request from an individual to access or update Personal Data we have collected on behalf of a particular Customer, we will direct that individual to the relevant Customer. We will assist our Customers wherever possible in responding to individual access requests.",
              "If you submit Personal Data via our Website or otherwise provide us with your Personal Data, you may request access, updating or correction of your Personal Data by submitting a written request to us. We may request certain Personal Data for the purposes of verifying your identity."
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1A5276]">
            {/* <Lock className="text-primary" /> */}
             How We Protect Personal Data</h2>
          <p>Finbyz Tech takes the security of user data seriously. We take various steps to protect the information you provide to us from loss, misuse, and unauthorized access or disclosure. These steps take into account the sensitivity of the information we collect, process and store, and the current state of technology.</p>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1A5276]">
            {/* <Cookie className="text-primary" />  */}
            Cookie Policy</h2>
          <List
            title=''
            items={[
              "Finbyz Tech uses cookies and similar technologies to record log data. We use both session-based and persistent cookies.",
              "Cookies are small text files sent by us to your computer and from your computer or mobile device to us each time you visit our website or use our desktop application. They are unique to your account or your browser. Session-based cookies last only while your browser is open and are automatically deleted when you close your browser. Persistent cookies last until you or your browser delete them or until they expire.",
              "Some cookies are associated with your account and Personal Data in order to remember that you are logged in and which parts of the Service or Website you are logged into. Other cookies are not tied to your account but are unique and allow us to carry out site analytics and customization, among other similar things.",
              "If you access the Services through your browser, you can manage your cookie settings there, but if you disable some or all cookies, you may not be able to use the Services.",
              "Finbyz Tech sets and accesses our own cookies on the domains operated by Finbyz Tech and its affiliates. In addition, we use third parties like Google Analytics for website analytics. You may opt out of third-party cookies from Google Analytics on its website.",
              "We do not currently recognize or respond to browser-initiated Do Not Track signals, as there is no consistent industry standard for compliance."
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1A5276]">
            {/* <RefreshCw className="text-primary" /> */}
             Updates to this Privacy Policy</h2>
          <p className="mb-2">This Privacy Policy may be updated periodically to reflect changes to our Personal Data handling practices. The revised Privacy Policy will be posted on the Website. If you continue to use the Service or the Website after the changes are in effect, you agree to the revised Notice.</p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="mb-2">Please contact Finbyz Tech if:</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>You have any questions or comments about this Privacy Policy;</li>
              <li>You wish to access, update, and/or correct inaccuracies in your Personal Data; or</li>
              <li>You otherwise have a question or complaint about the manner in which our service providers or we treat your Personal Data.</li>
            </ul>
            <ContactDetailsBlock
              email="support@finbyz.tech"
              address="504, Addor Ambition, Navrang Cir, Vimal House, Navrangpura, Ahmedabad, Gujarat - 380009, India"
            />
          </div>
        </div>
      </Section>

      {/* <Section useGradient>
        <div className="container-custom py-8 animate-fade-in-up">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Secure Your Data?',
                icon: 'ShieldCheck',
              },
              title: 'Contact Finbyz Tech for Privacy Questions',
              description: 'Have questions or concerns about your privacy? Reach out to our team for more information or support.',
              primaryButton: {
                text: 'Email Us',
                icon: 'Mail',
                action: () => {
                  window.location.href = 'mailto:support@finbyz.tech';
                },
              },
              secondaryButton: {
                text: 'Visit Website',
                icon: 'Link2',
                action: () => {
                  window.open('https://web.finbyz.tech', '_blank');
                },
              },
              trustIndicator: {
                text: 'Trusted by 100+ Businesses',
                icon: 'Users',
              },
            }}
          />
        </div>
      </Section> */}
    </>
  );
}
