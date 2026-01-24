'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import FeatureCard from '@/components/ai_components/FeatureCard';
import ProcessStepCard from '@/components/ai_components/ProcessStepCard';
import IndustryHexGrid from '@/components/ai_components/IndustryHexGrid';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function Page() {
  // Button actions
  const handleContact = () => {
    window.location.href = '/contact';
  };
  const handleLearnMore = () => {
    window.location.href = '/services/web-application-development';
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        headline="Hire Web Application Developers"
        highlightWords={["Web Application", "Developers"]}
        description="Looking for top-notch web application development services? Hire skilled web app developers for website and app development, expert in web programming."
        primaryButton={{ text: 'Contact Us', action: handleContact }}
        secondaryButton={{ text: 'Learn More', action: handleLearnMore }}
        heroImage={{
          alt: 'Hire Web Application Developers',
          src: '/images/Hire-Web-App-Developer.svg',
          videoSrc: undefined,
        }}
      />

      {/* Company Quote & Introduction */}
      <Section useGradient>
        <div className="container-custom py-8 flex flex-col gap-6">
          <QuoteBlock
            text="Best Web Application Development Company"
            isHeading={true}
          />
          <div className="flex flex-col gap-4 animate-fade-in">
            <p>
              At Finbyz Tech, we believe in harnessing the power of the internet to create innovative and impactful web applications that drive growth and transformation for our clients. As a trusted partner, we bring cutting-edge technology, deep industry expertise, and a relentless focus on delivering exceptional results to every project we undertake. Our mission is to unlock the full potential of the digital landscape for our clients and help them achieve their business objectives through our tailored web development solutions.
            </p>
            <p>
              Our <a href="/services/web-application-development" className="text-primary underline hover:text-primary-700 transition">web application development</a> services cover everything from CMS-enabled websites to the most sophisticated web-based internet applications, e-commerce portals, social networking site development, and more. Whatever your needs may be, we're here to help you achieve your goals.
            </p>
            <p>
              We are passionate about using cutting-edge technologies such as PHP, MySQL, and ASP.NET to bring your vision to life. With years of experience and a track record of success, we have the expertise to take on projects of all sizes - from small businesses to large corporations.
            </p>
          </div>
        </div>
      </Section>

      {/* What We Offer as Web Developers */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-8 text-[#1A5276]">What We Offer as Web Developers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Custom Web Development"
              image="/images/Custom web development(3).svg"
              alt="Custom web development"
              description="Transform your digital presence with custom web apps tailored to your business goals. Our skilled team is proficient in PHP, Python, Ruby, React, and more. We work closely with you to develop a custom solution that aligns with your business goals."
            />
            <FeatureCard
              title="Technology Consulting"
              image="/images/Technology Consulting.svg"
              alt="Technology Consulting"
              description="Partner with us for custom web apps that drive ROI. Our technology consulting services help you leverage the latest innovations and stay ahead of the curve. We provide guidance on technology adoption, best practices, and trends."
            />
            <FeatureCard
              title="Web Portal Development"
              image="/images/Web Portal Development.svg"
              alt="Web Portal Development"
              description="Transform your B2B or B2C business with a custom web portal. Our services provide a user-friendly, feature-rich platform tailored to your needs, from design to deployment."
            />
            <FeatureCard
              title="Enterprise Web Development"
              image="/images/Enterprise Web Development.svg"
              alt="Enterprise Web Development"
              description="Secure, high-performance web apps for enterprise-level businesses. We design and develop scalable, reliable, and secure web solutions that drive ROI."
            />
            <FeatureCard
              title="CMS Web Development"
              image="/images/CMS Web Development.svg"
              alt="CMS Web Development"
              description="Get a powerful, SEO-optimized website with our CMS development. We deliver custom web solutions that are optimized for search engines, user-friendly, and high-performing."
            />
            <FeatureCard
              title="Support & Maintenance"
              image="/images/Support & Maintenance.svg"
              alt="Support & Maintenance"
              description="Keep your website running smoothly with our expert support and maintenance services. We offer comprehensive support to ensure your website stays in top shape."
            />
          </div>
        </div>
      </Section>

      {/* Our Web Application Development Expertise */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#1A5276]">Our Web Application Development Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              title="Front-End Development"
              image="/images/Fronted.svg"
              alt="Front-End"
              description="Our web developers use front-end technologies like HTML, CSS, and JavaScript along with Python frameworks like Django and Flask including templating engines for generating dynamic HTML."
            />
            <FeatureCard
              title="Back-End Development"
              image="/images/Backend.svg"
              alt="Backend"
              description="We utilize the latest server-side technologies and frameworks, including PHP, ASP.NET, NodeJS, and Django, to bring your vision to life."
            />
            <FeatureCard
              title="Full-Stack Development"
              image="/images/Full Stack.svg"
              alt="Full Stack"
              description="Python can be used for full-stack web development using front-end and back-end technologies. Frameworks like Django and Flask are popular choices for creating full-stack web applications."
            />
            <FeatureCard
              title="Dev-Oops Consulting"
              image="/images/Devopps.svg"
              alt="Devopps"
              description="Looking to enhance the operational efficiency and quality of your cloud infrastructure? Our certified DevOps experts provide top-notch automation services to standardize your infrastructure deployment process."
            />
          </div>
        </div>
      </Section>

      {/* What is Web Development? */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 text-[#1A5276]">What is Web Development?</h2>
          <p>
            <a href="/erpnext/services/website-development-on-erpnext" className="text-primary underline hover:text-primary-700 transition">Web development</a> typically involves working with a combination of technologies that may include HTML, CSS, JavaScript, server-side scripting languages like PHP, Python, or Ruby, and various database systems. Web developers use these technologies to build websites that users can access over the internet using web browsers like Chrome, Firefox, or Safari.
          </p>
        </div>
      </Section>

      {/* Our Professional Web Design Services Include */}
      <Section useGradient>
        <div className="container-custom py-8">
          {/* <h2 className="text-2xl font-bold mb-4 text-primary">Our Professional Web Design Services Include</h2> */}
          <List
            title="Our Professional Web Design Services Include"
            items={[
              'Custom web application development tailored to meet unique business requirements',
              'Cross-platform and cross-device compatibility for seamless user experience',
              'Scalable and secure web application architecture design and development',
              'Integration with third-party services and APIs for enhanced functionality',
              'User-friendly and responsive user interface design for improved engagement',
              'Robust and efficient database design and management',
              'Effective testing and quality assurance to ensure smooth operation and bug-free application',
              'Ongoing maintenance and support to ensure optimal application performance and security.'
            ]}
          />
        </div>
      </Section>

      {/* Process We Follow */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#1A5276]">Process We Follow</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProcessStepCard
              title="Planning and Analysis"
              image="/images/lack-of-adequate-planning.svg"
              alt="Planning and Analysis"
              description="We work closely with you to identify your business requirements and create a project plan that outlines the scope, timeline, and budget for the project."
            />
            <ProcessStepCard
              title="Design"
              image="/images/design-elements.svg"
              alt="Design"
              description="We create wireframes, mockups, and design concepts that align with your branding and user experience goals."
            />
            <ProcessStepCard
              title="Prototype Demo"
              image="/images/graphics.svg"
              alt="Prototype Demo"
              description="After finalizing and approving the designs, we freeze the scope and provide a prototype or demo of the app, web or platform."
            />
            <ProcessStepCard
              title="Development"
              image="/images/on-page-seo.svg"
              alt="Development"
              description="Our development team uses the latest technologies and frameworks to build the web application, ensuring that it is secure, scalable, and optimized for performance."
            />
            <ProcessStepCard
              title="Testing"
              image="/images/Testing.svg"
              alt="Testing"
              description="Once development is complete, we rigorously test the web application to ensure that it functions as intended and is free of bugs and errors."
            />
            <ProcessStepCard
              title="Deployment"
              image="/images/deploy-finbyz.svg"
              alt="Deployment"
              description="After testing is complete and your final approval, we deploy it to the production environment."
            />
            <ProcessStepCard
              title="Maintenance and Support"
              image="/images/support-finbyz.svg"
              alt="Maintenance and Support"
              description="After deployment, we provide ongoing maintenance and support to ensure that the web application continues to function optimally and is up to date with the latest security and performance standards."
            />
            <ProcessStepCard
              title="SEO"
              image="/images/design.svg"
              alt="SEO"
              description="SEO is key. We build your web applications which are SEO friendly and help market your products or services to reach a wider audience."
            />
          </div>
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#1A5276]">Industries We Serve</h2>
          <IndustryHexGrid />
        </div>
      </Section>

      {/* Conclusion & CTA */}
      <Section>
        <div className="py-8 flex flex-col items-center text-center gap-6">
          <h2 className="text-2xl font-bold text-[#1A5276]">Ready to Build Your Next Web Application?</h2>
          <p>
            Partner with Finbyz Tech to unlock the full potential of your business with innovative, scalable, and secure web applications. Our expert team is ready to help you achieve your digital goals.
          </p>
        </div>
      </Section>
      <CTA
        data={{
          subheading: {
            text: 'Let’s Get Started',
            icon: 'Rocket',
          },
          title: 'Hire Expert Web Application Developers',
          highlightText: "Web Application Developers",
          description: 'Contact us today to discuss your project and see how we can help you grow.',
          primaryButton: {
            text: 'Contact Us',
            icon: 'ArrowRight',
            action: handleContact,
          },
          secondaryButton: {
            text: 'Learn More',
            icon: 'Info',
            action: handleLearnMore,
          },
          trustIndicator: {
            text: 'Trusted by 100+ businesses',
            icon: 'ShieldCheck',
          },
        }}
      />
    </>
  );
}
