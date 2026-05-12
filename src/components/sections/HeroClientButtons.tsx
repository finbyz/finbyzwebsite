'use client';

import { Button } from "@/components/ui/button";
import React from "react";

interface HeroClientButtonsProps {
  primaryButtonText: string;
  secondaryButtonText: string;
  scrollTarget?: string;
}

/**
 * Client component for the homepage hero buttons.
 * Handles scroll-to-element and navigation interactions.
 */
export default function HeroClientButtons({ primaryButtonText, secondaryButtonText, scrollTarget = 'inquiry-form' }: HeroClientButtonsProps) {
  function GotoInquiryForm() {
    const inquiryForm = document.getElementsByClassName(scrollTarget)[0];
    if (inquiryForm) {
      inquiryForm.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="hero-button-group">
      <Button
        size="lg"
        className="hero-primary-button"
        onClick={GotoInquiryForm}
      >
        {primaryButtonText}
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="hero-secondary-button"
        onClick={() => {
          window.location.href = '/contact';
        }}
      >
        {secondaryButtonText}
      </Button>
    </div>
  );
}
