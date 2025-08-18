'use client';

import React, { useState } from 'react';
import { 
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  X,
  Star,
  Check,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  BarChart3,
  Zap,
  Code,
  Users,
  Globe,
  Target,
  TrendingUp,
  Award,
  Home,
  Folder,
  Database,
  Cpu,
  Network,
  Wifi,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Download,
  Upload,
  Share,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Bookmark,
  Tag,
  Hash,
  AtSign,
  DollarSign,
  Percent,
  Settings,
  User,
  FileText,
  Clock,
  Calendar,
  ExternalLink,
  Link,
  Copy,
  Edit,
  Trash2,
  MoreHorizontal,
  Menu,
  Grid,
  List,
  RefreshCw,
  RotateCcw,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  XCircle,
  Info,
  HelpCircle,
  AlertCircle,
  CheckCircle,
  HelpCircle as HelpCircleIcon
} from 'lucide-react';

// 21. Search Bar Component
export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const suggestions = [
    "ERP Implementation",
    "AI Automation",
    "Custom Development",
    "System Integration",
    "Data Analytics"
  ];

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Search Component</h2>
          <p className="text-gray-600">Interactive search with suggestions</p>
        </div>
        <div className="max-w-md mx-auto relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          {isFocused && searchTerm && filteredSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-10">
              {filteredSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center"
                  onClick={() => setSearchTerm(suggestion)}
                >
                  <Search className="w-4 h-4 text-gray-400 mr-2" />
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// 22. Filter Tags Component
export function FilterTags() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tags = [
    "ERP", "AI", "Automation", "Development", "Integration", "Analytics", "Cloud", "Security"
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Filter Tags</h2>
          <p className="text-gray-600">Interactive filter tags for content organization</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          {selectedTags.length > 0 && (
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Selected filters: {selectedTags.join(', ')}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// 24. Breadcrumbs Component
export function Breadcrumbs() {
  const breadcrumbs = [
    { name: "Home", href: "#", icon: Home },
    { name: "Services", href: "#" },
    { name: "ERP Implementation", href: "#" },
    { name: "Custom Solutions", href: "#", current: true }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Breadcrumbs</h2>
          <p className="text-gray-600">Navigation breadcrumb component</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              {breadcrumbs.map((item, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                  )}
                  <a
                    href={item.href}
                    className={`flex items-center text-sm font-medium ${
                      item.current
                        ? 'text-gray-500 cursor-default'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {index === 0 && item.icon && React.createElement(item.icon, { className: "w-4 h-4 mr-1" })}
                    {item.name}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}

// 25. Sidebar Menu Component
export function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'projects', name: 'Projects', icon: Folder },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'settings', name: 'Settings', icon: Settings },
    { id: 'users', name: 'Users', icon: Users },
    { id: 'reports', name: 'Reports', icon: FileText }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sidebar Menu</h2>
          <p className="text-gray-600">Collapsible sidebar navigation</p>
        </div>
        <div className="max-w-sm mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Navigation</h3>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-1 rounded hover:bg-gray-100"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
            {isOpen && (
              <div className="p-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeItem === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {React.createElement(item.icon, { className: "w-4 h-4 mr-3" })}
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// 26. Footer Links Component
export function FooterLinks() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "ERP Implementation", href: "#" },
        { name: "AI Automation", href: "#" },
        { name: "Custom Development", href: "#" },
        { name: "Consulting", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Support", href: "#" },
        { name: "API Reference", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Footer Links</h2>
          <p className="text-gray-400">Organized footer navigation</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Finbyz Tech. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

// 27. Social Media Icons Component
export function SocialMediaIcons() {
  const socialLinks = [
    { name: "Twitter", icon: "𝕏", href: "#", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: "in", href: "#", color: "hover:text-blue-600" },
    { name: "GitHub", icon: "GH", href: "#", color: "hover:text-gray-400" },
    { name: "YouTube", icon: "YT", href: "#", color: "hover:text-red-600" },
    { name: "Facebook", icon: "f", href: "#", color: "hover:text-blue-500" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Social Media Icons</h2>
          <p className="text-gray-600">Social media link components</p>
        </div>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-semibold transition-colors ${social.color}`}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// 28. Loading Spinner Component
export function LoadingSpinner() {
  return (
    <section className="py-16 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Loading Spinner</h2>
          <p className="text-gray-600">Loading and progress indicators</p>
        </div>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-sm text-gray-600">Spinner</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-sm text-gray-600">Thin Spinner</p>
          </div>
          <div className="text-center">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Dots</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 29. Error Boundary Component
export function ErrorBoundary() {
  const [hasError, setHasError] = useState(false);

  const simulateError = () => {
    setHasError(true);
  };

  const resetError = () => {
    setHasError(false);
  };

  if (hasError) {
    return (
      <section className="py-16 bg-gradient-to-br from-red-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-6">
              We encountered an error while processing your request. Please try again.
            </p>
            <button
              onClick={resetError}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Error Boundary</h2>
          <p className="text-gray-600">Error handling component</p>
        </div>
        <div className="text-center">
          <button
            onClick={simulateError}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Simulate Error
          </button>
        </div>
      </div>
    </section>
  );
}

// 30. Tooltip Component
export function TooltipComponent() {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const tooltipItems = [
    { id: 'info', text: 'This is an informational tooltip', icon: Info },
    { id: 'help', text: 'Click here for help and documentation', icon: HelpCircleIcon },
    { id: 'warning', text: 'This action cannot be undone', icon: AlertCircle },
    { id: 'success', text: 'Operation completed successfully', icon: CheckCircle }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-violet-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tooltip Component</h2>
          <p className="text-gray-600">Interactive tooltip elements</p>
        </div>
        <div className="flex justify-center space-x-8">
          {tooltipItems.map((item) => (
            <div key={item.id} className="relative">
                             <button
                 onMouseEnter={() => setShowTooltip(item.id)}
                 onMouseLeave={() => setShowTooltip(null)}
                 className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
               >
                 {React.createElement(item.icon, { className: "w-5 h-5" })}
               </button>
              {showTooltip === item.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap z-10">
                  {item.text}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 