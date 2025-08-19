"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export interface ContactFormInitial {
  name?: string;
  email?: string;
  mobile?: string;
  message?: string;
}

export interface ContactFormProps {
  title?: string;
  subtitle?: string;
  initialValues?: ContactFormInitial;
  submitLabel?: string;
  toEmail?: string; // where to send mailto by default
  onSubmit?: (payload: Required<ContactFormInitial>) => Promise<void> | void;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactFormSection({
  title = "Contact",
  subtitle,
  initialValues = {},
  submitLabel = "Submit",
  toEmail = "info@finbyz.tech",
  onSubmit,
}: ContactFormProps) {
  const [values, setValues] = useState<ContactFormInitial>({
    name: initialValues.name || "",
    email: initialValues.email || "",
    mobile: initialValues.mobile || "",
    message: initialValues.message || "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!values.name?.trim()) e.name = "Name is required";
    if (!values.email?.trim()) e.email = "Email is required";
    else if (!emailRegex.test(values.email)) e.email = "Enter a valid email";
    if (!values.mobile?.trim()) e.mobile = "Mobile is required";
    else if (values.mobile.replace(/\D/g, "").length < 8) e.mobile = "Enter a valid mobile";
    return e;
  };

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setSuccess("");
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setSubmitting(true);
    try {
      const payload = {
        name: values.name!.trim(),
        email: values.email!.trim(),
        mobile: values.mobile!.trim(),
        message: values.message?.trim() || "",
      };
      if (onSubmit) {
        await onSubmit(payload);
      } else {
        // Default behavior: open mail client
        const subject = encodeURIComponent(`Website Enquiry from ${payload.name}`);
        const body = encodeURIComponent(
          `Name: ${payload.name}\nEmail: ${payload.email}\nMobile: ${payload.mobile}\n\nMessage:\n${payload.message}`
        );
        window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
      }
      setSuccess("Thanks! We received your message.");
      setValues({ name: "", email: "", mobile: "", message: "" });
    } catch (err) {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="w-full py-8 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {title && (
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">{title}</h2>
        )}
        {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {errors.form && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-md p-2">
              {errors.form}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <Input
              value={values.name}
              onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <Input
              type="email"
              value={values.email}
              onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile *</label>
            <Input
              value={values.mobile}
              onChange={(e) => setValues((v) => ({ ...v, mobile: e.target.value }))}
              placeholder="Enter your mobile"
            />
            {errors.mobile && <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <Textarea
              rows={8}
              value={values.message}
              onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
              placeholder="Write your message"
            />
          </div>

          <div className="pt-2">
            <Button type="submit" disabled={submitting}>
              {submitting ? "Submitting..." : submitLabel}
            </Button>
            {success && (
              <span className="text-green-700 text-sm ml-3">{success}</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}


