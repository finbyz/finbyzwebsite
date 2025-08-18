"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle, Globe, Building, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "@/styles/components/contact-info.css";

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

interface ContactMethod {
  method: string;
  value: string;
  description: string;
  availability: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

interface OfficeLocation {
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  timezone: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

interface ContactStat {
  metric: string;
  label: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

interface ContactCTA {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
}

interface ContactInfoProps {
  data?: {
    title?: string;
    subtitle?: string;
    contactMethods?: Array<{
      icon: string;
      title: string;
      value: string;
      description: string;
    }>;
    form?: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitText: string;
    };
    contactStats?: ContactStat[];
    officeLocations?: OfficeLocation[];
    cta?: ContactCTA;
  };
}

export default function ContactInfo({ data = {} }: ContactInfoProps) {
  const [sectionRef, inView] = useInView(0.3);

  const {
    title = "Contact Information",
    subtitle = "Get in touch with us through multiple channels. We're here to help you succeed.",
    contactStats = [
      {
        metric: "24/7",
        label: "Support",
        description: "Round-the-clock assistance",
        icon: "Clock",
        iconColor: "#27AE60",
        iconBg: "#E8F8F2"
      },
      {
        metric: "15min",
        label: "Response",
        description: "Average response time",
        icon: "MessageCircle",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        metric: "98%",
        label: "Satisfaction",
        description: "Client satisfaction rate",
        icon: "Globe",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      },
      {
        metric: "3",
        label: "Languages",
        description: "English, Spanish, French",
        icon: "Users",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
      }
    ],
    contactMethods = [
      {
        method: "Phone Support",
        value: "+1 (555) 123-4567",
        description: "Call us for immediate assistance",
        availability: "24/7",
        icon: "Phone",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        method: "Email Support",
        value: "support@finbyz.com",
        description: "Send us an email anytime",
        availability: "24/7",
        icon: "Mail",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      },
      {
        method: "Live Chat",
        value: "Start Chat",
        description: "Instant messaging support",
        availability: "Business Hours",
        icon: "MessageCircle",
        iconColor: "#27AE60",
        iconBg: "#E8F8F2"
      },
      {
        method: "Video Call",
        value: "Schedule Meeting",
        description: "Face-to-face consultation",
        availability: "By Appointment",
        icon: "Users",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
      }
    ],
    officeLocations = [
      {
        city: "New York",
        address: "350 5th Avenue, New York, NY 10118",
        phone: "+1 (212) 555-0123",
        email: "nyc@finbyz.com",
        hours: "Mon-Fri: 9AM-6PM EST",
        timezone: "EST (UTC-5)",
        icon: "Building",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        city: "London",
        address: "30 St Mary Axe, London EC3A 8BF",
        phone: "+44 20 7123 4567",
        email: "london@finbyz.com",
        hours: "Mon-Fri: 9AM-6PM GMT",
        timezone: "GMT (UTC+0)",
        icon: "Building",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      },
      {
        city: "Singapore",
        address: "1 Raffles Place, Singapore 048616",
        phone: "+65 6789 0123",
        email: "singapore@finbyz.com",
        hours: "Mon-Fri: 9AM-6PM SGT",
        timezone: "SGT (UTC+8)",
        icon: "Building",
        iconColor: "#27AE60",
        iconBg: "#E8F8F2"
      }
    ],
    cta = {
      title: "Ready to Get Started?",
      description: "Let's discuss your project requirements and how we can help you achieve your goals.",
      primaryButton: "Schedule a Call",
      secondaryButton: "Send Message"
    }
  } = data;

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Phone":
        return Phone;
      case "Mail":
        return Mail;
      case "MapPin":
        return MapPin;
      case "Clock":
        return Clock;
      case "MessageCircle":
        return MessageCircle;
      case "Globe":
        return Globe;
      case "Building":
        return Building;
      case "Users":
        return Users;
      default:
        return Phone;
    }
  };

