'use client'
import React, { useState } from 'react';
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import List from '@/components/sections/list';
import PrivacySectionHeading from '@/components/ai_components/PrivacySectionHeading';
import PrivacySubsectionHeading from '@/components/ai_components/PrivacySubsectionHeading';
import { Mail, MapPin } from 'lucide-react';
import Benefits from '@/components/sections/benefits';
import Image from 'next/image';
import DynamicHero from '@/components/sections/dynamic-hero';
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Code, Database, Wrench, Globe, Zap, Users, Star, Clock, Award, ChevronDown, ChevronUp } from 'lucide-react';


export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company:'',
    expertise: '',
    message: ''
  });
  
  const [openFaq, setOpenFaq] = useState(null);

  const experts = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Hire Python Developer",
      description: "Expert Python developers skilled in Django, Flask, FastAPI, and data science frameworks. Build robust backend systems, APIs, and automation solutions.",
      skills: ["Django", "Flask", "FastAPI", "Data Science", "Machine Learning", "REST APIs"],
      experience: "5+ years average experience",
      availability: "Full-time, Part-time, Contract",
       link: "https://finbyz.tech/hire-python-developer"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Hire Web App Developers",
      description: "Full-stack web developers proficient in modern frameworks and technologies. Create responsive web applications with exceptional user experience.",
      skills: ["React", "Angular", "Vue.js", "Node.js", "HTML5/CSS3", "TypeScript"],
      experience: "4+ years average experience",
      availability: "Full-time, Part-time, Contract",
      link:"https://finbyz.tech/staff-augmentation/hire-web-application-developers"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Hire Javascript Developer",
      description: "JavaScript specialists with expertise in modern ES6+, frameworks, and libraries. Develop dynamic, interactive web applications and SPAs.",
      skills: ["React.js", "Node.js", "Vue.js", "Express", "Next.js", "JavaScript ES6+"],
      experience: "4+ years average experience",
      availability: "Full-time, Part-time, Contract",
      link: "https://finbyz.tech/staff-augmentation/hire-javascript-developer"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Hire Django Developer",
      description: "Specialized Django developers for building secure, scalable web applications. Expert in REST framework and complex backend architectures.",
      skills: ["Django", "Django REST", "PostgreSQL", "Celery", "Redis", "Docker"],
      experience: "5+ years average experience",
      availability: "Full-time, Part-time, Contract",
      link: "/staff-augmentation/django-developer"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Hire ERPNext Implementer",
      description: "Certified ERPNext consultants and implementers with deep ERP expertise. Seamless implementation, customization, and integration services.",
      skills: ["ERPNext", "Frappe Framework", "Custom Apps", "Integration", "Training",],
      experience: "6+ years average experience",
      availability: "Full-time, Part-time, Project-based",
      link:"https://finbyz.tech/staff-augmentation/hire-erpnext-implementer"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Hire Database Specialist",
      description: "Database architects and administrators skilled in design, optimization, and management. Ensure data integrity, performance, and security.",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Database Design", "Performance Tuning"],
      experience: "5+ years average experience",
      availability: "Full-time, Part-time, Contract"
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "Vetted Experts",
      description: "All our developers are thoroughly vetted through technical assessments and interviews to ensure top-quality talent."
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Quick Onboarding",
      description: "Get started fast with our streamlined onboarding process. Developers can join your team within 48-72 hours."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Flexible Engagement",
      description: "Choose from full-time, part-time, or contract-based hiring models that fit your project needs and budget."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Seamless Integration",
      description: "Our developers integrate smoothly with your existing teams, processes, and tools for maximum productivity."
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "Proven Track Record",
      description: "200+ successful projects delivered across diverse industries with consistent 5-star client ratings."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Global Talent Pool",
      description: "Access skilled developers working across multiple time zones to ensure 24/7 productivity and coverage."
    }
  ];

  const hiringProcess = [
    {
      step: "01",
      title: "Share Requirements",
      description: "Tell us about your project needs, required skills, team size, and engagement duration."
    },
    {
      step: "02",
      title: "Review Profiles",
      description: "We shortlist and share profiles of pre-vetted developers matching your exact requirements."
    },
    {
      step: "03",
      title: "Interview Candidates",
      description: "Conduct interviews with selected candidates to assess technical skills and cultural fit."
    },
    {
      step: "04",
      title: "Start Development",
      description: "Onboard your chosen developers and kickstart your project with full support from our team."
    }
  ];

  const whyChoose = [
    "Access to 100+ experienced developers across multiple technologies and domains",
    "Flexible hiring models: full-time, part-time, or project-based engagement options",
    "No hidden costs: transparent pricing with clear terms and no surprise charges",
    "Direct communication: work directly with developers, no middlemen or barriers",
    "Quality assurance: code reviews, testing, and quality checks built into our process",
    "Risk-free trial: evaluate developers for 1-2 weeks before making a long-term commitment"
  ];

  const faqs = [
    {
      question: "How quickly can I hire a developer?",
      answer: "Once you share your requirements, we can provide shortlisted profiles within 24-48 hours. After interviews and selection, developers can start working within 2-3 days."
    },
    {
      question: "What engagement models do you offer?",
      answer: "We offer flexible engagement models including full-time (160 hours/month), part-time (80 hours/month), and project-based hiring. You can choose what works best for your needs."
    },
    {
      question: "Can I interview the developers before hiring?",
      answer: "Absolutely! We encourage you to interview candidates to assess their technical skills, communication abilities, and cultural fit with your team."
    },
    {
      question: "What if the developer doesn't meet expectations?",
      answer: "We offer a risk-free trial period. If you're not satisfied within the first 1-2 weeks, we'll provide a replacement at no additional cost or offer a full refund."
    },
    {
      question: "How do you ensure code quality?",
      answer: "Our developers follow industry best practices including code reviews, automated testing, documentation, and version control. We also conduct regular quality audits."
    },
    {
      question: "Can I scale the team up or down?",
      answer: "Yes, our engagement model is flexible. You can easily scale your team size up or down based on project requirements with minimal notice."
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! We’ll get back to you shortly.");
    // setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

  return (

    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <Section>
        <DynamicHero
          headline="Hire Our Expert Developers"
          highlightWords={[ "Hire", "Our","Developers"]}
          description="Looking for skilled developers to augment your team? Finbyz Tech offers vetted experts across Python, JavaScript, Django, Web Development, and ERPNext implementation tailored to your project needs."
          heroImage={{
            alt: "",
            src: "/images/hire-experts.jpeg",
          }}
          primaryButton={{
            text: "Get Started",
            action: () => {
              const el = document.getElementById('hire-expert');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          secondaryButton={{
            text: "Learn More",
            action: () => {
              const el = document.getElementById('hire-expert');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          accentColor="orange"
        />
      </Section>

      

      {/* Why Choose Section */}
      <Section>
        <div className="container-custom py-8 animate-fade-in-up" id ="hire-expert">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-[#1A5276]">Why Hire Developers from Finbyz Tech?</h2>
          <List
            title=""
            items={[
                "Access to 100+ experienced developers across multiple technologies and domains",
                "Flexible hiring models: full-time, part-time, or project-based engagement options",
                "No hidden costs: transparent pricing with clear terms and no surprise charges",
                "Direct communication: work directly with developers, no middlemen or barriers",
                "Quality assurance: code reviews, testing, and quality checks built into our process",
                "Risk-free trial: evaluate developers for 1-2 weeks before making a long-term commitment"
            ]}
          />
        </div>
      </Section>

      {/* Benefits Section */}
      <Section>
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Key Benefits of Hiring Through Us',
              cards: [
                {
                  id: 1,
                  title: 'Vetted Experts',
                  description: "All our developers are thoroughly vetted through technical assessments and interviews to ensure top-quality talent.",
                  icon: 'Layers',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 2,
                  title: "Quick Onboarding",
                  description: "Get started fast with our streamlined onboarding process. Developers can join your team within 48-72 hours.",
                  icon: 'Package',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 3,
                  title: "Flexible Engagement",
                  description: "Choose from full-time, part-time, or contract-based hiring models that fit your project needs and budget.",            
                  icon: 'ArrowLeftRight',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 4,
                  title: "Seamless Integration",
                  description: "Our developers integrate smoothly with your existing teams, processes, and tools for maximum productivity.",
                  icon: 'ShieldCheck',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 5,
                  title: "Proven Track Record",
                  description: "200+ successful projects delivered across diverse industries with consistent 5-star client ratings.",
                  icon: 'CheckCircle2',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 6,
                  title: "Global Talent Pool",
                  description: "Access skilled developers working across multiple time zones to ensure 24/7 productivity and coverage.",
                  icon: 'TrendingUp',
                  iconColor: "#ffffff",
                  iconBg: "#FFB347",
                  className: 'border-none hover:shadow-xl transition-all'
                },
              ],
              variant: 'iconCard',
            }}
            className="animate-fade-in"
          />
        </div>
      </Section>

      {/* Experts Section */}
      <section id="experts" className="py-12 bg-[#F5F5F5]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-[#1A5276]">Our Expert Developers</h2>
      <p className="text-xl text-slate-900">Skilled professionals ready to join your team</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {experts.map((expert, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-8 border border-slate-700 hover:shadow-xl hover:shadow-[#1A5276] transition-all duration-300 flex flex-col justify-between min-h-[520px]"
        >
          {/* Content Section */}
          <div className="flex-grow">
            <div className="text-[#1A5276] mb-4">{expert.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{expert.title}</h3>
            <p className="text-slate-900 mb-6 leading-relaxed">{expert.description}</p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Skills:</h4>
              <div className="flex flex-wrap gap-2 min-h-[60px]">
                {expert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-slate-900">
                <Award className="w-4 h-4 mr-2 text-blue-400" />
                {expert.experience}
              </div>
              <div className="flex items-center text-sm text-slate-900">
                <Clock className="w-4 h-4 mr-2 text-blue-400" />
                {expert.availability}
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div className="mt-auto pt-4">
            <a
              href={expert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white block w-full text-center px-6 py-3 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg font-semibold transition hover:opacity-90"
            >
              Know More
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Hiring Process Section */}
      <section id="process" className="py-12">
        <div className="max-w-7xl mx-10 px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#1A5276]">Our Simple Hiring Process</h2>
            <p className="text-xl text-slate-900">Get started in just 4 easy steps</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hiringProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition h-full">
                  <div className="text-5xl font-bold text-[#1A5276] mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                  <p className="text-slate-900 text-sm leading-relaxed">{process.description}</p>
                </div>
                {index < hiringProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-[#1A5276]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Section>
        <div className="py-8">
          <CTA
            data={{
              subheading: { text: 'Hire Our Experts', icon: 'Rocket' },
              title: 'Ready to Build Your Dream Team?',
              highlightText:'Team',
              description: "Let Finbyz Tech connect you with pre-vetted expert developers who can start contributing to your project immediately.",
              primaryButton: {
                text: 'Start Hiring Today',
                icon: 'MessageCircle',
                action: 'https://finbyz.tech/contact',
              },
              secondaryButton: {
                text: 'Book a Consultation',
                icon: 'Calendar',
                action: 'https://finbyz.tech/contact',
              },
              trustIndicator: {
                text: '200+ ERPNext Projects | 7000+ Users | 12+ Countries',
                icon: 'CheckCircle',
              }
            }}
          />
        </div>
      </Section>
    </div>
  );
}