"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 500 && currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 shadow-lg z-40 transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "translate-y-full"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <p className="font-semibold text-foreground">Ready to get started?</p>
          <p className="text-sm text-muted-foreground">Book a free consultation today</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Get Started
        </Button>
      </div>
    </div>
  );
}

