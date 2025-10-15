"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";

interface ClientLogo {
  name: string;
  location?: string;
  logo?: string;
  image?: string;
  colors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    text?: string;
  };
  description?: string;
}

interface ClientLogosProps {
  data?: {
    component_type?: "Carousal";
    title?: string;
    subtitle?: string;
    clients?: ClientLogo[];
    carousel?: {
      autoPlay?: boolean;
      interval?: number;
      showArrows?: boolean;
      showIndicators?: boolean;
    };
    useAPI?: boolean;
    apiEndpoint?: string;
    logosPerSlide?: number;
  };
}

export default function ClientLogos({ data }: ClientLogosProps) {
  const {
    title = "Our Trusted Clients",
    subtitle = "Trusted by leading companies worldwide",
    clients: providedClients,
    carousel = { autoPlay: true, interval: 3000, showArrows: false, showIndicators: true },
    useAPI = false,
    apiEndpoint = '/web-api/client-logos',
    logosPerSlide = 8
  } = data || {};

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(carousel.autoPlay ?? true);
  const [clientLogos, setClientLogos] = useState<ClientLogo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch client logos from API
  useEffect(() => {
    const fetchClientLogos = async () => {
      // Use provided clients first
      if (providedClients && providedClients.length > 0) {
        setClientLogos(providedClients);
        return;
      }

      // Fetch from API if enabled
      if (!useAPI) {
        setClientLogos([]);
        return;
      }

      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`${apiEndpoint}?limit=36&page=1`);
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success && Array.isArray(result.data?.clients)) {
          setClientLogos(result.data.clients);
        } else {
          throw new Error('Invalid API response format');
        }
      } catch (err) {
        console.error('Error fetching client logos:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch client logos');
        setClientLogos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchClientLogos();
  }, [useAPI, apiEndpoint, providedClients]);

  // Calculate total slides
  const totalSlides = useMemo(() => 
    Math.ceil(clientLogos.length / logosPerSlide),
    [clientLogos.length, logosPerSlide]
  );

  // Auto-play functionality
  useEffect(() => {
    if (!carousel.autoPlay || !isAutoPlaying || totalSlides <= 1) {
      return;
    }
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, carousel.interval || 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, carousel.autoPlay, carousel.interval, totalSlides]);

  // Navigation handlers
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }, []);

  // Touch gesture handlers
  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  }, [touchStart, touchEnd, nextSlide, prevSlide]);

  // Render individual logo
  const renderLogo = useCallback((clientItem: ClientLogo) => {
    // Render image if available
    if (clientItem.image) {
      const imageUrl = clientItem.image.startsWith("/files/")
        ? `https://finbyz.tech${clientItem.image}`
        : clientItem.image;

      return (
        <div className="text-center">
          <img
            src={imageUrl}
            alt={clientItem.name}
            title={clientItem.name}
            className="h-16 w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {clientItem.name && (
            <div className="text-xs font-semibold text-gray-700 mt-2">{clientItem.name}</div>
          )}
          {clientItem.location && (
            <div className="text-xs text-gray-500">{clientItem.location}</div>
          )}
        </div>
      );
    }

    // Fallback to logo text/initials
    return (
      <div className="text-center">
        <div
          className="w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundColor: clientItem.colors?.primary || "#6B7280",
            color: clientItem.colors?.text || "white",
          }}
        >
          {clientItem.logo || clientItem.name.substring(0, 2).toUpperCase()}
        </div>
        <div className="text-xs font-semibold text-gray-700 mt-2">{clientItem.name}</div>
        {clientItem.location && (
          <div className="text-xs text-gray-500">{clientItem.location}</div>
        )}
      </div>
    );
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A5276]">{title}</h2>
            {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
          </div>
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            <span className="ml-3 text-gray-600">Loading client logos...</span>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A5276]">{title}</h2>
            {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
          </div>
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <div className="text-red-500 mb-2 text-xl">⚠️ Error loading client logos</div>
              <div className="text-sm text-gray-600 mb-4">{error}</div>
              <button 
                onClick={() => window.location.reload()} 
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Empty state
  if (clientLogos.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A5276]">{title}</h2>
            {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
          </div>
          <div className="text-center py-12 text-gray-500">
            No client logos available
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A5276]">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            className="overflow-hidden"
            ref={carouselRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => {
                const slideLogos = clientLogos.slice(
                  slideIndex * logosPerSlide, 
                  (slideIndex + 1) * logosPerSlide
                );
                
                return (
                  <div 
                    key={slideIndex} 
                    className="w-full flex-shrink-0"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 p-4">
                      {slideLogos.map((clientItem, logoIndex) => (
                        <div 
                          key={`${slideIndex}-${logoIndex}`} 
                          className="flex items-center justify-center group"
                        >
                          {renderLogo(clientItem)}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          {carousel.showArrows && totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
                aria-label="Next slide"
              >
                →
              </button>
            </>
          )}
        </div>

        {/* Indicators */}
        {carousel.showIndicators && totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-orange-500' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
