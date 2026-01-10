"use client";

import { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Hammer,GraduationCap,DollarSign,Truck,ShoppingCart,Search,Code,ChevronDown,Phone,Pill,UserPlus,ChevronRight,
  Handshake,LogIn,MessageSquare,MessageSquareQuote,Scale,Puzzle,Box,Activity,
  Building2, Package, FileText, Star, BarChart3, Factory, AlertTriangle, Info, Users,
  Workflow, XCircle, Layers, ListChecks, TrendingUp, Globe, LineChart, Rocket, Settings,
  Cpu, Award, Calendar, Briefcase, HeartHandshake, Lightbulb, ClipboardList, Send, Bot,
  MailPlus, Sparkles, PhoneCall, Wrench, BookOpen, Compass, Heart, Users2, UserCheck,
  Code2, Server, Braces, Zap, Mail, Layout, Triangle, CheckCircle
} from "lucide-react";
import {
  Blocks, AppWindow, FlaskConical, HardHat, HeartPulse, Hotel,
  BarChart4, Pickaxe, ShoppingBag, Shirt, Droplets, BadgeCheck, DatabaseBackup,
  Webhook, Book, FileBadge, Link2, HelpCircle, CalendarClock, ShieldCheck
} from "lucide-react";


import { useMobileMenu } from "@/contexts/MobileMenuContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { FileCheck } from 'lucide-react';
import { Repeat } from 'lucide-react';
import { Receipt } from "lucide-react";
import { ClipboardCheck } from "lucide-react";
import { CodeSquare } from "lucide-react";
import { Database } from "lucide-react";
import { Cog } from "lucide-react";
import { Laptop } from "lucide-react";
import { Lock } from "lucide-react";
import { Landmark } from "lucide-react";
import { Globe2 } from "lucide-react";
import { Map } from "lucide-react";
import { Atom } from "lucide-react"
import { Notebook } from "lucide-react";
import { MediaViewer } from "../ai_components/gallery/MediaViewer";


type NavNode = {
  name: string;
  icon: LucideIcon;
  href?: string;
  description?: string;
  children?: NavNode[];
};



