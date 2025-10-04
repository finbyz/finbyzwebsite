
"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import styles from "./contact-form.module.css";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  toEmail?: string;
}

export default function ContactFormSection(props: ContactFormProps = {}) {
  const { title = "Contact", subtitle, submitLabel = "Send Message" } = props;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      lead_name: formData.name,
      company_name: "Website",
      mobile_no: formData.mobile,
      title: "Contact Form Submission",
      email: formData.email,
      notes: formData.message,
    };

    console.log("Form Payload:", payload);

    try {
      const res = await fetch(
        "https://website.finbyz.com/api/method/finbyzweb.api.set_form_contact_data",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      // console.log("Response Data:", data);

      if (res.ok) {
        alert(
          `Thank you ${payload.lead_name}!\nYour inquiry has been received. Our team will contact you shortly.`
        );

        // Reset state instead of form.reset()
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        alert(
          `Unable to submit your inquiry.\nReason: Something went wrong while creating your lead.`
        );
      }
    } catch (err) {
      console.error(err);
     
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.group}>
            <label className={styles.label}>Name *</label>
            <Input
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Email *</label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Mobile *</label>
            <Input
              name="mobile"
              placeholder="Enter your mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Message</label>
            <Textarea
              rows={8}
              name="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className={styles.actions}>
            <Button type="submit" className={styles.submitButton}>
              {submitLabel}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
