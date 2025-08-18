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
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white w-full">
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 py-16">
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
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full w-10 h-10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full w-10 h-10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Button>
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
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Our Story</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Vision & Mission</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Leadership Team</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Core Values</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Life @ Finbyz</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Partners & Certifications</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">CSR / Sustainability</a></li>
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
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Manufacturing</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Textile</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Trading & Distribution</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Services</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Electronics</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Healthcare</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Education</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">View All →</a></li>
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
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">ERP Implementation</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">AI Automation</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Software Development</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Resource Augmentation</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Consulting</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">View All →</a></li>
              </ul>
            </div>
          </div>
          
          {/* Blog - Spans 1 column */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <h4 className="font-semibold text-white text-lg flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Blog
              </h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">ERPNext</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">AI Automation</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Use Cases</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Success Stories</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">How-to Guides</a></li>
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
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Life at Finbyz</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Current Openings</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Internships</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Hiring Process</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Testimonials</a></li>
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
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-slate-400 text-sm">&copy; 2025 Finbyz tech Pvt Ltd All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <span className="text-slate-600">•</span>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                <span className="text-slate-600">•</span>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
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

