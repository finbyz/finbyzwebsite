"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Home, Users, Building2, Wrench, FileText, Briefcase, Phone, BookOpen, Target, Factory, ShoppingCart, Heart, GraduationCap, Truck, Leaf, TestTube, Hammer, Pill, Eye, Zap, Code, UserPlus, Lightbulb, Calendar, Star, Mail, ChevronLeft, ChevronRight, Handshake, Rocket, Send, Sparkles, BarChart3, Package, DollarSign, TrendingUp, Search, Video, Newspaper, Smartphone, Brain, CheckCircle, MapPin, LogIn } from "lucide-react";
import { useMobileMenu } from "@/contexts/MobileMenuContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";

interface NavigationItem {
  name: string;
  hasDropdown: boolean;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  mainItems?: Array<{ name: string; icon: React.ComponentType<{ className?: string }> }>;
  detailedItems?: Record<string, Array<{ name: string; description: string; icon: React.ComponentType<{ className?: string }>; href: string }>>;
}

interface MobileNavStackItem {
  title: string;
  items: any[];
  parent?: string;
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navigationItems: NavigationItem[] = [
    // {
    //   name: "Solutions",
    //   hasDropdown: false,
    //   icon: Target,
    //   href: "/solutions"
    // },
    {
      name: "ERPNext",
      hasDropdown: true,
      icon: Building2,
      mainItems: [
        { name: "ERPNext Services", icon: Wrench },
        { name: "ERPNext Products & Add-ons", icon: Package },
        { name: "ERPNext Solutions", icon: Target },
        { name: "ERPNext Partners", icon: Handshake }
      ],
      detailedItems: {
        "ERPNext Services": [
          {
            name: "ERPNext Implementation",
            description: "Complete ERPNext setup and configuration",
            icon: Wrench,
            href: "/hire-erpnext-implementer"
          },
          {
            name: "ERPNext Certified Partner",
            description: "Certified ERPNext partnership services",
            icon: Star,
            href: "/erpnext-certified-partner"
          },
          {
            name: "ERPNext Service Provider in UAE",
            description: "ERPNext services in United Arab Emirates",
            icon: Building2,
            href: "/erpnext-services-in-uae"
          },
          {
            name: "ERPNext Services in Canada",
            description: "ERPNext services in Canada",
            icon: Building2,
            href: "/erpnext-services-in-canada"
          },
          {
            name: "ERPNext Partner in Saudi Arabia",
            description: "ERPNext partnership in Saudi Arabia",
            icon: Building2,
            href: "/erpnext-partner-in-saudi-arabia"
          },
          {
            name: "ERPNext Service Provider",
            description: "Professional ERPNext service provider",
            icon: Building2,
            href: "/erpnext-service-provider"
          },
          {
            name: "Website Development",
            description: "Custom website development services",
            icon: Code,
            href: "/website-development"
          }
        ],
        "ERPNext Products & Add-ons": [
          {
            name: "Productify",
            description: "Product management and cataloging",
            icon: Package,
            href: "/productify"
          },
          {
            name: "Meeting Management",
            description: "Meeting and calendar management",
            icon: Calendar,
            href: "/meeting-management-erpnext"
          },
          {
            name: "FD Management",
            description: "Fixed deposit management system",
            icon: DollarSign,
            href: "/fd-management-erpnext"
          },
          {
            name: "EMD Management",
            description: "Earnest money deposit management",
            icon: DollarSign,
            href: "/emd-management-erpnext"
          },
          {
            name: "Forward Contract Management",
            description: "Forward contract and hedging management",
            icon: FileText,
            href: "/forward-contract-erpnext"
          },
          {
            name: "RODTEP Claim",
            description: "Remission of Duties and Taxes on Exported Products",
            icon: FileText,
            href: "/rodtep-claim-erpnext"
          },
          {
            name: "Investment Portfolio",
            description: "Investment and portfolio management",
            icon: TrendingUp,
            href: "/investment-portfolio-erpnext"
          },
          {
            name: "Advanced Authorisation Licence",
            description: "Advanced authorization license management",
            icon: FileText,
            href: "/advanced-authorisation-licence-erpnext"
          },
          {
            name: "Argentina E-Invoicing",
            description: "Argentina electronic invoicing compliance",
            icon: FileText,
            href: "/argentina-electronic-invoicing-erpnext-afip-compliance-automation"
          }
        ],
        "ERPNext Solutions": [
          {
            name: "ERPNext Software Overview",
            description: "Complete overview of ERPNext software",
            icon: Building2,
            href: "/erpnext-software"
          },
          {
            name: "CRM Software",
            description: "Customer relationship management software",
            icon: Users,
            href: "/crm-software"
          },
          {
            name: "Human Resource System",
            description: "Comprehensive HR management system",
            icon: Users,
            href: "/human-resource-system"
          },
          {
            name: "ERP Software Development",
            description: "Custom ERP software development",
            icon: Code,
            href: "/erp-software"
          },
          {
            name: "ERP Modules",
            description: "Comprehensive ERP module overview",
            icon: Package,
            href: "/modules-of-erp"
          },
          {
            name: "ERPNext Website SEO",
            description: "SEO optimization for ERPNext websites",
            icon: Search,
            href: "/erpnext-seo"
          },
          {
            name: "ERP for Education",
            description: "ERP solutions for educational institutions",
            icon: GraduationCap,
            href: "/erp-for-education"
          }
        ],
        "ERPNext Partners": [
          {
            name: "Become a Partner",
            description: "Join our partner network",
            icon: Handshake,
            href: "/erpnext/partners/join"
          },
          {
            name: "Partner Benefits",
            description: "Benefits of partnering with us",
            icon: Star,
            href: "/erpnext/partners/benefits"
          },
          {
            name: "Partner Portal",
            description: "Access partner resources",
            icon: Users,
            href: "/erpnext/partners/portal"
          }
        ]
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
        { name: "Support & Maintenance", icon: Phone }
      ],
      detailedItems: {
        "ERP Implementation": [
          {
            name: "ERPNext Implementation",
            description: "Complete ERPNext setup",
            icon: Wrench,
            href: "/services/erpnext-implementation"
          },
          {
            name: "Custom ERP Development",
            description: "Custom ERP solutions",
            icon: Code,
            href: "/services/custom-erp"
          },
          {
            name: "ERP Migration",
            description: "Data migration services",
            icon: Truck,
            href: "/services/erp-migration"
          }
        ],
        "AI Automation": [
          {
            name: "Process Automation",
            description: "Automate business processes",
            icon: Zap,
            href: "/services/process-automation"
          },
          {
            name: "AI Integration",
            description: "AI-powered solutions",
            icon: Sparkles,
            href: "/services/ai-integration"
          },
          {
            name: "Machine Learning",
            description: "ML-based automation",
            icon: Brain,
            href: "/services/machine-learning"
          }
        ],
        "Software Development": [
          {
            name: "Web Applications",
            description: "Custom web development",
            icon: Code,
            href: "/services/web-development"
          },
          {
            name: "Mobile Apps",
            description: "Mobile application development",
            icon: Smartphone,
            href: "/services/mobile-development"
          },
          {
            name: "API Development",
            description: "API and middleware services",
            icon: Code,
            href: "/services/api-development"
          }
        ],
        "Consulting": [
          {
            name: "Digital Transformation",
            description: "Transform your business digitally",
            icon: Zap,
            href: "/services/digital-transformation"
          },
          {
            name: "Process Consulting",
            description: "Optimize business processes",
            icon: Target,
            href: "/services/process-consulting"
          },
          {
            name: "Technology Consulting",
            description: "Technology strategy and planning",
            icon: Lightbulb,
            href: "/services/technology-consulting"
          }
        ],
        "Support & Maintenance": [
          {
            name: "24/7 Support",
            description: "Round-the-clock technical support",
            icon: Phone,
            href: "/services/24-7-support"
          },
          {
            name: "System Maintenance",
            description: "Regular system maintenance",
            icon: Wrench,
            href: "/services/system-maintenance"
          },
          {
            name: "Performance Optimization",
            description: "Optimize system performance",
            icon: TrendingUp,
            href: "/services/performance-optimization"
          }
        ]
      }
    },
    {
      name: "Industries",
      hasDropdown: true,
      icon: Factory,
      mainItems: [
        { name: "Manufacturing", icon: Factory },
        { name: "Textile", icon: ShoppingCart },
        { name: "Trading & Distribution", icon: Truck },
        { name: "Services", icon: Wrench },
        { name: "Electronics", icon: Zap },
        { name: "Retail & eCommerce", icon: ShoppingCart },
        { name: "Construction", icon: Hammer },
        { name: "Healthcare", icon: Heart },
        { name: "Education", icon: GraduationCap },
        { name: "Logistics", icon: Truck },
        { name: "Agriculture", icon: Leaf },
        { name: "Chemicals", icon: TestTube },
        { name: "Mining", icon: Hammer },
        { name: "Pharmaceuticals", icon: Pill }
      ],
    },
    {
      name: "Insights",
      hasDropdown: false,
      icon: BarChart3,
      href: "/insights"
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
            href: "/about"
          },
          {
            name: "Steer Your Vision",
            description: "Our approach to transformation",
            icon: Target,
            href: "/steer-your-vision"
          },
          {
            name: "Life at Finbyz",
            description: "Our work culture",
            icon: Heart,
            href: "/life-at-finbyz"
          },
          {
            name: "Meet the Team",
            description: "Meet our team members",
            icon: Users,
            href: "/our-team"
          }
        ],
        "Work With Us": [
          {
            name: "Start Your ERP Journey",
            description: "Begin your ERP transformation",
            icon: Rocket,
            href: "/start-erp-journey"
          },
          {
            name: "Hire Our Experts",
            description: "Hire our experienced professionals",
            icon: Users,
            href: "/hire-experts"
          },
          {
            name: "Reseller / Strategic Partnerships",
            description: "Partner with us strategically",
            icon: Handshake,
            href: "/partnerships"
          },
          {
            name: "Contact Us",
            description: "Get in touch with our team",
            icon: Phone,
            href: "/contact-us"
          }
        ],
        "Careers": [
          {
            name: "Career Opportunities",
            description: "Explore job opportunities",
            icon: Briefcase,
            href: "/career"
          },
          {
            name: "Internships & Freshers",
            description: "Internship and fresher positions",
            icon: GraduationCap,
            href: "/internships"
          },
          {
            name: "Why Join Finbyz",
            description: "Benefits of working with us",
            icon: Star,
            href: "/why-join-finbyz"
          },
          {
            name: "Apply Now",
            description: "Submit your application",
            icon: Send,
            href: "/apply-now"
          }
        ]
      }
    }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="flex justify-between items-center h-12 lg:h-14 w-full">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/FinByz_2025_Rect-removebg-preview.png"
                  alt="Finbyz"
                  width={120}
                  height={32}
                  priority
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-8 ml-auto">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <Button
                        variant="ghost"
                        className={`text-gray-300 hover:text-[#FF8C00] hover:bg-gray-700/50 transition-all font-medium flex items-center space-x-1 text-base py-6 px-3 rounded-lg relative group ${
                          hoveredDropdown === item.name ? 'text-[#FF8C00] bg-gray-700/50' : ''
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
                        <ChevronDown className={`w-3 h-3 transition-transform ${
                          hoveredDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF8C00] transition-all duration-300 group-hover:w-full"></div>
                      </Button>
                      <div 
                        className={`absolute top-full bg-white border border-gray-200 shadow-2xl rounded-xl transition-all duration-300 z-50 ${
                          hoveredDropdown === item.name 
                            ? 'opacity-100 visible translate-y-0' 
                            : 'opacity-0 invisible translate-y-2'
                        }`}
                        style={{
                          maxWidth: '90vw',
                          maxHeight: '85vh',
                          left: '50%',
                          transform: 'translateX(-50%)',
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
                                {item.name === "Services" ? "Our Services" : item.name === "Company" ? "Our Company" : "ERPNext Solutions"}
                              </h3>
                              <div className="space-y-2">
                                {item.mainItems?.map((mainItem) => (
                                  <div
                                    key={mainItem.name}
                                    className={`group/main flex items-center space-x-3 px-4 py-3 text-[#1A5276] hover:text-[#FF8C00] hover:bg-white cursor-pointer transition-all rounded-lg border border-transparent hover:border-gray-200 hover:shadow-sm ${
                                      hoveredService === mainItem.name ? 'bg-white border-gray-200 shadow-sm text-[#FF8C00]' : ''
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
                            <h3 className="font-semibold text-[#1A5276] mb-6 text-lg">
                              {item.name === "Services" ? "Our Services" : item.name === "Company" ? "Our Company" : "ERPNext Solutions"}
                            </h3>
                            <div className="space-y-2">
                              {item.mainItems?.map((mainItem) => (
                                <Link
                                  key={mainItem.name}
                                  href={item.detailedItems?.[mainItem.name]?.[0]?.href || "#"}
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
                  {mobileNavStack.length > 0 ? mobileNavStack[mobileNavStack.length-1].title : "Menu"}
                </span>
              </div>
              <button onClick={resetMobileMenu} className="ml-2 p-1 rounded hover:bg-gray-100">
                <X className="w-5 h-5 text-[#1A5276]" />
              </button>
            </div>
            <div className={`py-2 flex-1 ${
              navAnimation === 'slide-in' 
                ? (isGoingBack ? 'animate-slide-in-left' : 'animate-slide-in-right')
                : navAnimation === 'slide-out' 
                ? 'animate-slide-out-left' 
                : ''
            }`}>
              <div className="py-2">
                {(mobileNavStack.length === 0 ? navigationItems : mobileNavStack[mobileNavStack.length-1].items).map((item: any) => (
                  <div key={item.name}>
                    {(() => {
                      if (mobileNavStack.length > 0 && (mobileNavStack[mobileNavStack.length-1].title === "Services" || mobileNavStack[mobileNavStack.length-1].title === "Company" || mobileNavStack[mobileNavStack.length-1].title === "ERPNext")) {
                        const parentItem = navigationItems.find(i => i.name === mobileNavStack[mobileNavStack.length-1].title);
                        const detailedItems = (parentItem && (parentItem as any).detailedItems) || {};
                        return detailedItems[item.name] ? true : false;
                      }
                      return item.hasDropdown || item.mainItems || item.items;
                    })() ? (
                      <button
                        className="flex items-center w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors rounded-lg"
                        onClick={() => {
                          if (mobileNavStack.length > 0 && (mobileNavStack[mobileNavStack.length-1].title === "Services" || mobileNavStack[mobileNavStack.length-1].title === "Company" || mobileNavStack[mobileNavStack.length-1].title === "ERPNext")) {
                            const parentItem = navigationItems.find(i => i.name === mobileNavStack[mobileNavStack.length-1].title);
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
              <Button className="w-full rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white hover:shadow-lg transition-all text-sm py-3 font-medium">
                Book Consultation
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

