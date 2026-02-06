import React from 'react';

// Component Interfaces
export interface CardProps {
  title: string;
  description: string;
  date?: string;
  buttonText?: string;
}

export interface BannerProps {
  headline: string;
  subtext: string;
  primaryButton: string;
  secondaryButton?: string;
}

export interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
}

export interface TestimonialProps {
  avatar: string;
  rating: number;
  quote: string;
  author: string;
  company: string;
}

export interface StatsProps {
  value: string;
  label: string;
  description: string;
}

export interface HeroProps {
  title: string;
  highlight?: string;
  description: string;
  primaryButton: string;
  secondaryButton?: string;
  image?: string;
  imageAlt?: string;
}

export interface BenefitsProps {
  title: string;
  subtitle?: string;
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface ServicesProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  services: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface CTAProps {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton?: string;
}

// Component Implementations
export function Card({ title, description, date = new Date().getFullYear().toString(), buttonText = 'Learn More' }: CardProps) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">{date}</span>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export function Banner({ headline, subtext, primaryButton, secondaryButton }: BannerProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">{headline}</h1>
        <p className="text-xl opacity-90 mb-6">{subtext}</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
            {primaryButton}
          </button>
          {secondaryButton && (
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              {secondaryButton}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function Feature({ icon, title, description, link, linkText = 'Learn More' }: FeatureProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-orange-600 text-xl">{icon}</span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
          <div className="mt-4">
            <a href={link} className="text-orange-600 hover:text-blue-800 font-medium text-sm">
              {linkText} →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial({ avatar, rating, quote, author, company }: TestimonialProps) {
  const stars = '★'.repeat(rating);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-semibold">{avatar}</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <span className="text-yellow-400">{stars}</span>
          </div>
          <blockquote className="text-gray-700 italic mb-3">"{quote}"</blockquote>
          <div className="text-sm">
            <p className="font-semibold text-gray-900">{author}</p>
            <p className="text-gray-600">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Stats({ value, label, description }: StatsProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
      <div className="text-3xl font-bold text-orange-600 mb-2">{value}</div>
      <div className="text-gray-600 font-medium">{label}</div>
      <div className="text-sm text-gray-500 mt-1">{description}</div>
    </div>
  );
}

export function Hero({ title, highlight, description, primaryButton, secondaryButton, image, imageAlt }: HeroProps) {
  return (
    <section className="hero-section bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="hero-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-text">
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {title}
              {highlight && (
                <span className="hero-highlight text-orange-600 block"> {highlight}</span>
              )}
            </h1>
            <p className="hero-description text-xl text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <button className="hero-primary-button bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
                {primaryButton}
              </button>
              {secondaryButton && (
                <button className="hero-secondary-button border-2 border-blue-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
                  {secondaryButton}
                </button>
              )}
            </div>
          </div>
          {image && (
            <div className="hero-image-container">
              <img
                src={image}
                alt={imageAlt || "Hero illustration"}
                className="hero-image w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Benefits({ title, subtitle, benefits }: BenefitsProps) {
  return (
    <section className="benefits-section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="benefit-icon text-4xl mb-4">{benefit.icon}</div>
              <h3 className="benefit-title text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="benefit-description text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services({ title, subtitle, ctaText, services }: ServicesProps) {
  return (
    <section className="services-section py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="service-icon text-3xl mb-4">{service.icon}</div>
              <h3 className="service-title text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="service-description text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        {ctaText && (
          <div className="text-center mt-12">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
              {ctaText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export function CTA({ title, description, primaryButton, secondaryButton }: CTAProps) {
  return (
    <section className="cta-section py-20 bg-orange-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-blue-100 mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
            {primaryButton}
          </button>
          {secondaryButton && (
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
              {secondaryButton}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
