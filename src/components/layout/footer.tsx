/**
 * @fileoverview Footer Component
 * 
 * A comprehensive footer component with responsive design, multiple sections,
 * social links, newsletter subscription, and contact information. Features include:
 * - Responsive grid layout with multiple columns
 * - Company information and branding
 * - Social media links
 * - Organized navigation sections (About, Industries, Services, Blog, Career)
 * - Newsletter subscription form
 * - Contact information and legal links
 * - Dark theme with gradient accents
 * 
 * @component Footer
 * @example
 * ```tsx
 * // Basic usage in layout
 * import Footer from "@/components/layout/footer"
 * 
 * export default function Layout({ children }) {
 *   return (
 *     <div>
 *       <main>{children}</main>
 *       <Footer />
 *     </div>
 *   )
 * }
 * 
 * // With custom styling
 * <div className="min-h-screen flex flex-col">
 *   <main className="flex-1">{children}</main>
 *   <Footer className="mt-auto" />
 * </div>
 * ```
 * 
 * @author AI Assistant
 * @version 1.0.0
 * @requires @/components/ui/button - For action buttons
 * @requires lucide-react - For icon components
 */
"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, Wrench, Users, FileText, Briefcase, Phone, Factory, ShoppingCart, Truck, Heart, GraduationCap, Leaf, TestTube, Hammer, Pill, Zap, Code, UserPlus, Lightbulb, BookOpen, Target, Star, Calendar, Home, Eye, Mail } from "lucide-react";

/**
 * Footer component with comprehensive site navigation and information.
 * 
 * Structure:
 * - Company branding and description
 * - Social media links
 * - Organized navigation sections
 * - Newsletter subscription
 * - Contact information and legal links
 * 
 * Features:
 * - Responsive grid layout (1 column on mobile, 6 columns on desktop)
 * - Dark theme with slate color palette
 * - Hover effects and transitions
 * - Social media integration
 * - Newsletter subscription form
 * - Contact information display
 * - Legal links and copyright
 * 
 * Sections:
 * - Company Info: Logo, description, social links
 * - About: Company information links
 * - Industries: Industry-specific solutions
 * - Services: Service offerings
 * - Blog: Content and resources
 * - Career: Job opportunities and company culture
 * 
 * @returns Footer component with full site navigation and information
 * 
 * @example
 * ```tsx
 * // Custom footer with additional props
 * <Footer />
 * 
 * // Footer with custom newsletter handler
 * const handleNewsletterSubmit = (email: string) => {
 *   // Handle newsletter subscription
 *   console.log('Newsletter subscription:', email)
 * }
 * 
 * <Footer onNewsletterSubmit={handleNewsletterSubmit} />
 * ```
 */

