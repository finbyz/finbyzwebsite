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
export default function Footer() {
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
              <div className="flex space-x-4 mt-8">
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
                <li><a href="/our-story" className="text-slate-300 hover:text-white transition-colors text-sm">Our Story</a></li>
                <li><a href="/steer-your-vision" className="text-slate-300 hover:text-white transition-colors text-sm">Vision & Mission</a></li>
                <li><a href="/leadership-team" className="text-slate-300 hover:text-white transition-colors text-sm">Leadership Team</a></li>
                <li><a href="/core-value" className="text-slate-300 hover:text-white transition-colors text-sm">Core Values</a></li>
                <li><a href="/life-at-finbyz" className="text-slate-300 hover:text-white transition-colors text-sm">Life @ Finbyz</a></li>
                <li><a href="/erp-partner" className="text-slate-300 hover:text-white transition-colors text-sm">Partners & Certifications</a></li>
                <li><a href="/testimonial" className="text-slate-300 hover:text-white transition-colors text-sm">Testimonials</a></li>
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
                <li><a href="/erp-for-manufacturing-industry" className="text-slate-300 hover:text-white transition-colors text-sm">Manufacturing</a></li>
                {/* <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Textile</a></li> */}
                <li><a href="/erp-for-trading-industry" className="text-slate-300 hover:text-white transition-colors text-sm">Trading & Distribution</a></li>
                {/* <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Services</a></li> */}
                {/* <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Electronics</a></li> */}
                {/* <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Healthcare</a></li> */}
                <li><a href="/erp-for-chemical-industry" className="text-slate-300 hover:text-white transition-colors text-sm">Chemicals </a></li>
                <li><a href="/erp-for-engineering-industry" className="text-slate-300 hover:text-white transition-colors text-sm">Engineering</a></li>
                <li><a href="/erp-for-logistics-industry" className="text-slate-300 hover:text-white transition-colors text-sm">Logistics</a></li>
                <li><a href="/erp-for-agro-commodity" className="text-slate-300 hover:text-white transition-colors text-sm">Agriculture</a></li>
                <li><a href="/erp-for-education" className="text-slate-300 hover:text-white transition-colors text-sm">Education</a></li>
                <li><a href="/erp-for-industry" className="text-slate-300 hover:text-white transition-colors text-sm">View All →</a></li>
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
                <li><a href="/hire-erpnext-implementer" className="text-slate-300 hover:text-white transition-colors text-sm">ERP Implementation</a></li>
                <li><a href="/ai-automation" className="text-slate-300 hover:text-white transition-colors text-sm">AI Automation</a></li>
                <li><a href="/software-development" className="text-slate-300 hover:text-white transition-colors text-sm">Software Development</a></li>

                <li><a href="/data-analytics" className="text-slate-300 hover:text-white transition-colors text-sm"> Data Analytics</a></li>



                <li><a href="/crm-software" className="text-slate-300 hover:text-white transition-colors text-sm">CRM Software</a></li>


                <li><a href="/resource-augmentation" className="text-slate-300 hover:text-white transition-colors text-sm">Resource Augmentation</a></li>
                <li><a href="/it-consulting" className="text-slate-300 hover:text-white transition-colors text-sm">Consulting</a></li>
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
                <li><a href="/erpnext-software" className="text-slate-300 hover:text-white transition-colors text-sm">ERPNext</a></li>
                <li><a href="/ai-automation" className="text-slate-300 hover:text-white transition-colors text-sm">AI Automation</a></li>
                <li><a href="/use-cases" className="text-slate-300 hover:text-white transition-colors text-sm">Use Cases</a></li>
                <li><a href="/success-story" className="text-slate-300 hover:text-white transition-colors text-sm">Success Stories</a></li>
                <li><a href="/gallery" className="text-slate-300 hover:text-white transition-colors text-sm">Gallery</a></li>
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
                <li><a href="/life-at-finbyz" className="text-slate-300 hover:text-white transition-colors text-sm">Life at Finbyz</a></li>
                <li><a href="/current-opening" className="text-slate-300 hover:text-white transition-colors text-sm">Current Openings</a></li>
                <li><a href="/internship" className="text-slate-300 hover:text-white transition-colors text-sm">Internships</a></li>
                <li><a href="/hiring-process" className="text-slate-300 hover:text-white transition-colors text-sm">Hiring Process</a></li>

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
              className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 w-44"
            />
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 text-sm rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
              Subscribe
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
              <div className="flex items-center space-x-4">
                <a href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <span className="text-slate-600">•</span>
                <a href="/term-of-services" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                <span className="text-slate-600">•</span>
                <a href="/cookie-policy" className="text-slate-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-slate-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@finbyz.tech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

