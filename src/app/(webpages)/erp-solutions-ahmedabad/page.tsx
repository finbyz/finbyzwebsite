'use client';

import CTA from "@/components/sections/cta";
import InquiryForm from "@/components/ui/InquiryForm";
import ResponsiveCardGrid from "@/components/sections/responsive-card-grid";
import { Building2, Users, Award, HeadphonesIcon, CheckCircle2, TrendingUp } from "lucide-react";

export default function ERPSolutionsAhmedabadPage() {
  const handleGetStarted = () => {
    const form = document.querySelector('.inquiry-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Leading <span className="text-[#FF8C00]">ERP Solution Provider</span> in Ahmedabad
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Certified ERPNext partner delivering enterprise ERP solutions for pharma, chemical, manufacturing, and trading businesses. Get custom ERP software tailored to your industry needs with 24/7 support and guaranteed ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetStarted}
                className="bg-[#FF8C00] hover:bg-[#FF7700] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free Consultation
              </button>
              <a
                href="/contact"
                className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-[#1A5276]" />
              <div className="text-4xl font-bold text-[#1A5276] mb-2">100+</div>
              <div className="text-gray-600">ERP Implementations</div>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-[#27AE60]" />
              <div className="text-4xl font-bold text-[#27AE60] mb-2">50+</div>
              <div className="text-gray-600">Active Clients in Ahmedabad</div>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-[#FF8C00]" />
              <div className="text-4xl font-bold text-[#FF8C00] mb-2">10+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <HeadphonesIcon className="w-12 h-12 mx-auto mb-4 text-[#8E44AD]" />
              <div className="text-4xl font-bold text-[#8E44AD] mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-[#1A5276]">Finbyz Tech</span> as Your ERP Solution Provider?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-6">
                Based in Navrangpura, Ahmedabad, Finbyz Tech has been helping businesses across Gujarat and India transform their operations with cutting-edge ERP solutions. Our team of certified ERPNext consultants brings over a decade of experience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" />
                  <span>Certified ERPNext Partner with proven expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" />
                  <span>100+ successful ERP implementations across industries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" />
                  <span>Local presence in Ahmedabad (Navrangpura)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" />
                  <span>Deep understanding of pharma, chemical, and manufacturing sectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" />
                  <span>Fixed price quotes with no hidden costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" />
                  <span>Average implementation time: 6-12 weeks</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1A5276] mb-4">Client Success Story</h3>
              <blockquote className="text-lg italic text-gray-700 mb-4">
                &ldquo;Finbyz Tech transformed our pharma operations with their ERPNext implementation. We&apos;ve seen 40% improvement in inventory accuracy and saved countless hours on regulatory compliance reporting.&rdquo;
              </blockquote>
              <p className="font-bold text-[#1A5276]">- Pharma Company, Ahmedabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Solutions Grid */}
      <div className="[&_h2]:text-[#1A5276] py-12 bg-gray-50">
        <ResponsiveCardGrid
          data={{
            title: "Comprehensive ERP Solutions for Ahmedabad Businesses",
            subtitle: "End-to-end ERP implementation and support services tailored to your industry",
            variant: "iconCard",
            layout: "standard",
            showImage: false,
            cards: [
              {
                id: 1,
                title: "ERPNext Implementation",
                description: "Complete ERPNext setup and configuration. Module customization for your business needs. Data migration from legacy systems. User training and ongoing support.",
                icon: "Database",
                iconBg: "#1A5276",
                iconColor: "#ffffff"
              },
              {
                id: 2,
                title: "Custom ERP Development",
                description: "Tailored ERP solutions built from scratch. Industry-specific workflows and features. Integration with existing systems. Scalable architecture for future growth.",
                icon: "Code",
                iconBg: "#27AE60",
                iconColor: "#ffffff"
              },
              {
                id: 3,
                title: "Pharma & Chemical ERP",
                description: "FDA-compliant ERP with batch tracking. Expiry management and regulatory compliance. Formula management and quality control. Complete traceability systems.",
                icon: "FlaskConical",
                iconBg: "#FF8C00",
                iconColor: "#ffffff"
              },
              {
                id: 4,
                title: "Manufacturing ERP",
                description: "Production planning and BOM management. Shop floor tracking and quality control. Inventory optimization. Real-time production monitoring.",
                icon: "Factory",
                iconBg: "#8E44AD",
                iconColor: "#ffffff"
              },
              {
                id: 5,
                title: "Trading & Distribution ERP",
                description: "Multi-warehouse management. Purchase and sales automation. Inventory control across locations. Real-time stock updates.",
                icon: "TrendingUp",
                iconBg: "#E74C3C",
                iconColor: "#ffffff"
              },
              {
                id: 6,
                title: "24/7 Support & Maintenance",
                description: "Round-the-clock technical support. Regular system health check-ups. Version upgrades and patches. Performance optimization services.",
                icon: "HeadphonesIcon",
                iconBg: "#3498DB",
                iconColor: "#ffffff"
              }
            ]
          }}
        />
      </div>

      {/* Industry Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-[#1A5276]">Industry-Specific</span> ERP Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border-2 border-[#1A5276] rounded-lg hover:bg-[#1A5276] hover:text-white transition-colors group">
              <Building2 className="w-16 h-16 mx-auto mb-4 text-[#1A5276] group-hover:text-white" />
              <h3 className="text-xl font-bold mb-2">Pharma & Chemical</h3>
              <p className="text-gray-600 group-hover:text-white">
                FDA-compliant ERP with batch tracking, expiry management, and regulatory reporting
              </p>
            </div>
            <div className="text-center p-6 border-2 border-[#27AE60] rounded-lg hover:bg-[#27AE60] hover:text-white transition-colors group">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-[#27AE60] group-hover:text-white" />
              <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
              <p className="text-gray-600 group-hover:text-white">
                Production planning, BOM management, quality control, and shop floor tracking
              </p>
            </div>
            <div className="text-center p-6 border-2 border-[#FF8C00] rounded-lg hover:bg-[#FF8C00] hover:text-white transition-colors group">
              <Users className="w-16 h-16 mx-auto mb-4 text-[#FF8C00] group-hover:text-white" />
              <h3 className="text-xl font-bold mb-2">Trading & Distribution</h3>
              <p className="text-gray-600 group-hover:text-white">
                Multi-warehouse management, purchase orders, sales automation, and inventory control
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        data={{
          title: "Ready to Transform Your Business with ERP?",
          highlightText: "Transform Your Business",
          description: "Schedule a free consultation with our ERP experts. Get a custom roadmap and ROI analysis tailored to your Ahmedabad business.",
          subheading: { text: "Free Consultation for Ahmedabad Businesses", icon: "CalendarCheck" },
          primaryButton: { text: "Book Free Demo", icon: "CalendarCheck", action: '/contact' },
          secondaryButton: { text: "Call: +91-9925701446", icon: "Phone", action: "tel:+919925701446" },
          trustIndicator: { text: "✓ 50+ Ahmedabad Clients | ✓ Local Support Team | ✓ No Obligation", icon: "CalendarCheck" }
        }}
      />

      {/* Inquiry Form */}
      <InquiryForm
        data={{
          title: "Get Your Free ERP Consultation in Ahmedabad",
          highlightText: "Free ERP Consultation",
          description: "Fill out the form below and our Ahmedabad-based ERP consultant will contact you within 24 hours to discuss your requirements.",
          fields: {
            name: "Name",
            organization: "Organization Name",
            email: "Email",
            mobile: "Mobile No"
          },
          submitText: "SCHEDULE MY CONSULTATION"
        }}
      />
    </div>
  );
}