export const navigationItems: NavNode[] = [
  {
    name: "ERPNext",
    icon: Building2,
    href: "/erpnext",
    children: [
  
      // ================= ERP =================
      {
        name: "ERP",
        icon: Building2,
        children: [
          {
            name: "Insights",
            icon: Package,
            children: [
              { name: "What is ERP Software?", icon: FileText, href: "/erp/insights/What-is-ERP-software", description: "Introduction to ERP software and its core concepts" },
              { name: "Benefits of ERP", icon: Star, href: "/erp/insights/benefits-of-erp", description: "Key benefits of implementing ERP systems" },
              { name: "ERP & CRM Integration Benefits", icon: BarChart3, href: "/erp/insights/benefits-of-erp-and-crm-integration", description: "Benefits of integrating ERP and CRM" },
              { name: "ERP for Manufacturing", icon: Factory, href: "/erp/insights/benefits-of-erp-for-manufacturing", description: "How ERP benefits manufacturing businesses" },
              { name: "ERP Implementation Challenges", icon: AlertTriangle, href: "/erp/insights/challenges-of-erp-implementation", description: "Major challenges faced during ERP implementation" },
              { name: "Common Myths of ERP", icon: Info, href: "/erp/insights/common-myths-of-erp", description: "Common misconceptions about ERP systems" },
              { name: "ERP Implementation Methodology", icon: Workflow, href: "/erp/insights/erp-implementation-methodology", description: "ERP implementation methodologies explained" },
              { name: "ERP Implementation Steps", icon: ListChecks, href: "/erp/insights/erp-implementation-steps", description: "Step-by-step ERP implementation guide" },
              { name: "Evolution of ERP", icon: TrendingUp, href: "/erp/insights/evolution-of-erp", description: "Evolution and growth of ERP systems" },
              { name: "ERP Business Transformation", icon: Rocket, href: "/erp/insights/how-erp-software-can-change-your-business", description: "How ERP software transforms businesses" },
              { name: "ERP Business Performance", icon: LineChart, href: "/erp/insights/how-erp-improves-business-performance", description: "How ERP improves overall business performance" },
              { name: "Importance of Systems & Processes", icon: Settings, href: "/erp/insights/significance-of-system-and-process", description: "Why systems and processes are critical for growth" },
              { name: "Master Production Schedule (MPS)", icon: Calendar, href: "/erp/insights/what-is-a-master-production-schedule", description: "Understanding Master Production Scheduling" }
            ]
          }
        ]
      },
  
      // ================= MODULES =================
      {
        name: "Modules",
        icon: Blocks,
        children: [
          { name: "CRM Software", icon: Users, href: "/erpnext/modules/crm-software", description: "Customer Relationship Management" },
          { name: "Human Resource System", icon: Icons.UserPlus, href: "/erpnext/modules/human-resource-system", description: "HRMS Module" }
        ]
      },
  
      // ================= SERVICES =================
      {
        name: "Services",
        icon: Wrench,
        children: [
          { name: "ERPNext Implementation", icon: Cpu, href: "/erpnext/services/ERPNext-impelementation-in-uae", description: "Implementation & setup" },
          { name: "Certified Partner", icon: Star, href: "/erpnext/services/certified-partner", description: "Certified ERPNext partner" },
          { name: "ERP Migration", icon: Database, href: "/erpnext/services/erp-migration", description: "ERPNext data migration" },
          { name: "ERPNext SEO", icon: Search, href: "/erpnext/services/erpnext-seo-optimization", description: "SEO optimization" },
          { name: "API Development", icon: CodeSquare, href: "/erpnext/services/api-development-services", description: "ERPNext API development" },
          { name: "Custom ERP Development", icon: Code, href: "/erpnext/services/develop-custom-erp-software", description: "Develop custom ERP software" }
        ]
      },
  
      // ================= APPS =================
      {
        name: "Apps",
        icon: AppWindow,
        children: [
          { name: "Advanced Authorisation Licence", icon: FileCheck, href: "/erpnext/apps/advanced-authorisation-licence-erpnext", description: "Advance authorisation licence management" },
          { name: "Argentina E-Invoicing", icon: Receipt, href: "/erpnext/apps/argentina-electronic-invoicing-erpnext-afip-compliance-automation", description: "AFIP compliant Argentina invoicing" },
          { name: "EMD Management", icon: DollarSign, href: "/erpnext/apps/emd-management-erpnext", description: "Earnest money deposit management" },
          { name: "FD Management", icon: Lock, href: "/erpnext/apps/fd-management-erpnext", description: "Fixed deposit management" },
          { name: "Forward Contract", icon: TrendingUp, href: "/erpnext/apps/forward-contract-erpnext", description: "Forward contract & hedging management" },
          { name: "Investment Portfolio", icon: BarChart3, href: "/erpnext/apps/investment-portfolio-erpnext", description: "Portfolio & investment management" },
          { name: "Meeting Management", icon: Calendar, href: "/erpnext/apps/meeting-management-erpnext", description: "Meeting & calendar management" },
          { name: "RODTEP Claim", icon: ClipboardCheck, href: "/erpnext/apps/rodtep-claim-erpnext", description: "Export incentive claim automation" },
          { name: "Workflow Transitions", icon: Repeat, href: "/erpnext/apps/workflow-transition", description: "Workflow automation & transitions" }
        ]
      },
  
      // ================= INDUSTRIES =================
      {
        name: "Industries",
        icon: Factory,
        children: [
          { name: "Manufacturing", icon: Factory, href: "/erpnext/manufacturing", description: "Manufacturing ERP" },
  
          // 🔥 CHEMICAL PROPERLY ALIGNED HERE
          {
            name: "Chemical",
            icon: FlaskConical,
            href: "/erpnext/chemical",
            description: "Chemical Industry ERP",
            children: [
              { name: "Certificate of Analysis (COA)", icon: FileCheck, href: "/erpnext/chemical/certificate-of-analysis-coa-pharma-chemicals" },
              { name: "Chemical Engineering ERP", icon: Cog, href: "/erpnext/chemical/chemical-engineering-software-transforming-processes-and-innovations" },
              { name: "ERP ROI Analysis", icon: TrendingUp, href: "/erpnext/chemical/cost-benefit-analysis-of-erp-investments-in-the-chemical-sector" },
              { name: "Dyechem ERP", icon: Atom, href: "/erpnext/chemical/erp-software-dyechem-industry" },
              { name: "Benefits of ERP for Chemical Industry", icon: Star, href: "/erpnext/chemical/top-5-benefits-of-erp-for-chemical-industry" }
            ]
          },
  
          { name: "Construction", icon: Hammer, href: "/erpnext/construction" },
          { name: "Education", icon: GraduationCap, href: "/erpnext/education" },
          { name: "Electronics", icon: Zap, href: "/erpnext/electronics" },
          { name: "Engineering", icon: Cog, href: "/erpnext/engineering" },
          { name: "Fintech", icon: DollarSign, href: "/erpnext/fintech" },
          { name: "Healthcare", icon: Heart, href: "/erpnext/healthcare" },
          { name: "Hospitality", icon: Building2, href: "/erpnext/hospitality" },
          { name: "Logistics", icon: Truck, href: "/erpnext/logistics" },
          {
            name: "Trading",
            icon: ShoppingCart,
            href: "/erpnext/trading",
            children: [
              { name: "Commodities Trading ERP", icon: TrendingUp, href: "/erpnext/trading/erp-for-commodities-trading-business" }
            ]
          },
          { name: "Mining", icon: Truck, href: "/erpnext/mining" },
          { name: "Pharmaceutical", icon: Pill, href: "/erpnext/pharmaceutical" },
          { name: "Retail", icon: ShoppingCart, href: "/erpnext/retail" },
          { name: "Textile", icon: ShoppingCart, href: "/erpnext/textile" }
        ]
      },
  
      // ================= INSIGHTS =================
      {
        name: "Insights",
        icon: Lightbulb,
        children: [
          { name: "How to Choose ERP Software", icon: FileText, href: "/erpnext/insights/how-to-choose-the-right-erp-software-for-your-company" },
          { name: "How Website Benefits Business", icon: Globe, href: "/erpnext/insights/how-website-benefits-a-business" },
          { name: "Industry-specific vs Generic ERP", icon: BarChart3, href: "/erpnext/insights/industry-specific-vs-generic-erp" },
          { name: "Manufacturing Software Selection", icon: Factory, href: "/erpnext/insights/tips-for-selecting-the-right-manufacturing-software" },
          { name: "ERP Go-Live Plan", icon: Rocket, href: "/erpnext/insights/ultimate-erp-go-live-plan" },
          { name: "Upgrade Old ERP to Cloud", icon: TrendingUp, href: "/erpnext/insights/upgrade-olderp-with-clouderp" }
        ]
      },
  
      // ================= WIKI =================
      {
        name: "Wiki",
        icon: BookOpen,
        children: [
          { name: "Add / Replace SSH Key Pair", icon: Cpu, href: "/erpnext/wiki/add-or-replace-a-ssh-key-pair-for-your-instance" },
          { name: "Backup & Restore ERPNext", icon: Database, href: "/erpnext/wiki/backup-&-restore-erpnext" },
          { name: "Install ERPNext", icon: Cpu, href: "/erpnext/wiki/install-erpnext" },
          { name: "Enable Developer Mode", icon: Code2, href: "/erpnext/wiki/enable-developer-mode" },
          { name: "Nginx Service", icon: Globe2, href: "/erpnext/wiki/nginx-service" },
          { name: "Custom Button", icon: Globe, href: "/erpnext/wiki/custom-button" }
        ]
      }
    ]
  },
  




  {
    name: "AI Automation",
    icon: Bot,
    href: "/ai-automation",
    children: [
      {
        name: "Apps",
        icon: Package,
        children: [
          { name: "AI-powered Lead Generation & Email Outreach", icon: MailPlus, href: "/ai-automation/apps/ai-powered-lead-generation-and-email-outreach", description: "AI-driven lead generation and automated email outreach" },
          { name: "Content Spark Marketing Automation", icon: Sparkles, href: "/ai-automation/apps/content-spark-marketing-automation", description: "AI-powered content and marketing automation" },
          { name: "Sales Call Recording & Analysis", icon: PhoneCall, href: "/ai-automation/apps/sales-call-recording-and-analysis-in-erpnext", description: "AI-based sales call recording and analysis in ERPNext" }
        ]
      },
      {
        name: "n8n", 
        icon: Zap,
        children: [
          {
            name: "Workflows",
            icon: Activity,
            children: [
              { name: "AI-driven Email Classification for Businesses", icon: Mail, href: "/n8n/workflows/ai-driven-email-classification-for-businesses", description: "Automate email classification using AI-driven workflows in n8n" }
            ]
          }
        ]
      },
      {
        name: "Insights",
        icon: Lightbulb,
        children: [
          { name: "AI Revolutionizing Global Communication", icon: Globe2, href: "/ai-automation/insights/ai-revolutionizing-global-communication-a-hint-of-change", description: "How AI is transforming global communication" },
          { name: "Google's AI Paywall Debate", icon: Scale, href: "/ai-automation/insights/googles-potential-paywall-balancing-innovation-and-access", description: "Balancing AI innovation and access in Google's paywall strategy" }
        ]
      },
      {
        name: "Services",
        icon: Wrench,
        children: [
          { name: "Digital Transformation Services", icon: Cpu, href: "/ai-automation/services/digital-transformation-services", description: "AI-led digital transformation services" }
        ]
      }
    ]
  },



  {
    name: "Solutions",
    icon: Puzzle,
    href: "/solutions",
    children: [
      {
        name: "Productify",
        icon: Box,
        href: "/solutions/productify",
        description: "Productify – productivity and product management solution",
        children: [
          { name: "Privacy Policy", icon: BookOpen, href: "/solutions/productify/privacy-policy", description: "Privacy policy for Productify" }
        ]
      }
    ]
  },


  // ... rest remain the same: Staff Augmentation, About Us, Careers, Solutions
  // {
  //   name: "Staff Augmentation",
  //   icon: Users2,
  //   href: "/staff-augmentation",
  //   children: [
  //     {
  //       name: "Experts",
  //       icon: UserCheck,
  //       href: "/staff-augmentation/experts",
  //       description: "Hire vetted experts for your projects"
  //     },
  //     {
  //       name: "Hire Developers",
  //       icon: Code2,
  //       children: [
  //         { name: "Django Developers", icon: Server, href: "/staff-augmentation/django-developer", description: "Hire experienced Django developers" },
  //         { name: "JavaScript Developers", icon: Braces, href: "/staff-augmentation/hire-javascript-developers", description: "Hire skilled JavaScript developers" },
  //         { name: "Python Developers", icon: BookOpen, href: "/staff-augmentation/hire-python-developers", description: "Hire professional Python developers" },
  //         { name: "Web Application Developers", icon: Globe, href: "/staff-augmentation/web-application-developers", description: "Hire full-stack web application developers" }
  //       ]
  //     },
  //     {
  //       name: "Wiki",
  //       icon: BookOpen,
  //       children: [
  //         { name: "How to Hire Python Developers", icon: FileText, href: "/staff-augmentation/wiki/how-to-hire-python-developers", description: "Complete guide to hiring Python developers" }
  //       ]
  //     }
  //   ]
  // },
  {
    name: "About Us",
    icon: Info,
    href: "/about-us",
    children: [
      { name: "Our Story", icon: BookOpen, href: "/about-us/our-story", description: "The journey, vision, and evolution of Finbyz" },
      { name: "Steer Your Vision", icon: Compass, href: "/about-us/steer-your-vision", description: "Helping businesses steer their long-term vision" },
      { name: "Core Values", icon: Heart, href: "/about-us/core-values", description: "Our core values and culture" },
      { name: "Life at Finbyz", icon: Users, href: "/about-us/life-at-finbyz", description: "Work culture and life at Finbyz" },
      { name: "Clients", icon: Building2, href: "/about-us/clients", description: "Our clients and success stories" },
      { name: "Testimonials", icon: MessageSquareQuote, href: "/about-us/testimonials", description: "What our clients say about us" },
      { name: "Partnership Programs", icon: Handshake, href: "/about-us/partnership-programs", description: "Partner with Finbyz for mutual growth" }
    ]
  },



  {
    name: "Careers",
    icon: Briefcase,
    href: "/careers",
    children: [
  
      { name: "Why Join Finbyz", icon: HeartHandshake, href: "/careers/why-join-finbyz", description: "Why Finbyz is a great place to grow your career" },
      { name: "Hiring Process", icon: Workflow, href: "/careers/hiring-process", description: "Step-by-step hiring process at Finbyz" },
  
      // Career Insights
      {
        name: "Career Insights",
        icon: Lightbulb,
        children: [
          { name: "How to Become a Software Engineer", icon: Code2, href: "/careers/insights/how-to-become-a-software-engineer-the-path-to-success", description: "Career roadmap to become a successful software engineer" }
        ]
      },
  
      // Job Openings (Listing only)
      {
        name: "Job Openings",
        icon: ClipboardList,
        href: "/careers/job-openings",
        description: "Explore current job openings at Finbyz"
      },
  
      // Job Application (Apply flow)
      {
        name: "Job Application",
        icon: FileText,
        href: "/careers/job-application",
        description: "Submit your job application",
        children: [
          { name: "Apply Now", icon: Send, href: "/careers/job-openings/apply", description: "Apply for open positions" }
        ]
      }
    ]
  },
  




  
];



  interface NavigationItem {
    name: string;
    hasDropdown: boolean;
    icon: React.ComponentType<{ className?: string }>;
    href?: string;
    mainItems?: { name: string; icon: React.ComponentType<{ className?: string }>; href?: string }[];
    detailedItems?: Record<string, NavNode[]>;
  }
  

