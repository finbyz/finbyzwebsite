"use client"
import React, { useEffect, useRef } from 'react';

const FinbyzGallery = () => {
  const galleryRef = useRef(null);

  const galleryItems = [
    { 
      image: '🏦',
      title: 'FD Management', 
      subtitle: 'Fixed Deposit Tracking in ERPNext',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      image: '📊',
      title: 'Financial Assets', 
      subtitle: 'Complete Asset Management',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      image: '💼',
      title: 'ERP Solutions', 
      subtitle: 'Custom ERPNext Implementation',
      color: 'from-indigo-500 to-indigo-600'
    },
    { 
      image: '⚙️',
      title: 'Automation', 
      subtitle: 'Streamline Business Processes',
      color: 'from-teal-500 to-teal-600'
    },
    { 
      image: '📈',
      title: 'Analytics', 
      subtitle: 'Real-time Business Insights',
      color: 'from-green-500 to-green-600'
    },
    { 
      image: '🔧',
      title: 'Customization', 
      subtitle: 'Tailored ERP Solutions',
      color: 'from-orange-500 to-orange-600'
    },
  ];

  // Duplicate items for seamless loop
  const duplicatedItems = [...galleryItems, ...galleryItems];

  const relatedReads = [
    {
      image: '👥',
      title: 'ERPNext Certified Partner',
      description: 'Finbyz Tech, a certified ERPNext and Frappe Partner in Ahmedabad, offers expert ERP implementation, customization, and support services tailored to your business needs.',
      link: '/erpnext-certified-partner',
      bgColor: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      image: '💻',
      title: 'Hire ERPNext Implementer',
      description: 'Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs. Contact us today!',
      link: '/hire-erpnext-implementer',
      bgColor: 'from-purple-50 to-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      image: '🚀',
      title: 'Custom Module Development',
      description: 'Get custom modules built for your specific business requirements. Our expert developers create scalable solutions integrated seamlessly with ERPNext.',
      link: '/custom-development',
      bgColor: 'from-green-50 to-green-100',
      iconColor: 'text-green-600'
    },
    {
      image: '📱',
      title: 'Mobile App Integration',
      description: 'Extend your ERPNext capabilities with mobile applications. Access your business data on-the-go with our custom mobile solutions.',
      link: '/mobile-integration',
      bgColor: 'from-orange-50 to-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-10xl mx-auto">
        
        {/* Gallery Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Solutions</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="overflow-hidden p-8">
            <div className="overflow-hidden">
              <div 
                ref={galleryRef}
                className="flex gap-6 animate-scroll hover:pause"
                style={{
                  animation: 'scroll 30s linear infinite'
                }}
              >
                {duplicatedItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-80 group cursor-pointer"
                  >
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-6xl relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        {item.image}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Reads Section */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Related Read</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {relatedReads.map((read, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer transform hover:-translate-y-1"
              >
                <div className={`h-40 bg-gradient-to-br ${read.bgColor} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 translate-x-full group-hover:translate-x-full animate-shimmer"></div>
                  </div>
                  <span className={`text-7xl ${read.iconColor}`}>{read.image}</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {read.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {read.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center">
                      View More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default FinbyzGallery;