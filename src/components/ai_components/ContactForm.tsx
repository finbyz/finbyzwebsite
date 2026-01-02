"use client";

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { PhoneField } from "@/components/ui/PhoneField";
import { useGeoLocation } from "@/hooks/useGeoLocation";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialState = {
  lead_name: '',
  email_id: '',
  mobile_no: '',
  country_code: '+91',
  company_name: '',
  notes: ''
};

const ContactForm: React.FC = () => {
    const [form, setForm] = useState(initialState);
    const [loading, setLoading] = useState(false);
  const router = useRouter(); // ✅ Initialize router

  // Auto-detect country code
  const geoLocation = useGeoLocation('+91');

  // Update country code when detected
  React.useEffect(() => {
    if (!geoLocation.loading && geoLocation.dialCode) {
      setForm(prev => ({ ...prev, country_code: geoLocation.dialCode }));
    }
  }, [geoLocation.loading, geoLocation.dialCode]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/thank-you-for-inquiry");
    setLoading(true);

    try {
      const data = {
        name1: form.lead_name,
        email: form.email_id,
        subject: `${form.country_code}${form.mobile_no}`,
        message: form.notes,
        doctype: "Contact Us",
        web_form_name: "contact",
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
        
         //  Redirect after successful submit
  
     
       
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
    <Card className="border-none shadow-lg animate-fade-in-up">
      <CardHeader>
        <CardTitle className="text-[#1A5276] text-xl">Get in Touch</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit} autoComplete="off">
        <CardContent className="flex flex-col gap-4">
          <Input
            name="lead_name"
            placeholder="Name"
            value={form.lead_name}
            onChange={handleChange}
            required
            aria-label="Name"
          />
          <Input
            name="email_id"
            type="email"
            placeholder="Email Address"
            value={form.email_id}
            onChange={handleChange}
            required
            aria-label="Email Address"
          />
          <PhoneField
            countryCode={form.country_code}
            phoneNumber={form.mobile_no}
            onCountryCodeChange={(value: string) => setForm(prev => ({ ...prev, country_code: value }))}
            onPhoneNumberChange={(value: string) => setForm(prev => ({ ...prev, mobile_no: value }))}
            required
          />
          <Input
            name="company_name"
            placeholder="Organization Name"
            value={form.company_name}
            onChange={handleChange}
            aria-label="Organization Name"
          />
          <Textarea
            name="notes"
            placeholder="Message"
            value={form.notes}
            onChange={handleChange}
            rows={4}
            aria-label="Message"
          />
        </CardContent>
        <CardFooter className="flex justify-center pt-2">
          <Button type="submit" disabled={loading} className="w-full bg-[#1A5276] hover:bg-blue-600 text-white">
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
