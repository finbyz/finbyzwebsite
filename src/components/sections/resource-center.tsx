"use client";

import { BookOpen, Video, FileText, Download, Play, Calendar, Users, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "@/styles/components/resource-center.css";

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

interface Resource {
  title: string;
  type: string;
  category: string;
  description: string;
  duration: string;
  downloads: number;
  rating: number;
  icon: string;
  iconColor: string;
  iconBg: string;
}

interface UpcomingEvent {
  title: string;
  date: string;
  time: string;
  type: string;
  attendees: number;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

interface ResourceCategory {
  category: string;
  count: number;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

interface ResourceStats {
  resources: string;
  downloads: string;
  rating: string;
  learners: string;
}

interface ResourceCenterProps {
  data?: {
    title?: string;
    subtitle?: string;
    resourceCategories?: ResourceCategory[];
    resources?: Resource[];
    upcomingEvents?: UpcomingEvent[];
    resourceStats?: ResourceStats;
  };
}

export default function ResourceCenter({ data = {} }: ResourceCenterProps) {
  const [sectionRef, inView] = useInView(0.3);

  const {
    title = "Resource Center",
    subtitle = "Access our comprehensive library of educational content, guides, and resources",
    resourceCategories = [
      {
        category: "Development",
        count: 25,
        description: "Programming guides and tutorials",
        icon: "BookOpen",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        category: "Cloud & DevOps",
        count: 18,
        description: "Infrastructure and deployment",
        icon: "Play",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      },
      {
        category: "AI & Machine Learning",
        count: 12,
        description: "Artificial intelligence resources",
        icon: "Video",
        iconColor: "#27AE60",
        iconBg: "#E8F8F2"
      },
      {
        category: "Security",
        count: 15,
        description: "Cybersecurity and compliance",
        icon: "Download",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
      }
    ],
    resources = [
      {
        title: "Complete Guide to Modern Web Development",
        type: "E-book",
        category: "Development",
        description: "Comprehensive guide covering React, Next.js, and modern web development practices",
        duration: "2 hours",
        downloads: 2500,
        rating: 4.8,
        icon: "BookOpen",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        title: "Cloud Migration Best Practices",
        type: "Whitepaper",
        category: "Cloud",
        description: "Step-by-step guide for successful cloud migration and optimization strategies",
        duration: "45 min read",
        downloads: 1800,
        rating: 4.9,
        icon: "FileText",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      },
      {
        title: "AI/ML Implementation Workshop",
        type: "Video Course",
        category: "AI/ML",
        description: "Hands-on workshop for implementing AI and machine learning solutions",
        duration: "3 hours",
        downloads: 1200,
        rating: 4.7,
        icon: "Video",
        iconColor: "#27AE60",
        iconBg: "#E8F8F2"
      },
      {
        title: "Cybersecurity Framework Guide",
        type: "Template",
        category: "Security",
        description: "Comprehensive cybersecurity framework templates and checklists",
        duration: "30 min",
        downloads: 3200,
        rating: 4.6,
        icon: "Download",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
      },
      {
        title: "DevOps Pipeline Optimization",
        type: "Case Study",
        category: "DevOps",
        description: "Real-world case study on optimizing CI/CD pipelines for enterprise",
        duration: "1 hour",
        downloads: 950,
        rating: 4.8,
        icon: "Play",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        title: "Digital Transformation Roadmap",
        type: "Template",
        category: "Strategy",
        description: "Strategic roadmap template for digital transformation initiatives",
        duration: "20 min",
        downloads: 2100,
        rating: 4.9,
        icon: "Calendar",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      }
    ],
    upcomingEvents = [
      {
        title: "Web Development Masterclass",
        date: "March 15, 2024",
        time: "2:00 PM EST",
        type: "Live Webinar",
        attendees: 150,
        description: "Advanced React and Next.js development techniques",
        icon: "Users",
        iconColor: "#27AE60",
        iconBg: "#E8F8F2"
      },
      {
        title: "Cloud Architecture Summit",
        date: "March 22, 2024",
        time: "10:00 AM EST",
        type: "Virtual Conference",
        attendees: 300,
        description: "Multi-cloud strategies and best practices",
        icon: "Users",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        title: "AI Implementation Workshop",
        date: "April 5, 2024",
        time: "1:00 PM EST",
        type: "Hands-on Workshop",
        attendees: 75,
        description: "Practical AI/ML implementation for businesses",
        icon: "Users",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      }
    ],
    resourceStats = {
      resources: "70+",
      downloads: "15K+",
      rating: "4.8",
      learners: "500+"
    }
  } = data;

  // Enforce distinct icons within each subgroup
  const distinctify = <T extends { icon: string }>(items: T[], pool: string[]) => {
    const used = new Set<string>();
    return items.map((it) => {
      let name = it.icon;
      if (used.has(name) || !pool.includes(name)) {
        name = pool.find((n) => !used.has(n)) || name;
      }
      used.add(name);
      return { ...it, icon: name } as T;
    });
  };

  const categoryPool = ["BookOpen", "Play", "Video", "Download", "Calendar", "Users", "FileText", "Star"];
  const resourcePool = ["BookOpen", "FileText", "Video", "Download", "Play", "Calendar"];
  const eventPool = ["Users", "Calendar", "Play"];

  const distinctCategories = distinctify(resourceCategories, categoryPool);
  const distinctResources = distinctify(resources, resourcePool);
  const distinctEvents = distinctify(upcomingEvents, eventPool);
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "BookOpen":
        return BookOpen;
      case "Video":
        return Video;
      case "FileText":
        return FileText;
      case "Download":
        return Download;
      case "Play":
        return Play;
      case "Calendar":
        return Calendar;
      case "Users":
        return Users;
      case "Star":
        return Star;
      default:
        return BookOpen;
    }
  };

  return (
    <section ref={sectionRef} className="resource-center-section">
      {/* Background Pattern */}
      <div className="resource-center-background">
        <div className="resource-center-pattern-1"></div>
        <div className="resource-center-pattern-2"></div>
      </div>
      
      <div className="resource-center-container">
        <div className={`resource-center-header ${inView ? 'resource-center-fade-in-up' : 'resource-center-fade-out'}`}>
          <h2 className="resource-center-title">
            {title}
          </h2>
          <p className="resource-center-subtitle">
            {subtitle}
          </p>
        </div>
        
        {/* Resource Categories */}
        <div className={`resource-center-categories ${inView ? 'resource-center-fade-in-up' : 'resource-center-fade-out'}`}>
          {distinctCategories.map((category, index) => {
            const IconComponent = getIconComponent(category.icon);
            
            return (
              <div
                key={category.category}
                className={`resource-center-category-wrapper ${inView ? 'resource-center-fade-in-up' : 'resource-center-fade-out'}`}
                style={{ 
                  transitionDelay: inView ? `${index * 0.1}s` : '0s',
                  animationDelay: inView ? `${index * 0.1}s` : '0s'
                }}
              >
                <div className="resource-center-category-card">
                  <div
                    className="resource-center-category-icon-container"
                    style={{ background: category.iconBg }}
                  >
                    <IconComponent className="resource-center-category-icon" style={{ color: category.iconColor }} />
                  </div>
                  <div className="resource-center-category-count">{category.count}</div>
                  <div className="resource-center-category-name">{category.category}</div>
                  <div className="resource-center-category-description">{category.description}</div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Featured Resources */}
        <div className="resource-center-featured">
          <h3 className="resource-center-featured-title">Featured Resources</h3>
          <div className="resource-center-featured-grid">
            {distinctResources.map((resource, index) => {
              const IconComponent = getIconComponent(resource.icon);
              
              return (
                <div
                  key={resource.title}
                  className={`resource-center-resource-wrapper ${inView ? 'resource-center-fade-in-up' : 'resource-center-fade-out'}`}
                  style={{ 
                    transitionDelay: inView ? `${(index + 4) * 0.15}s` : '0s',
                    animationDelay: inView ? `${(index + 4) * 0.15}s` : '0s'
                  }}
                >
                  <div className="resource-center-resource-card">
                    <div className="resource-center-resource-header">
                      <div
                        className="resource-center-resource-icon-container"
                        style={{ background: resource.iconBg }}
                      >
                        <IconComponent className="resource-center-resource-icon" style={{ color: resource.iconColor }} />
                      </div>
                      <div className="resource-center-resource-title-section">
                        <span className="resource-center-resource-type">
                          {resource.type}
                        </span>
                        <h3 className="resource-center-resource-title">
                          {resource.title}
                        </h3>
                        <p className="resource-center-resource-category">{resource.category}</p>
                      </div>
                    </div>
                    
                    <div className="resource-center-resource-content">
                      <p className="resource-center-resource-description">
                        {resource.description}
                      </p>
                      
                      <div className="resource-center-resource-details">
                        <div className="resource-center-resource-detail-item">
                          <span className="resource-center-resource-detail-label">Duration:</span>
                          <span className="resource-center-resource-detail-value">{resource.duration}</span>
                        </div>
                        <div className="resource-center-resource-detail-item">
                          <span className="resource-center-resource-detail-label">Downloads:</span>
                          <span className="resource-center-resource-detail-value">{resource.downloads.toLocaleString()}</span>
                        </div>
                        <div className="resource-center-resource-detail-item">
                          <span className="resource-center-resource-detail-label">Rating:</span>
                          <div className="resource-center-resource-rating">
                            <Star className="resource-center-resource-star" />
                            <span className="resource-center-resource-rating-value">{resource.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="resource-center-resource-button">
                      Download Resource
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Upcoming Events */}
        <div className={`resource-center-events ${inView ? 'resource-center-fade-in-up' : 'resource-center-fade-out'}`}>
          <h3 className="resource-center-events-title">Upcoming Events</h3>
          <div className="resource-center-events-grid">
            {distinctEvents.map((event, index) => {
              const IconComponent = getIconComponent(event.icon);
              
              return (
                <div
                  key={event.title}
                  className={`resource-center-event-wrapper ${inView ? 'resource-center-fade-in-up' : 'resource-center-fade-out'}`}
                  style={{ 
                    transitionDelay: inView ? `${(index + 10) * 0.1}s` : '0s',
                    animationDelay: inView ? `${(index + 10) * 0.1}s` : '0s'
                  }}
                >
                  <div className="resource-center-event-card">
                    <div className="resource-center-event-header">
                      <div
                        className="resource-center-event-icon-container"
                        style={{ background: event.iconBg }}
                      >
                        <IconComponent className="resource-center-event-icon" style={{ color: event.iconColor }} />
                      </div>
                      <div className="resource-center-event-title-section">
                        <span className="resource-center-event-type">
                          {event.type}
                        </span>
                        <h4 className="resource-center-event-title">
                          {event.title}
                        </h4>
                      </div>
                    </div>
                    
                    <p className="resource-center-event-description">
                      {event.description}
                    </p>
                    
                    <div className="resource-center-event-details">
                      <div className="resource-center-event-detail-item">
                        <span className="resource-center-event-detail-label">Date:</span>
                        <span className="resource-center-event-detail-value">{event.date}</span>
                      </div>
                      <div className="resource-center-event-detail-item">
                        <span className="resource-center-event-detail-label">Time:</span>
                        <span className="resource-center-event-detail-value">{event.time}</span>
                      </div>
                      <div className="resource-center-event-detail-item">
                        <span className="resource-center-event-detail-label">Attendees:</span>
                        <span className="resource-center-event-detail-value">{event.attendees}</span>
                      </div>
                    </div>
                    
                    <button className="resource-center-event-button">
                      Register Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Resource Stats */}
        <div className={`resource-center-stats ${inView ? 'resource-center-fade-in-up' : 'resource-center-fade-out'}`}>
          <div className="resource-center-stat">
            <div className="resource-center-stat-value">{resourceStats.resources}</div>
            <div className="resource-center-stat-label">Resources Available</div>
          </div>
          <div className="resource-center-stat">
            <div className="resource-center-stat-value">{resourceStats.downloads}</div>
            <div className="resource-center-stat-label">Downloads</div>
          </div>
          <div className="resource-center-stat">
            <div className="resource-center-stat-value">{resourceStats.rating}</div>
            <div className="resource-center-stat-label">Average Rating</div>
          </div>
          <div className="resource-center-stat">
            <div className="resource-center-stat-value">{resourceStats.learners}</div>
            <div className="resource-center-stat-label">Active Learners</div>
          </div>
        </div>
      </div>
    </section>
  );
}
