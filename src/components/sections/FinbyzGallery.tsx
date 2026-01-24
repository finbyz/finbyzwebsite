"use client"
import React, { useState } from 'react';

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

const getImageUrl = (path: string | null | undefined) => {
  if (!path) return '/images/FinbyzLogo.png';
  if (path.startsWith('http')) return path;

  // Ensure path starts with / if it doesn't
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/web-api/fb/n${cleanPath}`;
};

const ImageWithFallback = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const [imgSrc, setImgSrc] = useState(getImageUrl(src));

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc('/images/FinbyzLogo.png')}
    />
  );
};

const FinbyzGallery = ({ galleryItems = [], relatedReads = [] }: FinbyzGalleryProps) => {
  if (galleryItems.length === 0 && relatedReads.length === 0) return null;

  return (
    <div className="bg-gray-50 py-12 container-custom mx-auto">
      <div className="mx-auto">
        {/* Related Reads Section */}
        {relatedReads.length > 0 ?
          <div className='mb-16'>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-[#1A5276] mb-3">Related Read</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedReads.map((read, index) => (
                <a
                  key={`${read.route}-${index}`}
                  href={`/${read.route}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer transform hover:-translate-y-1 block"
                >
                  <div className="h-40 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                    <ImageWithFallback
                      src={read.image}
                      alt={read.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1A5276] transition-colors">
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
          : null}
        {/* Gallery Section */}
        {galleryItems.length > 0 ?
          <div>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-[#1A5276] mb-3">Gallery</h2>
            </div>
            <div className="overflow-hidden">
              <div className="gallery-scroll-container">
                <div className="gallery-scroll flex gap-5">
                  {[...galleryItems, ...galleryItems].map((item, index) => (
                    <div
                      key={`${item.route}-${index}`}
                      className="flex-shrink-0 w-80 hover:scale-110 hover:z-10"
                    >
                      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col h-[380px]">
                        <a href={`/${item.route}`}>
                          <div className="h-48 flex items-center justify-center relative overflow-hidden">

                            {/* Static image */}
                            <ImageWithFallback
                              src={item.image}
                              alt={item.title}
                              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                            />

                            {/* Animated image */}
                            <img
                              src={getImageUrl(item.animated_gif || item.image)}
                              alt={item.title}
                              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = '/images/FinbyzLogo.png';
                              }}
                            />

                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                          </div>
                        </a>

                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          : null}

      </div>

      <style jsx>{`
        .gallery-scroll-container {
          overflow: hidden;
          padding: 2rem 0;
        }
        .gallery-scroll-container {
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        .gallery-scroll-container::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        .gallery-scroll-container:hover {
          overflow-x: auto;
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