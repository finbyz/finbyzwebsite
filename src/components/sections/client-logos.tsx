 
 
"use client";

import "@/styles/components/client-logos.css";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Intersection Observer Hook
// Server-side render: static grid; no intersection observer

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
  },
  {
    name: "TechCorp Solutions",
    location: "BANGALORE, INDIA",
    logo: "TCS",
    colors: {
      primary: "#1E40AF", // Blue
      secondary: "#3B82F6" // Light blue
    },
    description: "Modern tech company with blue branding"
  },
  {
    name: "Global Industries Ltd.",
    location: "MUMBAI, INDIA",
    logo: "GIL",
    colors: {
      primary: "#059669", // Green
      secondary: "#10B981" // Light green
    },
    description: "Green industrial company logo"
  },
  {
    name: "Digital Innovations",
    location: "HYDERABAD, INDIA",
    logo: "DI",
    colors: {
      primary: "#7C3AED", // Purple
      secondary: "#A78BFA" // Light purple
    },
    description: "Purple digital innovation logo"
  },
  {
    name: "Future Enterprises",
    location: "CHENNAI, INDIA",
    logo: "FE",
    colors: {
      primary: "#DC2626", // Red
      secondary: "#F87171" // Light red
    },
    description: "Red future enterprise logo"
  },
  {
    name: "Smart Systems Inc.",
    location: "PUNE, INDIA",
    logo: "SSI",
    colors: {
      primary: "#EA580C", // Orange
      secondary: "#FB923C" // Light orange
    },
    description: "Orange smart systems logo"
  }
];

// No carousel settings in server-only mode



interface ClientLogosProps {
  data?: {
    component_type?: "Carousal";
    title?: string;
    subtitle?: string;
    clients?: any[];
    carousel?: {
      autoPlay?: boolean;
      interval?: number;
      showArrows?: boolean;
      showIndicators?: boolean;
    };
    useAPI?: boolean; // Enable API fetching
    apiEndpoint?: string; // Custom API endpoint
  };
}

