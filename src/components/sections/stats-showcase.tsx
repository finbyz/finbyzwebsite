import React, { useState, useRef, useEffect } from "react";
import { TrendingUp, Users, Globe, Award, Clock, Zap, Shield, Target, ChevronLeft, ChevronRight } from "lucide-react";

import "@/styles/components/stats-showcase.css";

// Server-side render: static display without IntersectionObserver/counter hooks

const stats = [
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on feedback from our clients worldwide",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8"
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    description: "Serving businesses across multiple industries",
    iconColor: "#FF8C00",
    iconBg: "#FFF4E5"
  },
  {
    icon: Globe,
    value: 25,
    suffix: "+",
    label: "Countries Served",
    description: "Global presence with local expertise",
    iconColor: "#27AE60",
    iconBg: "#E8F8F2"
  },
  {
    icon: Award,
    value: 1000,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful implementations and deliveries",
    iconColor: "#8E44AD",
    iconBg: "#F3EAF8"
  },
  {
    icon: Clock,
    value: 99,
    suffix: ".9%",
    label: "Uptime Guarantee",
    description: "Reliable service with maximum availability",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8"
  },
  {
    icon: Zap,
    value: 60,
    suffix: "%",
    label: "Faster Implementation",
    description: "Reduced time to market with our solutions",
    iconColor: "#FF8C00",
    iconBg: "#FFF4E5"
  },
  {
    icon: Shield,
    value: 100,
    suffix: "%",
    label: "Data Security",
    description: "Enterprise-grade security and compliance",
    iconColor: "#27AE60",
    iconBg: "#E8F8F2"
  },
  {
    icon: Target,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    description: "Round-the-clock technical support",
    iconColor: "#8E44AD",
    iconBg: "#F3EAF8"
  }
];

export default function StatsShowcase({ data = {} }: { data?: Record<string, any> }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Use provided data or fallback to defaults
  const {
    component_type = "Carousal",
    title = "Our Impact in Numbers",
    subtitle = "Discover the scale and success of our solutions through these key metrics",
    stats: customStats = stats
  } = data;

  // Calculate how many slides to show based on screen size
  const getSlidesToShow = () => {
    if (typeof window === 'undefined') return 4; // SSR fallback
    if (window.innerWidth >= 1280) return 4; // xl
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2;  // md
    return 1; // sm
  };

  const [slidesToShow, setSlidesToShow] = useState(4); // Default fallback for SSR

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        const maxSlideIndex = Math.max(0, customStats.length - slidesToShow);
        if (maxSlideIndex > 0) {
          setCurrentSlide((prev) => (prev + 1) % (maxSlideIndex + 1));
        }
      }, 3000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, customStats.length, slidesToShow]);

  const goToSlide = (index: number) => {
    setCurrentSlide(Math.max(0, Math.min(index, customStats.length - slidesToShow)));
  };

  const nextSlide = () => {
    goToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlide - 1);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const maxSlide = Math.max(0, customStats.length - slidesToShow);

  return (
    <section className="stats-showcase-section">
      <div className="stats-showcase-container">
        <div className={`stats-showcase-header`}>
          <h2 className="stats-showcase-title">
            {title}
          </h2>
          <p className="stats-showcase-subtitle">
            {subtitle}
          </p>
        </div>
        
        <div className="stats-showcase-slider-container">
          {/* Navigation Controls */}
          <div className="stats-showcase-controls">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="stats-showcase-nav-btn stats-showcase-nav-prev"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={toggleAutoPlay}
              className="stats-showcase-auto-play-btn"
              aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
            >
              {isAutoPlaying ? "⏸️" : "▶️"}
            </button>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === maxSlide}
              className="stats-showcase-nav-btn stats-showcase-nav-next"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slider */}
          <div className="stats-showcase-slider" ref={sliderRef}>
            <div 
              className="stats-showcase-slider-track"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
                width: `${(customStats.length / slidesToShow) * 100}%`
              }}
            >
              {customStats.map((stat: any, index: number) => (
                <div
                  key={`${stat.label || 'stat'}-${index}`}
                  className={`stats-showcase-slide`}
                  style={{ 
                    width: `${100 / customStats.length * slidesToShow}%`,
                    transitionDelay: `${index * 0.1}s`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="stats-showcase-card">
                    <div className="stats-showcase-icon-container">
                      {(() => {
                        const iconPool = [TrendingUp, Users, Globe, Award, Clock, Zap, Shield, Target];
                        const IconComponent = stat.icon || iconPool[index % iconPool.length] || Target;
                        const fg = stat.iconColor || ["#1A5276","#FF8C00","#27AE60","#8E44AD"][index % 4];
                        const bg = stat.iconBg || ["#EAF1F8","#FFF4E5","#E8F8F2","#F3EAF8"][index % 4];
                        const Icon = IconComponent as any;
                        return (
                          <div className="stats-showcase-icon" style={{ color: fg, backgroundColor: bg }}>
                            <Icon className="w-8 h-8" />
                          </div>
                        );
                      })()}
                    </div>
                    <div className="stats-showcase-content">
                      <div className="stats-showcase-value">
                        <div className="text-white">{stat.value || 100}{stat.suffix || ""}</div>
                      </div>
                      <h3 className="stats-showcase-label">
                        {stat.label}
                      </h3>
                      <p className="stats-showcase-description">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="stats-showcase-dots">
            {Array.from({ length: maxSlide + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`stats-showcase-dot ${index === currentSlide ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
