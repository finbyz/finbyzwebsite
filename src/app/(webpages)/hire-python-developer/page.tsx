'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import WhyPythonUniqueList from '@/components/ai_components/WhyPythonUniqueList';
import WhereNotToUsePythonGrid from '@/components/ai_components/WhereNotToUsePythonGrid';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import FlipCard from '@/components/ai_components/FlipCard';
import WhyChooseFinbyzGrid from '@/components/ai_components/WhyChooseFinbyzGrid';
import CTA from '@/components/sections/cta';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const heroProps = {
  headline: 'Hire Python Developer',
  highlightWords: ['Python', 'Developer'],
  description: 'Looking for top Python development companies? Hire Python developer with expertise. Find skilled Python coders for your projects.',
  primaryButton: {
    text: 'Get Started',
    action: () => {
      window.location.href = '/contact';
    }
  },
  secondaryButton: {
    text: 'View Portfolio',
    action: () => {
      window.location.href = '/portfolio';
    }
  },
  heroImage: {
    alt: 'Hire Python Developer',
    src: '/api/fb/n/files/Hire-Python-Dev.svg',
  }
};

const pythonServices = [
  {
    title: 'Web Development',
    image: '/api/fb/n/files/web development.svg',
    alt: 'web_app_python',
    description: 'Python is often used for server-side web development, where it can be used to build and maintain websites, web applications, and RESTful APIs. Some popular web frameworks for Python include Django, Flask, and Pyramid.'
  },
  {
    title: 'API Development',
    image: '/api/fb/n/files/api development.svg',
    alt: 'python_api_development',
    description: 'We specialize in API development, leveraging the power of Python to build fast, reliable, and secure APIs for your applications. Our developers have extensive experience integrating APIs with various third-party platforms and services.'
  },
  {
    title: 'Machine Learning and Artificial Intelligence',
    image: '/api/fb/n/files/artificial intelligent.svg',
    alt: 'machine_learning_ai',
    description: 'Our developers have extensive experience in machine learning and artificial intelligence, using Python to develop predictive models, natural language processing systems, and image recognition algorithms.'
  },
  {
    title: 'Data Analysis and Visualization',
    image: '/api/fb/n/files/data analysis.svg',
    alt: 'data_analysis_visualization',
    description: 'Python is a popular language for data science and machine learning due to its libraries and frameworks, such as NumPy, Pandas, and Matplotlib. These libraries provide a comprehensive suite of tools for data analysis, manipulation, and visualization.'
  }
];

const whyChooseFinbyzFeatures = [
  {
    title: 'Dedicated Developers',
    image: '/api/fb/n/files/dedicated developer.svg',
    alt: 'python_developer',
    description: 'We offer dedicated developers who work exclusively for you on an hourly basis, ensuring that you have the resources you need to meet your development needs.'
  },
  {
    title: 'Cost-Effective Solutions',
    image: '/api/fb/n/files/cost-effective solutions.svg',
    alt: 'cost_effective_solutions',
    description: 'We provide cost-effective solutions, offering competitive rates for our services and providing flexible payment options to meet your budget requirements.'
  },
  {
    title: 'Value driven',
    image: '/api/fb/n/files/value driven.svg',
    alt: 'driven',
    description: 'We are committed to delivering high-quality work, using the latest technologies and best practices to ensure that your applications are highly performant and user-friendly.'
  },
  {
    title: 'Experienced Developers',
    image: '/api/fb/n/files/experienced developer.svg',
    alt: 'developer',
    description: 'Our developers are highly skilled and experienced, with a proven track record of delivering top-notch Python development services to clients across a range of industries.'
  },
  {
    title: 'Flexible Engagement Model',
    image: '/api/fb/n/files/flexible engagement model.svg',
    alt: 'model',
    description: 'We offer flexible engagement options so you only pay for what you need. Our developers will work with you on an hourly basis, daily basis, weekly basis, fortnightly basis and monthly basis as per your tailor needs.'
  },
  {
    title: 'Ongoing Maintenance and Support',
    image: '/api/fb/n/files/ongoing matainance and support.svg',
    alt: 'support',
    description: 'We provide ongoing maintenance and support services to ensure that your applications remain secure, efficient, and up-to-date.'
  },
  {
    title: 'Professionalism',
    image: '/api/fb/n/files/Professionalism.svg',
    alt: 'Professionalism',
    description: 'We believe in a strong work ethic and a commitment to delivering high-quality work. Our team is passionate about meeting deadlines and delivering on their promises.'
  },
  {
    title: 'Access to Talent',
    image: '/api/fb/n/files/access to talent.svg',
    alt: 'talent',
    description: 'Hiring a dedicated developer or team provides access to top talent, allowing companies to tap into a pool of skilled professionals, regardless of their location.'
  }
];

