'use client';

import React from 'react';
import { 
  Laptop,
  FileText,
  Settings,
  Coffee,
  Clock,
  Target,
  Handshake,
  Building2,
  Calendar,
  BarChart3,
  Calculator,
  DollarSign,
  ChevronUp,
  MessageCircle
} from 'lucide-react';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ERPModulesProps {
  data?: {
    companyName?: string;
    companyDescription?: string;
    yearsOfExperience?: number;
    statistics?: Array<{
      number: string;
      label: string;
    }>;
    services?: ServiceCard[];
  };
}

export default function ERPModules({ data }: ERPModulesProps) {
  // Default data
  const defaultData = {
    companyName: "Finbyz Tech Pvt Ltd",
    companyDescription: "Finbyz Tech Pvt Ltd track record spans over 10+ years of IT business solutions. We have technology in our genes. We provide innovative solution that work for all the Industries/businesses. We are adept enough to help fit an ERP solution that exactly meets your goals.",
    yearsOfExperience: 10,
    statistics: [
      { number: "100+", label: "Completed Projects" },
      { number: "6000+", label: "Active Users" },
      { number: "25+", label: "Expert Resources" }
    ],
    services: [
      {
        id: "erp-implementation",
        title: "ERP Implementation",
        description: "Technology at work, A better way of doing the Things!",
        icon: (
          <div className="relative">
            <Laptop className="w-8 h-8 text-blue-400" />
            <FileText className="w-5 h-5 text-white absolute -top-1 -right-1" />
            <Settings className="w-4 h-4 text-yellow-500 absolute top-2 -left-1" />
            <Coffee className="w-3 h-3 text-amber-700 absolute -bottom-1 left-2" />
            <Clock className="w-3 h-3 text-gray-800 absolute -bottom-1 right-1" />
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
          </div>
        )
      },
      {
        id: "it-consulting",
        title: "IT Consulting",
        description: "It's about your company, Your Business & Your Success.",
        icon: (
          <div className="relative">
            <Handshake className="w-8 h-8 text-blue-600" />
            <Target className="w-5 h-5 text-green-500 absolute -top-1 -right-1" />
            <Settings className="w-4 h-4 text-gray-600 absolute top-2 -left-1" />
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
          </div>
        )
      },
      {
        id: "software-development",
        title: "Software Development",
        description: "Building digital solutions that drive your business forward.",
        icon: (
          <div className="relative">
            <Building2 className="w-8 h-8 text-yellow-500" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
          </div>
        )
      },
      {
        id: "data-analytics",
        title: "Data Analytics",
        description: "Transform data into actionable insights for growth.",
        icon: (
          <div className="relative">
            <Calendar className="w-6 h-6 text-blue-400" />
            <BarChart3 className="w-5 h-5 text-green-500 absolute -top-1 -right-1" />
            <Calculator className="w-4 h-4 text-yellow-500 absolute top-2 -left-1" />
            <DollarSign className="w-4 h-4 text-yellow-600 absolute -bottom-1 left-2" />
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
          </div>
        )
      }
    ]
  };

  const { companyName, companyDescription, yearsOfExperience, statistics, services } = data || defaultData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {statistics?.map((stat, index) => (
            <div key={index} className="text-center relative">
              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-lg">
                {stat.label}
              </div>
              {index < (statistics?.length || 0) - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-px h-16 bg-gray-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Modules of ERP
              </h2>
              <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              <p className="text-xl text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">{companyName}</span> track record spans over {yearsOfExperience}+ years of IT business solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We have technology in our genes. We provide innovative solution that work for all the Industries/businesses. We are adept enough to help fit an ERP solution that exactly meets your goals.
              </p>
            </div>
          </div>

                     {/* Right Content - Service Cards Grid */}
           <div className="grid grid-cols-2 gap-4">
             {services?.map((service) => (
               <div
                 key={service.id}
                 className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
               >
                 {/* Icon Area */}
                 <div className="flex justify-center mb-4">
                   {service.icon}
                 </div>
                 
                 {/* Content Area */}
                 <div className="text-center">
                   <h3 className="text-lg font-bold text-gray-800 mb-2">
                     {service.title}
                   </h3>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     {service.description}
                   </p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 space-y-4">
        {/* WhatsApp Button */}
        <button className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-6 h-6" />
        </button>
        
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
