"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface RelatedRead {
  route: string
  description: string
  image: string
  title: string
  reference_name: string
}

interface FinbyzGalleryProps {
  relatedReads?: RelatedRead[]
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
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      width={500}
      height={500}
      onError={() => setImgSrc('/images/FinbyzLogo.png')}
    />
  );
};

const FinbyzGallery = ({ relatedReads = [] }: FinbyzGalleryProps) => {
  if (relatedReads.length === 0) return null;

  return (
    <div className="bg-gray-50 py-12 container-custom mx-auto">
      <div className="mx-auto">
        {/* Related Reads Section */}
        <div className='mb-16'>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-[#1A5276] mb-3">Related Read</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedReads.map((read, index) => (
              <Link
                key={`${read.route}-${index}`}
                href={`${read.route}`}
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
                    <span className="text-orange-600 font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center">
                      View More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default FinbyzGallery;