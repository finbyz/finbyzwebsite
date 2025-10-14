'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import ERPNextPartnerServices from '@/components/ai_components/ERPNextPartnerServices';
import ClientCountryGrid from '@/components/ai_components/ClientCountryGrid';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="ERPNext Certified Partner"
        highlightWords={["ERPNext", "Certified", "Partner"]}
        description="Finbyz Tech, a certified ERPNext and Frappe Partner in Ahmedabad, offers expert ERP implementation, customization, and support services tailored to your business needs."
        primaryButton={{
          text: 'Contact Us',
          action: () => {
            window.location.href = '/contact';
          }
        }}
        secondaryButton={{
          text: 'View Certificate',
          action: () => {
            window.open('https://frappe.io/partners/India/Finbyz-Tech-Pvt-Ltd', '_blank');
          }
        }}
        heroImage={{
          alt: 'ERPNext Certified Partner',
          src: '/images/Frappe-Certified-parnter-Page Design-SVG.svg',
          
        }}
      />

<Section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_70%)] pointer-events-none"></div>

        <div className="container-custom py-12 md:py-16 relative z-10 flex flex-col gap-12">
          
          {/* Full-width Paragraph */}
          {/* <div className="animate-fade-up">
            <p className="mb-6 text-gray-700 leading-relaxed text-lg text-justify">
              As a trusted ERPNext Partner in Ahmedabad, Gujarat, <span className="font-semibold text-gray-900">Finbyz Tech</span> empowers businesses with scalable, robust, and intuitive ERP solutions. ERPNext is a comprehensive and user-friendly Enterprise Resource Planning (ERP) platform, designed specifically for small to medium-sized businesses. It is trusted by users in <span className="font-semibold text-primary">over 100 countries</span>, available in more than <span className="font-semibold text-primary">30 languages</span>, and is known for its flexibility with both cloud and on-premise deployments. Whether you're transitioning from SAP, Oracle, Odoo, Microsoft Dynamics, Tally, or Zoho, <Link href="/erpnext-software" className="text-primary font-semibold underline decoration-2 underline-offset-4 hover:text-primary/80 transition-colors">ERPNext</Link> provides a seamless shift with lower costs and enhanced control. Learn more about how to <a href="https://finbyz.tech/how-to-choose-the-right-erp-software-for-your-company" target="_blank" className="text-primary font-semibold underline decoration-2 underline-offset-4 hover:text-primary/80 transition-colors">choose the right ERP</a> for your company.
            </p>
             
          </div>
           */}

           <div className="animate-fade-up flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
  {/* Text Content - Left Side */}
  <div className="flex-1">
    <p className="mb-0 text-gray-700 leading-relaxed text-lg text-justify">
      As a trusted ERPNext Partner in Ahmedabad, Gujarat, <span className="font-semibold text-gray-900">Finbyz Tech</span> empowers businesses with scalable, robust, and intuitive ERP solutions. ERPNext is a comprehensive and user-friendly Enterprise Resource Planning (ERP) platform, designed specifically for small to medium-sized businesses. It is trusted by users in <span className="font-semibold text-primary">over 100 countries</span>, available in more than <span className="font-semibold text-primary">30 languages</span>, and is known for its flexibility with both cloud and on-premise deployments. Whether you're transitioning from SAP, Oracle, Odoo, Microsoft Dynamics, Tally, or Zoho, <Link href="/erpnext-software" className="text-primary font-semibold underline decoration-2 underline-offset-4 hover:text-primary/80 transition-colors">ERPNext</Link> provides a seamless shift with lower costs and enhanced control. Learn more about how to <a href="https://web.finbyz.tech/how-to-choose-the-right-erp-software-for-your-company" target="_blank" className="text-primary font-semibold underline decoration-2 underline-offset-4 hover:text-primary/80 transition-colors">choose the right ERP</a> for your company.
    </p>
  </div>
  
  {/* Image - Right Side */}
  <div className="flex-shrink-0 w-full md:w-auto">
    <a href="https://frappe.io/partners/India/Finbyz-Tech-Pvt-Ltd" target="_blank" rel="noopener noreferrer" className="relative block">
    <Image 
      src="/images/Frappe-Partner-Certificate-Logo.svg" 
      alt="ERPNext partner img" 
      width={270} 
      height={140} 
      className="w-full md:w-[270px] h-auto" 
    />
    </a>
  </div>