export default function ClientLogos({ data }: ClientLogosProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [clientLogos, setClientLogos] = useState(defaultClientLogos);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Use provided data or defaults
  const {
    component_type = "Carousal",
    clients: providedClients,
    title = "Some of The Loyal Clients of FinByz",
    subtitle = "Trusted by leading companies worldwide",
    carousel = { autoPlay: true, interval: 3000, showArrows: true, showIndicators: true },
    useAPI = false, // New prop to enable API fetching
    apiEndpoint = '/api/client-logos' // New prop for custom API endpoint
  } = data || {};

  // Fetch data from API if useAPI is true and no clients provided
  useEffect(() => {
    const fetchClientLogos = async () => {
      if (providedClients && providedClients.length > 0) {
        // Use provided data if available
        setClientLogos(providedClients);
        return;
      }

      if (useAPI) {
        setLoading(true);
        setError(null);
        
        try {
          const response = await fetch(`${apiEndpoint}?limit=12&page=1`);
          if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
          }
          
          const result = await response.json();
          if (result.success && result.data.clients) {
            setClientLogos(result.data.clients);
          } else {
            throw new Error('Invalid API response format');
          }
        } catch (err) {
          console.error('Error fetching client logos:', err);
          setError(err instanceof Error ? err.message : 'Failed to fetch client logos');
          // Fallback to default data
          setClientLogos(defaultClientLogos);
        } finally {
          setLoading(false);
        }
      } else {
        // Use default data
        setClientLogos(defaultClientLogos);
      }
    };

    fetchClientLogos();
  }, [useAPI, apiEndpoint, providedClients]);

  // Calculate how many slides we need (6 logos per slide)
  const logosPerSlide = 6;
  const totalSlides = Math.ceil(clientLogos.length / logosPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!carousel.autoPlay || !isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, carousel.interval || 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, carousel.autoPlay, carousel.interval, totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Get logos for current slide
  const getCurrentSlideLogos = () => {
    const startIndex = currentIndex * logosPerSlide;
    const endIndex = startIndex + logosPerSlide;
    return clientLogos.slice(startIndex, endIndex);
  };

  const renderLogo = (clientItem: any) => {
    switch (clientItem.name) {
      case "South India Trading Co.":
        return (
          <div className="text-center">
            <div className="client-logo-india-map">
              <div className="client-logo-india-map-bg"></div>
              <div className="client-logo-india-map-inner">
                <span className="text-lg font-bold text-gray-800">SJC</span>
              </div>
            </div>
            <div className="client-logo-india-text">SOUTH INDIA TRADING CO.</div>
            <div className="client-logo-location">DELHI, INDIA</div>
          </div>
        );
      case "Elkins Trade Link Ltd.":
        return (
          <div className="text-center">
            <div className="client-logo-elkins">elkins</div>
            <div className="client-logo-location">TRADE LINK LTD.</div>
          </div>
        );
      case "G.M.'s Tulsi Tea":
        return (
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
        );
      case "Farmindia Impex Pvt. Ltd.":
        return (
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
        );
      case "Raymond":
        return (
          <div className="text-center">
            <div className="client-logo-raymond-r">R</div>
            <div className="client-logo-raymond-text">raymond</div>
          </div>
        );
      case "Aditya Birla Tanfac":
        return (
          <div className="text-center">
            <div className="client-logo-abt-title">ADITYA BIRLA</div>
            <div className="client-logo-abt-sunburst"></div>
            <div className="client-logo-abt-band">
              <span className="client-logo-abt-tanfac">TANFAC</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="text-center">
            <div className="client-logo-container">
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                style={{ 
                  backgroundColor: clientItem.colors?.primary || '#6B7280',
                  color: clientItem.colors?.text || 'white'
                }}
              >
                {clientItem.logo}
              </div>
            </div>
            <div className="text-xs font-semibold text-gray-700 mt-1">{clientItem.name}</div>
            {clientItem.location && (
              <div className="text-xs text-gray-500">{clientItem.location}</div>
            )}
          </div>
        );
    }
  };

  // Show loading state
  if (loading) {
    return (
      <section className="client-logos-section">
        <div className="client-logos-container">
          <div className="client-logos-header">
            <h2 className="client-logos-title">{title}</h2>
            {subtitle && <p className="client-logos-subtitle">{subtitle}</p>}
          </div>
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            <span className="ml-3 text-gray-600">Loading client logos...</span>
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className="client-logos-section">
        <div className="client-logos-container">
          <div className="client-logos-header">
            <h2 className="client-logos-title">{title}</h2>
            {subtitle && <p className="client-logos-subtitle">{subtitle}</p>}
          </div>
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <div className="text-red-500 mb-2">⚠️ Error loading client logos</div>
              <div className="text-sm text-gray-600">{error}</div>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="client-logos-section">
      <div className="client-logos-container">
        {/* Banner Title */}
        <div className="client-logos-header">
          <h2 className="client-logos-title">
            {title}
          </h2>
          {subtitle && (
            <p className="client-logos-subtitle">{subtitle}</p>
          )}
        </div>

        {/* Carousel Container */}
        <div className="client-logos-carousel-container">
          <div 
            className="client-logos-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className="client-logos-slide">
                <div className="client-logos-grid">
                  {getCurrentSlideLogos().map((clientItem, logoIndex) => (
                    <div key={logoIndex} className="client-logo-item group">
                      <div className="client-logo-container">
                        {renderLogo(clientItem)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {carousel.showArrows && (
            <>
              <button
                className="client-logos-nav-button prev"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft className="client-logos-nav-icon" />
              </button>
              <button
                className="client-logos-nav-button next"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight className="client-logos-nav-icon" />
              </button>
            </>
          )}
        </div>

        {/* Indicators */}
        {carousel.showIndicators && (
          <div className="client-logos-indicators">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                className={`client-logos-indicator ${
                  index === currentIndex ? 'active' : 'inactive'
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