export default function Page() {
  return (
    <>
      <HeroSection {...heroProps} />
      <Section>
        <div className="container-custom py-8">
          <QuoteBlock
            text="Because we are more than just a software development company - we are your strategic partners."
            isHeading={true}
          />
          <div className="mt-6 text-gray-700 text-base animate-fade-in">
            <p>
              Welcome to Finbyz Tech Solutions, your
              <Link href="/erpnext-certified-partner" className="text-primary underline hover:text-primary-700"> ERPNext partner</Link>
              {' '}for all things Python. Our team of expert Python developers is dedicated to delivering high-quality, reliable solutions that meet the ever-evolving needs of businesses across industries.<br /><br />
              With a deep understanding of Python and its capabilities, our full-stack developers bring a wealth of experience to the table. We stay ahead of the curve with the latest technologies and techniques, ensuring that our clients have access to the best possible solutions.<br /><br />
              Whether you're looking to develop a custom web design, a data-driven solution, or a complex system, our team has the skills and experience to make it happen. Our focus on excellence and attention to detail has earned us a reputation as one of the leading Python development companies in the industry.
            </p>
          </div>
        </div>
      </Section>
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center mb-8">Our Python Development Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pythonServices.map((service, idx) => (
              <FlipCard
                key={service.title}
                front={
                  <div className="flex flex-col items-center justify-center h-full p-4">
                    <Image src={service.image} alt={service.alt} width={80} height={80} className="mb-4 object-contain" />
                    <h3 className="text-lg font-semibold text-center">{service.title}</h3>
                  </div>
                }
                back={
                  <div className="flex flex-col items-center justify-center h-full p-4">
                    <p className="text-center text-sm text-gray-700">{service.description}</p>
                  </div>
                }
                className="border-none shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
                flipOnClick
              />
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose Finbyz Tech Solutions</h2>
          <WhyChooseFinbyzGrid features={whyChooseFinbyzFeatures} />
        </div>
      </Section>
      <Section useGradient>
        <div className="container-custom py-8">
          <WhyPythonUniqueList />
        </div>
      </Section>
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4">Where python shall not be used?</h2>
          <p className="mb-6 text-gray-700">Python is a versatile language that can be used for a wide range of tasks, but it may not be the best choice in certain circumstances. Here are a few scenarios where Python may not be the best choice:</p>
          <WhereNotToUsePythonGrid />
        </div>
      </Section>
      <Section useGradient>
        <div className="container-custom py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to hire expert Python developers?',
                icon: 'UserCheck',
              },
              title: 'Let’s Build Your Next Python Project Together',
              highlightText:"Python",
              description: 'Contact us today to discuss your requirements and get a free consultation with our Python experts.',
              primaryButton: {
                text: 'Hire Python Developer',
                icon: 'ArrowRight',
                action: () => { window.location.href = '/contact'; },
              },
              secondaryButton: {
                text: 'See Our Work',
                icon: 'BookOpen',
                action: () => { window.location.href = '/portfolio'; },
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