</div>

          {/* Two-column Layout */}
          <div className="flex flex-col gap-12">
            
            {/* Left Column - Key Features */}
            <div className="flex-1 animate-fade-up">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-out hover:scale-[1.02]">
              
                <div className="flex text-gray-70ser0 flex-wrap gap-4">
                
                  <List
                      title="Key Features of ERPNext"
                      items={[
                        'Platform Agnostic: ERPNext can be accessed from any OS or device Windows, Mac, Linux, or mobile offering flexibility for modern businesses.',
                        'Highly Customizable: Tailor ERPNext modules to meet your specific industry and workflow requirements with ease.',
                        'Web-Based Access: As a cloud-first solution, ERPNext ensures real-time access from anywhere in the world.',
                        'Industry-Specific Features: Designed for diverse sectors such as Manufacturing ERP, retail, healthcare, and education, ERPNext adapts to your unique business needs.',
                        'Seamless Integration: Easily connect ERPNext with third-party apps to optimize your workflow and data consistency.',
                        'Open Source Advantage: ERPNext’s open-source foundation gives your business full access and control, reducing licensing costs while offering long-term flexibility.'
                      ]}
                    />
                </div>
              </div>
            </div>

            {/* Right Column - Certified Partner Image + Stats */}
            <div className="flex-1 animate-fade-up flex flex-col items-center lg:items-center  gap-6">
              {/* <a href="https://frappe.io/partners/India/Finbyz-Tech-Pvt-Ltd" target="_blank" rel="noopener noreferrer" className="relative block">
                <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-200 hover:border-primary/40 hover:shadow-2xl group hover:scale-[1.03] transition-all duration-500">
                   */}
                  {/* Verified Badge */}
                  {/* <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-green-700">Verified</span>
                  </div> */}

                  {/* <Image src="/images/Frappe-Partner-Certificate-Logo.svg" alt="ERPNext partner img" width={270} height={140} className="w-full h-auto" /> */}

                  {/* <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-center text-gray-800 text-sm font-bold">Official Frappe Partner</p>
                    <p className="text-center text-gray-500 text-xs mt-1">Certified Implementation Expert</p>
                  </div> */}
                {/* </div>
              </a> */}

              {/* Stats */}
              {/* <div className="flex gap-3">
                <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="text-xl font-bold text-primary">100+</div>
                  <div className="text-xs text-gray-600 font-medium">Countries</div>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="text-xl font-bold text-primary">30+</div>
                  <div className="text-xs text-gray-600 font-medium">Languages</div>
                </div>
              </div> */}
            </div>
          </div>
      </div>
