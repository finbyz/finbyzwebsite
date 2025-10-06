'use client';
import React from "react";
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import FlipCard from '@/components/ai_components/FlipCard';
import DjangoAdvantageGrid from '@/components/ai_components/DjangoAdvantageGrid';
import DjangoWhyBestGrid from '@/components/ai_components/DjangoWhyBestGrid';
import List from '@/components/sections/list';
import DjangoOutsourcingBenefitsGrid from '@/components/ai_components/DjangoOutsourcingBenefitsGrid';
import CTA from '@/components/sections/cta';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const heroPrimaryAction = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
};
const heroSecondaryAction = () => {
  if (typeof window !== 'undefined') {
    window.location.href = '/contact';
  }
};

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Hire Django Developer "
        highlightWords={["Django", "Developer"]}
        description="Looking to hire Django developers? Find expert Python Django developers for your project needs. Hire Django developers today and level up your project!"
        primaryButton={{ text: 'Hire Now', action: heroPrimaryAction }}
        secondaryButton={{ text: 'Contact Us', action: heroSecondaryAction }}
        heroImage={{
          alt: 'Hire Django Developer',
          src: 'api/fb/n/files/Hire-dJango-Dev - New.svg',
          
        }}
      />

      <Section>
        <div className="container-custom py-8">
          <QuoteBlock
            text="Best Django Development Company"
            isHeading={true}
          />
          <p className="mt-6 text-gray-700 text-base">
            Get ready to revolutionize your outsourcing needs with Finbyz Tech. Our cutting-edge Django development services are designed to cater and scale your operations with ease. Our team of expert developers has a track record of delivering high-quality results, so you can trust us to handle your most complex projects. Don't settle for anything less than the best - partner with Finbyz Tech for all your Django development needs and experience the difference for yourself.
          </p>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center mb-8">What Our Django Full Stack Developers Can Do for You?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FlipCard
              front={
                <div className="flex flex-col items-center justify-center h-full">
                  <img src="api/fb/n/files/web development.svg" alt="web development" width={64} height={64} />
                  <h3 className="mt-4 font-semibold text-lg">Django Web Development</h3>
                </div>
              }
              back={
                <p className="text-center px-3 text-sm">
                  Our Django web development services include building responsive and user-friendly websites that are optimized for speed, performance, and security. We use the latest technologies and frameworks to develop scalable and high-performing web applications that enhance the user experience.
                </p>
              }
            />
            <FlipCard
              front={
                <div className="flex flex-col items-center justify-center h-full">
                  <img src="api/fb/n/files/icon-shorter-sales-cycle.svg" alt="Django CMS Development" width={64} height={64} />
                  <h3 className="mt-4 font-semibold text-lg">Django CMS Development</h3>
                </div>
              }
              back={
                <p className="text-center px-3 text-sm">
                  Our Django CMS development services enable businesses to create and manage content more efficiently. We use Django CMS to create scalable, flexible and easy-to-use websites that offer high functionality and user-friendly interfaces.
                </p>
              }
            />
            <FlipCard
              front={
                <div className="flex flex-col items-center justify-center h-full">
                  <img src="api/fb/n/files/api development.svg" alt="Django Rest API Development" width={64} height={64} />
                  <h3 className="mt-4 font-semibold text-lg">Django Rest API Development</h3>
                </div>
              }
              back={
                <p className="text-center px-3 text-sm">
                  We specialize in building custom Rest APIs using Django that enable businesses to interact with other applications and systems. Our APIs are designed to be scalable, flexible and secure, ensuring seamless integration with your existing systems.
                </p>
              }
            />
            <FlipCard
              front={
                <div className="flex flex-col items-center justify-center h-full">
                  <img src="api/fb/n/files/migration.svg" alt="Django Migration Services" width={64} height={64} />
                  <h3 className="mt-4 font-semibold text-lg">Django Migration Services</h3>
                </div>
              }
              back={
                <p className="text-center px-3 text-sm">
                  We offer migration services to help businesses migrate their existing applications to Django. Our team of experts follows a well-defined process to ensure a smooth and hassle-free migration, with minimal disruption to your business.
                </p>
              }
            />
            <FlipCard
              front={
                <div className="flex flex-col items-center justify-center h-full">
                  <img src="api/fb/n/files/custom Django.svg" alt="Custom Django Development" width={64} height={64} />
                  <h3 className="mt-4 font-semibold text-lg">Custom Django Development</h3>
                </div>
              }
              back={
                <p className="text-center px-3 text-sm">
                  We offer custom Django development services that cater to the specific requirements of our clients. We work closely with our clients to understand their business needs and develop custom solutions that meet their objectives. From database design to user interface development, we take care of everything.
                </p>
              }
            />
            <FlipCard
              front={
                <div className="flex flex-col items-center justify-center h-full">
                  <img src="api/fb/n/files/Supoort.svg" alt="Support & Maintenance" width={64} height={64} />
                  <h3 className="mt-4 font-semibold text-lg">Support & Maintenance</h3>
                </div>
              }
              back={
                <p className="text-center px-3 text-sm">
                  Trust our remote Django developers to get 24/7 support and maintenance for your projects. With our expertise, we can identify and resolve congestion and continuously enhance delivered solutions. Experience exceptional results and take your business to the next level with Finbyz Tech.
                </p>
              }
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
            <img
              src="api/fb/n/files/django-logo-negative.svg"
              alt="django-logo-negative"
              width={180}
              height={180}
              className="rounded-lg bg-gray-50 p-4"
            />
          </div>
          <div className="w-full md:w-2/3 bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">What is Django Framework</h2>
            <p className="text-gray-700">
              Django is a popular open-source web application framework written in Python. It provides a robust set of tools and libraries for building web applications quickly and easily. Django was first released in 2005 and has since become a popular choice for developers due to its high-level abstractions and rapid development cycle.
            </p>
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-8">What Do We Offer As a Pro Django Coder</h2>
          <DjangoAdvantageGrid
            advantages={[
              {
                title: 'Content Management Systems (CMS)',
                image: 'api/fb/n/files/content.svg',
                alt: 'content',
                description: 'Django provides a built-in admin interface that makes it easy to manage and update content for websites and web applications.'
              },
              {
                title: 'Data Analysis and Reporting',
                image: 'api/fb/n/files/icon-data-analytics.svg',
                alt: 'icon-data-analytics',
                description: 'Django can be used to build web-based data analysis and reporting tools that process and display large amounts of data.'
              },
              {
                title: 'APIs and Web Services',
                image: 'api/fb/n/files/ser-website-development.svg',
                alt: 'ser-website-development',
                description: "Django's REST framework makes it easy to build APIs and web services that can be used by other applications."
              },
              {
                title: 'Rapid Prototyping',
                image: 'api/fb/n/files/speed-strikes-the-first-impression.svg',
                alt: 'speed-strikes-the-first-impression',
                description: "Django's high-level abstractions and built-in features make it easy to build and test web application prototypes quickly."
              }
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-8">The Finbyz Advantage: Where Expertise Meets Innovation</h2>
          <DjangoAdvantageGrid
            advantages={[
              {
                title: 'Exceptional Talent Pool',
                image: 'api/fb/n/files/170 (1).svg',
                alt: 'django-development',
                description: 'Dive into a reservoir of exceptional Django development talent at Finbyz. Our arsenal is brimming with proficient Django developers, freelance Django specialists, and remote Django experts, each a connoisseur in the art and science of web creation. They are not just developers; they are architects of digital innovation, bringing a wealth of experience and creative flair to the table, ensuring your projects are handled with unmatched professional expertise.'
              },
              {
                title: 'Tailored Excellence',
                image: 'api/fb/n/files/161.svg',
                alt: 'django-service',
                description: 'In the bespoke halls of our Django company, services are gracefully custom-crafted. Whether you aim to hire a Django developer, engage with a Django freelancer, or collaborate with a remote Django developer, we tailor our approach to echo the uniqueness of your vision and requirements. The result is a symphony of technological brilliance, an ensemble performance that hits the right notes of innovation, functionality, and user experience.'
              },
              {
                title: 'Uncompromising Quality',
                image: 'api/fb/n/files/Contractual Obligations.svg',
                alt: 'django-developer',
                description: 'Quality is the cornerstone upon which Finbyz is built. Every Django developer in our team, whether a full-time maestro or a freelance Django developer, adheres to a meticulous code of excellence. Each stroke of code, each crafted feature, is a tribute to our unwavering commitment to quality, sculpting digital experiences that resonate with reliability, precision, and extraordinary performance.'
              },
              {
                title: 'End-to-End Solutions',
                image: 'api/fb/n/files/171.svg',
                alt: 'django-freelancer',
                description: "At Finbyz, we offer end-to-end Django development solutions. From conceptualization and design to development, testing, deployment, and ongoing support, we cover the entire lifecycle of your project. You won't have to juggle multiple providers; we are your one-stop destination for all your Django development needs."
              },
              {
                title: 'Expanding Your Options',
                image: 'api/fb/n/files/172.svg',
                alt: 'python-developers',
                description: 'In addition to our Django expertise, we also provide a wide range of other skilled professionals to augment your projects. You can hire web developers, python developer, and javascript developer, all of whom are equally proficient and committed to delivering excellence. This diversity in our talent pool allows you to explore various avenues and technologies to meet your specific needs.'
              },
              {
                title: 'Cutting-Edge Innovation',
                image: 'api/fb/n/files/webapplicationdevloper.svg',
                alt: 'remote-django-developer',
                description: "Innovation is in our DNA. We don't just follow industry trends; we set them. Our Django developers are at the forefront of technology, continuously exploring new horizons and integrating the latest advancements into your projects. Whether it's AI, IoT, or blockchain, we have the expertise to infuse innovation into every line of code."
              }
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center mb-8">Why We Are The Best Django Developers</h2>
          <DjangoWhyBestGrid
            items={[
              {
                title: 'Expertise',
                image: 'api/fb/n/files/experienced developer.svg',
                alt: 'experienced developer',
                description: 'Finbyz Tech can provide a team of experienced developers who are well-versed in Django Python development. Your clients can benefit from your expertise and knowledge, ensuring high-quality work and efficient processes.'
              },
              {
                title: 'Cost Savings',
                image: 'api/fb/n/files/cost-effective solutions.svg',
                alt: 'cost-effective solutions',
                description: 'Outsourcing Django Python development work to Finbyz Tech can be a cost-effective solution for clients. Your clients can save on overhead costs, such as salaries, benefits, and office space, which can be significant.'
              },
              {
                title: 'Time Savings',
                image: 'api/fb/n/files/time saving.svg',
                alt: 'time saving',
                description: 'Your clients can focus on their core business functions and leave the Django Python development work to Finbyz Tech. This can save time and resources, allowing clients to focus on what they do best.'
              },
              {
                title: 'Quality Assurance',
                image: 'api/fb/n/files/readibility.svg',
                alt: 'readibility',
                description: "Finbyz Tech can provide quality assurance processes, such as testing and code reviews, to ensure that the developed software meets high-quality standards. This can save clients time and effort, as they don't need to invest in their quality assurance processes."
              },
              {
                title: 'Scalability',
                image: 'api/fb/n/files/scalability.svg',
                alt: 'scalability',
                description: 'Your clients can scale their development needs up or down as their business needs change. Finbyz Tech can provide resources to handle increased demand or reduce resources during slower periods.'
              },
              {
                title: 'Timely Delivery',
                image: 'api/fb/n/files/timely deliverd.svg',
                alt: 'timely deliverd',
                description: 'Your clients can benefit from the timely delivery of their projects, as Finbyz Tech can provide dedicated resources to ensure on-time delivery.'
              }
            ]}
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <List
            title="Where Django Framework is Best to Use?"
            items={[
              'Offers robust tools for efficient web application development, saving time and money on large projects. Versatile and cost-effective.',
              'Scales with your business - from small sites to enterprise apps. Grow your project with confidence.',
              'Offers built-in security features for safe web development. CSRF, XSS, and password management keep your site secure.',
              "Tailor-made apps with Django's customization. Build unique web apps that meet your company's specific needs."
            ]}
            style={{
              fontSize: '1rem',
              color: '#374151',
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem'
            }}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center mb-8">The Case for Outsourcing Django Developer Services</h2>
          <DjangoOutsourcingBenefitsGrid
            benefits={[
              {
                title: 'Access to Expertise',
                image: 'api/fb/n/files/icon%20Real-time%20information.svg',
                alt: 'Flawless UI with Real-time information',
                description: "Outsourcing allows you to tap into a pool of experienced Django developers who specialize in different aspects of web development. Whether it's creating a custom CMS, e-commerce platform, or data-driven web application, you can find the right talent to meet your specific needs."
              },
              {
                title: 'Cost Efficiency',
                image: 'api/fb/n/files/icon%20Higher%20Productivity.svg',
                alt: 'Higher Productivity',
                description: 'Hiring and retaining in-house Django developers can be expensive. Outsourcing eliminates the need for recruiting, training, and providing benefits, ultimately reducing operational costs.'
              },
              {
                title: 'Flexibility and Scalability',
                image: 'api/fb/n/files/icon%20Improved%20Collaboration.svg',
                alt: 'Improved Collaboration',
                description: 'Outsourcing provides the flexibility to scale your development team up or down based on project requirements. This agility is especially beneficial for startups and businesses with fluctuating workloads.'
              },
              {
                title: 'Focus on Core Competencies',
                image: 'api/fb/n/files/icon%20Better%20Analytics.svg',
                alt: 'support & maintenance',
                description: 'Outsourcing Django development allows your in-house team to focus on core business activities, such as product strategy, marketing, and customer engagement, while experts handle the technical aspects.'
              }
            ]}
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Hire Django Developers?',
                icon: 'UserCheck',
              },
              title: 'Let’s Build Your Next Project Together',
              description: 'Contact us today to discuss your Django development needs and discover how our expert team can help you achieve your goals.',
              primaryButton: {
                text: 'Get Started',
                icon: 'ArrowRight',
                action: heroPrimaryAction,
              },
              secondaryButton: {
                text: 'Contact Sales',
                icon: 'Mail',
                action: heroSecondaryAction,
              },
              trustIndicator: {
                text: 'Trusted by 100+ businesses',
                icon: 'ShieldCheck',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
