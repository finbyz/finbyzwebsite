import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const initialState = {
  lead_name: '',
  email_id: '',
  mobile_no: '',
  company_name: '',
  notes: ''
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/web-api/fb/method/finbyzweb.api.set_form_contact_data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead_name: form.lead_name,
          company_name: form.company_name,
          mobile_no: form.mobile_no,
          title: document.title + '<br>' + window.location.href,
          email: form.email_id,
          notes: form.notes
        })
      });
      if (res.ok) {
        setForm(initialState);
        toast.success("Your interest is inspiring us to do better...\nFinbyz Tech expert shall reach you shortly");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
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
          <Input
            name="mobile_no"
            placeholder="Mobile No."
            value={form.mobile_no}
            onChange={handleChange}
            required
            aria-label="Mobile No."
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
