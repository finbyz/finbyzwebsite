"use client"
import React from 'react';

interface GalleryItem {
    name: string
    route: string
    title: string
    image: string
    animated_gif: string
}

interface RelatedRead {
    route: string
    description: string
    image: string
    title: string
    reference_name: string
}

interface FinbyzGalleryProps {
    galleryItems: GalleryItem[]
    relatedReads: RelatedRead[]
}



const FinbyzGallery = ({ galleryItems = [], relatedReads = [] }:FinbyzGalleryProps) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Gallery Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Solutions</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="overflow-hidden">
            <div className="gallery-scroll-container">
              <div className="gallery-scroll">
                {[...galleryItems, ...galleryItems].map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 hover:scale-110 hover:z-10"
                  >
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                        <a href={item.route}>
                          <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                            
                            {/* Static image */}
                            <img
                              src={`api/fb/n${item.image}`}
                              alt={item.title}
                              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                            />

                            {/* Animated image */}
                            <img
                              src={`api/fb/n${item.animated_gif}`}
                              alt={item.title}
                              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                            
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                          </div>
                        </a>

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 max-h-10 min-h-10 overflow-hidden">{item.title}</h3>
                          <a href={item.route} className="text-blue-600 text-sm hover:underline inline-flex items-center">
                            Learn more
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedReads.map((read, index) => (
              <a
                key={index}
                href={read.route}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer transform hover:-translate-y-1 block"
              >
                <div className="h-40 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={`api/fb/n/${read.image}`} 
                    alt={read.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
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
              </a>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .gallery-scroll-container {
          overflow: hidden;
          padding: 2rem 0;
        }

        .gallery-scroll {
          display: flex;
          gap: 1.5rem;
          animation: scroll 30s linear infinite;
        }

        .gallery-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};


export default FinbyzGallery;