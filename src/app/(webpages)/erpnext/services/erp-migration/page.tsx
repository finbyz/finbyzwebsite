'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight, Shield, Zap, Users, Database, TrendingUp, Award, Clock, Target, RefreshCw, FileCheck } from 'lucide-react';
import HeroSection from '@/components/sections/dynamic-hero';
import CTA from '@/components/sections/cta';

export default function Page() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const migrationSteps = [
    {
      number: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of your current ERP system, data structure, and business requirements.",
      icon: Target
    },
    {
      number: "02",
      title: "Data Mapping",
      description: "Detailed mapping of existing data fields to ERPNext structure ensuring data integrity.",
      icon: Database
    },
    {
      number: "03",
      title: "Testing & Validation",
      description: "Rigorous testing in sandbox environment to ensure accurate data migration.",
      icon: FileCheck
    },
    {
      number: "04",
      title: "Migration Execution",
      description: "Seamless migration of your data with minimal downtime and business disruption.",
      icon: RefreshCw
    },
    {
      number: "05",
      title: "Training & Support",
      description: "Comprehensive training for your team and ongoing support post-migration.",
      icon: Users
    },
    {
      number: "06",
      title: "Go-Live & Optimization",
      description: "Final deployment with continuous monitoring and performance optimization.",
      icon: Zap
    }
  ];

  const migrationServices = [
    {
      title: "SAP to ERPNext Migration",
      description: "Seamlessly migrate from SAP ERP to ERPNext with complete data integrity and zero business disruption.",
      icon: Database,
      features: ["Master data migration", "Transaction history", "Custom reports", "User permissions"]
    },
    {
      title: "Oracle to ERPNext Migration",
      description: "Expert migration services from Oracle EBS/JD Edwards to ERPNext with proven methodologies.",
      icon: Shield,
      features: ["Financial data", "Inventory records", "HR information", "Integration setup"]
    },
    {
      title: "Tally to ERPNext Migration",
      description: "Smooth transition from Tally to ERPNext with complete accounting and inventory data migration.",
      icon: TrendingUp,
      features: ["Chart of accounts", "Ledger balances", "Inventory items", "GST compliance"]
    },
    {
      title: "Odoo to ERPNext Migration",
      description: "Migrate from Odoo to ERPNext with enhanced features and better performance.",
      icon: RefreshCw,
      features: ["CRM data", "Sales orders", "Purchase records", "Manufacturing data"]
    },
    {
      title: "Custom ERP Migration",
      description: "Migrate from any custom or legacy ERP system to ERPNext with tailored solutions.",
      icon: Zap,
      features: ["Custom data extraction", "API integration", "Data transformation", "Legacy system support"]
    },
    {
      title: "QuickBooks Migration",
      description: "Effortless migration from QuickBooks to ERPNext for growing businesses.",
      icon: Award,
      features: ["Accounting data", "Customer records", "Vendor information", "Tax compliance"]
    }
  ];

  const benefits = [
    { icon: Clock, title: "Minimal Downtime", description: "Strategic planning ensures your business continues running smoothly" },
    { icon: Shield, title: "Data Security", description: "Enterprise-grade security protocols protect your sensitive business data" },
    { icon: CheckCircle, title: "100% Data Accuracy", description: "Rigorous validation ensures complete data integrity post-migration" },
    { icon: TrendingUp, title: "Cost Effective", description: "Reduce licensing costs and improve ROI with open-source ERPNext" },
    { icon: Users, title: "Expert Team", description: "Certified professionals with 100+ successful migration projects" },
    { icon: Zap, title: "Fast Implementation", description: "Proven methodology ensures quick and efficient migration process" }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        headline="Migrate to ERPNext Without the Hassle"
        highlightWords={["Migrate", "Without" ,"the" ,"Hassle"]}
        description="Expert ERP migration services from SAP, Oracle, Tally, Odoo, and other legacy systems to ERPNext. Zero data loss. Minimal downtime. Maximum efficiency."
        primaryButton={{
          text: 'Get Started',
          action: "#migrate"
        }}
        secondaryButton={{
          text: 'Learn More',
          action: "#migrate"
        }}
        heroImage={{
          alt: 'ERP Migration',
          src: '/images/erp-migration.jpeg',
        }}
      />

      {/* Why Migrate Section */}
      <section className="">
        <div className="container-custom py-12" id="migrate">
          <div className="max-w-3xl mb-10">
            <h2 className="text-4xl lg:text-4xl font-bold text-[#1A5276] mb-6">
              Why Migrate to ERPNext?
            </h2>
            <p className="text-lg text-justify leading-relaxed animate-fade-in">
              ERPNext is a modern, open-source ERP solution trusted by businesses in over 100 countries. Reduce licensing costs, gain flexibility, and improve efficiency with our proven migration services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Services */}
      <section className="py-20 lg:py-12 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-4xl font-bold text-[#1A5276] mb-6">
        Our Migration Services
      </h2>
      <p className="text-xl text-gray-900 max-w-3xl mx-auto">
        Specialized migration services from all major ERP systems to ERPNext
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {migrationServices.map((service, idx) => {
        // Define a color palette for icons
        const colors = [
          "#1A5276", // Blue
          "#E67E22", // Orange
          "#27AE60", // Green
          "#8E44AD", // Purple
          "#D35400", // Dark Orange
          "#3498DB", // Light Blue
        ];
        const color = colors[idx % colors.length];

        return (
          <div
            key={idx}
            className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center"
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
              style={{ backgroundColor: color }}
            >
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-gray-900 mb-6 leading-relaxed">{service.description}</p>
            <ul className="space-y-3 text-left w-full max-w-xs mx-auto">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-900">
                  <CheckCircle className="w-4 h-4 text-[#1A5276] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </div>
</section>


      {/* Migration Process */}
      <section className="py-20 lg:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-4xl font-bold text-[#1A5276] mb-6">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              A proven 6-step methodology ensuring smooth transition
            </p>
          </div>

          <div className="max-w-5xl mx-auto container-custom">
            {migrationSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative flex gap-8 mb-12 last:mb-0"
                style={{ animation: `slideInLeft 0.6s ease-out ${idx * 0.1}s both` }}
              >
                {/* Timeline Line */}
                {idx < migrationSteps.length - 1 && (
                  <div className="absolute left-[22px] top-10 w-0.5 h-full bg-[#1A5276]"></div>
                )}

                {/* Number Badge */}
                <div className="flex-shrink-0 w-10 h-10 bg-[#1A5276] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-grow bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}     
      <CTA
            data={{
              subheading: {
                text: 'Ready to Migrate Your ERP?',
                icon: 'factory',
              },
              title: 'Get a free Migration assessment and discover transition to ERPNext.',
              highlightText:' ERPNext',
              description: 'Contact us today to discover how our tailored ERP solutions can streamline your operations and drive growth.',
              primaryButton: {
                text: 'Request a Demo',
                icon: 'arrow-right',
                action: () => {
                  window.location.href = '/contact';
                },
              },
              secondaryButton: {
                text: 'Talk to an Expert',
                icon: 'phone',
                action: () => {
                  window.location.href = '/contact';
                },
              },
              trustIndicator: {
                text: 'Trusted by 100+ Industry Leaders',
                icon: 'check-circle',
              },
            }}
          />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}