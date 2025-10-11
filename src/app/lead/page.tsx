"use client";

import React, { useState } from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

interface LeadFormData {
  personName: string;
  organizationName: string;
  contactNumber: string;
  email: string;
  leadType: string;
}

const LeadPage = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    personName: '',
    organizationName: '',
    contactNumber: '',
    email: '',
    leadType: ''
  });

  const [errors, setErrors] = useState<Partial<LeadFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const leadTypeOptions = [
    'Channel Partner',
    'Consultant', 
    'End User'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof LeadFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<LeadFormData> = {};

    if (!formData.personName.trim()) {
      newErrors.personName = 'Person Name is required';
    }

    if (!formData.organizationName.trim()) {
      newErrors.organizationName = 'Organization Name is required';
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact Number is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.leadType) {
      newErrors.leadType = 'Lead Type is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // don't change this function bcz api working is done 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Make API request to Frappe endpoint
      const response = await fetch("https://finbyz.tech/api/method/finbyzweb.api.create_lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lead_name: formData.personName,
          company_name: formData.organizationName,
          mobile_no: formData.contactNumber,
          email_id: formData.email,
          lead_type: formData.leadType
        }),
      });

      const result = await response.json();
      console.log("API response:", result.message);
      

      if (response.ok && result.message?.status !== "error") {
        alert(result.message.message );
        setFormData({
          personName: "",
          organizationName: "",
          contactNumber: "",
          email: "",
          leadType: ""
        });
      } else {
        alert( result.message.message  );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDiscard = () => {
    setFormData({
      personName: '',
      organizationName: '',
      contactNumber: '',
      email: '',
      leadType: ''
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-4">
      <div className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <div className="mb-6">
          </div>
          <div className="bg-white rounded-lg shadow border border-gray-100">
            <div className="px-6 py-6 border-b border-gray-100">
              <h1 className="text-2xl font-semibold text-gray-900">Lead Information</h1>
              <p className="text-sm text-gray-600 mt-1">Basic details about the lead.</p>
            </div>
            <form onSubmit={handleSubmit} className="px-6 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="personName" className="block text-sm font-medium text-gray-800">
                    Person Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="personName"
                    name="personName"
                    value={formData.personName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.personName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.personName && (
                    <p className="text-sm text-red-600 font-medium">{errors.personName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="organizationName" className="block text-sm font-medium text-gray-800">
                    Organization Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.organizationName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter organization name"
                  />
                  {errors.organizationName && (
                    <p className="text-sm text-red-600 font-medium">{errors.organizationName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-800">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.contactNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter mobile number"
                  />
                  {errors.contactNumber && (
                    <p className="text-sm text-red-600 font-medium">{errors.contactNumber}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 font-medium">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="leadType" className="block text-sm font-medium text-gray-800">
                    Lead Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="leadType"
                    name="leadType"
                    value={formData.leadType}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.leadType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a lead type</option>
                    {leadTypeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.leadType && (
                    <p className="text-sm text-red-600 font-medium">{errors.leadType}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t mt-8">
                <button
                  type="button"
                  onClick={handleDiscard}
                  className="px-6 py-3 border border-gray-300 text-gray-700 bg-white rounded-md font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default LeadPage;