</Section>




      <Section useGradient>
        <div className="container-custom py-8">
          <p className="mb-4 text-gray-700 animate-fade-in-up">
            We’re proud to announce our official recognition as a certified Frappe Partner and ERPNext Partner. This achievement highlights our commitment to providing top-tier ERP solutions and implementation services. As an ERPNext Partner in Ahmedabad, we have successfully completed all certification and training milestones, ensuring we bring the latest knowledge and best practices to every project. Finbyz Tech is your reliable partner for <Link href="/hire-erpnext-implementer" className="text-primary underline hover:text-primary/80">ERPNext implementation, customization, and support</Link>.
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
            <div className="flex-1 flex justify-center">
              <Image src="/images/image_2023_09_08T10_56_59_090Z.png" alt="ERPNext_Partner" width={480} height={240} className="rounded-lg shadow-md object-contain" />
            </div>
            <div className="flex-1 mt-6 md:mt-0">
              <p className="text-gray-700 animate-fade-in-up">
                As a trusted ERPNext Partner in Ahmedabad, FinByz delivers future-ready ERP solutions through our strategic collaboration with Frappe. Our role as a certified Frappe Partner enables us to enhance productivity, streamline operations, and drive business growth. From initial consultation to post-implementation support, we are committed to offering top-tier service with a local presence in Gujarat and a global outlook.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-center font-bold text-2xl mb-4 animate-fade-in-up text-[#1A5276]">Why Choose a Certified ERPNext Partner?</h2>
          <p className="text-center text-gray-700 mb-6 animate-fade-in-up">
            Partnering with us as your ERPNext Partner means choosing a team with certified expertise, deep domain knowledge, and unwavering professionalism. Our recognition as a Frappe Partner stands as a testament to our dedication to delivering tailored ERPNext solutions that meet the unique needs of your organization.
          </p>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="font-bold text-2xl mb-8 animate-fade-in-up text-[#1A5276]">Our Premium Services as Certified ERPNext & Frappe Partners</h2>
          <ERPNextPartnerServices />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <QuoteBlock text="The Certified ERPNext Partners Advantage" isHeading={true} />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 text-justify">
          <div className="space-y-4 animate-fade-in-up">
            <p>
              When you choose FinByz, a reliable ERPNext Partner in Ahmedabad, you gain access to innovation, strategic thinking, and certified implementation practices. Our Frappe Partner certification is not just a badge—it represents our commitment to quality and trust.
            </p>
            <p>
              We combine advanced technology with innovative practices to turn ERPNext into a key pillar of your growth journey. Our team ensures ERPNext works not just as software, but as a smart business enabler.
            </p>
            <p>
              As your ERPNext Partner in Gujarat, we deliver scalable solutions built for long-term success. We focus on quality, sustainability, and measurable outcomes for your business growth.
            </p>
            <p>
              Aligning with us for <Link href="/human-resource-system" className="text-primary underline hover:text-primary/80">HR software</Link> ensures you fully leverage ERPNext’s capabilities across your HR operations. We bring strategic insights and coherence to human capital management.
            </p>
            <p>
              Our expertise spans <Link href="/erp-for-chemical-industry" className="text-primary underline hover:text-primary/80">ERP for the chemical industry</Link>, <Link href="/erp-for-engineering-industry" className="text-primary underline hover:text-primary/80">engineering ERP software</Link>, <Link href="/erp-for-manufacturing-industry" className="text-primary underline hover:text-primary/80">manufacturing ERP</Link>, <Link href="/erp-for-logistics-industry" className="text-primary underline hover:text-primary/80">transport ERP</Link>, and <Link href="/erp-for-trading-industry" className="text-primary underline hover:text-primary/80">trading ERP</Link>. As a certified ERPNext Partner, we understand the complex needs of these sectors and deliver solutions with precision and confidence.
            </p>
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-center font-bold text-2xl mb-4 animate-fade-in-up text-[#1A5276]">We Serve Businesses Across the Globe</h2>
          <p className="text-center text-gray-700 mb-8 animate-fade-in-up">
            FinByz, your global ERPNext Partner, proudly extends implementation services to businesses in India, the USA, Canada, UAE, Saudi Arabia, and the UK. Based in Ahmedabad, Gujarat, we’re your go-to Frappe Partner for scalable, efficient ERP implementations worldwide.
          </p>
          <ClientCountryGrid
            countries={[
              { name: 'Vietnam', image: '/images/vnm.svg', alt: 'erpnext_partner_vietnam' },
              { name: 'USA', image: '/images/US.svg', alt: 'erpnext_partner_usa' },
              { name: 'UAE', image: '/images/AE.svg', alt: 'erpnext_partner_uae' },
              { name: 'Singapore', image: '/images/sgp.svg', alt: 'erpnext_partner_singapore' },
              { name: 'Saudi Arabia', image: '/images/sau.svg', alt: 'erpnext_partner_saudi_arabia' },
              { name: 'Norway', image: '/images/NO.svg', alt: 'erpnext_partner_norway' },
              { name: 'Malaysia', image: '/images/MY.svg', alt: 'erpnext_partner_malaysia' },
              { name: 'Mauritius', image: '/images/MU.svg', alt: 'erpnext_partner_mauritius' },
              { name: 'India', image: '/images/ind.svg', alt: 'erpnext_partner_india' },
              { name: 'Hungary', image: '/images/HU.svg', alt: 'erpnext_partner_hungary' },
              { name: 'HongKong', image: '/images/HK.svg', alt: 'erpnext_partner_hongkong' },
              { name: 'Germany', image: '/images/ger.svg', alt: 'erpnext_partner_germany' },
              { name: 'France', image: '/images/FR.svg', alt: 'erpnext_partner_france' },
              { name: 'China', image: '/images/chn.svg', alt: 'erpnext_partner_china' },
              { name: 'Canada', image: '/images/CA.svg', alt: 'erpnext_partner_canada' },
              { name: 'Brunei', image: '/images/BN.svg', alt: 'erpnext_partner_brunei' },
              { name: 'Belgium', image: '/images/BE.svg', alt: 'erpnext_partner_belgium' },
              { name: 'Australia', image: '/images/AU.svg', alt: 'erpnext_partner_australia' }
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="py-6">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Transform Your Business?',
                icon: 'Rocket',
              },
              title: 'Partner with a Certified ERPNext Expert',
              highlightText: 'Certified ERPNext Expert',
              description: 'Get in touch with Finbyz Tech for tailored ERPNext implementation, customization, and support. Let’s drive your business growth together!',
              primaryButton: {
                text: 'Get Started',
                icon: 'ArrowRight',
                action: () => {
                  window.location.href = '/contact';
                },
              },
              secondaryButton: {
                text: 'Learn More',
                icon: 'Info',
                action: () => {
                  window.location.href = '/erpnext-software';
                },
              },
              trustIndicator: {
                text: 'Trusted by 100+ businesses globally',
                icon: 'ShieldCheck',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
