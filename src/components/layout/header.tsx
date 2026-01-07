"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Home, Users, Building2, Wrench, FileText, Briefcase, Phone, BookOpen, Target, Factory, ShoppingCart, Heart, GraduationCap, Truck, Leaf, TestTube, Hammer, Pill, Eye, Zap, Code, UserPlus, Lightbulb, Calendar, Star, Mail, ChevronLeft, ChevronRight, Handshake, Rocket, Send, Sparkles, BarChart3, Package, DollarSign, TrendingUp, Search, Video, Newspaper, Smartphone, Brain, CheckCircle, MapPin, LogIn, Globe, FileSearch, PhoneCall, CreditCard, MessageSquare, Code2 } from "lucide-react";
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
import { Cpu } from "lucide-react";
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






interface NavigationItem {
  name: string;
  hasDropdown: boolean;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  mainItems?: Array<{ name: string; icon: React.ComponentType<{ className?: string }>, href?: string }>;
  detailedItems?: Record<string, Array<{ name: string; description: string; icon: React.ComponentType<{ className?: string }>; href: string }>>;
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


  const navigationItems: NavigationItem[] = [
    {
      name: "ERPNext",
      hasDropdown: true,
      icon: Building2,
      mainItems: [
        { name: "ERPNext Services", icon: Wrench },
        { name: "ERPNext Products & Add-ons", icon: Package },
        { name: "ERPNext Solutions", icon: Target },
      ],
      detailedItems: {
        "ERPNext Services": [
          {
            name: "ERPNext Implementation",
            description: "Complete ERPNext setup and configuration",
            icon: Cpu,
            href: "/erpnext/hire-developers"
          },
          {
            name: "ERPNext Certified Partner",
            description: "Certified ERPNext partnership services",
            icon: Star,
            href: "/erpnext/certified-partner"
          },
          {
            name: "ERPNext Service Provider in UAE",
            description: "ERPNext services in United Arab Emirates",
            icon: Landmark,
            href: "/erpnext/services/ERPNext-impelementation-in-uae"
          },
          {
            name: "ERPNext Services in Canada",
            description: "ERPNext services in Canada",
            icon: Map,
            href: "/erpnext/services/implementation-partner-in-canada"
          },
          {
            name: "ERPNext Partner in Saudi Arabia",
            description: "ERPNext partnership in Saudi Arabia",
            icon: Globe2,
            href: "/erpnext/partner-in-saudi-arabia"
          },
          {
            name: "ERPNext Service Provider",
            description: "Professional ERPNext service provider",
            icon: Building2,
            href: "/erpnext/services/erpnext-service-provider"
          },
          {
            name: "Website Development",
            description: "Custom website development services",
            icon: Code,
            href: "/erpnext/services/website-development-on-erpnext"
          }
        ],
        "ERPNext Products & Add-ons": [
          {
            name: "Productify",
            description: "Product management and cataloging",
            icon: Package,
            href: "/solutions/productify"
          },
          {
            name: "Meeting Management",
            description: "Meeting and calendar management",
            icon: Calendar,
            href: "/erpnext/apps/meeting-management-erpnext"
          },
          {
            name: "FD Management",
            description: "Fixed deposit management system",
            icon: Lock,
            href: "/erpnext/apps/fd-management-erpnext"
          },
          {
            name: "EMD Management",
            description: "Earnest money deposit management",
            icon: DollarSign,
            href: "/erpnext/apps/emd-management-erpnext"
          },
          {
            name: "Forward Contract Management",
            description: "Forward contract and hedging management",
            icon: FileText,
            href: "/erpnext/apps/forward-contract-erpnext"
          },
          {
            name: "RODTEP Claim",
            description: "Remission of Duties and Taxes on Exported Products",
            icon: ClipboardCheck,
            href: "/erpnext/apps/rodtep-claim-erpnext"
          },
          {
            name: "Investment Portfolio",
            description: "Investment and portfolio management",
            icon: TrendingUp,
            href: "/erpnext/apps/investment-portfolio-erpnext"
          },
          {
            name: "Advanced Authorisation Licence",
            description: "Advanced authorization license management",
            icon: FileCheck,
            href: "/erpnext/apps/advanced-authorisation-licence-erpnext"
          },
          {
            name: "Workflow Transitions",
            description: "Workflow Transitions management",
            icon: Repeat,
            href: "/erpnext/apps/workflow-transition"
          },
          {
            name: "Argentina E-Invoicing",
            description: "Argentina electronic invoicing compliance",
            icon: Receipt,
            href: "/erpnext/apps/argentina-electronic-invoicing-erpnext-afip-compliance-automation"
          }
        ],
        "ERPNext Solutions": [
          {
            name: "ERPNext Software Overview",
            description: "Complete overview of ERPNext software",
            icon: Building2,
            href: "/erpnext/"
          },
          {
            name: "CRM Software",
            description: "Customer relationship management software",
            icon: Users,
            href: "/erpnext/modules/crm-software"
          },
          {
            name: "Human Resource System",
            description: "Comprehensive HR management system",
            icon: UserPlus,
            href: "/erpnext/modules/human-resource-system"
          },
          {
            name: "ERP Software Development",
            description: "Custom ERP software development",
            icon: Code,
            href: "/erp/services/erp-software-development"
          },
          {
            name: "ERP Modules",
            description: "Comprehensive ERP module overview",
            icon: Package,
            href: "/erpnext/modules/all-modules-of-erpnext"
          },
          {
            name: "ERPNext Website SEO",
            description: "SEO optimization for ERPNext websites",
            icon: Search,
            href: "/erpnext/services/erpnext-seo-optimization"
          },
          {
            name: "ERP for Education",
            description: "ERP solutions for educational institutions",
            icon: GraduationCap,
            href: "/erpnext/education"
          },
          {
            name: "Brochure",
            description: "",
            icon: Notebook,
            href: "/resources/brochure"
          }
        ],
      }
    },
    {
      name: "Services",
      hasDropdown: true,
      icon: Wrench,
      mainItems: [
        { name: "ERP Implementation", icon: Building2 },
        { name: "AI Automation", icon: Zap },
        { name: "Software Development", icon: Code },
        { name: "Consulting", icon: Lightbulb },
        { name: "Support & Maintenance", icon: Phone },
        { name: "Resource Augmentation", icon: Globe }
      ],
      detailedItems: {
        "ERP Implementation": [
          {
            name: "ERPNext Implementation",
            description: "Complete ERPNext setup",
            icon: Cpu,
            href: "/erpnext/hire-developers"
          },
          {
            name: "Custom ERP Development",
            description: "Custom ERP solutions",
            icon: Code,
            href: "/erpnext/services/develop-custom-erp-software"
          },
          {
            name: "ERP Migration",
            description: "Data migration services",
            icon: Database,
            href: "/erpnext/services/erp-migration"
          }
        ],
        "AI Automation": [
          {
            name: "Smart Card Scanner",
            description: "Scan and extract business card details instantly.",
            icon: CreditCard,
            href: "/erpnext/ai/ai-powered-smart-card-scanner",
          },
          {
            name: "Content Spark Marketing Automation",
            description: "Automate and personalize your marketing campaigns.",
            icon: Sparkles,
            href: "/ai-automation/apps/content-spark-marketing-automation",
          },
          {
            name: "Lead Intelligence",
            description: "Gain insights and prioritize your leads with AI.",
            icon: Brain,
            href: "/erpnext/ai/lead-intelligence",
          },
          {
            name: "AI Outreach & Lead Generation Research",
            description: "Discover and connect with potential leads intelligently.",
            icon: Rocket,
            href: "/ai-automation/apps/ai-powered-lead-generation-and-email-outreach",
          },
          {
            name: "AI Sales Call Analysis for ERPNext",
            description: "Analyze and summarize sales calls automatically.",
            icon: PhoneCall,
            href: "/ai-automation/apps/sales-call-recording-and-analysis-in-erpnext",
          },
          {
            name: "Email Classification",
            description: "Classify and route emails automatically using AI.",
            icon: Mail,
            href: "/n8n/workflows/ai-driven-email-classification-for-businesses",
          },
          {
            name: "Quote Assistant Overview",
            description: "Streamline quotation creation and management.",
            icon: MessageSquare,
            href: "/erpnext/ai/ai-powered-quote-assistant",
          },
          {
            name: "Follow Up Buddy",
            description: "Automated follow-up reminders and tracking.",
            icon: Users,
            href: "/erpnext/ai/ai-powered-follow-up-buddy-automate-your-sales-follow-up-process",
          },

          {
            name: "AI Powered Resume Ranker",
            description: "Rank resumes and find the best candidates instantly.",
            icon: FileSearch,
            href: "/erpnext/ai/ai-powered-resume-ranker",
          },

        ],
        "Software Development": [
          {
            name: "Web Applications",
            description: "Custom web development",
            icon: Code,
            href: "/erpnext/services/erpnext-service-providerweb-application-development"
          },
          {
            name: "Mobile Apps",
            description: "Mobile application development",
            icon: Smartphone,
            href: "/erpnext/services/mobile-app-development"
          },
          {
            name: "API Development",
            description: "API and middleware services",
            icon: CodeSquare,
            href: "/erpnext/services/api-development-services"
          },
          {
            name: "CRM Software",
            description: "Customer Relationship Management",
            icon: Lightbulb,
            href: "/erpnext/modules/crm-software"
          },
          {
            name: "Human Resource System",
            description: "Comprehensive HR management system",
            icon: UserPlus,
            href: "/erpnext/modules/human-resource-system"
          },
          {
            name: "Data Analytics",
            description: "",
            icon: Rocket,
            href: "/erpnext/services/data-analytics"
          },
        ],
        "Consulting": [
          {
            name: "Digital Transformation",
            description: "Transform your business digitally",
            icon: Zap,
            href: "/ai-automation/services/digital-transformation-services"
          },
          {
            name: "Process Consulting",
            description: "Optimize business processes",
            icon: Target,
            href: "/erpnext/services/process-consulting"
          },
          {
            name: "Technology Consulting",
            description: "Technology strategy and planning",
            icon: Cog,
            href: "/erpnext/services/erpnext-service-providertechnology-consulting"
          },
          {
            name: "IT Consulting",
            description: "Expert guidance on technology strategy and IT solutions to drive business growth.",
            icon: Laptop,
            href: "/erpnext/services/it-consulting"
          }
        ],
        "Support & Maintenance": [
          {
            name: "ERPNext Support",
            description: "Round-the-clock technical support",
            icon: Phone,
            href: "/erpnext/services/support-amc"
          },
          {
            name: "ERPNext System Maintenance",
            description: "Regular system maintenance",
            icon: Wrench,
            href: "/erpnext/services/system-maintenance-amc"
          },
          {
            name: "ERPNext Performance Optimization",
            description: "Optimize system performance",
            icon: TrendingUp,
            href: "/erpnext/services/performance-optimization"
          }
        ],

        "Resource Augmentation": [
          { name: "Hire Python Developer", description: "Hire Python Developer", icon: Wrench, href: "/staff-augmentation/hire-python-developers" },
          { name: "Hire Web Application Developers", icon: Handshake, description: "Hire Web Application Developers", href: "/staff-augmentation/web-application-developers" },
          { name: "Hire Javascript Developer", icon: Briefcase, description: "Hire Javascript Developer", href: "/staff-augmentation/hire-javascript-developers" },
          { name: "Hire Django developer", icon: Globe, description: "Hire Django developer", href: "/staff-augmentation/django-developer" },
          { name: "Hire ERPNext Implementer", icon: Laptop, description: "Hire Django developer", href: "/erpnext/hire-developers" }
        ]



      }
    },
    {
      name: "Industries",
      hasDropdown: true,
      icon: Factory,
      mainItems: [
        { name: "Manufacturing & Production", icon: Factory },
        { name: "Operations and Service Management", icon: Wrench },
        { name: "Healthcare & Education", icon: Heart },
        { name: "E-Commerce & Logistics", icon: ShoppingCart },
      ],
      detailedItems: {
        "Manufacturing & Production": [
          {
            name: "Manufacturing",
            description: "Complete ERPNext setup",
            icon: Factory,
            href: "/erpnext/manufacturing"
          },
          {
            name: "Textile",
            description: "",
            icon: ShoppingCart,
            href: "/erpnext/textile"
          },
          {
            name: "Chemicals",
            description: "",
            icon: TestTube,
            href: "/erpnext/chemical/"
          },
          {
            name: "Dyechem",
            description: "",
            icon: Atom,
            href: "/erpnext/chemical/erp-software-dyechem-industry"
          },
          {
            name: "Electronics",
            description: "",
            icon: Zap,
            href: "/erpnext/electronics"
          },
          {
            name: "Mining",
            description: "",
            icon: Hammer,
            href: "/erpnext/mining"
          },
          {
            name: "Agriculture",
            description: "",
            icon: Leaf,
            href: "/erpnext/agro/erp-for-commodity-trading"
          },
          {
            name: "Pharmaceuticals",
            description: "",
            icon: Pill,
            href: "/erpnext/pharmaceutical"
          }],
        "Operations and Service Management": [
          {
            name: "Services",
            description: "",
            icon: Wrench,
            href: "services"
          },
          {
            name: "Construction",
            description: "",
            icon: Hammer,
            href: "/erpnext/construction"
          },
          {
            name: "Engineering",
            description: "",
            icon: GraduationCap,
            href: "/erpnext/engineering"
          }],
        "Healthcare & Education": [
          {
            name: "Healthcare",
            description: "",
            icon: Heart,
            href: "/erpnext/healthcare"
          },
          {
            name: "Education",
            description: "",
            icon: GraduationCap,
            href: "/erpnext/education"
          }],
        "E-Commerce & Logistics": [
          {
            name: "Trading & Distribution",
            description: "",
            icon: Truck,
            href: "/erpnext/trading"
          },
          {
            name: "Retail & eCommerce",
            description: "",
            icon: ShoppingCart,
            href: "/erpnext/retail"
          },
          {
            name: "Logistics",
            description: "",
            icon: Truck,
            href: "/erpnext/logistics"
          },

        ]
      },

    },


    {
      name: "Insights",
      hasDropdown: true,
      icon: BarChart3,
      mainItems: [
        { name: "Blogs", icon: Wrench, href: "/blogs" },
        { name: "Gallery", icon: Handshake, href: "/" },
        { name: "Dev Insights", icon: Code2, href: "#" },
      ],

      detailedItems: {
        "Blogs": [
          {
            name: "Blogs",
            description: "Learn about our Blogs",
            icon: Wrench,
            href: "/blogs"
          },
        ],
       
      },
    },
    {
      name: "Company",
      hasDropdown: true,
      icon: Users,
      mainItems: [
        { name: "Who We Are", icon: Users },
        { name: "Work With Us", icon: Handshake },
        { name: "Careers", icon: Briefcase }
      ],
      detailedItems: {
        "Who We Are": [
          {
            name: "About Us",
            description: "Learn about our company",
            icon: Users,
            href: "/about-us"
          },
          {
            name: "Steer Your Vision",
            description: "Our approach to transformation",
            icon: Target,
            href: "/about-us/steer-your-vision"
          },
          {
            name: "Life at Finbyz",
            description: "Our work culture",
            icon: Heart,
            href: "/about-us/life-at-finbyz"
          },
          {
            name: "Meet the Team",
            description: "Meet our team members",
            icon: Users,
            href: "/about-us/our-story"
          }
        ],
        "Work With Us": [
          {
            name: "Start Your ERP Journey",
            description: "Begin your ERP transformation",
            icon: Rocket,
            href: "/erpnext/services/start-your-erp-journey"
          },
          {
            name: "Hire Our Experts",
            description: "Hire our experienced professionals",
            icon: Users,
            href: "/staff-augmentation/experts"
          },
          {
            name: "Reseller / Strategic Partnerships",
            description: "Partner with us strategically",
            icon: Handshake,
            href: "/about-us/partnership-programs"
          },
          {
            name: "Contact Us",
            description: "Get in touch with our team",
            icon: Phone,
            href: "/contact"
          }
        ],
        "Careers": [
          {
            name: "Career Opportunities",
            description: "Explore job opportunities",
            icon: Briefcase,
            href: "/careers/job-openings"
          },
          {
            name: "Why Join Finbyz",
            description: "Benefits of working with us",
            icon: Star,
            href: "/careers/why-join-finbyz"
          },
          {
            name: "Apply Now",
            description: "Submit your application",
            icon: Send,
            href: "/careers/apply"
          }
        ]
      }
    }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 z-300 ${isScrolled
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm"
          }`}
      >
        <div className="container-custom">
          <div className="w-full">
            <div className="flex justify-between items-center h-12 lg:h-14 w-full">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/FinByz Logo 2025 copy.png"
                    alt="Finbyz"
                    width={120}
                    height={32}
                    priority
                  />
                </Link>
              </div>

              <div className="hidden lg:flex items-center space-x-3 ml-auto">
                {navigationItems.map((item, index) => (
                  <div key={item.name} className="relative">
                    {item.hasDropdown ? (
                      <div className="relative">
                        <Button
                          variant="ghost"
                          className={`text-gray-300 hover:text-[#FF8C00] hover:bg-gray-700/50 transition-all font-medium flex items-center space-x-1 text-base py-6 z-[110] px-3 rounded-lg relative group ${hoveredDropdown === item.name ? 'text-[#FF8C00] bg-gray-700/50' : ''
                            }`}
                          onMouseEnter={() => {
                            setHoveredDropdown(item.name);
                            setHoveredService(null);
                          }}
                          onMouseLeave={() => {
                            setHoveredDropdown(null);
                            setHoveredService(null);
                          }}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                          <ChevronDown className={`w-3 h-3 transition-transform ${hoveredDropdown === item.name ? 'rotate-180' : ''
                            }`} />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF8C00] transition-all duration-300 group-hover:w-full"></div>
                        </Button>
                        <div
                          className={`absolute top-full bg-white border border-gray-200 shadow-2xl rounded-xl transition-all duration-300 z-50 ${hoveredDropdown === item.name
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible translate-y-2'
                            }`}
                          style={{
                            maxWidth: '90vw',
                            maxHeight: '85vh',

                            ...(index === 0 ? {
                              left: '0',
                              transform: 'none'
                            } : {
                              left: '50%',
                              transform: 'translateX(-50%)'
                            }),

                            minWidth: '300px',
                            overflow: 'hidden',
                            right: 'auto'
                          }}
                          onMouseEnter={() => setHoveredDropdown(item.name)}
                          onMouseLeave={(e) => {
                            const relatedTarget = e.relatedTarget as HTMLElement;
                            if (!e.currentTarget.contains(relatedTarget)) {
                              setHoveredDropdown(null);
                              setHoveredService(null);
                            }
                          }}
                        >
                          {item.detailedItems ? (
                            // Two-panel layout when detailedItems exist
                            <div className="flex w-[800px] min-h-[500px] max-w-[90vw] max-h-[85vh] overflow-hidden lg:w-[800px] md:w-[600px] sm:w-[400px]">
                              <div className="w-1/2 p-6 border-r border-gray-200 bg-gray-50/30 overflow-y-auto">

                                <h3 className="font-semibold text-[#1A5276] mb-6 text-lg">
                                  {item.name === "Services"
                                    ? "Our Services"
                                    : item.name === "Company"
                                      ? "Our Company"
                                      : item.name === "Industries"
                                        ? "Industries We Serve"
                                        : item.name === "Insights"
                                          ? "Insights"
                                          : "ERPNext Solutions"}
                                </h3>

                                <div className="space-y-2">
                                  {item.mainItems?.map((mainItem) => (
                                    <div
                                      key={mainItem.name}
                                      className={`group/main flex items-center space-x-3 px-4 py-3 text-[#1A5276] hover:text-[#FF8C00] hover:bg-white cursor-pointer transition-all rounded-lg border border-transparent hover:border-gray-200 hover:shadow-sm ${hoveredService === mainItem.name ? 'bg-white border-gray-200 shadow-sm text-[#FF8C00]' : ''
                                        }`}
                                      onMouseEnter={() => setHoveredService(mainItem.name)}
                                      onMouseLeave={() => {
                                        setTimeout(() => {
                                          if (hoveredDropdown !== item.name) {
                                            setHoveredService(null);
                                          }
                                        }, 100);
                                      }}
                                    >
                                      <mainItem.icon className="w-5 h-5 flex-shrink-0" />
                                      <span className="text-sm font-medium">{mainItem.name}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="w-1/2 p-6 overflow-y-auto">
                                {hoveredService ? (
                                  <div>
                                    <h4 className="font-semibold text-[#1A5276] mb-4 text-lg border-b border-gray-100 pb-2">{hoveredService}</h4>
                                    {item.name === "Insights" && hoveredService === "Blogs" ? (
                                      <div className="space-y-2">
                                        {blogsLoading ? (
                                          <div className="text-sm text-gray-500 px-3 py-2">Loading blogs...</div>
                                        ) : blogPosts.length === 0 ? (
                                          <div className="text-sm text-gray-500 px-3 py-2">No blog posts found.</div>
                                        ) : (
                                          (showAllBlogs ? blogPosts : blogPosts.slice(0, 8)).map((post) => (
                                            <Link
                                              key={post.name}
                                              href={`/${post.route}` || "/blogs"}
                                              className="flex items-center space-x-3 px-3 py-2 text-[#1A5276] hover:text-[#FF8C00] hover:bg-[#1A5276]/5 cursor-pointer transition-all rounded-lg text-sm"
                                              onClick={() => {
                                                setHoveredDropdown(null);
                                                setHoveredService(null);
                                                setShowAllBlogs(false);
                                              }}
                                            >
                                              
                                              <span className="font-medium line-clamp-1">{post.title}</span>
                                            </Link>
                                          ))
                                        )}
                                        {blogPosts.length > 5 && (
                                          <div className="pt-2 flex items-center gap-3">
                                            <button
                                              className="text-sm px-3 py-2 rounded-lg text-[#1A5276] hover:text-[#FF8C00] hover:bg-[#1A5276]/5"
                                              onClick={() => setShowAllBlogs(v => !v)}
                                            >
                                              {showAllBlogs ? "Show less" : "View more"}
                                            </button>
                                            <Link
                                              href="/blogs"
                                              className="text-sm px-3 py-2 rounded-lg text-[#1A5276] hover:text-[#FF8C00] hover:bg-[#1A5276]/5"
                                              onClick={() => {
                                                setHoveredDropdown(null);
                                                setHoveredService(null);
                                                setShowAllBlogs(false);
                                              }}
                                            >
                                              View all
                                            </Link>
                                          </div>
                                        )}
                                      </div>
                                    )
                                      : item.name === "Insights" && hoveredService === "Gallery" ? (
                                        <div className="space-y-2">
                                          {galleryLoading ? (
                                            <div className="text-sm text-gray-500 px-3 py-2">Loading gallery...</div>
                                          ) : galleryItems.length === 0 ? (
                                            <div className="text-sm text-gray-500 px-3 py-2">No gallery items found.</div>
                                          ) : (
                                            (showAllGallery ? galleryItems : galleryItems.slice(0, 8)).map((item) => (

                                              <Link
                                                key={item.name}
                                                href={`/${item.route}` || "/"}
                                                className="flex items-center space-x-3 px-3 py-2 text-[#1A5276] hover:text-[#FF8C00] hover:bg-[#1A5276]/5 cursor-pointer transition-all rounded-lg text-sm"
                                                onClick={() => {
                                                  setHoveredDropdown(null);
                                                  setHoveredService(null);
                                                  setShowAllGallery(false);
                                                }}
                                              >
                                                <span className="font-medium line-clamp-1">{item.title}</span>
                                              </Link>
                                            ))
                                          )}
                                          {galleryItems.length > 8 && (
                                            <div className="pt-2 flex items-center gap-3">
                                              <button
                                                className="text-sm px-3 py-2 rounded-lg text-[#1A5276] hover:text-[#FF8C00] hover:bg-[#1A5276]/5"
                                                onClick={() => setShowAllGallery(v => !v)}
                                              >
                                                {showAllGallery ? "Show less" : "View more"}
                                              </button>
                                              <Link
                                                href="/"
                                                className="text-sm px-3 py-2 rounded-lg text-[#1A5276] hover:text-[#FF8C00] hover:bg-[#1A5276]/5"
                                                onClick={() => {
                                                  setHoveredDropdown(null);
                                                  setHoveredService(null);
                                                  setShowAllGallery(false);
                                                }}
                                              >
                                                View all
                                              </Link>
                                            </div>
                                          )}

                                        </div>
                                      )
                                        :
                                          item.name === "Insights" && hoveredService === "Dev Insights" ? (
                                            <div className="space-y-2">
                                              {snippetsLoading ? (
                                                <div className="text-sm text-gray-500 px-3 py-2">Loading code snippets...</div>
                                              ) : codeSnippets.length === 0 ? (
                                                <div className="text-sm text-gray-500 px-3 py-2">No code snippets found.</div>
                                              ) : (
                                                (showAllSnippets ? codeSnippets : codeSnippets.slice(0, 8)).map((snippet,idx) => (
                                                  <Link
                                                    key={`${snippet.route}-${idx}`}
                                                    href={`/erpnext/wiki/${snippet.route}`}
                                                    className="flex items-center space-x-3 px-3 py-2 text-[#1A5276] hover:text-[#FF8C00] hover:bg-[#1A5276]/5 cursor-pointer transition-all rounded-lg text-sm"
                                                    onClick={() => {
                                                      setHoveredDropdown(null);
                                                      setHoveredService(null);
                                                      setShowAllSnippets(false);
                                                    }}
                                                  >
                                                    <span className="font-medium line-clamp-1">
                                                      {snippet.title}
                                                    </span>
                                                  </Link>
                                                ))
                                              )}
                                              {codeSnippets.length > 8 && (
                                                <div className="pt-2 flex items-center gap-3">
                                                  <button
                                                    className="text-sm px-3 py-2 rounded-lg text-[#1A5276] hover:text-[#FF8C00] hover:bg-[#1A5276]/5"
                                                    onClick={() => setShowAllSnippets(v => !v)}
                                                  >
                                                    {showAllSnippets ? "Show less" : "View more"}
                                                  </button>
                                                  <Link
                                                    href="/code-snippet"
                                                    className="text-sm px-3 py-2 rounded-lg text-[#1A5276] hover:text-[#FF8C00] hover:bg-[#1A5276]/5"
                                                    onClick={() => {
                                                      setHoveredDropdown(null);
                                                      setHoveredService(null);
                                                      setShowAllSnippets(false);
                                                    }}
                                                  >
                                                    {/* View all */}
                                                  </Link>
                                                </div>
                                              )}
                                            </div>
                                          )  :

                                        (
                                          <div className="space-y-2">
                                            {(item.detailedItems as any)?.[hoveredService]?.map((subItem: any) => (
                                              <Link
                                                key={subItem.name}
                                                href={subItem.href || "#"}
                                                className="flex items-center space-x-3 px-3 py-2 text-[#1A5276] hover:text-[#FF8C00] hover:bg-[#1A5276]/5 cursor-pointer transition-all rounded-lg text-sm"
                                                onClick={() => {
                                                  setHoveredDropdown(null);
                                                  setHoveredService(null);
                                                }}
                                              >
                                                <subItem.icon className="w-4 h-4 flex-shrink-0" />
                                                <span className="font-medium">{subItem.name}</span>
                                              </Link>
                                            ))}
                                          </div>
                                        )}
                                  </div>
                                ) : (
                                  <div className="flex items-center justify-center h-full">
                                    <div className="text-center text-gray-400">
                                      {item.name === "Services" ? (
                                        <Wrench className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                      ) : item.name === "Company" ? (
                                        <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                      ) : (
                                        <Building2 className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                      )}
                                      <p className="text-sm">Hover over a {item.name === "Services" ? "service" : item.name === "Company" ? "section" : "solution"} to see details</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          ) : (
                            // Simple single-column layout when no detailedItems
                            <div className="w-80 p-6 max-w-[90vw] overflow-y-auto min-h-[500px] max-h-[85vh]">
                              {/* <h3 className="font-semibold text-[#1A5276] mb-6 text-lg">
                              {item.name === "Services" ? "Our Services" : item.name === "Company" ? "Our Company" : "ERPNext Solutions"}
                            </h3> */}
                              <h3 className="font-semibold text-[#1A5276] mb-6 text-lg">
                                {item.name === "Services"
                                  ? "Our Services"
                                  : item.name === "Company"
                                    ? "Our Company"
                                    : item.name === "Industries"
                                      ? "Our Industries"
                                      : item.name === "Insights"
                                        ? "Insights"
                                        : "ERPNext Solutions"}
                              </h3>



                              <div className="space-y-2">
                                {item.mainItems?.map((mainItem) => (
                                  <Link
                                    key={mainItem.name}
                                    href={mainItem.href || item.detailedItems?.[mainItem.name]?.[0]?.href || "#"}
                                    className="flex items-center space-x-3 px-4 py-3 text-[#1A5276] hover:text-[#FF8C00] hover:bg-gray-50 cursor-pointer transition-all rounded-lg border border-transparent hover:border-gray-200 hover:shadow-sm"
                                    onClick={() => {
                                      setHoveredDropdown(null);
                                      setHoveredService(null);
                                    }}
                                  >
                                    <mainItem.icon className="w-5 h-5 flex-shrink-0" />
                                    <span className="text-sm font-medium">{mainItem.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <Button
                        variant="ghost"
                        className="text-gray-300 hover:text-[#FF8C00] hover:bg-gray-700/50 transition-all font-medium flex items-center space-x-1 text-base py-6 px-3 rounded-lg"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Button>
                    )}
                  </div>
                ))}

                <Button
                  className="ml-4 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white hover:shadow-lg hover:shadow-orange-500/25 transition-all text-sm py-2 px-6 font-medium rounded-full"
                  onClick={GotoInquiryForm}
                >
                  Book Consultation
                </Button>

                <Link href="/login" className="ml-2">
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-[#FF8C00] hover:bg-gray-700/50 transition-all font-medium flex items-center space-x-2 text-sm py-2 px-4 rounded-full"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Login</span>
                  </Button>
                </Link>
              </div>

              <div className="lg:hidden ml-auto">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    toggleMenu();
                    setMobileNavStack([]);
                    setNavAnimation(null);
                  }}
                  className="text-gray-300 hover:bg-gray-700/50 w-12 h-12 rounded-lg"
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 z-[9998] animate-fade-in" onClick={resetMobileMenu}></div>
          <div className="fixed top-0 left-0 h-screen w-full bg-white shadow-2xl z-[9999] overflow-y-auto scrollbar-hide flex flex-col animate-slide-in-left">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 sticky top-0 bg-white z-10">
              <div className="flex items-center min-w-0">
                {mobileNavStack.length > 0 && (
                  <button onClick={backMobileMenu} className="mr-2 p-1 rounded hover:bg-gray-100">
                    <ChevronLeft className="w-5 h-5 text-[#1A5276]" />
                  </button>
                )}
                <span className="font-semibold text-[#1A5276] text-lg truncate">
                  {mobileNavStack.length > 0 ? mobileNavStack[mobileNavStack.length - 1].title : "Menu"}
                </span>
              </div>
              <button onClick={resetMobileMenu} className="ml-2 p-1 rounded hover:bg-gray-100">
                <X className="w-5 h-5 text-[#1A5276]" />
              </button>
            </div>
            <div className={`py-2 flex-1 ${navAnimation === 'slide-in'
              ? (isGoingBack ? 'animate-slide-in-left' : 'animate-slide-in-right')
              : navAnimation === 'slide-out'
                ? 'animate-slide-out-left'
                : ''
              }`}>
              <div className="py-2">
                {(mobileNavStack.length === 0 ? navigationItems : mobileNavStack[mobileNavStack.length - 1].items).map((item: any) => (
                  <div key={item.name}>
                    {(() => {
                      if (mobileNavStack.length > 0 && (mobileNavStack[mobileNavStack.length - 1].title === "Services" || mobileNavStack[mobileNavStack.length - 1].title === "Company" || mobileNavStack[mobileNavStack.length - 1].title === "ERPNext")) {
                        const parentItem = navigationItems.find(i => i.name === mobileNavStack[mobileNavStack.length - 1].title);
                        const detailedItems = (parentItem && (parentItem as any).detailedItems) || {};
                        return detailedItems[item.name] ? true : false;
                      }
                      return item.hasDropdown || item.mainItems || item.items;
                    })() ? (
                      <button
                        className="flex items-center w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors rounded-lg"
                        onClick={() => {
                          if (mobileNavStack.length > 0 && (mobileNavStack[mobileNavStack.length - 1].title === "Services" || mobileNavStack[mobileNavStack.length - 1].title === "Company" || mobileNavStack[mobileNavStack.length - 1].title === "ERPNext")) {
                            const parentItem = navigationItems.find(i => i.name === mobileNavStack[mobileNavStack.length - 1].title);
                            const detailedItems = (parentItem && (parentItem as any).detailedItems) || {};
                            if (detailedItems[item.name]) {
                              openMobileSubmenu(item.name, detailedItems[item.name]);
                            } else {
                              resetMobileMenu();
                            }
                          } else if ((item.name === "Services" || item.name === "Company" || item.name === "ERPNext") && item.mainItems) {
                            openMobileSubmenu(item.name, item.mainItems.map((mainItem: any) => ({ ...mainItem, parent: item.name })));
                          } else if (item.mainItems) {
                            openMobileSubmenu(item.name, item.mainItems.map((mainItem: any) => ({ ...mainItem, parent: item.name })));
                          } else if (item.items) {
                            openMobileSubmenu(item.name, item.items);
                          }
                        }}
                      >
                        <item.icon className="w-6 h-6 mr-3 text-[#1A5276]" />
                        <span className="font-medium text-[#1A5276] flex-1">{item.name}</span>
                        <ChevronRight className="w-4 h-4 text-[#1A5276]" />
                      </button>
                    ) : (
                      <a
                        href={item.href || "#"}
                        className="flex items-center w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors rounded-lg"
                        onClick={resetMobileMenu}
                      >
                        <item.icon className="w-6 h-6 mr-3 text-[#1A5276]" />
                        <span className="font-medium text-[#1A5276] flex-1">{item.name}</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-100">
              <Link href="/login" className="block mb-3">
                <Button className="w-full rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all text-sm py-3 font-medium flex items-center justify-center space-x-2">
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Button>
              </Link>
              <Button className="w-full rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white hover:shadow-lg transition-all text-sm py-3 font-medium"
                onClick={() => {
                  GotoInquiryForm();
                  toggleMenu();
                }}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

