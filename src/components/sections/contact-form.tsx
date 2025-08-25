import React from "react";
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
  component_type?: "Form";
  title?: string;
  subtitle?: string;
  initialValues?: ContactFormInitial;
  submitLabel?: string;
  toEmail?: string; // where to send mailto by default
  onSubmit?: (payload: Required<ContactFormInitial>) => Promise<void> | void;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactFormSection({
  component_type = "Form",
  title = "Contact",
  subtitle,
  initialValues = {},
  submitLabel = "Submit",
  toEmail = "info@finbyz.tech",
  onSubmit,
}: ContactFormProps) {

  return (
    <section className="w-full py-8 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {title && (
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">{title}</h2>
        )}
        {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}

        <form action={onSubmit ? undefined : undefined} method="post" className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <Input name="name" placeholder="Enter your name" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <Input type="email" name="email" placeholder="Enter your email" required pattern={emailRegex.source} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile *</label>
            <Input name="mobile" placeholder="Enter your mobile" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <Textarea rows={8} name="message" placeholder="Write your message" />
          </div>

          <div className="pt-2">
            <Button type="submit">{submitLabel}</Button>
          </div>
        </form>
      </div>
    </section>
  );
}


