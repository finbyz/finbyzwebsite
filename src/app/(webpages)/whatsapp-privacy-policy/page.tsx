'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { List } from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import WhatsappPolicyList from '@/components/ai_components/WhatsappPolicyList';
import WhatsappMessagePolicyList from '@/components/ai_components/WhatsappMessagePolicyList';
import UserRightsList from '@/components/ai_components/UserRightsList';
import { Mail, ShieldCheck, UserCheck, Lock, Globe, FileText, Users, AlertCircle, MessageCircle, UserX, UserPlus, Info, RefreshCw } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Whatsapp Privacy Policy"
        highlightWords={["Privacy", "Policy", "Whatsapp"]}
        description="Learn how Finbyz Tech collects, uses, and protects your personal information when you use our WhatsApp-related services. Stay informed about your rights, data security, and our commitment to privacy."
        primaryButton={{
          text: "Contact Support",
          action: () => {
            window.location.href = '/contact';
          },
        }}
        secondaryButton={{
          text: "Learn More",
          action: () => {
            const el = document.getElementById('info-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
        }}
        heroImage={{
          alt: 'Whatsapp Privacy Policy',
          src: '/privacy-policy.jpg',
        }}
      />

      <Section>
        <div className="container-custom py-8" id="info-section">
          <Card className="border-none bg-white/80 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <ShieldCheck className="text-green-600 w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Our Commitment to Your Privacy</CardTitle>
                <CardDescription>
                  We care about protecting the personal information of our customers and visitors who use our website, products, or services. This policy explains how Finbyz Tech collects, uses, shares, and protects your information.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-2 text-gray-700">
              <p>
                This Privacy Policy applies to the Site and all products and services offered by Finbyz Tech. In this policy, "we", "us" and "our" refer to Finbyz Tech and its corporate family.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <Card className="border-none bg-white/90 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <FileText className="text-blue-600 w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Information Covered by this Privacy Policy</CardTitle>
                <CardDescription>
                  This policy covers personal information we collect, use, and share from you. It applies to all websites, products, services, and mobile applications in the Finbyz Tech corporate family.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-2 text-gray-700 space-y-2">
              <p>
                It does not cover how our users may use or share data they collect using our services. When you use any of our products or services, your personal information will be collected, used, and shared consistent with this policy and any related agreements.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <Card className="border-none bg-white/90 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <UserCheck className="text-emerald-600 w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Information We Collect from You</CardTitle>
                <CardDescription>
                  We collect both personal and non-personal identification information, cookies, and data from business products.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-2 text-gray-700 space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-[#1A5276]">Types of Information Collected</h2>
              <List
                title=""
                items={[
                  'Personal identification information (e.g., name, email, address, phone, credit card info) provided voluntarily.',
                  'Non-personal identification information (browser, device, OS, ISP, etc.) collected automatically.',
                  'Web browser cookies to enhance user experience and for record-keeping.',
                  'Business Products: Partners may submit customer data (e.g., phone numbers) to us for business product functionality.'
                ]}
              />
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <Card className="border-none bg-white/90 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Globe className="text-indigo-600 w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">How We Use Collected Information</CardTitle>
                <CardDescription>
                  Finbyz Tech may use your information for a variety of purposes, including service delivery, analytics, communication, and legal compliance.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-2 text-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-[#1A5276]">Purposes for Processing Your Data</h2>
              <List
                title=""
                items={[
                  'Analyze website and service usage (IP, location, browser, navigation, etc.).',
                  'Operate accounts and profiles, communicate with you, and maintain security.',
                  'Enable and monitor your use of our services.',
                  'Process service data (logs, usage reports, timestamps, etc.) for improvement and security.',
                  'Respond to product/service inquiries and send marketing communications.',
                  'Maintain correspondence and record-keeping.',
                  'Send notifications and newsletters (with your consent).',
                  'Establish, exercise, or defend legal claims.',
                  'Obtain/maintain insurance, manage risks, or seek professional advice.',
                  'Comply with legal obligations and protect vital interests.',
                  'Improve safety, reliability, and prevent fraud or abuse.',
                  'Analytics and measurement to improve services.'
                ]}
              />
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-none bg-white/90 shadow-md flex flex-col h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <Lock className="text-orange-600 w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Security</CardTitle>
                <CardDescription>
                  We use technical and organizational measures to safeguard your personal information.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-2 text-gray-700 space-y-2">
              <p>
                While we strive to protect your data, transmission over the internet is not completely secure. Once received, we use encryption (such as TLS) and other measures to protect your information.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none bg-white/90 shadow-md flex flex-col h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <ShieldCheck className="text-green-600 w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">How We Protect Your Information</CardTitle>
                <CardDescription>
                  Data is exchanged over SSL-secured channels and protected with digital signatures.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-2 text-gray-700">
              <p>
                We adopt appropriate data collection, storage, and processing practices to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-none bg-white/90 shadow-md flex flex-col h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <Globe className="text-blue-600 w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Third Party Websites</CardTitle>
                <CardDescription>
                  Our site may link to third-party sites. We are not responsible for their content or privacy practices.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-2 text-gray-700">
              <p>
                Browsing and interaction on any other website, including those linked to our site, is subject to that website's own terms and policies.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none bg-white/90 shadow-md flex flex-col h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <UserX className="text-red-600 w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Unauthorized Accounts</CardTitle>
                <CardDescription>
                  If an account was created without your authorization, contact customer support for removal.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-2 text-gray-700">
              <p>
                Please contact customer support at the brand on which the account or profile is located to request removal.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-none bg-white/90 shadow-md flex flex-col h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <RefreshCw className="text-purple-600 w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Retention of Personal Information</CardTitle>
                <CardDescription>
                  We retain your personal information as needed to provide services and comply with legal obligations.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-2 text-gray-700">
              <p>
                We may retain your data for legal compliance or to protect vital interests, even after service provision ends.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none bg-white/90 shadow-md flex flex-col h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <MessageCircle className="text-green-700 w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Our Policy Towards Children</CardTitle>
                <CardDescription>
                  Services are not directed to individuals under 18. We do not knowingly collect data from children under 18.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-2 text-gray-700">
              <p>
                If you become aware that a child has provided us with personal information, please contact support@finbyz.tech.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <WhatsappPolicyList />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <WhatsappMessagePolicyList />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <Card className="border-none bg-white/90 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <UserPlus className="text-blue-600 w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold"><h2 className='text-[#1A5276]'>Your Rights</h2></CardTitle>
                <CardDescription>
                  You have several rights under data protection law, including access, rectification, erasure, and more.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-2 text-gray-700 space-y-2">
              <p>
                Some rights are complex and may require you to consult relevant laws for full details. You may exercise your rights by written notice to us at <a href="mailto:support@finbyz.tech" className="text-blue-600 underline">support@finbyz.tech</a>.
              </p>
              <UserRightsList />
              <p>
                If you consider our processing of your personal information infringes data protection laws, you have a legal right to lodge a complaint with a supervisory authority. You may also withdraw your consent at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-none bg-white/90 shadow-md flex flex-col h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <RefreshCw className="text-yellow-600 w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Changes to this Privacy Policy</CardTitle>
                <CardDescription>
                  We may update this policy from time to time. Please review it periodically.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-2 text-gray-700 space-y-2">
              <List
                title="Policy Change Notices"
                items={[
                  'We may update this policy at our discretion by publishing a new version on our website.',
                  'You should check this page occasionally to ensure you are happy with any changes.',
                  'We may notify you of significant changes by email or through our website.'
                ]}
              />
            </CardContent>
          </Card>
          <Card className="border-none bg-white/90 shadow-md flex flex-col h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <Info className="text-cyan-600 w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Your Acceptance of These Terms</CardTitle>
                <CardDescription>
                  By using this site, you signify your acceptance of this policy.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-2 text-gray-700">
              <p>
                If you do not agree to this policy, please do not use our site. Continued use after changes means you accept those changes.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-none bg-white/90 shadow-md flex flex-col h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <AlertCircle className="text-red-600 w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Complaints or Inquiry</CardTitle>
                <CardDescription>
                  For questions or complaints about this Privacy Policy, contact us at support@finbyz.tech
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-2 text-gray-700">
              <p>
                Email: <a href="mailto:support@finbyz.tech" className="text-blue-600 underline">support@finbyz.tech</a>
              </p>
            </CardContent>
          </Card>
          <Card className="border-none bg-white/90 shadow-md flex flex-col h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <Mail className="text-indigo-600 w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Data Protection Officer</CardTitle>
                <CardDescription>
                  Our data protection officer can be contacted at info@finbyz.tech
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-2 text-gray-700">
              <p>
                Email: <a href="mailto:info@finbyz.tech" className="text-blue-600 underline">info@finbyz.tech</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <CTA
            data={{
              subheading: {
                text: "Ready to Secure Your Data?",
                icon: "ShieldCheck",
              },
              title: "Contact Us for More Information or Support",
              description: "Have questions about our privacy policy or your data? Reach out to our support team for assistance.",
              primaryButton: {
                text: "Contact Support",
                icon: "Mail",
                action: () => {
                  window.location.href = '/contact';
                },
              },
              secondaryButton: {
                text: "Learn More",
                icon: "Info",
                action: () => {
                  const el = document.getElementById('info-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                },
              },
              trustIndicator: {
                text: "Trusted by 1000+ Businesses",
                icon: "Users",
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
