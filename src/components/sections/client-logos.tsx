"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@/styles/components/client-logos.css";

// Intersection Observer Hook
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

// Default client logos data
const defaultClientLogos = [
  {
    name: "South India Trading Co.",
    location: "DELHI, INDIA",
    logo: "SJC",
    colors: {
      primary: "#FFD700", // Yellow
      secondary: "#FF6B35", // Orange
      accent: "#4CAF50" // Green
    },
    description: "Multi-colored map of India with bold yellow text"
  },
  {
    name: "Elkins Trade Link Ltd.",
    location: "TRADE LINK LTD.",
    logo: "elkins",
    colors: {
      primary: "#87CEEB", // Light blue
      secondary: "#808080" // Gray
    },
    description: "Light blue text with stylized 'k' as shopping bag"
  },
  {
    name: "G.M.'s Tulsi Tea",
    location: "TEA",
    logo: "Tulsi",
    colors: {
      primary: "#8A2BE2", // Purple
      secondary: "#FFD700", // Yellow
      text: "#FFFFFF" // White
    },
    description: "Purple background with yellow banner and white text"
  },
  {
    name: "Farmindia Impex Pvt. Ltd.",
    location: "IMPEX PVT. LTD.",
    logo: "FARMINDIA",
    colors: {
      primary: "#228B22", // Dark green
      secondary: "#808080" // Gray
    },
    description: "Dark green leaf with bold company name"
  },
  {
    name: "Raymond",
    location: "",
    logo: "R",
    colors: {
      primary: "#DC143C", // Red
      secondary: "#DC143C" // Red
    },
    description: "Mirrored red 'R's with script text"
  },
  {
    name: "Aditya Birla Tanfac",
    location: "TANFAC",
    logo: "ABT",
    colors: {
      primary: "#FF4500", // Orange-red
      secondary: "#FFD700", // Yellow
      accent: "#008080" // Teal
    },
    description: "Geometric sunburst pattern with teal band"
  }
];

// Default carousel settings
const defaultCarouselSettings = {
  autoPlay: true,
  interval: 3000,
  showArrows: true,
  showIndicators: true
};



interface ClientLogosProps {
  data?: {
    title?: string;
    subtitle?: string;
    clients?: any[];
    carousel?: {
      autoPlay?: boolean;
      interval?: number;
      showArrows?: boolean;
      showIndicators?: boolean;
    };
  };
}

export default function ClientLogos({ data }: ClientLogosProps) {
  const [ref, inView] = useInView(0.2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Use provided data or defaults
  const clientLogos = data?.clients || defaultClientLogos;
  const carouselSettings = { ...defaultCarouselSettings, ...data?.carousel };
  const title = data?.title || "Some of The Loyal Clients of FinByz";
  const subtitle = data?.subtitle || "Trusted by leading companies worldwide";

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !carouselSettings.autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === clientLogos.length - 1 ? 0 : prevIndex + 1
      );
    }, carouselSettings.interval); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselSettings.autoPlay, carouselSettings.interval, clientLogos.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === clientLogos.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? clientLogos.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Banner Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600">{subtitle}</p>
          )}
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          {carouselSettings.showArrows && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </>
          )}

          {/* Carousel Track */}
          <div 
            ref={ref}
            className={`overflow-hidden transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${clientLogos.length * 100}%`
              }}
            >
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                  style={{ width: `${100 / clientLogos.length}%` }}
                >
                  <div className="grid grid-cols-6 gap-8 items-center">
                    {clientLogos.slice(index, index + 6).map((clientItem, itemIndex) => {
                      const actualIndex = (index + itemIndex) % clientLogos.length;
                      return (
                        <div
                          key={actualIndex}
                          className="flex flex-col items-center justify-center group"
                        >
                          {/* Logo Container with actual logo designs */}
                          <div className="w-24 h-24 mb-3 flex items-center justify-center relative">
                            {/* South India Trading Co. */}
                            {clientItem.name === "South India Trading Co." && (
                              <div className="text-center">
                                <div className="w-16 h-16 mb-2 relative">
                                  {/* India map outline */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-green-500 rounded-lg opacity-80"></div>
                                  <div className="absolute inset-1 bg-white rounded-md flex items-center justify-center">
                                    <span className="text-lg font-bold text-gray-800">SJC</span>
                                  </div>
                                </div>
                                <div className="text-xs font-bold text-yellow-500" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                                  SOUTH INDIA TRADING CO.
                                </div>
                                <div className="text-xs text-gray-600">DELHI, INDIA</div>
                              </div>
                            )}

                            {/* Elkins Trade Link Ltd. */}
                            {clientItem.name === "Elkins Trade Link Ltd." && (
                              <div className="text-center">
                                <div className="text-2xl font-bold text-blue-400 mb-1">elkins</div>
                                <div className="text-xs text-gray-500">TRADE LINK LTD.</div>
                              </div>
                            )}

                            {/* G.M.'s Tulsi Tea */}
                            {clientItem.name === "G.M.'s Tulsi Tea" && (
                              <div className="client-logo-tulsi-container">
                                <div className="client-logo-tulsi-bg">
                                  <div className="client-logo-tulsi-banner">
                                    <span className="client-logo-tulsi-banner-text">G.M.'s</span>
                                  </div>
                                  <div className="client-logo-tulsi-main">
                                    <span className="client-logo-tulsi-text">Tulsi</span>
                                  </div>
                                  <span className="client-logo-tulsi-tm">TM</span>
                                </div>
                                <div className="client-logo-tulsi-tea">TEA</div>
                              </div>
                            )}

                            {/* Farmindia Impex Pvt. Ltd. */}
                            {clientItem.name === "Farmindia Impex Pvt. Ltd." && (
                              <div className="text-center">
                                <div className="client-logo-farmindia-leaf">
                                  <div className="client-logo-farmindia-inner"></div>
                                </div>
                                <div className="client-logo-farmindia-text">
                                  <span className="client-logo-farmindia-farm">FARM</span>
                                  <span className="client-logo-farmindia-india">INDIA</span>
                                </div>
                                <div className="client-logo-location">IMPEX PVT. LTD.</div>
                              </div>
                            )}

                            {/* Raymond */}
                            {clientItem.name === "Raymond" && (
                              <div className="text-center">
                                <div className="client-logo-raymond-r">R</div>
                                <div className="client-logo-raymond-text">raymond</div>
                              </div>
                            )}

                            {/* Aditya Birla Tanfac */}
                            {clientItem.name === "Aditya Birla Tanfac" && (
                              <div className="text-center">
                                <div className="client-logo-abt-title">ADITYA BIRLA</div>
                                <div className="client-logo-abt-sunburst"></div>
                                <div className="client-logo-abt-band">
                                  <span className="client-logo-abt-tanfac">TANFAC</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          {carouselSettings.showIndicators && (
            <div className="client-logos-indicators">
              {clientLogos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`client-logos-indicator ${
                    index === currentIndex ? 'active' : 'inactive'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>


      </div>
    </section>
  );
}
