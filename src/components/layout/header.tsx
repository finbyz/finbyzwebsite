"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Home, Users, Building2, Wrench, FileText, Briefcase, Phone, BookOpen, Target, Factory, ShoppingCart, Heart, GraduationCap, Truck, Leaf, TestTube, Hammer, Pill, Eye, Zap, Code, UserPlus, Lightbulb, Calendar, Star, Mail } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-sm shadow-sm"
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="text-2xl lg:text-3xl font-bold tracking-wider text-[#1A5276] hover:text-[#FF8C00] transition-colors cursor-pointer"
            >
              Finbyz.tech
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <Button
                      variant="ghost"
                      className="text-[#1A5276] hover:text-[#FF8C00] hover:bg-[#1A5276]/5 transition-all font-medium flex items-center space-x-1 text-base py-6 px-3 rounded-lg"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                    </Button>
                    <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                        {item.name === "Services" ? (
                          // Services dropdown with two-panel layout
                          <div className="flex w-[800px] min-h-[400px]">
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
                                    onMouseLeave={() => setHoveredService(null)}
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
                                    className="flex items-center space-x-3 px-3 py-2.5 text-[#1A5276] hover:text-[#FF8C00] hover:bg-[#1A5276]/5 cursor-pointer transition-all rounded-lg"
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
                    className="text-[#1A5276] hover:text-[#FF8C00] hover:bg-[#1A5276]/5 transition-all font-medium flex items-center space-x-1 text-base py-6 px-3 rounded-lg"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Button>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <div className="ml-4">
              <Button className="rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white hover:shadow-lg hover:scale-105 transition-all text-sm px-6 py-6 font-medium">
                Book Consultation
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setExpandedMobileItems([]);
              }}
              className="text-[#1A5276] hover:bg-[#1A5276]/10 w-12 h-12 rounded-lg"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileItem(item.name)}
                        className="flex items-center justify-between w-full text-left px-4 py-3 text-[#1A5276] hover:bg-[#1A5276]/5 rounded-lg transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-4 h-4" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          expandedMobileItems.includes(item.name) ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {expandedMobileItems.includes(item.name) && (
                        <div className="mt-2 ml-8 space-y-1">
                          {item.name === "Services" ? (
                            // Services mobile menu with main categories
                            item.mainItems?.map((mainItem) => (
                              <div key={mainItem.name} className="space-y-1">
                                <div className="flex items-center space-x-3 px-4 py-2 text-[#1A5276] font-medium">
                                  <mainItem.icon className="w-4 h-4" />
                                  <span className="text-sm">{mainItem.name}</span>
                                </div>
                                {/* Show detailed items for each main category */}
                                <div className="ml-6 space-y-1">
                                  {(item.detailedItems as any)?.[mainItem.name]?.map((subItem: any) => (
                                    <div
                                      key={subItem.name}
                                      className="flex items-center space-x-3 px-4 py-2 text-[#1A5276] hover:bg-[#1A5276]/5 rounded-lg transition-colors"
                                    >
                                      <subItem.icon className="w-4 h-4" />
                                      <span className="text-sm">{subItem.name}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))
                          ) : (
                            // Regular items for other dropdowns
                            item.items?.map((subItem) => (
                              <div
                                key={subItem.name}
                                className="flex items-center space-x-3 px-4 py-2 text-[#1A5276] hover:bg-[#1A5276]/5 rounded-lg transition-colors"
                              >
                                <subItem.icon className="w-4 h-4" />
                                <span className="text-sm">{subItem.name}</span>
                              </div>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3 px-4 py-3 text-[#1A5276] hover:bg-[#1A5276]/5 rounded-lg transition-colors">
                      <item.icon className="w-4 h-4" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4">
                <Button className="w-full rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white hover:shadow-lg transition-all text-sm py-3 font-medium">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