import {
  FaFacebook as Facebook,
  FaTwitter as Twitter,
  FaLinkedin as Linkedin,
  FaYoutube as Youtube,
  FaInstagram as Instagram,
} from "react-icons/fa";
import { useState } from "react";
export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");
  const socialLinks = [
    {
      href: "https://www.facebook.com/FinByz",
      icon: Facebook,
      label: "Facebook",
    },
    {
      href: "https://twitter.com/FinByz",
      icon: Twitter,
      label: "Twitter",
    },
    {
      href: "https://www.linkedin.com/company/finbyz",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.youtube.com/c/Finbyz",
      icon: Youtube,
      label: "YouTube",
    },
    {
      href: "https://www.instagram.com/finbyz/",
      icon: Instagram,
      label: "Instagram",
    },
  ];


  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter an email address.");
      return;
    }

    setLoading(true);
    

    try {
      const res = await fetch(
        "/web-api/fb/method/finbyz.email_newsletter_api.subscriber_email_newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (data?.message?.status === "success") {
        alert("Subscription successful!");
        setEmail("");
      } else if (data?.message?.status === "exists") {
        alert("You’re already subscribed.");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className=" bg-slate-900 text-white w-full">
      {/* Main Footer Content */}
      <div className="container-custom">
        <div className=" w-full py-16 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-8">

            {/* Company Info - Spans 1 column */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div>
                  <Link href="/" className="flex items-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Finbyz.tech</h3>
                  </Link>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Steer your vision with precision technology. ERP, AI, Software, and Top Tech Talent
                    delivered with clarity, speed & strategy.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap justify-start gap-0 mt-1 -space-x-1">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <Link
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="group text-slate-400 hover:text-white hover:bg-slate-800 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* About - Spans 1 column */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <h4 className="font-semibold text-white text-lg flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  About
                </h4>
                <ul className="space-y-3">
                  <li><a href="/about-us/our-story" className="text-slate-300 hover:text-white transition-colors text-sm">Our Story</a></li>
                  <li><a href="/about-us/steer-your-vision" className="text-slate-300 hover:text-white transition-colors text-sm">Vision & Mission</a></li>
                  <li><a href="/about-us/our-story" className="text-slate-300 hover:text-white transition-colors text-sm">Leadership Team</a></li>
                  <li><a href="/about-us/core-values" className="text-slate-300 hover:text-white transition-colors text-sm">Core Values</a></li>
                  <li><a href="/about-us/life-at-finbyz" className="text-slate-300 hover:text-white transition-colors text-sm">Life @ Finbyz</a></li>
                  <li><a href="/about-us/partnership-programs" className="text-slate-300 hover:text-white transition-colors text-sm">Partners & Certifications</a></li>
                  <li><a href="/about-us/testimonials" className="text-slate-300 hover:text-white transition-colors text-sm">Testimonials</a></li>
                  {/* <li><a href="/csr-sustainability" className="text-slate-300 hover:text-white transition-colors text-sm">CSR / Sustainability</a></li> */}
                </ul>
              </div>
            </div>

            {/* Industries - Spans 1 column */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <h4 className="font-semibold text-white text-lg flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  Industries
                </h4>
                <ul className="space-y-3">
                  <li><a href="/erpnext/manufacturing" className="text-slate-300 hover:text-white transition-colors text-sm">Manufacturing</a></li>
                  {/* <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Textile</a></li> */}
                  <li><a href="/erpnext/trading" className="text-slate-300 hover:text-white transition-colors text-sm">Trading & Distribution</a></li>
                  {/* <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Services</a></li> */}
                  {/* <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Electronics</a></li> */}
                  {/* <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Healthcare</a></li> */}
                  <li><a href="/erpnext/chemical/" className="text-slate-300 hover:text-white transition-colors text-sm">Chemicals </a></li>
                  <li><a href="/erpnext/engineering" className="text-slate-300 hover:text-white transition-colors text-sm">Engineering</a></li>
                  <li><a href="/erpnext/logistics" className="text-slate-300 hover:text-white transition-colors text-sm">Logistics</a></li>
                  <li><a href="/erpnext/agro/erp-for-commodity-trading" className="text-slate-300 hover:text-white transition-colors text-sm">Agriculture</a></li>
                  <li><a href="/erpnext/education" className="text-slate-300 hover:text-white transition-colors text-sm">Education</a></li>
                  <li><a href="/erpnext/industries" className="text-slate-300 hover:text-white transition-colors text-sm">View All →</a></li>
                </ul>
              </div>
            </div>

            {/* Services - Spans 1 column */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <h4 className="font-semibold text-white text-lg flex items-center">
                  <Wrench className="w-5 h-5 mr-2" />
                  Services
                </h4>
                <ul className="space-y-3">
                  <li><a href="/staff-augmentation/experts" className="text-slate-300 hover:text-white transition-colors text-sm">ERP Implementation</a></li>
                  <li><a href="/ai-automation" className="text-slate-300 hover:text-white transition-colors text-sm">AI Automation</a></li>
                  <li><a href="/erpnext/services/erpnext-service-provider" className="text-slate-300 hover:text-white transition-colors text-sm">Software Development</a></li>

                  <li><a href="/erpnext/services/data-analytics" className="text-slate-300 hover:text-white transition-colors text-sm"> Data Analytics</a></li>



                  <li><a href="/erpnext/modules/crm-software" className="text-slate-300 hover:text-white transition-colors text-sm">CRM Software</a></li>


                  <li><a href="/erpnext/services/resource-augmentation" className="text-slate-300 hover:text-white transition-colors text-sm">Resource Augmentation</a></li>
                  <li><a href="/erpnext/services/it-consulting" className="text-slate-300 hover:text-white transition-colors text-sm">Consulting</a></li>
                  {/* <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">View All →</a></li> */}
                </ul>
              </div>
            </div>

            {/* Blog - Spans 1 column */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <h4 className="font-semibold text-white text-lg flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Tech Update
                </h4>
                <ul className="space-y-3">
                  <li><a href="/erpnext/" className="text-slate-300 hover:text-white transition-colors text-sm">ERPNext</a></li>
                  <li><a href="/ai-automation" className="text-slate-300 hover:text-white transition-colors text-sm">AI Automation</a></li>
                  <li><a href="/erpnext/case-studies" className="text-slate-300 hover:text-white transition-colors text-sm">Use Cases</a></li>
                  <li><a href="/erpnext/case-studies" className="text-slate-300 hover:text-white transition-colors text-sm">Success Stories</a></li>
                  <li><a href="/" className="text-slate-300 hover:text-white transition-colors text-sm">Gallery</a></li>
                  {/* <li><a href="/guide" className="text-slate-300 hover:text-white transition-colors text-sm">How-to Guides</a></li> */}
                </ul>
              </div>
            </div>

            {/* Career - Spans 1 column */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <h4 className="font-semibold text-white text-lg flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Career
                </h4>
                <ul className="space-y-3">
                  <li><a href="/about-us/life-at-finbyz" className="text-slate-300 hover:text-white transition-colors text-sm">Life at Finbyz</a></li>
                  <li><a href="/careers/job-openings" className="text-slate-300 hover:text-white transition-colors text-sm">Current Openings</a></li>
                  <li><a href="/careers" className="text-slate-300 hover:text-white transition-colors text-sm">Internships</a></li>
                  <li><a href="/careers/hiring-process" className="text-slate-300 hover:text-white transition-colors text-sm">Hiring Process</a></li>

                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
       
           <div className="flex justify-end mb-8 mr-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-slate-400" />
              <input
                type="email"
                placeholder="Subscribe to newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 w-44"
              />
              <Button
                onClick={handleSubscribe}
                disabled={loading}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 text-sm rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>

           
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-slate-400 text-sm">&copy; 2025 Finbyz tech Pvt Ltd All rights reserved.</span>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-slate-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">
                  <a href="tel:+91 9925701446">+91 9925701446</a></span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@finbyz.tech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

