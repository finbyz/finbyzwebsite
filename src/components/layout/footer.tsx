import { Button } from "@/components/ui/button";
import { Building2, Wrench, Users, FileText, Briefcase, Phone, Factory, ShoppingCart, Truck, Heart, GraduationCap, Leaf, TestTube, Hammer, Pill, Zap, Code, UserPlus, Lightbulb, BookOpen, Target, Star, Calendar, Home, Eye, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white w-full">
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Company Info - Spans 3 columns */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Finbyz.tech</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Steer your vision with precision technology. ERP, AI, Software, and Top Tech Talent 
                  delivered with clarity, speed & strategy.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full w-10 h-10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
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
          
          {/* Quick Links - Spans 2 columns */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-white text-lg flex items-center">
                <Home className="w-5 h-5 mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm flex items-center">
                    <span className="w-1 h-1 bg-slate-400 rounded-full mr-3"></span>
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* About - Spans 2 columns */}
          <div className="lg:col-span-2">
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
          
          {/* Industries - Spans 2 columns */}
          <div className="lg:col-span-2">
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
          
          {/* Services - Spans 2 columns */}
          <div className="lg:col-span-2">
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
          
          {/* Blog & Career - Spans 1 column */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Blog */}
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
              
              {/* Career */}
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
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-slate-400 text-sm">&copy; 2024 Finbyz.tech. All rights reserved.</span>
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