  return (
    <section ref={sectionRef} className="contact-info-section">
      {/* Background Pattern */}
      <div className="contact-info-background">
        <div className="contact-info-pattern-1"></div>
        <div className="contact-info-pattern-2"></div>
      </div>
      
      <div className="contact-info-container">
        <div className={`contact-info-header ${inView ? 'contact-info-fade-in-up' : 'contact-info-fade-out'}`}>
          <h2 className="contact-info-title">
            {title}
          </h2>
          <p className="contact-info-subtitle">
            {subtitle}
          </p>
        </div>
        
        {/* Contact Stats */}
        <div className={`contact-info-stats ${inView ? 'contact-info-fade-in-up' : 'contact-info-fade-out'}`}>
          {contactStats.map((stat, index) => {
            const IconComponent = getIconComponent(stat.icon);
            
            return (
              <div
                key={stat.label}
                className={`contact-info-stat-wrapper ${inView ? 'contact-info-fade-in-up' : 'contact-info-fade-out'}`}
                style={{ 
                  transitionDelay: inView ? `${index * 0.1}s` : '0s',
                  animationDelay: inView ? `${index * 0.1}s` : '0s'
                }}
              >
                <div className="contact-info-stat-card">
                  <div
                    className="contact-info-stat-icon-container"
                    style={{ background: stat.iconBg }}
                  >
                    <IconComponent className="contact-info-stat-icon" style={{ color: stat.iconColor }} />
                  </div>
                  <div className="contact-info-stat-metric">{stat.metric}</div>
                  <div className="contact-info-stat-label">{stat.label}</div>
                  <div className="contact-info-stat-description">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Contact Methods */}
        <div className="contact-info-methods">
          <h3 className="contact-info-methods-title">Contact Methods</h3>
          <div className="contact-info-methods-grid">
            {contactMethods.map((method: any, index: number) => {
              const IconComponent = getIconComponent(method.icon);
              
              return (
                <div
                  key={method.method || method.title || index}
                  className={`contact-info-method-wrapper ${inView ? 'contact-info-fade-in-up' : 'contact-info-fade-out'}`}
                  style={{ 
                    transitionDelay: inView ? `${(index + 4) * 0.15}s` : '0s',
                    animationDelay: inView ? `${(index + 4) * 0.15}s` : '0s'
                  }}
                >
                  <div className="contact-info-method-card">
                    <div className="contact-info-method-header">
                      <div
                        className="contact-info-method-icon-container"
                        style={{ background: method.iconBg || "#EAF1F8" }}
                      >
                        <IconComponent className="contact-info-method-icon" style={{ color: method.iconColor || "#1A5276" }} />
                      </div>
                      <div className="contact-info-method-title-section">
                        <h3 className="contact-info-method-title">
                          {method.method || method.title}
                        </h3>
                        <p className="contact-info-method-availability">{method.availability || "Available"}</p>
                      </div>
                    </div>
                    
                    <div className="contact-info-method-content">
                      <p className="contact-info-method-description">
                        {method.description}
                      </p>
                      
                      <div className="contact-info-method-value">
                        {method.value}
                      </div>
                    </div>
                    
                    <button className="contact-info-method-button">
                      Contact Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Contact Form */}
        {data?.form && (
          <div className={`contact-info-form ${inView ? 'contact-info-fade-in-up' : 'contact-info-fade-out'}`}>
            <h3 className="contact-info-form-title">{data.form.title}</h3>
            <form className="contact-info-form-container">
              <div className="contact-info-form-field">
                <label htmlFor="name" className="contact-info-form-label">{data.form.nameLabel}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={data.form.namePlaceholder}
                  className="contact-info-form-input"
                  required
                />
              </div>
              <div className="contact-info-form-field">
                <label htmlFor="email" className="contact-info-form-label">{data.form.emailLabel}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={data.form.emailPlaceholder}
                  className="contact-info-form-input"
                  required
                />
              </div>
              <div className="contact-info-form-field">
                <label htmlFor="message" className="contact-info-form-label">{data.form.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={data.form.messagePlaceholder}
                  className="contact-info-form-textarea"
                  rows={4}
                  required
                />
              </div>
              <button type="submit" className="contact-info-form-submit">
                {data.form.submitText}
              </button>
            </form>
          </div>
        )}
        
        {/* Office Locations */}
        <div className={`contact-info-offices ${inView ? 'contact-info-fade-in-up' : 'contact-info-fade-out'}`}>
          <h3 className="contact-info-offices-title">Office Locations</h3>
          <div className="contact-info-offices-grid">
            {officeLocations.map((office, index) => {
              const IconComponent = getIconComponent(office.icon);
              
              return (
                <div
                  key={office.city}
                  className={`contact-info-office-wrapper ${inView ? 'contact-info-fade-in-up' : 'contact-info-fade-out'}`}
                  style={{ 
                    transitionDelay: inView ? `${(index + 8) * 0.1}s` : '0s',
                    animationDelay: inView ? `${(index + 8) * 0.1}s` : '0s'
                  }}
                >
                  <div className="contact-info-office-card">
                    <div className="contact-info-office-header">
                      <div
                        className="contact-info-office-icon-container"
                        style={{ background: office.iconBg }}
                      >
                        <IconComponent className="contact-info-office-icon" style={{ color: office.iconColor }} />
                      </div>
                      <div className="contact-info-office-title-section">
                        <h4 className="contact-info-office-city">
                          {office.city}
                        </h4>
                        <p className="contact-info-office-timezone">{office.timezone}</p>
                      </div>
                    </div>
                    
                    <div className="contact-info-office-details">
                      <div className="contact-info-office-detail-item">
                        <MapPin className="contact-info-office-detail-icon" />
                        <p className="contact-info-office-detail-text">{office.address}</p>
                      </div>
                      <div className="contact-info-office-detail-item">
                        <Phone className="contact-info-office-detail-icon" />
                        <p className="contact-info-office-detail-text">{office.phone}</p>
                      </div>
                      <div className="contact-info-office-detail-item">
                        <Mail className="contact-info-office-detail-icon" />
                        <p className="contact-info-office-detail-text">{office.email}</p>
                      </div>
                      <div className="contact-info-office-detail-item">
                        <Clock className="contact-info-office-detail-icon" />
                        <p className="contact-info-office-detail-text">{office.hours}</p>
                      </div>
                    </div>
                    
                    <button className="contact-info-office-button">
                      Visit Office
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Contact Form CTA */}
        <div className={`contact-info-cta ${inView ? 'contact-info-fade-in-up' : 'contact-info-fade-out'}`}>
          <div className="contact-info-cta-card">
            <h3 className="contact-info-cta-title">{cta.title}</h3>
            <p className="contact-info-cta-description">
              {cta.description}
            </p>
            <div className="contact-info-cta-buttons">
              <button className="contact-info-cta-primary-button">
                {cta.primaryButton}
              </button>
              <button className="contact-info-cta-secondary-button">
                {cta.secondaryButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
