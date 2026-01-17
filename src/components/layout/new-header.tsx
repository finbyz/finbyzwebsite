"use client";

import { useState, useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import { ChevronLeft, LucideIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronRight,
  LogIn,
} from "lucide-react";
import { getNavigationItems, NavNode } from "@/config/navigation";


const initialNavigationItems = getNavigationItems();

import { useMobileMenu } from "@/contexts/MobileMenuContext";
import Link from "next/link";
import Image from "next/image";





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
  const [navItems, setNavItems] = useState<NavNode[]>(initialNavigationItems);
  const [thirdLevelPosition, setThirdLevelPosition] = useState<{ top: number, left: number } | null>(null);
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

  const level3Refs = useRef<Map<string, HTMLDivElement>>(new Map());



  // Dynamic Child Loading
  useEffect(() => {
    const loadDynamicChildren = async () => {
      const traverseAndLoad = async (nodes: NavNode[]): Promise<NavNode[]> => {
        return Promise.all(nodes.map(async (node) => {
          let newNode = { ...node };
          if (newNode.childGenerator) {
            try {
              const generatedChildren = await newNode.childGenerator();
              newNode.children = [...(newNode.children || []), ...generatedChildren];
            } catch (error) {
              console.error(`Failed to load dynamic children for ${newNode.name}`, error);
            }
          }
          if (newNode.children) {
            newNode.children = await traverseAndLoad(newNode.children);
          }
          return newNode;
        }));
      };

      const updatedItems = await traverseAndLoad(initialNavigationItems);
      setNavItems(updatedItems);
    };

    loadDynamicChildren();
  }, []);




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


  // Auto-select first Level 3 item if it has children
  useEffect(() => {
    if (hoveredDropdown && hoveredService) {
      const navItem = navItems.find(i => i.name === hoveredDropdown);
      const serviceNode = navItem?.children?.find(n => n.name === hoveredService);

      if (serviceNode?.children) {
        // Find the first child that has its own children (Level 4)
        const firstChildWithChildren = serviceNode.children.find(c => c.children && c.children.length > 0);

        if (firstChildWithChildren) {
          const key = `${hoveredDropdown}-${firstChildWithChildren.name}`;
          // Small timeout to allow render to update refs
          setTimeout(() => {
            const el = level3Refs.current.get(key);
            if (el) {
              const rect = el.getBoundingClientRect();
              setThirdLevelPosition({
                top: rect.top,
                left: rect.right + 8
              });
              setActiveThirdLevel(firstChildWithChildren.name);
            }
          }, 0);
        }
      }
    }
  }, [hoveredDropdown, hoveredService, navItems]);


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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm"
          }`}
      >
        <div className="container-custom">
          <div className="w-full">
            <div className="flex justify-between items-center h-12 lg:h-14 w-full">
              {/* ================= LOGO (LEFT) ================= */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image src="/FinByz Logo 2025 copy.png" alt="Finbyz" width={120} height={32} priority />
                </Link>
              </div>

              {/* ================= DESKTOP NAVIGATION ================= */}
              <div className="hidden lg:flex items-center ml-8 space-x-4">
                {/* <div className="hidden lg:grid grid-flow-col auto-cols-max grid-rows-2 gap-x-4 gap-y-1 ml-8"> */}
                {navItems.map((item) => {
                  const leftNodes = item.children ?? [];
                  const hasDropdown = leftNodes.length > 0;

                  const hasRightPanel = leftNodes.some(node => node.children && node.children.length > 0);

                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => {
                        setHoveredDropdown(item.name);
                        const firstWithChildren = leftNodes.find(node => node.children && node.children.length > 0);
                        if (firstWithChildren) {
                          setHoveredService(firstWithChildren.name);
                        }
                      }}
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
                          className={`z-[200] bg-white border shadow-2xl rounded-3xl overflow-hidden transition-all duration-200 ${hoveredDropdown === item.name ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
                            } ${hasRightPanel
                              ? "fixed top-[56px] left-1/2 -translate-x-1/2"
                              : "absolute top-full left-1/2 -translate-x-1/2"
                            }`}
                          style={{ width: hasRightPanel ? "1100px" : "auto", maxWidth: "96vw", minWidth: "300px" }}
                        >


                          <div className={`grid ${hasRightPanel ? "grid-cols-2" : "grid-cols-1"}`}>

                            {/* LEFT PANEL */}
                            <div className={`p-6 bg-slate-50/50 font-['Inter','Segoe UI','system-ui'] ${hasRightPanel ? "border-r border-slate-200" : ""}`}>
                              <h3 className="text-lg font-semibold text-[#1A5276] mb-6">{item.name}</h3>
                              {leftNodes.map((main) => {
                                const isLink = main.href && main.href !== "#";
                                const content = (
                                  <>
                                    <main.icon className="w-5 h-5" />
                                    <span className="text-sm font-medium">{main.name}</span>
                                  </>
                                );
                                const itemClasses = `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer ${hoveredService === main.name
                                  ? "bg-white shadow text-orange-500"
                                  : "hover:bg-white text-[#1A5276]"
                                  }`;

                                return isLink ? (
                                  <Link
                                    key={main.name}
                                    href={main.href!}
                                    onMouseEnter={() => setHoveredService(main.name)}
                                    className={itemClasses}
                                    onClick={() => {
                                      setHoveredDropdown(null);
                                      setHoveredService(null);
                                    }}
                                  >
                                    {content}
                                  </Link>
                                ) : (
                                  <div
                                    key={main.name}
                                    onMouseEnter={() => setHoveredService(main.name)}
                                      className={itemClasses}
                                    >
                                      {content}
                                    </div>
                                );
                              })}
                            </div>



                            {/* {RIGHT PANEL} */}
                            {hasRightPanel && (
                              <div className="p-6 space-y-1 max-h-[600px] overflow-y-auto font-['Inter','Segoe UI','system-ui']">
                                {leftNodes
                                  .find(x => x.name === hoveredService)
                                  ?.children?.map(node => (
                                    <div
                                      key={node.name}
                                      ref={(el) => {
                                        const key = `${item.name}-${node.name}`;
                                        if (el) level3Refs.current.set(key, el);
                                        else level3Refs.current.delete(key);
                                      }}
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
                            )}



                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

                <Button onClick={GotoInquiryForm} className="ml-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full px-6">
                  Book Consultation
                </Button>               
              </div>

              {/* ================= MOBILE HAMBURGER (RIGHT) ================= */}
              <div className="lg:hidden">
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
                  {isOpen ? <Icons.X className="h-5 w-5" /> : <Icons.Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU DRAWER ================= */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 z-[9998] lg:hidden" onClick={resetMobileMenu}></div>
          <div className="fixed top-0 left-0 h-screen w-full max-w-sm bg-white shadow-2xl z-[9999] overflow-y-auto scrollbar-hide flex flex-col lg:hidden">
            {/* DRAWER HEADER */}
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

            {/* MENU ITEMS */}
            <div className={`py-2 flex-1 ${navAnimation === 'slide-in'
              ? (isGoingBack ? 'animate-slide-in-left' : 'animate-slide-in-right')
              : navAnimation === 'slide-out'
                ? 'animate-slide-out-left'
                : ''
              }`}>
              <div className="py-2">
                {(mobileNavStack.length === 0
                  ? navItems
                  : mobileNavStack[mobileNavStack.length - 1].items
                ).map((item: any) => (
                  <div key={item.name}>
                    {item.children ? (
                      <button
                        className="flex items-center w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors rounded-lg"
                        onClick={() => openMobileSubmenu(item.name, item.children)}
                      >
                        <item.icon className="w-6 h-6 mr-3 text-[#1A5276]" />
                        <span className="font-medium text-[#1A5276] flex-1">{item.name}</span>
                        <ChevronRight className="w-4 h-4 text-[#1A5276]" />
                      </button>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        className="flex items-center w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors rounded-lg"
                        onClick={resetMobileMenu}
                      >
                        <item.icon className="w-6 h-6 mr-3 text-[#1A5276]" />
                        <span className="font-medium text-[#1A5276] flex-1">{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* FOOTER */}
            <div className="px-6 py-4 border-t border-gray-100">
              <Link href="/login" className="block mb-3" onClick={resetMobileMenu}>
                <Button className="w-full rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all text-sm py-3 font-medium flex items-center justify-center space-x-2">
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Button>
              </Link>
              <Button
                className="w-full rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white hover:shadow-lg transition-all text-sm py-3 font-medium"
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