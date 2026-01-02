

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
import { useRouter } from "next/navigation";
import { PhoneField } from "@/components/ui/PhoneField";
import { useGeoLocation } from "@/hooks/useGeoLocation";

interface FormData {
  name: string;
  organization: string;
  email: string;
  mobile: string;
  countryCode: string;
}

export default function BusinessSlider({ data = {} }: { data?: Record<string, any> }) {
  const {
    component_type = "Form",
    ...otherData
  } = data;

  // Auto-detect country code (uses Cloudflare, cached in localStorage)
  const geoLocation = useGeoLocation('+91');

  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    email: "",
    mobile: "",
    countryCode: "+91"
  });
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // ✅ Initialize router

  // Update country code when detected
  useEffect(() => {
    if (!geoLocation.loading && geoLocation.dialCode) {
      setFormData(prev => ({ ...prev, countryCode: geoLocation.dialCode }));
    }
  }, [geoLocation.loading, geoLocation.dialCode]);

  // Function to set cookie for 1 hour
  const setSliderCookie = () => {
    const expires = new Date();
    expires.setHours(expires.getHours() + 1); // Set cookie to expire in 1 hour
    document.cookie = `business-slider-shown=true; expires=${expires.toUTCString()}; path=/`;
  };

  // Function to get and increment open count
  const getOpenCount = () => {
    const cookieName = 'business-slider-open-count';
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${cookieName}=`));

    if (!cookieValue) {
      return 0;
    }

    const count = parseInt(cookieValue.split('=')[1]) || 0;
    return count;
  };

  // Function to increment open count
  const incrementOpenCount = () => {
    const currentCount = getOpenCount();
    const newCount = currentCount + 1;
    const expires = new Date();
    expires.setHours(expires.getHours() + 1); // Set cookie to expire in 1 hour
    document.cookie = `business-slider-open-count=${newCount}; expires=${expires.toUTCString()}; path=/`;
    return newCount;
  };

  // Function to reset open count
  const resetOpenCount = () => {
    const expires = new Date();
    expires.setHours(expires.getHours() + 1); // Set cookie to expire in 1 hour
    document.cookie = `business-slider-open-count=0; expires=${expires.toUTCString()}; path=/`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // stop double click


    setIsSubmitting(true);
    try {
      // Basic client-side validation
      if (!formData.name.trim()) {
        alert("Please enter your name.");
        setIsSubmitting(false);
        return;
      }
      if (!formData.organization.trim()) {
        alert("Please enter your organization name.");
        setIsSubmitting(false);
        return;
      }
      if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        alert("Please enter a valid email address.");
        setIsSubmitting(false);
        return;
      }
      if (!formData.mobile.match(/^\d{6,15}$/)) {
        alert("Please enter a valid mobile number (digits only, without country code).");
        setIsSubmitting(false);
        return;
      }

      // Combine country code with mobile number
      const fullMobileNumber = `${formData.countryCode}${formData.mobile}`;

      const payload = {
        lead_name: formData.name,
        company_name: formData.organization,
        mobile_no: fullMobileNumber,
        title: typeof window !== "undefined" ? window.location.href : "Website Inquiry",
        email: formData.email,
      };

      // Use the proxy endpoint to avoid CORS
      const res = await fetch('/web-api/fb/method/finbyzweb.api.set_form_data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });


      // Success
      //  Redirect after successful submit

      router.push("/thank-you-for-inquiry");

      setFormData({ name: '', organization: '', email: '', mobile: '', countryCode: '+91' });
      setSliderCookie(); // Set cookie to prevent showing again for 1 hour
      resetOpenCount(); // Reset the open count since user completed the form
      setOpen(false);
      setIsSubmitting(false);
    } catch (error) {
      console.error('Inquiry submission failed:', error);
      alert('Sorry, something went wrong submitting your inquiry. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        setSliderCookie(); // Set cookie to prevent showing again for 1 hour
        resetOpenCount(); // Reset the open count since user closed it
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // Auto open on initial page load with a slight delay for nicer animation
  // Only open if cookie is not set (hasn't been shown in the last hour)
  // Also check if it has been opened 3 times without being closed
  useEffect(() => {
    const checkCookieAndOpen = () => {
      const cookieName = 'business-slider-shown';
      const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${cookieName}=`));

      if (!cookieValue) {
        // Check open count
        const openCount = getOpenCount();

        if (openCount >= 3) {
          // Has been opened 3 times without being closed, set cookie to prevent showing
          setSliderCookie();
          return;
        }

        // Increment open count and show the slider
        incrementOpenCount();
        const timer = setTimeout(() => setOpen(true), 400);
        return () => clearTimeout(timer);
      }
    };

    checkCookieAndOpen();
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
              onClick={() => {
                setSliderCookie(); // Set cookie to prevent showing again for 1 hour
                resetOpenCount(); // Reset the open count since user closed it
                setOpen(false);
              }}
              aria-label="Close Inquiry Form"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="form-content">
              <h3 className="form-title">Free Demo</h3>
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
                <PhoneField
                  countryCode={formData.countryCode}
                  phoneNumber={formData.mobile}
                  onCountryCodeChange={(value: string) => setFormData(prev => ({ ...prev, countryCode: value }))}
                  onPhoneNumberChange={(value: string) => setFormData(prev => ({ ...prev, mobile: value }))}
                  required
                  placeholder="Phone Number"
                />
                <Button disabled={isSubmitting} type="submit" className="submit-button">
                  <div className="button-left-animation"></div>
                  <div className="button-right-animation"></div>
                  <div className="button-content">
                    {isSubmitting ? (
                      <>
                        <span
                          className="
                              w-4 h-4
                              border-2 border-white 
                              border-t-transparent 
                              rounded-full 
                              mr-2 
                              animate-spin
                            "
                        ></span>
                        <span className="button-text">PLEASE WAIT...</span>

                      </>
                    ) : (
                      <>
                        <Send className="button-icon" />
                        <span className="button-text">SUBMIT</span>
                      </>
                    )}
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
