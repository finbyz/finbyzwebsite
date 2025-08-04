"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Home, Users, Building2, Wrench, FileText, Briefcase, Phone, BookOpen, Target, Factory, ShoppingCart, Heart, GraduationCap, Truck, Leaf, TestTube, Hammer, Pill, Eye, Zap, Code, UserPlus, Lightbulb, Calendar, Star, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { useMobileMenu } from "@/contexts/MobileMenuContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileNavStack, setMobileNavStack] = useState<{title: string, items: any[], parent?: string}[]>([]);
  const [navAnimation, setNavAnimation] = useState<'slide-in' | 'slide-out' | null>(null);
  const [isGoingBack, setIsGoingBack] = useState(false);

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
      setIsMobileMenuOpen(false);
      setExpandedMobileItems([]);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
    setExpandedMobileItems([]);
  };

  // Helper to open a submenu in mobile
  const openMobileSubmenu = (title: string, items: any[]) => {
    setIsGoingBack(false);
    setNavAnimation('slide-out');
    setTimeout(() => {
      setMobileNavStack((stack) => [...stack, { title, items }]);
      setNavAnimation('slide-in');
    }, 150);
  };
  // Helper to go back in mobile menu
  const backMobileMenu = () => {
    setIsGoingBack(true);
    setNavAnimation('slide-out');
    setTimeout(() => {
      setMobileNavStack((stack) => stack.slice(0, -1));
      setNavAnimation('slide-in');
    }, 150);
  };
  // Helper to reset mobile menu
  const resetMobileMenu = () => {
    setMobileNavStack([]);
    setIsMobileMenuOpen(false);
    setNavAnimation(null);
    setIsGoingBack(false);
  };

  const navigationItems = [
    {
      name: "Industries",
      hasDropdown: true,
      icon: Building2,
      items: [
        { name: "Manufacturing", href: "#industries/manufacturing", icon: Factory },
        { name: "Textile", href: "#industries/textile", icon: ShoppingCart },
        { name: "Trading & Distribution", href: "#industries/trading", icon: Truck },
        { name: "Services", href: "#industries/services", icon: Wrench },
        { name: "Electronics", href: "#industries/electronics", icon: Zap },
        { name: "Retail & eCommerce", href: "#industries/retail", icon: ShoppingCart },
        { name: "Construction", href: "#industries/construction", icon: Hammer },
        { name: "Healthcare", href: "#industries/healthcare", icon: Heart },
        { name: "Education", href: "#industries/education", icon: GraduationCap },
        { name: "Logistics", href: "#industries/logistics", icon: Truck },
        { name: "Agriculture", href: "#industries/agriculture", icon: Leaf },
        { name: "Chemicals", href: "#industries/chemicals", icon: TestTube },
        { name: "Mining", href: "#industries/mining", icon: Hammer },
        { name: "Pharmaceuticals", href: "#industries/pharmaceuticals", icon: Pill },
      ]
    },
    {
      name: "Services",
      hasDropdown: true,
      icon: Wrench,
      mainItems: [
        { name: "ERP Implementation", icon: Building2 },
        { name: "AI Automation", icon: Zap },
        { name: "Software Development", icon: Code },
        { name: "Resource Augmentation", icon: UserPlus },
        { name: "Consulting", icon: Lightbulb },
      ],
      detailedItems: {
        "ERP Implementation": [
          { name: "What We Offer", href: "#services/erp/offer", icon: Target },
          { name: "Resource-based Model", href: "#services/erp/resource", icon: Users },
          { name: "Fixed Scope Implementation", href: "#services/erp/fixed", icon: Calendar },
          { name: "Migration Support", href: "#services/erp/migration", icon: Truck },
          { name: "Customization & Scripting", href: "#services/erp/customization", icon: Code },
          { name: "Integrations", href: "#services/erp/integrations", icon: Zap },
          { name: "Support & AMC", href: "#services/erp/support", icon: Wrench },
        ],
        "AI Automation": [
          { name: "Overview", href: "#services/ai/overview", icon: Eye },
          { name: "Use Cases", href: "#services/ai/usecases", icon: Target },
          { name: "Prebuilt Automations", href: "#services/ai/prebuilt", icon: Code },
          { name: "Custom Workflow Development", href: "#services/ai/workflow", icon: Code },
          { name: "LLM Integration Services", href: "#services/ai/llm", icon: Zap },
          { name: "AI-ERP Integration", href: "#services/ai/erp-integration", icon: Building2 },
        ],
        "Software Development": [
          { name: "Web App Development", href: "#services/software/web", icon: Code },
          { name: "Mobile App Development", href: "#services/software/mobile", icon: Code },
          { name: "Product Development", href: "#services/software/product", icon: Code },
          { name: "API / Middleware Services", href: "#services/software/api", icon: Code },
          { name: "Support & Maintenance", href: "#services/software/support", icon: Wrench },
        ],
        "Resource Augmentation": [
          { name: "Dedicated Developer Model", href: "#services/augmentation/developer", icon: Code },
          { name: "Dedicated ERP Consultant Model", href: "#services/augmentation/consultant", icon: Building2 },
          { name: "Blended Teams", href: "#services/augmentation/blended", icon: Users },
          { name: "Onsite / Hybrid Option", href: "#services/augmentation/onsite", icon: Building2 },
          { name: "Pricing & Engagement Models", href: "#services/augmentation/pricing", icon: Calendar },
        ],
        "Consulting": [
          { name: "Process Consulting", href: "#services/consulting/process", icon: Target },
          { name: "Digital Transformation", href: "#services/consulting/digital", icon: Zap },
          { name: "Data Analytics Setup", href: "#services/consulting/analytics", icon: Eye },
          { name: "Change Management", href: "#services/consulting/change", icon: Users },
        ],
      }
    },
    {
      name: "Blog",
      hasDropdown: true,
      icon: FileText,
      items: [
        { name: "ERPNext", href: "#blog/erpnext", icon: Building2 },
        { name: "AI Automation", href: "#blog/ai", icon: Zap },
        { name: "Use Cases", href: "#blog/usecases", icon: Target },
        { name: "Client Success Stories", href: "#blog/success", icon: Star },
        { name: "How-to Guides", href: "#blog/guides", icon: BookOpen },
      ]
    },
    {
      name: "About",
      hasDropdown: true,
      icon: Users,
      items: [
        { name: "Our Story", href: "#about/story", icon: BookOpen },
        { name: "Vision & Mission", href: "#about/vision", icon: Target },
        { name: "Leadership Team", href: "#about/leadership", icon: Users },
        { name: "Core Values", href: "#about/values", icon: Star },
        { name: "Life @ Finbyz", href: "#about/life", icon: Heart },
        { name: "Partners & Certifications", href: "#about/partners", icon: Building2 },
        { name: "CSR / Sustainability", href: "#about/csr", icon: Leaf },
      ]
    },
    {
      name: "Career",
      hasDropdown: true,
      icon: Briefcase,
      items: [
        { name: "Life at Finbyz", href: "#career/life", icon: Heart },
        { name: "Current Openings", href: "#career/openings", icon: Calendar },
        { name: "Internship Programs", href: "#career/internships", icon: GraduationCap },
        { name: "Our Hiring Process", href: "#career/hiring", icon: Users },
        { name: "Employee Testimonials", href: "#career/testimonials", icon: Star },
      ]
    },
    { name: "Contact", href: "#contact", hasDropdown: false, icon: Phone },
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
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-xl lg:text-2xl font-bold text-white">
                  Finbyz
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
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
                        onMouseEnter={() => setHoveredDropdown(item.name)}
                        onMouseLeave={() => setHoveredDropdown(null)}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${
                          hoveredDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                        {/* Hover underline effect */}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF8C00] transition-all duration-300 group-hover:w-full"></div>
                      </Button>
                      <div 
                        className={`absolute top-full left-0 bg-white border border-gray-200 shadow-2xl rounded-xl transition-all duration-300 transform z-50 ${
                          hoveredDropdown === item.name 
                            ? 'opacity-100 visible translate-y-0' 
                            : 'opacity-0 invisible translate-y-2'
                        }`}
                        onMouseEnter={() => setHoveredDropdown(item.name)}
                        onMouseLeave={(e) => {
                          // Only close if we're not moving to a child element
                          const relatedTarget = e.relatedTarget as HTMLElement;
                          if (!e.currentTarget.contains(relatedTarget)) {
                            setHoveredDropdown(null);
                          }
                        }}
                      >
                          {item.name === "Services" ? (
                            // Services dropdown with two-panel layout
                            <div 
                              className="flex w-[800px] min-h-[400px]"
                              onMouseEnter={() => setHoveredDropdown(item.name)}
                              onMouseLeave={() => setHoveredDropdown(null)}
                            >
                              {/* Left Panel - Main Categories */}
                              <div className="w-1/2 p-6 border-r border-gray-200 bg-gray-50/30">
                                <h3 className="font-semibold text-[#1A5276] mb-6 text-lg">Our Services</h3>
                                <div className="space-y-2">
                                  {item.mainItems?.map((mainItem) => (
                                    <div
                                      key={mainItem.name}
                                      className={`group/main flex items-center space-x-3 px-4 py-3 text-[#1A5276] hover:text-[#FF8C00] hover:bg-white cursor-pointer transition-all rounded-lg border border-transparent hover:border-gray-200 hover:shadow-sm ${
                                        hoveredService === mainItem.name ? 'bg-white border-gray-200 shadow-sm text-[#FF8C00]' : ''
                                      }`}
                                      onMouseEnter={() => setHoveredService(mainItem.name)}
                                      onMouseLeave={() => {
                                        // Keep the service selected when moving to right panel
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
                              
                              {/* Right Panel - Detailed Items */}
                              <div className="w-1/2 p-6">
                                {hoveredService ? (
                                  <div>
                                    <h4 className="font-semibold text-[#1A5276] mb-4 text-lg border-b border-gray-100 pb-2">{hoveredService}</h4>
                                    <div className="space-y-2">
                                      {(item.detailedItems as any)?.[hoveredService]?.map((subItem: any) => (
                                        <div
                                          key={subItem.name}
                                          className="flex items-center space-x-3 px-3 py-2 text-[#1A5276] hover:text-[#FF8C00] hover:bg-[#1A5276]/5 cursor-pointer transition-all rounded-lg text-sm"
                                          onClick={() => {
                                            // Handle click on submenu item
                                            console.log('Clicked:', subItem.name);
                                            setHoveredDropdown(null);
                                            setHoveredService(null);
                                          }}
                                        >
                                          <subItem.icon className="w-4 h-4 flex-shrink-0" />
                                          <span className="font-medium">{subItem.name}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="flex items-center justify-center h-full">
                                    <div className="text-center text-gray-400">
                                      <Wrench className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                      <p className="text-sm">Hover over a service to see details</p>
                                    </div>
                                  </div>
                                )}
                              </div>
        </div>
                          ) : (
                            // Regular dropdown for other items
                            <div className="w-80">
                              <div className="p-4">
                                <div className="grid grid-cols-1 gap-1">
                                  {item.items?.map((subItem) => (
                                    <div
                                      key={subItem.name}
                                      className="flex items-center space-x-3 px-3 py-2.5 text-[#1A5276] hover:text-[#FF8C00] hover:bg-gray-100 cursor-pointer transition-all rounded-lg"
                                    >
                                      <subItem.icon className="w-4 h-4 flex-shrink-0" />
                                      <span className="text-sm font-medium">{subItem.name}</span>
                                    </div>
                                  ))}
                                </div>
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
              
              {/* CTA Button */}
              <Button 
                className="ml-4 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white hover:shadow-lg hover:shadow-orange-500/25 transition-all text-sm py-2 px-6 font-medium rounded-full"
              >
                Book Consultation
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden ml-auto">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                  setMobileNavStack([]);
                  setNavAnimation(null); // Fix: No animation on initial open
                }}
                className="text-gray-300 hover:bg-gray-700/50 w-12 h-12 rounded-lg"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
        </nav>
      
      {/* Mobile Slide-in Drawer - Outside nav container */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/30 z-[9998] animate-fade-in" onClick={resetMobileMenu}></div>
          {/* Drawer */}
          <div className="fixed top-0 left-0 h-screen w-full bg-white shadow-2xl z-[9999] overflow-y-auto flex flex-col animate-slide-in-left">
            {/* Header with Back and Close */}
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
            {/* Navigation Stack */}
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
                      // Check if we're in Services submenu (second level)
                      if (mobileNavStack.length > 0 && mobileNavStack[mobileNavStack.length-1].title === "Services") {
                        // We're in Services submenu, check if this item has detailedItems
                        const services = navigationItems.find(i => i.name === "Services");
                        const detailedItems = (services && (services as any).detailedItems) || {};
                        return detailedItems[item.name] ? true : false;
                      }
                      return item.hasDropdown || item.mainItems || item.items;
                    })() ? (
                      <button
                        className="flex items-center w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors rounded-lg"
                        onClick={() => {
                          // Check if we're in the Services submenu (second level)
                          if (mobileNavStack.length > 0 && mobileNavStack[mobileNavStack.length-1].title === "Services") {
                            // We're in Services submenu, check if this item has detailedItems
                            const services = navigationItems.find(i => i.name === "Services");
                            const detailedItems = (services && (services as any).detailedItems) || {};
                            if (detailedItems[item.name]) {
                              // Navigate to third level (detailedItems)
                              openMobileSubmenu(item.name, detailedItems[item.name]);
                            } else {
                              // No detailedItems, treat as regular link
                              resetMobileMenu();
                            }
                          } else if (item.name === "Services" && item.mainItems) {
                            // For Services main menu, show mainItems as second level
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
                {/* For Services mainItems, show detailedItems as next submenu */}
              </div>
            </div>
            {/* User/CTA at bottom */}
            <div className="px-6 py-4 border-t border-gray-100">
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

