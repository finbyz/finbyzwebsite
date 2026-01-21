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
import { getNavigationItems, getStaticNavigationItems, NavNode } from "@/config/navigation";

// Use static items for initial render (no dynamic data)
const initialNavigationItems = getStaticNavigationItems();

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
  // Tree path: array of selected node names at each level [level1Name, level2Name, level3Name, ...]
  const [treePath, setTreePath] = useState<string[]>([]);
  // Expanded nodes in the right panel tree view
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, toggleMenu } = useMobileMenu();
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const [mobileNavStack, setMobileNavStack] = useState<MobileNavStackItem[]>([]);
  const [navAnimation, setNavAnimation] = useState<'slide-in' | 'slide-out' | null>(null);
  const [isGoingBack, setIsGoingBack] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  // Toggle node expansion
  const toggleNode = (nodeName: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(nodeName)) {
        next.delete(nodeName);
      } else {
        next.add(nodeName);
      }
      return next;
    });
  };

  // Helper: Get node at a specific path
  const getNodeAtPath = (nodes: NavNode[], path: string[]): NavNode | null => {
    if (path.length === 0) return null;
    const [first, ...rest] = path;
    const node = nodes.find(n => n.name === first);
    if (!node) return null;
    if (rest.length === 0) return node;
    if (!node.children) return null;
    return getNodeAtPath(node.children, rest);
  };

  // Helper: Build initial tree path by auto-selecting first children with children
  const buildAutoPath = (nodes: NavNode[] | undefined, currentPath: string[] = []): string[] => {
    if (!nodes || nodes.length === 0) return currentPath;
    // Find first node that has children
    const firstWithChildren = nodes.find(n => n.children && n.children.length > 0);
    if (firstWithChildren) {
      const newPath = [...currentPath, firstWithChildren.name];
      return buildAutoPath(firstWithChildren.children, newPath);
    }
    return currentPath;
  };

  // Get columns to render based on current tree path
  const getColumns = (): { nodes: NavNode[], selectedName: string | null, level: number }[] => {
    if (!hoveredDropdown) return [];

    const rootItem = navItems.find(n => n.name === hoveredDropdown);
    if (!rootItem?.children) return [];

    const columns: { nodes: NavNode[], selectedName: string | null, level: number }[] = [];

    // First column: direct children of hovered dropdown
    columns.push({
      nodes: rootItem.children,
      selectedName: treePath[0] || null,
      level: 0
    });

    // Add columns for each level in the path
    let currentNodes = rootItem.children;
    for (let i = 0; i < treePath.length; i++) {
      const selectedNode = currentNodes.find(n => n.name === treePath[i]);
      if (selectedNode?.children && selectedNode.children.length > 0) {
        columns.push({
          nodes: selectedNode.children,
          selectedName: treePath[i + 1] || null,
          level: i + 1
        });
        currentNodes = selectedNode.children;
      } else {
        break;
      }
    }

    return columns;
  };


  // Load navigation items with dynamic children on mount
  useEffect(() => {
    getNavigationItems().then(setNavItems).catch(console.error);
  }, []);




  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Auto-build tree path when dropdown opens
  useEffect(() => {
    if (hoveredDropdown) {
      const rootItem = navItems.find(n => n.name === hoveredDropdown);
      if (rootItem?.children) {
        const autoPath = buildAutoPath(rootItem.children);
        setTreePath(autoPath);
      }
    } else {
      setTreePath([]);
      setExpandedNodes(new Set());
    }
  }, [hoveredDropdown, navItems]);

  // Auto-expand first child with children in the right panel
  useEffect(() => {
    if (treePath.length > 0 && hoveredDropdown) {
      const rootItem = navItems.find(n => n.name === hoveredDropdown);
      const selectedService = rootItem?.children?.find(n => n.name === treePath[0]);

      if (selectedService?.children) {
        // Find first child that has children
        const firstWithChildren = selectedService.children.find(n => n.children && n.children.length > 0);
        if (firstWithChildren) {
          setExpandedNodes(new Set([firstWithChildren.name]));
        } else {
          setExpandedNodes(new Set());
        }
      }
    }
  }, [treePath, hoveredDropdown, navItems]);



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
            <div className="flex justify-between items-center h-10 lg:h-12 w-full">
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

                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => {
                        setHoveredDropdown(item.name);
                      }}
                      onMouseLeave={() => {
                        setHoveredDropdown(null);
                        setTreePath([]);
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

                      {hasDropdown && (() => {
                        const hasRightPanel = leftNodes.some(node => node.children && node.children.length > 0);

                        // Recursive tree renderer with indentation and collapsible nodes
                        const renderTree = (nodes: NavNode[], depth: number = 0, parentPath: string = ''): React.ReactNode => {
                          return nodes.map((node) => {
                            const hasChildren = node.children && node.children.length > 0;
                            const isLink = node.href && node.href !== "#";
                            const paddingLeft = depth * 16; // 16px per level
                            const nodeKey = parentPath ? `${parentPath}-${node.name}` : node.name;
                            const isExpanded = expandedNodes.has(nodeKey);

                            const itemClasses = `flex items-center justify-between gap-2 py-2 rounded-lg cursor-pointer transition-all hover:bg-slate-100 text-[#1A5276]`;

                            const handleToggle = (e: React.MouseEvent) => {
                              if (hasChildren) {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleNode(nodeKey);
                              }
                            };

                            // Expand on hover
                            const handleHover = () => {
                              if (hasChildren && !isExpanded) {
                                setExpandedNodes(prev => new Set([...prev, nodeKey]));
                              }
                            };

                            const content = (
                              <>
                                <div className="flex items-center gap-2 min-w-0">
                                  <node.icon className="w-4 h-4 shrink-0 text-orange-500" />
                                  <div className="min-w-0">
                                    <div className="font-medium text-sm truncate">{node.name}</div>
                                    {node.description && depth === 0 && (
                                      <div className="text-xs text-slate-500 truncate">{node.description}</div>
                                    )}
                                  </div>
                                </div>
                                {hasChildren && (
                                  <ChevronRight
                                    className={`w-3 h-3 text-slate-400 shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                                  />
                                )}
                              </>
                            );

                            return (
                              <div key={node.name}>
                                {isLink ? (
                                  <div className="flex">
                                    {hasChildren && (
                                      <button
                                        onClick={handleToggle}
                                        className="px-2 hover:bg-slate-200 rounded-l-lg"
                                        style={{ marginLeft: `${paddingLeft}px` }}
                                      >
                                        <ChevronRight
                                          className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                                        />
                                      </button>
                                    )}
                                    <Link
                                      href={node.href!}
                                      style={{ paddingLeft: hasChildren ? '4px' : `${paddingLeft + 12}px`, paddingRight: '12px' }}
                                      className={`${itemClasses} flex-1`}
                                      onMouseEnter={handleHover}
                                      onClick={() => {
                                        setHoveredDropdown(null);
                                        setTreePath([]);
                                        setExpandedNodes(new Set());
                                      }}
                                    >
                                      <div className="flex items-center gap-2 min-w-0">
                                        <node.icon className="w-4 h-4 shrink-0 text-orange-500" />
                                        <div className="min-w-0">
                                          <div className="font-medium text-sm truncate">{node.name}</div>
                                          {node.description && depth === 0 && (
                                            <div className="text-xs text-slate-500 truncate">{node.description}</div>
                                          )}
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                ) : (
                                  <div
                                    style={{ paddingLeft: `${paddingLeft + 12}px`, paddingRight: '12px' }}
                                    className={itemClasses}
                                    onMouseEnter={handleHover}
                                    onClick={handleToggle}
                                  >
                                    {content}
                                  </div>
                                )}
                                {/* Render children if expanded */}
                                {hasChildren && isExpanded && renderTree(node.children!, depth + 1, nodeKey)}
                              </div>
                            );
                          });
                        };

                        // Get selected service's children for right panel
                        const selectedService = leftNodes.find(n => n.name === treePath[0]);

                        return (
                          <div
                            className={`z-[200] bg-white border shadow-2xl rounded-3xl overflow-hidden transition-all duration-200 ${hoveredDropdown === item.name ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
                              } ${hasRightPanel
                                ? "fixed top-[56px] left-1/2 -translate-x-1/2"
                                : "absolute top-full left-1/2 -translate-x-1/2"
                              }`}
                            style={{ width: hasRightPanel ? "1000px" : "auto", maxWidth: "96vw", minWidth: "300px" }}
                          >
                            <div className={`grid ${hasRightPanel ? "grid-cols-2" : "grid-cols-1"}`}>
                              {/* LEFT PANEL - First level children */}
                              <div className={`p-6 bg-slate-50/50 font-['Inter','Segoe UI','system-ui'] ${hasRightPanel ? "border-r border-slate-200" : ""}`}>
                                <h3 className="text-lg font-semibold text-[#1A5276] mb-4">{item.name}</h3>
                                {leftNodes.map((main) => {
                                  const isLink = main.href && main.href !== "#";
                                  const isSelected = treePath[0] === main.name;
                                  const hasChildren = main.children && main.children.length > 0;

                                  const content = (
                                    <>
                                      <div className="flex items-center gap-3">
                                        <main.icon className="w-5 h-5" />
                                        <span className="text-sm font-medium">{main.name}</span>
                                      </div>
                                      {hasChildren && <ChevronRight className="w-4 h-4 text-slate-400" />}
                                    </>
                                  );

                                  const itemClasses = `flex items-center justify-between gap-3 px-4 py-3 rounded-xl cursor-pointer ${isSelected
                                    ? "bg-white shadow text-orange-500"
                                    : "hover:bg-white text-[#1A5276]"
                                  }`;

                                  const handleHover = () => {
                                    if (hasChildren) {
                                      setTreePath([main.name]);
                                    } else {
                                      setTreePath([]);
                                    }
                                  };

                                  return isLink ? (
                                    <Link
                                      key={main.name}
                                      href={main.href!}
                                      onMouseEnter={handleHover}
                                      className={itemClasses}
                                      onClick={() => {
                                        setHoveredDropdown(null);
                                        setTreePath([]);
                                      }}
                                    >
                                      {content}
                                    </Link>
                                  ) : (
                                    <div
                                      key={main.name}
                                        onMouseEnter={handleHover}
                                      className={itemClasses}
                                    >
                                      {content}
                                    </div>
                                  );
                                })}
                              </div>

                              {/* RIGHT PANEL - Tree view with indentation */}
                              {hasRightPanel && selectedService?.children && (
                                <div className="p-4 max-h-[500px] overflow-y-auto font-['Inter','Segoe UI','system-ui']">
                                  <h4 className="text-md font-semibold text-[#1A5276] mb-3 px-3">{selectedService.name}</h4>
                                  {renderTree(selectedService.children)}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })()}

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