interface MobileNavStackItem {
  title: string;
  items: any[];
  parent?: string;
}

// Type definitions
interface CodeSnippet {
  route: string;
  title: string;
}




export default function Header() {
  const [thirdLevelPosition, setThirdLevelPosition] = useState<{top: number, left: number} | null>(null);
  const [activeThirdLevel, setActiveThirdLevel] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, toggleMenu } = useMobileMenu();
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const [mobileNavStack, setMobileNavStack] = useState<MobileNavStackItem[]>([]);
  const [navAnimation, setNavAnimation] = useState<'slide-in' | 'slide-out' | null>(null);
  const [isGoingBack, setIsGoingBack] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [blogPosts, setBlogPosts] = useState<Array<{ name: string; title: string; route?: string; image?: string }>>([]);
  const [blogsLoading, setBlogsLoading] = useState(false);
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const [galleryItems, setGalleryItems] = useState<Array<{ name: string; title: string; route?: string; animated_image?: string; svg_image?: string }>>([]);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);

  const [codeSnippets, setCodeSnippets] = useState<CodeSnippet[]>([]);
  const [snippetsLoading, setSnippetsLoading] = useState(false);
  const [showAllSnippets, setShowAllSnippets] = useState(false);
   

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load blogs when hovering Insights → Blogs
  useEffect(() => {
    const shouldFetch = hoveredDropdown === "Insights" && hoveredService === "Blogs" && !blogsLoading && blogPosts.length === 0;
    if (!shouldFetch) return;
    setBlogsLoading(true);
    fetch("/web-api/blog-posts")
      .then(r => r.json())
      .then(j => setBlogPosts(Array.isArray(j?.data) ? j.data : []))
      .catch(() => setBlogPosts([]))
      .finally(() => setBlogsLoading(false));
  }, [hoveredDropdown, hoveredService, blogsLoading, blogPosts.length]);

  // Load gallery when hovering Insights → Gallery
  useEffect(() => {
    const shouldFetch = hoveredDropdown === "Insights" && hoveredService === "Gallery" && !galleryLoading && galleryItems.length === 0;
    if (!shouldFetch) return;
    setGalleryLoading(true);
    fetch("/web-api/gallery")
      .then(r => r.json())
      .then(j => setGalleryItems(Array.isArray(j?.data) ? j.data : []))
      .catch(() => setGalleryItems([]))
      .finally(() => setGalleryLoading(false));
  }, [hoveredDropdown, hoveredService, galleryLoading, galleryItems.length]);


