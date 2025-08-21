"use client";

import { MapPin, Globe, Users, Clock, Phone, Mail, Building, Flag } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "@/styles/components/global-presence.css";

// Intersection Observer Hook
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!ref.current || revealed) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, revealed]);

  return [ref, revealed] as const;
}

interface GlobalOffice {
  city: string;
  country: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  team: string;
  timezone: string;
  services: string[];
  icon: string;
  iconColor: string;
  iconBg: string;
}

interface GlobalStat {
  metric: string;
  value: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

interface GlobalCoverage {
  regions: {
    name: string;
    cities: string[];
  }[];
}

interface GlobalPresenceProps {
  data?: {
    title?: string;
    subtitle?: string;
    locations?: Array<{
      city: string;
      country: string;
      timezone: string;
      icon: string;
      color: string;
    }>;
    globalStats?: GlobalStat[];
    globalOffices?: GlobalOffice[];
    globalCoverage?: GlobalCoverage;
  };
}

export default function GlobalPresence({ data = {} }: GlobalPresenceProps) {
  const [sectionRef, inView] = useInView(0.3);

  const {
    title = "Global Presence",
    subtitle = "Serving clients worldwide with local expertise and global reach",
    locations,
    globalStats = [
      {
        metric: "Countries",
        value: "25+",
        description: "Global presence across continents",
        icon: "Globe",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        metric: "Offices",
        value: "15+",
        description: "Strategic locations worldwide",
        icon: "Building",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      },
      {
        metric: "Languages",
        value: "12+",
        description: "Multilingual support",
        icon: "Users",
        iconColor: "#27AE60",
        iconBg: "#E8F8F2"
      },
      {
        metric: "Time Zones",
        value: "24/7",
        description: "Round-the-clock support",
        icon: "Clock",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
      }
    ],
    globalOffices = [
      {
        city: "New York",
        country: "United States",
        region: "North America",
        address: "350 5th Avenue, New York, NY 10118",
        phone: "+1 (212) 555-0123",
        email: "nyc@finbyz.com",
        team: "45 developers",
        timezone: "EST (UTC-5)",
        services: ["Enterprise Solutions", "Financial Services", "AI/ML"],
        icon: "Building",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        city: "London",
        country: "United Kingdom",
        region: "Europe",
        address: "30 St Mary Axe, London EC3A 8BF",
        phone: "+44 20 7123 4567",
        email: "london@finbyz.com",
        team: "38 developers",
        timezone: "GMT (UTC+0)",
        services: ["FinTech Solutions", "E-commerce", "Cloud Services"],
        icon: "Building",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      },
      {
        city: "Singapore",
        country: "Singapore",
        region: "Asia Pacific",
        address: "1 Raffles Place, Singapore 048616",
        phone: "+65 6789 0123",
        email: "singapore@finbyz.com",
        team: "52 developers",
        timezone: "SGT (UTC+8)",
        services: ["Digital Banking", "E-commerce", "IoT Solutions"],
        icon: "Building",
        iconColor: "#27AE60",
        iconBg: "#E8F8F2"
      },
      {
        city: "Sydney",
        country: "Australia",
        region: "Asia Pacific",
        address: "1 Macquarie Place, Sydney NSW 2000",
        phone: "+61 2 9250 7000",
        email: "sydney@finbyz.com",
        team: "41 developers",
        timezone: "AEST (UTC+10)",
        services: ["Healthcare Solutions", "Education Tech", "AI/ML"],
        icon: "Building",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
      }
    ],
    globalCoverage = {
      regions: [
        {
          name: "North America",
          cities: ["New York", "Toronto", "San Francisco", "Chicago"]
        },
        {
          name: "Europe",
          cities: ["London", "Berlin", "Paris", "Amsterdam"]
        },
        {
          name: "Asia Pacific",
          cities: ["Singapore", "Tokyo", "Sydney", "Hong Kong"]
        },
        {
          name: "Middle East",
          cities: ["Dubai", "Riyadh", "Abu Dhabi", "Doha"]
        }
      ]
    }
  } = data;

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "MapPin":
        return MapPin;
      case "Globe":
        return Globe;
      case "Users":
        return Users;
      case "Clock":
        return Clock;
      case "Phone":
        return Phone;
      case "Mail":
        return Mail;
      case "Building":
        return Building;
      case "Flag":
        return Flag;
      default:
        return Building;
    }
  };

  return (
    <section ref={sectionRef} className="global-presence-section">
      {/* Background Pattern */}
      
      
      <div className="global-presence-container">
        <div className={`global-presence-header ${inView ? 'global-presence-fade-in-up' : 'global-presence-fade-out'}`}>
          <h2 className="global-presence-title">
            {title}
          </h2>
          <p className="global-presence-subtitle">
            {subtitle}
          </p>
        </div>
        
        {/* Global Stats */}
        <div className={`global-presence-stats ${inView ? 'global-presence-fade-in-up' : 'global-presence-fade-out'}`}>
          {globalStats.map((stat, index) => {
            const IconComponent = getIconComponent(stat.icon);
            
            return (
              <div
                key={stat.metric}
                className={`global-presence-stat-wrapper ${inView ? 'global-presence-fade-in-up' : 'global-presence-fade-out'}`}
                style={{ 
                  transitionDelay: inView ? `${index * 0.1}s` : '0s',
                  animationDelay: inView ? `${index * 0.1}s` : '0s'
                }}
              >
                <div className="global-presence-stat-card">
                  <div
                    className="global-presence-stat-icon-container"
                    style={{ background: stat.iconBg }}
                  >
                    <IconComponent className="global-presence-stat-icon" style={{ color: stat.iconColor }} />
                  </div>
                  <div className="global-presence-stat-value">{stat.value}</div>
                  <div className="global-presence-stat-metric">{stat.metric}</div>
                  <div className="global-presence-stat-description">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Office Locations */}
        <div className="global-presence-offices">
          {globalOffices.map((office, index) => {
            const IconComponent = getIconComponent(office.icon);
            
            return (
              <div
                key={office.city}
                className={`global-presence-office-wrapper ${inView ? 'global-presence-fade-in-up' : 'global-presence-fade-out'}`}
                style={{ 
                  transitionDelay: inView ? `${(index + 4) * 0.15}s` : '0s',
                  animationDelay: inView ? `${(index + 4) * 0.15}s` : '0s'
                }}
              >
                <div className="global-presence-office-card">
                  <div className="global-presence-office-header">
                    <div
                      className="global-presence-office-icon-container"
                      style={{ background: office.iconBg }}
                    >
                      <IconComponent className="global-presence-office-icon" style={{ color: office.iconColor }} />
                    </div>
                    <div className="global-presence-office-title-section">
                      <span className="global-presence-office-region">
                        {office.region}
                      </span>
                      <h3 className="global-presence-office-city">
                        {office.city}
                      </h3>
                      <p className="global-presence-office-country">{office.country}</p>
                    </div>
                  </div>
                  
                  <div className="global-presence-office-content">
                    <div className="global-presence-office-details">
                      <div className="global-presence-office-detail-item">
                        <MapPin className="global-presence-office-detail-icon" />
                        <p className="global-presence-office-detail-text">{office.address}</p>
                      </div>
                      <div className="global-presence-office-detail-item">
                        <Phone className="global-presence-office-detail-icon" />
                        <p className="global-presence-office-detail-text">{office.phone}</p>
                      </div>
                      <div className="global-presence-office-detail-item">
                        <Mail className="global-presence-office-detail-icon" />
                        <p className="global-presence-office-detail-text">{office.email}</p>
                      </div>
                      <div className="global-presence-office-detail-item">
                        <Users className="global-presence-office-detail-icon" />
                        <p className="global-presence-office-detail-text">{office.team}</p>
                      </div>
                      <div className="global-presence-office-detail-item">
                        <Clock className="global-presence-office-detail-icon" />
                        <p className="global-presence-office-detail-text">{office.timezone}</p>
                      </div>
                    </div>
                    
                    <div className="global-presence-office-services">
                      <h4 className="global-presence-office-services-title">Specializations:</h4>
                      <div className="global-presence-office-services-list">
                        {office.services.map((service, serviceIndex) => (
                          <span
                            key={serviceIndex}
                            className="global-presence-office-service-tag"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Simple Locations Display (when locations data is provided) */}
        {locations && locations.length > 0 && (
          <div className={`global-presence-locations ${inView ? 'global-presence-fade-in-up' : 'global-presence-fade-out'}`}>
            <h3 className="global-presence-locations-title">Our Locations</h3>
            <div className="global-presence-locations-grid">
              {locations.map((location, index) => (
                <div
                  key={`${location.city}-${location.country}`}
                  className="global-presence-location-card"
                  style={{ 
                    transitionDelay: inView ? `${(index + 4) * 0.15}s` : '0s',
                    animationDelay: inView ? `${(index + 4) * 0.15}s` : '0s'
                  }}
                >
                  <div className="global-presence-location-icon-container">
                    <MapPin className="global-presence-location-icon" style={{ color: location.color }} />
                  </div>
                  <div className="global-presence-location-content">
                    <h4 className="global-presence-location-city">{location.city}</h4>
                    <p className="global-presence-location-country">{location.country}</p>
                    <p className="global-presence-location-timezone">{location.timezone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Global Coverage */}
        <div className={`global-presence-coverage ${inView ? 'global-presence-fade-in-up' : 'global-presence-fade-out'}`}>
          <h3 className="global-presence-coverage-title">Global Coverage</h3>
          <div className="global-presence-coverage-grid">
            {globalCoverage.regions.map((region, index) => (
              <div key={index} className="global-presence-coverage-card">
                <h4 className="global-presence-coverage-region">{region.name}</h4>
                <div className="global-presence-coverage-cities">
                  {region.cities.map((city, cityIndex) => (
                    <p key={cityIndex} className="global-presence-coverage-city">{city}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
