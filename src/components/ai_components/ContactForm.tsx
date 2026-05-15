"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import { PhoneField } from "@/components/ui/PhoneField";
import { useGeoLocation } from "@/hooks/useGeoLocation";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MapPin, Building2, User, Mail } from 'lucide-react';

const planMessages: Record<string, string> = {
  basic: "I'm interested in the Basic Support plan.",
  professional: "I'm interested in the Professional Support plan.",
  enterprise: "I'm interested in the Enterprise Support plan.",
};

const ContactForm: React.FC = () => {
  const searchParams = useSearchParams();

  const initialState = {
    lead_name: searchParams.get('lead_name') || '',
    email_id: searchParams.get('email_id') || '',
    mobile_no: searchParams.get('mobile_no') || '',
    country_code: searchParams.get('country_code') || '+91',
    company_name: searchParams.get('company_name') || '',
    notes: searchParams.get('notes') || (searchParams.get('plan') ? planMessages[searchParams.get('plan')!] || '' : ''),
  };
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [referer, setReferer] = useState(searchParams.get('referer') || '');
  const router = useRouter();

  const geoLocation = useGeoLocation('+91');

  useEffect(() => {
    if (!geoLocation.loading && geoLocation.dialCode) {
      setForm(prev => ({ ...prev, country_code: geoLocation.dialCode }));
    }
  }, [geoLocation.loading, geoLocation.dialCode]);

  useEffect(() => {
    if (!referer && typeof document !== 'undefined') {
      setReferer(document.referrer || 'direct');
    }
  }, [referer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/contact/thank-you-for-inquiry");
    setLoading(true);

    try {
      const data = {
        name1: form.lead_name,
        email: form.email_id,
        subject: `${form.country_code}${form.mobile_no}`,
        message: form.notes,
        doctype: "Contact Us",
        web_form_name: "contact",
        custom_referer: referer,
      };

      const formBody = new URLSearchParams({
        data: JSON.stringify(data),
        web_form: "contact",
        for_payment: "false",
        cmd: "frappe.website.doctype.web_form.web_form.accept",
      }).toString();

      const res = await fetch("web-api/fb/n", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Accept": "application/json, text/javascript, */*; q=0.01",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: formBody,
      });

      if (res.ok) {
        setForm(initialState);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border border-gray-100 shadow-xl animate-fade-in-up rounded-2xl overflow-hidden py-0">
      <div className="bg-gradient-to-r from-[#1A5276] to-[#1A5276]/90 px-8 py-7">
        <CardTitle className="text-white text-2xl flex items-center gap-3">
          <div className="bg-white/20 rounded-full">
            <Send className="w-5 h-5 text-white" />
          </div>
          Get in Touch
        </CardTitle>
        <p className="text-white/70 text-base mt-1.5">Fill the form and our team will get back to you within 24 hours</p>
      </div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <CardContent className="flex flex-col gap-6 pt-8 px-8">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              name="lead_name"
              placeholder="Full Name"
              value={form.lead_name}
              onChange={handleChange}
              required
              aria-label="Name"
              className="pl-12 py-6 text-base border-gray-200 focus:border-[#1A5276] focus:ring-[#1A5276]/20 rounded-lg"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              name="email_id"
              type="email"
              placeholder="Email Address"
              value={form.email_id}
              onChange={handleChange}
              required
              aria-label="Email Address"
              className="pl-12 py-6 text-base border-gray-200 focus:border-[#1A5276] focus:ring-[#1A5276]/20 rounded-lg"
            />
          </div>
          <PhoneField
            countryCode={form.country_code}
            phoneNumber={form.mobile_no}
            onCountryCodeChange={(value: string) => setForm(prev => ({ ...prev, country_code: value }))}
            onPhoneNumberChange={(value: string) => setForm(prev => ({ ...prev, mobile_no: value }))}
            required
            className="focus:border-[#1A5276] focus:ring-[#1A5276]/20 rounded-lg"
          />
          <div className="relative">
            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              name="company_name"
              placeholder="Organization Name"
              value={form.company_name}
              onChange={handleChange}
              aria-label="Organization Name"
              className="pl-12 py-6 text-base border-gray-200 focus:border-[#1A5276] focus:ring-[#1A5276]/20 rounded-lg"
            />
          </div>
          <div className="relative">
            <Textarea
              name="notes"
              placeholder="Tell us about your requirements..."
              value={form.notes}
              onChange={handleChange}
              rows={5}
              aria-label="Message"
              className="pl-4 py-4 text-base border-gray-200 focus:border-[#1A5276] focus:ring-[#1A5276]/20 rounded-lg resize-none"
            />
          </div>
          <input type="hidden" name="referer" value={referer} />
        </CardContent>
        <CardFooter className="flex flex-col gap-3 px-8 pb-8 pt-2">
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#1A5276] to-[#1A5276]/90 hover:from-orange-500 hover:to-orange-600 text-white py-6 text-lg rounded-lg transition-all duration-300 font-medium"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Submitting...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </span>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