// Load code snippets when hovering Insights → Code Snippet
useEffect(() => {
  const shouldFetch = hoveredDropdown === "Insights" && hoveredService === "Dev Insights" && !snippetsLoading && codeSnippets.length === 0;
  
  if (!shouldFetch) return;
  setSnippetsLoading(true);
    fetch("/web-api/code-snippets")
      .then(r => r.json())
      .then(j => setCodeSnippets(Array.isArray(j?.data) ? j.data : []))
      .catch(() => setCodeSnippets([]))
      .finally(() => setSnippetsLoading(false));


}, [hoveredDropdown, hoveredService, snippetsLoading, codeSnippets.length]);



  const toggleMobileItem = (itemName: string) => {
    setExpandedMobileItems(prev =>
      prev.includes(itemName)
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      toggleMenu();
      setExpandedMobileItems([]);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    toggleMenu();
    setExpandedMobileItems([]);
  };

  const openMobileSubmenu = (title: string, items: any[]) => {
    setIsGoingBack(false);
    setNavAnimation('slide-out');
    setTimeout(() => {
      setMobileNavStack((stack) => [...stack, { title, items }]);
      setNavAnimation('slide-in');
    }, 150);
  };

  const backMobileMenu = () => {
    setIsGoingBack(true);
    setNavAnimation('slide-out');
    setTimeout(() => {
      setMobileNavStack((stack) => stack.slice(0, -1));
      setNavAnimation('slide-in');
    }, 150);
  };

  const resetMobileMenu = () => {
    setMobileNavStack([]);
    toggleMenu();
    setNavAnimation(null);
    setIsGoingBack(false);
  };

  // Scroll to inquiry form section
  function GotoInquiryForm() {
    const inquiryForm = document.getElementsByClassName('inquiry-form')[0];;
    if (inquiryForm) {
      inquiryForm.scrollIntoView({ behavior: 'smooth' });
    }
  }
  

  

  return (
    <nav 
    className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 z-300 ${isScrolled
      ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md shadow-lg"
      : "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center h-14">
        {/* <div className="flex items-center min-h-[56px] py-2"> */}

          <Link href="/" className="shrink-0">
            <Image src="/FinByz Logo 2025 copy.png" alt="Finbyz" width={120} height={32} priority />
          </Link>
  
          <div className="hidden lg:flex items-center ml-8 space-x-4">
          {/* <div className="hidden lg:grid grid-flow-col auto-cols-max grid-rows-2 gap-x-4 gap-y-1 ml-8"> */}
            {navigationItems.map((item) => {
              const leftNodes = item.children ?? [];
              const hasDropdown = leftNodes.length > 0;
  
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredDropdown(item.name)}
                  onMouseLeave={() => {
                    setHoveredDropdown(null);
                    setHoveredService(null);
                  }}
                >
                  <Button
                    variant="ghost"
                    className={`text-gray-300 hover:text-[#FF8C00] hover:bg-gray-700/50 transition-all font-medium flex items-center space-x-1 text-base py-6 z-[110] px-3 rounded-lg relative group ${hoveredDropdown === item.name ? 'text-[#FF8C00] bg-gray-700/50' : ''
                    }`}
                  >
                    <item.icon className="w-4 h-4 shrink-0 text-black-400" />

                    {item.name}
                    {hasDropdown && <ChevronDown className="w-3 h-3" />}
                  </Button>
  
                  {hasDropdown && (
                    <div
                      className={`fixed top-[56px] left-1/2 -translate-x-1/2 z-[200] bg-white border shadow-2xl rounded-3xl transition-all duration-200 ${
                        hoveredDropdown === item.name ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
                      }`}
                      style={{ width: "1100px", maxWidth: "96vw" }}
                    >

                      
                      <div className="grid grid-cols-2">
  
                        {/* LEFT PANEL */}
                        <div className="p-6 border-r border-slate-200 bg-slate-50/50 font-['Inter','Segoe UI','system-ui']">
                          <h3 className="text-lg font-semibold text-[#1A5276] mb-6">{item.name}</h3>
                          {leftNodes.map(main => (
                            <div
                              key={main.name}
                              onMouseEnter={() => setHoveredService(main.name)}
                              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer ${
                                hoveredService === main.name
                                  ? "bg-white shadow text-orange-500"
                                  : "hover:bg-white text-[#1A5276]"
                              }`}
                            >
                              <main.icon className="w-5 h-5" />
                              <span className="text-sm font-medium">{main.name}</span>
                            </div>
                          ))}
                        </div>
  


                  {/* {RIGHT PANEL} */}
                  <div className="p-6 space-y-1 max-h-[600px] overflow-y-auto font-['Inter','Segoe UI','system-ui']">
  {leftNodes
    .find(x => x.name === hoveredService)
    ?.children?.map(node => (
      <div 
        key={node.name} 
        className="relative group"
        onMouseEnter={(e) => {
          if (node.children) {
            const rect = e.currentTarget.getBoundingClientRect();
            setThirdLevelPosition({
              top: rect.top,
              left: rect.right + 8
            });
            setActiveThirdLevel(node.name);
          }
        }}
        onMouseLeave={() => {
          setActiveThirdLevel(null);
        }}
      >
        <Link
          href={node.href || "#"}
          className="flex items-center justify-between gap-3 px-4 py-2 rounded-lg hover:bg-slate-50 hover:text-[#FF8C00] transition font-medium"
        >
          <div className="flex items-start gap-3">
            <node.icon className="w-4 h-4 shrink-0 text-orange-500 mt-1" />
            <div>
              <div className="font-semibold text-sm text-[#1A5276]  hover:text-[#FF8C00]">{node.name}</div>
              <div className="text-xs text-slate-500">{node.description}</div>
            </div>
          </div>
          {node.children && <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />}
        </Link>

        {/* FLOATING 3RD LEVEL */}
        {node.children && activeThirdLevel === node.name && thirdLevelPosition && (
          <div 
            style={{
              top: `${thirdLevelPosition.top}px`,
              left: `${thirdLevelPosition.left}px`
            }}
            onMouseEnter={() => setActiveThirdLevel(node.name)}
            onMouseLeave={() => setActiveThirdLevel(null)}
          >
            {node.children.map(leaf => (
              <Link
                key={leaf.href}
                href={leaf.href!}
                className="flex items-center gap-1 px-4 py-3 pl-9 text-xs rounded-lg  hover:bg-orange-50 transition whitespace-nowrap"
                onClick={() => {
                  setHoveredDropdown(null);
                  setHoveredService(null);
                  setActiveThirdLevel(null);
                }}
              >
                <leaf.icon className="w-3 h-3 shrink-0 text-orange-500" />
                {leaf.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}
</div>



                      </div>
                    </div>
                  )}
                </div>
              );
            })}
  
            <Button onClick={GotoInquiryForm} className="ml-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full px-6">
              Book Consultation
            </Button>
  
            <Link href="/login">
              <Button variant="ghost" className="ml-2 text-gray-300 hover:text-orange-400">
                <LogIn className="w-4 h-4 mr-2" /> Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
  

  
  
  
}