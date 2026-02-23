'use client';


import ResponsiveCardGrid from "@/components/sections/responsive-card-grid";
import { Code, Users, TrendingUp, Shield, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ITServicesAhmedabadPage() {
  const handleGetStarted = () => {
    const form = document.querySelector('.inquiry-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const industries = [
    "Pharma & Healthcare",
    "Chemical & Manufacturing",
    "Trading & Distribution",
    "Fintech & Financial Services",
    "E-commerce &Retail",
    "Education & Training",
    "Real Estate & Construction",
    "Logistics & Supply Chain"
  ];

  const techStack = [
    "Frontend: React, Next.js, Vue.js, Angular",
    "Backend: Node.js, Python (Django, FastAPI), PHP",
    "Mobile: Flutter, React Native, Swift, Kotlin",
    "Database: PostgreSQL, MySQL, MongoDB, Redis",
    "Cloud: AWS, Google Cloud, Azure, DigitalOcean",
    "DevOps: Docker, Kubernetes, CI/CD pipelines",
    "AI/ML: TensorFlow, PyTorch, OpenAI APIs",
    "ERP: ERPNext, Frappe Framework, Odoo"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Leading <span className="text-[#FF8C00]">IT Company</span> in Ahmedabad - Navrangpura
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Premier IT services company offering custom software development, ERP solutions, AI automation, web & mobile development. Based in Navrangpura with a team of 50+ experts serving 100+ businesses across Ahmedabad and India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetStarted}
                className="bg-[#FF8C00] hover:bg-[#FF7700] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free Project Quote
              </button>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Code className="w-12 h-12 mx-auto mb-4 text-[#1A5276]" />
              <div className="text-4xl font-bold text-[#1A5276] mb-2">100+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-[#27AE60]" />
              <div className="text-4xl font-bold text-[#27AE60] mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[#FF8C00]" />
              <div className="text-4xl font-bold text-[#FF8C00] mb-2">10+</div>
              <div className="text-gray-600">Years in Business</div>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-[#8E44AD]" />
              <div className="text-4xl font-bold text-[#8E44AD] mb-2">95%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <div className="[&_h2]:text-[#1A5276] py-12">
        <ResponsiveCardGrid
          data={{
            title: "Comprehensive IT Services in Ahmedabad",
            subtitle: "End-to-end IT solutions delivered by our expert team based in Navrangpura, Ahmedabad. From startups to enterprises, we help businesses leverage technology for growth.",
            variant: "iconCard",
            layout: "standard",
            showImage: false,
            cards: [
              {
                id: 1,
                title: "Custom Software Development",
                description: "Tailored software solutions built with modern technologies. From web applications to enterprise systems, we develop scalable software that grows with your business.",
                icon: "Code",
                iconBg: "#1A5276",
                iconColor: "#ffffff"
              },
              {
                id: 2,
                title: "ERP Implementation & Support",
                description: "Complete ERPNext and custom ERP solutions with implementation, customization, and 24/7 support. Streamline your business operations with integrated systems.",
                icon: "Database",
                iconBg: "#27AE60",
                iconColor: "#ffffff"
              },
              {
                id: 3,
                title: "AI & Automation Services",
                description: "Intelligent automation solutions powered by AI. Automate workflows, enhance decision-making, and boost operational efficiency with cutting-edge technology.",
                icon: "Brain",
                iconBg: "#FF8C00",
                iconColor: "#ffffff"
              },
              {
                id: 4,
                title: "Web Development",
                description: "Responsive, high-performance websites and web applications. Built with Next.js, React, and modern frameworks for optimal user experience.",
                icon: "Globe",
                iconBg: "#8E44AD",
                iconColor: "#ffffff"
              },
              {
                id: 5,
                title: "Mobile App Development",
                description: "Native and cross-platform mobile applications for iOS and Android. Flutter, React Native, and native development expertise.",
                icon: "Smartphone",
                iconBg: "#E74C3C",
                iconColor: "#ffffff"
              },
              {
                id: 6,
                title: "Cloud Solutions & DevOps",
                description: "Cloud migration, infrastructure setup, and DevOps automation. AWS, Google Cloud, and Azure deployment and management services.",
                icon: "Cloud",
                iconBg: "#3498DB",
                iconColor: "#ffffff"
              },
              {
                id: 7,
                title: "Data Analytics & BI",
                description: "Transform data into actionable insights. Custom dashboards, reports, and predictive analytics using Power BI and modern data tools.",
                icon: "BarChart3",
                iconBg: "#16A085",
                iconColor: "#ffffff"
              },
              {
                id: 8,
                title: "IT Consulting & Strategy",
                description: "Technology consulting to align IT with business goals. Digital transformation roadmaps, technology selection, and architecture planning.",
                icon: "TrendingUp",
                iconBg: "#F39C12",
                iconColor: "#ffffff"
              }
            ]
          }}
        />
      </div>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-[#1A5276]">Finbyz Tech</span> as Your IT Partner?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-6">
                Established in 2012, Finbyz Tech has grown from a small startup to one of Ahmedabad&apos;s most trusted IT companies. Our Navrangpura office houses a talented team of developers, designers, and project managers dedicated to delivering excellence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" />
                  <span>Local presence in Navrangpura, Ahmedabad with on-site support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" />
                  <span>Team of 50+ experienced developers, designers, and consultants</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" />
                  <span>Proven track record with 100+ successful projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" />
                  <span>Transparent pricing with detailed project estimates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" />
                  <span>Modern technology stack (React, Next.js, Python, Flutter)</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1A5276] mb-4">Why Work With a Local IT Company?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1A5276] mt-1 flex-shrink-0" />
                  <span>Face-to-face meetings for better communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1A5276] mt-1 flex-shrink-0" />
                  <span>Quick on-site support when needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1A5276] mt-1 flex-shrink-0" />
                  <span>Understanding of local business culture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1A5276] mt-1 flex-shrink-0" />
                  <span>Same timezone for real-time collaboration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="text-[#1A5276]">Industries</span> We Serve in Ahmedabad
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Our IT solutions are tailored to meet the unique challenges of diverse industries.
          </p>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center font-semibold text-gray-800 hover:bg-[#1A5276] hover:text-white transition-colors">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our <span className="text-[#1A5276]">Technology Stack</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            We work with modern, industry-standard technologies to build scalable, secure, and high-performance solutions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Code className="w-6 h-6 text-[#1A5276] flex-shrink-0" />
                <p className="text-gray-800 font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Visit Our <span className="text-[#1A5276]">Ahmedabad Office</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#1A5276] mb-4">Finbyz Tech Pvt Ltd</h3>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Address:</strong> Navrangpura, Ahmedabad, Gujarat 380009
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Phone:</strong> <a href="tel:+919925701446" className="text-[#1A5276] hover:underline">+91-9925701446</a>
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Email:</strong> <a href="mailto:info@finbyz.tech" className="text-[#1A5276] hover:underline">info@finbyz.tech</a>
              </p>
              <p className="text-lg text-gray-700">
                <strong>Working Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#FF8C00] mb-4">Get Started Today</h3>
              <p className="text-lg text-gray-700 mb-4">
                Whether you need a custom software solution, ERP implementation, or IT consulting, our team is ready to help.
              </p>
              <button
                onClick={handleGetStarted}
                className="bg-[#FF8C00] hover:bg-[#FF7700] text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
