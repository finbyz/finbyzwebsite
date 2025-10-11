'use client';

import React, { useState } from 'react';
import { Input } from './input';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { Mail, Phone, Building, User } from 'lucide-react';

interface InquiryFormProps {
  data?: any;
  className?: string;
}

export function InquiryForm({ data, className }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    mobile: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const defaultData = {
    component_type: "Form",
    title: "Book a Free Consultation",
    highlightText: "", 
    description: "Get started with your free demo today and discover how our solutions can transform your business",
    fields: {
      name: "Name",
      organization: "Organization Name",
      email: "Email",
      mobile: "Mobile No"
    },
    submitText: "SUBMIT",
    backgroundImage: undefined
  };


  // Support either raw data object or a manifest object with example.data
  const resolved: any = (data?.example?.data) || (data?.data) || (data);
  const formConfig = resolved || defaultData;

  const component_type = formConfig?.component_type ?? "Form";

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      if (!formData.mobile.match(/^\+?\d{10,15}$/)) {
        alert("Please enter a valid mobile number.");
        setIsSubmitting(false);
        return;
      }

      const payload = {
        lead_name: formData.name,
        company_name: formData.organization,
        mobile_no: formData.mobile,
        title: typeof window !== 'undefined' ? document.title : 'Website Inquiry',
        email: formData.email,
      };

      // /api/frappe/finbyzweb.api.set_form_data
      // https://website.finbyz.com/api/method/finbyzweb.api.set_form_data

      // Use the same API as business slider
      const res = await fetch('https://finbyz.tech/api/method/finbyzweb.api.set_form_data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      console.log('Inquiry submission response:', res);
      

      if (!res.ok) {
        const raw = await res.text();
        let message = raw;
        try {
          const json = JSON.parse(raw);
          message = json.message || json._server_messages || json.exc || raw;
          if (json.exc_type === 'ValidationError') {
            message = 'Invalid form data. Please check all fields and try again.';
          } else if (json.exc_type === 'PermissionError') {
            message = 'You do not have permission to submit this form. Please contact support.';
          }
        } catch {}
        if (res.status === 409) {
          alert('We already have your inquiry. Thank you!');
          setFormData({
            name: '',
            organization: '',
            email: '',
            mobile: ''
          });
          setIsSubmitting(false);
          return;
        }
        throw new Error(message || `Request failed with status ${res.status}`);
      }

      // Success
      alert('Thanks! Your inquiry has been submitted.');
      setFormData({
        name: '',
        organization: '',
        email: '',
        mobile: ''
      });
      setIsSubmitting(false);
    } catch (error) {
      console.error('Inquiry submission failed:', error);
      alert('Sorry, something went wrong submitting your inquiry. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn('inquiry-form', className)}>
      {/* Main Form Container */}
      <div className="inquiry-form__card">
        <div className="inquiry-form__inner">
          <div className="inquiry-form__grid">
            
            {/* Left Section - Content */}
            <div className="inquiry-form__content">
              <div className="inquiry-form__content-wrapper">
                {/* Component Type Display */}
                {/* <div className="inquiry-form__type">
                  Component Type: {component_type}
                </div> */}
                
                <h2 className="inquiry-form__title">
                  {formConfig.title}
                </h2>
                
                <p className="inquiry-form__desc">
                  {formConfig.description}
                </p>
                
                {/* Feature Icons */}
                <div className="inquiry-form__feature-grid">
                  <div className="inquiry-form__feature-card">
                    <div className="inquiry-form__icon-circle" style={{ backgroundColor: "#1A5276" }}>
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="inquiry-form__feature-text">Quick Response</span>
                  </div>
                  <div className="inquiry-form__feature-card">
                    <div className="inquiry-form__icon-circle">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <span className="inquiry-form__feature-text">Free Consultation</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Section - Form */}
            <div className="inquiry-form__form-section">
              <div className="w-full">
                <div className="inquiry-form__form-header">
                  <h3 className="inquiry-form__form-title">Get Started Today</h3>
                  <p className="inquiry-form__form-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>
                </div>
                
                <form onSubmit={handleSubmit} className="inquiry-form__form">
                  {/* Hidden Component Type Field */}
                  <input type="hidden" name="component_type" value={component_type} />
                  
                  {/* Name Field */}
                  <div className="inquiry-form__field">
                    <label className="inquiry-form__label">
                      {formConfig.fields?.name}
                    </label>
                    <div className="inquiry-form__input-wrapper">
                      <User className="inquiry-form__input-icon" />
                      <Input
                        type="text"
                        placeholder={`Enter your ${formConfig.fields?.name?.toLowerCase()}`}
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="inquiry-form__input"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Organization Field */}
                  <div className="inquiry-form__field">
                    <label className="inquiry-form__label">
                      {formConfig.fields?.organization}
                    </label>
                    <div className="inquiry-form__input-wrapper">
                      <Building className="inquiry-form__input-icon" />
                      <Input
                        type="text"
                        placeholder={`Enter your ${formConfig.fields?.organization?.toLowerCase()}`}
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        className="inquiry-form__input"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Email Field */}
                  <div className="inquiry-form__field">
                    <label className="inquiry-form__label">
                      {formConfig.fields?.email}
                    </label>
                    <div className="inquiry-form__input-wrapper">
                      <Mail className="inquiry-form__input-icon" />
                      <Input
                        type="email"
                        placeholder={`Enter your ${formConfig.fields?.email?.toLowerCase()}`}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="inquiry-form__input"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Mobile Field */}
                  <div className="inquiry-form__field">
                    <label className="inquiry-form__label">
                      {formConfig.fields?.mobile}
                    </label>
                    <div className="inquiry-form__input-wrapper">
                      <Phone className="inquiry-form__input-icon" />
                      <Input
                        type="tel"
                        placeholder={`Enter your ${formConfig.fields?.mobile?.toLowerCase()}`}
                        value={formData.mobile}
                        onChange={(e) => handleInputChange('mobile', e.target.value)}
                        className="inquiry-form__input"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="inquiry-form__submit"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="inquiry-form__spinner"></div>
                        Submitting...
                      </div>
                    ) : (
                      formConfig.submitText
                    )}
                  </Button>
                </form>
                
                {/* Privacy Notice */}
                <p className="inquiry-form__privacy">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InquiryForm;
