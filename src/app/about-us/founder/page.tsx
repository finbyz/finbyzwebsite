"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, TrendingUp, Users, Zap, Globe, Award, BookOpen, Building2, Briefcase } from 'lucide-react';
import Script from 'next/script';

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ========== NEW: SCHEMA ADDITION ==========
  const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://finbyz.tech/mukeshvariyani/#person",
        "name": "Mukesh Variyani",
        "url": "https://finbyz.tech/mukeshvariyani",
        "jobTitle": "Founder & Managing Director",
        "worksFor": { "@id": "https://finbyz.tech/#organization" },
        "image": "https://finbyz.tech/images/mukesh-variyani.jpg",
        "sameAs": [
          "https://www.linkedin.com/in/mukeshvariyani/",
          "https://github.com/finbyz",
          "https://twitter.com/FinByz",
          "https://frappe.io/partners/india/finbyz-tech-pvt-ltd"
        ],
        "description": "Techno-functional expert with a background in Banking Treasury, specializing in ERPNext implementations and AI-driven business automation.",
        "knowsAbout": [
          "ERPNext",
          "Frappe Framework",
          "AI Automation",
          "n8n Workflows",
          "Banking Treasury",
          "Financial Consulting",
          "Export Import (EXIM) Compliance",
          "Algorithmic Trading",
          "Business Process Re-engineering"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "ISO 27001 Certified Professional"
          }
        ]
      },
      {
        "@type": "Corporation",
        "@id": "https://finbyz.tech/#organization",
        "name": "Finbyz Tech Pvt Ltd",
        "legalName": "FinByz Technologies Pvt Ltd",
        "url": "https://finbyz.tech/",
        "logo": "https://finbyz.tech/images/FinbyzLogo.png",
        "foundingDate": "2016-08-10",
        "taxID": "AACCF8889P",
        "vatID": "24AACCF8889P1ZP",
        "isoNumber": "ISO 27001",
        "duns": "860387128",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9925701446",
          "contactType": "sales",
          "areaServed": ["IN", "US", "AE", "GB", "CA", "DE"]
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "EXIM Module for ERPNext",
        "author": { "@id": "https://finbyz.tech/mukeshvariyani/#person" },
        "applicationCategory": "BusinessApplication",
        "description": "Specialized ERPNext module for Export-Import documentation and compliance."
      },
      {
        "@type": "SoftwareApplication",
        "name": "Knudge AI",
        "author": { "@id": "https://finbyz.tech/mukeshvariyani/#person" },
        "applicationCategory": "Social Networking",
        "description": "AI-powered relationship management app."
      }
    ]
  };

  const solutions = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "EXIM Module",
      desc: "Comprehensive export-import management with compliance tracking, RoDTEP, and Duty Drawback automation.",
      iconColor: "#ffffff",
      iconBg: "#1A5276"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Productify",
      desc: "Advanced employee time-tracking and productivity analytics for remote and on-field teams.",
      iconColor: "#ffffff",
      iconBg: "#FF8C00"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Algo Trading Platforms",
      desc: "Sophisticated automated trading software for Equity and Derivatives with data-driven execution.",
      iconColor: "#ffffff",
      iconBg: "#27AE60"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Knudge AI",
      desc: "AI-powered relationship management app with intelligent reminders and network insights.",
      iconColor: "#ffffff",
      iconBg: "#8E44AD"
    }
  ];

  const industries = [
    { name: "Chemical & Manufacturing", desc: "Batch-tracking, quality-based pricing, and lab-management solutions." },
    { name: "Engineering & Textile", desc: "Multi-stage production cycles and complex Bill of Materials (BOM)." },
    { name: "Ceramics & Education", desc: "Supply chain and administrative workflow optimization." },
    { name: "Export & Import", desc: "Complete documentation and compliance management systems." },
    { name: "Financial Services", desc: "Treasury management and financial instrument handling." },
    { name: "Supply Chain", desc: "End-to-end visibility and real-time inventory tracking." }
  ];

  const expertise = [
    {
      icon: <Building2 className="w-12 h-12" />,
      number: "200",
      suffix: "+",
      label: "ERP Implementations",
      description: "Successfully delivered across 12+ countries",
      iconBg: "#FEF3C7",
      iconColor: "#F59E42"
    },
    {
      icon: <Users className="w-12 h-12" />,
      number: "7000",
      suffix: "+",
      label: "Global Users",
      description: "Active users benefiting from our solutions daily",
      iconBg: "#EFF6FF",
      iconColor: "#3B82F6"
    },
    {
      icon: <Award className="w-12 h-12" />,
      number: "10",
      suffix: "+",
      label: "Years of Expertise",
      description: "Deep ERPNext domain knowledge and specialization",
      iconBg: "#F0FDF4",
      iconColor: "#10b981"
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      number: "8",
      suffix: "+",
      label: "Banking Experience",
      description: "Treasury Department in leading Indian bank",
      iconBg: "#ECFDF5",
      iconColor: "#10b981"
    }
  ];

  return (
    <>
      {/* ========== NEW: SCHEMA SCRIPT ========== */}
      <Script
        id="mukesh-variyani-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
        strategy="afterInteractive"
      />
      {/* ========== END: SCHEMA SCRIPT ========== */}
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6" style={{ background: 'linear-gradient(135deg, #EAF1F8 0%, #F3EAF8 50%, #E6F7F4 100%)' }}>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(26, 82, 118, 0.1) 0%, transparent 50%)`,
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#EAF1F8', border: '1px solid #1A5276', color: '#1A5276' }}>
              Founder & Technology Architect
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ 
              background: 'linear-gradient(135deg, #1A5276 0%, #8E44AD 50%, #16A085 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Mukesh Variyani
            </h1>
            
            <p className="text-2xl md:text-3xl mb-8 font-light text-[#1A5276]">
              The Intersection of <span className="font-semibold">Financial Intelligence</span><br />and <span className="font-semibold">AI Automation</span>
            </p>
            
            <p className="text-xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              From Banking Treasury to Technology Founder. Transforming global businesses with 10+ years of ERPNext expertise and cutting-edge AI automation.
            </p>
          
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg" style={{ background: '#FF8C00', color: 'white' }}>
                Let's Architect Your Growth <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 rounded-lg font-semibold transition-all hover:bg-gray-50" style={{ borderColor: '#1A5276', color: '#1A5276' }}>
                Explore Solutions
              </button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="section-overview">
          <div className="container mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6">The Founder's Narrative</h2>
            <p className="text-slate-700 text-base md:text-lg mb-6 leading-relaxed text-justify">
              Most technology consultants start with code. I started with Capital. Before founding Finbyz Tech, I spent eight successful years in the high-stakes environment of the Treasury Department at one of India's leading banks. In the world of Treasury, precision isn't a goal; it's a prerequisite. I managed complex financial instruments, navigated volatile markets, and learned how money truly moves through a business.
            </p>
            <p className="text-slate-700 text-base md:text-lg mb-6 leading-relaxed text-justify">
              However, I noticed a recurring gap: traditional businesses were being held back by fragmented systems and a lack of real-time visibility. My passion for business consulting and technology eventually outweighed the comfort of a corporate career. I realized that my unique ability lay in translating complex business logic into scalable digital architecture.
            </p>
            <div className="bg-[#EAF1F8] border-l-4 border-[#1A5276] p-6 rounded-lg my-8">
              <p className="text-lg font-semibold text-[#1A5276] italic">
                In 2016, I left the banking world to build Finbyz Tech—a firm dedicated to professionalizing management through open-source technology and AI.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Numbers Section */}
        <section className="bg-gradient-to-br from-[#EAF1F8] to-[#E6F7F4] py-16">
          <div className="container mx-auto max-w-7xl px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-12 text-center">A Decade of Digital Transformation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {expertise.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full" style={{ backgroundColor: item.iconBg, color: item.iconColor }}>
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2" style={{ color: item.iconColor }}>
                      {item.number}{item.suffix}
                    </div>
                    <div className="text-sm font-semibold text-slate-700 mb-2">{item.label}</div>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed mb-6 text-justify">
                For the past 10 years, I have lived and breathed ERPNext. I don't just implement software; I re-engineer how companies operate. Having spearheaded implementations across diverse sectors, I've developed a "Techno-Functional" lens that allows me to see the bottlenecks that others miss.
              </p>
              <h3 className="text-2xl font-bold text-[#1A5276] mb-6">Industry Impact & Domain Authority</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {industries.map((industry, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-lg border-l-4" style={{ 
                    backgroundColor: idx % 2 === 0 ? '#EAF1F8' : '#E6F7F4',
                    borderColor: idx % 2 === 0 ? '#1A5276' : '#16A085'
                  }}>
                    <Award className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: idx % 2 === 0 ? '#1A5276' : '#16A085' }} />
                    <div>
                      <div className="font-semibold text-slate-800 mb-1">{industry.name}</div>
                      <p className="text-sm text-slate-600">{industry.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Proprietary Solutions */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-4 text-center">Proprietary Solutions</h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
              If a repetitive problem exists, a software solution should solve it. Here are specialized tools that extend the power of standard ERP systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 border-none"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full" style={{ backgroundColor: solution.iconBg, color: solution.iconColor }}>
                      {solution.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">{solution.title}</h3>
                  <p className="text-sm text-slate-600 text-center leading-relaxed">{solution.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-gradient-to-br from-[#EAF1F8] to-[#E6F7F4] py-16">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6">The Finbyz Vision</h2>
            
            <div className="text-2xl md:text-3xl font-light mb-8 italic text-[#1A5276]">
              Values at Core, Technology in Genes
            </div>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-8 text-justify">
              I lead a team of expert developers and consultants who share my obsession with efficiency. Whether it's integrating Gemini AI into an ERP workflow or automating lead research via n8n, our goal is to give business owners their time back. We don't just deliver a project; we deliver a system that allows you to scale without the chaos.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <span className="px-6 py-3 bg-white rounded-full border-2 font-medium text-sm shadow-sm" style={{ borderColor: '#1A5276', color: '#1A5276' }}>ERPNext Expert</span>
              <span className="px-6 py-3 bg-white rounded-full border-2 font-medium text-sm shadow-sm" style={{ borderColor: '#16A085', color: '#16A085' }}>Gemini AI Integration</span>
              <span className="px-6 py-3 bg-white rounded-full border-2 font-medium text-sm shadow-sm" style={{ borderColor: '#8E44AD', color: '#8E44AD' }}>n8n Automation</span>
              <span className="px-6 py-3 bg-white rounded-full border-2 font-medium text-sm shadow-sm" style={{ borderColor: '#FF8C00', color: '#FF8C00' }}>Open Source Advocate</span>
            </div>
          </div>
        </section>

        {/* Personal Section */}
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6 text-center">Beyond the Office</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#8E44AD]">
              <p className="text-lg text-slate-700 leading-relaxed text-justify">
                I am a firm believer in the power of the Open Source community and frequently share my insights at technology conferences and industry forums. Based in Ahmedabad, I am a family man who finds balance in exploring new travel destinations and staying ahead of the curve in the ever-evolving world of Artificial Intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="bg-[#EAF1F8] py-12">
          <div className="container mx-auto max-w-4xl px-6">
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl text-slate-700 italic mb-4 leading-relaxed">
                "Software is just a tool; the logic behind it is the engine. My job is to ensure your engine is built for the long haul."
              </p>
              <footer className="text-[#1A5276] font-semibold">— Mukesh Variyani, Founder of Finbyz Tech</footer>
            </blockquote>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#EAF1F8] to-[#E6F7F4] py-16" >
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className=" text-3xl md:text-4xl font-bold text-[#1A5276] mb-6 ">
              Let's Architect Your Growth
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-8 text-justify">
              Are you looking to automate your business, implement a global ERP, or explore how AI can transform your operations?
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-10 py-5 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-3 shadow-2xl" style={{ backgroundColor: '#FF8C00', color: 'white' }}>
                <Code className="w-6 h-6" />
                Start Your Transformation
                <ArrowRight className="w-6 h-6" />
              </button>
              <button className="px-10 py-5 border-2 rounded-lg text-lg font-semibold text-white transition-all " style={{ backgroundColor: '#1A5276', color: 'white' }}>
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}