/**
 * @fileoverview Business Slider Component
 * 
 * A modern business slider component featuring:
 * - Business collaboration illustration
 * - Digital transformation messaging
 * - Free demo inquiry form
 * - Professional design with subtle backgrounds
 * - Responsive layout for all devices
 * 
 * @component BusinessSlider
 * @example
 * ```tsx
 * import BusinessSlider from "@/components/sections/business-slider"
 * 
 * export default function HomePage() {
 *   return (
 *     <div>
 *       <BusinessSlider />
 *       <OtherSections />
 *     </div>
 *   )
 * }
 * ```
 * 
 * @author AI Assistant
 * @version 1.0.0
 * @requires @/components/ui/button - For form submission button
 * @requires framer-motion - For animations
 */

"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Send, X, MessageCircle, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  organization: string;
  email: string;
  mobile: string;
}

export default function BusinessSlider({ data = {} }: { data?: Record<string, any> }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    email: "",
    mobile: ""
  });
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Auto open on initial page load with a slight delay for nicer animation
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="business-slider-container">
      {/* Inquiry Tab */}
      <div className="inquiry-tab-container">
        {!open && (
          <button
            className="inquiry-button"
            onClick={() => setOpen(true)}
            aria-label="Open Inquiry Form"
          >
            <span>Inquiry</span>
            <div className="inquiry-icons">
              <div className="inquiry-icon">
                <Image src="/enquire-icon.svg" alt="Inquiry" width={20} height={20} />
              </div>
            </div>
          </button>
        )}
      </div>
      {/* Slide-in Form */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={formRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
            className="slide-form-container"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
          >
            {/* Close Button */}
            <button
              className="close-button"
              onClick={() => setOpen(false)}
              aria-label="Close Inquiry Form"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="form-content">
              <h3 className="form-title">
                Free Demo
              </h3>
              <form onSubmit={handleSubmit} className="form-container">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-field"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="organization"
                    placeholder="Organization Name"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="form-field"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-field"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile No"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="form-field"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="submit-button"
                >
                  {/* Left side color animation */}
                  <div className="button-left-animation"></div>
                  
                  {/* Right side color animation */}
                  <div className="button-right-animation"></div>
                  
                  {/* Content with color transition */}
                  <div className="button-content">
                    <Send className="button-icon" />
                    <span className="button-text">SUBMIT</span>
                  </div>
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
