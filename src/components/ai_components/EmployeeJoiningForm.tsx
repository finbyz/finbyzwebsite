"use client";
import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Save, Undo2 } from "lucide-react";

interface Field {
  fieldname: string;
  label: string;
  fieldtype: string;
  options?: string;
  reqd?: boolean;
  default?: string;
}

const excludedFieldnames = [
  "employee_name", "status", "company_email", "designation",
  "department", "salary_mode", "job_applicant", "job_offer",
  "naming_series", "url", "employment_type", "salary_slip", "is_intern"
];

export default function EmployeeJoiningForm() {
  const [fields, setFields] = useState<Field[]>([]);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);
  const [applicantType, setApplicantType] = useState("");
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const formRef = useRef<HTMLFormElement>(null);

  // Fetch fields (equivalent to frappe.get_meta)
  useEffect(() => {
    const fetchFields = async () => {
      try {
        const res = await fetch(
          "/web-api/fb/method/finbyzweb.finbyzweb.doctype.employee_joining_detail.employee_joining_detail.get_employee_joining_detail_fields",
          { credentials: "omit" }
        );
        const data = await res.json();
        if (data.message) setFields(data.message);
      } catch (err) {
        console.error("Error fetching fields:", err);
      }
    };
    fetchFields();
  }, []);

  // Fetch employee data if token exists
  useEffect(() => {
    if (!token) return;
    const fetchEmployeeData = async () => {
      try {
        const res = await fetch(
          `/web-api/fb/method/finbyzweb.finbyzweb.doctype.employee_joining_detail.employee_joining_detail.get_employee_data?token=${token}`,
          { credentials: "omit" }
        );
        const data = await res.json();
        if (data.message) {
          setFormData(data.message);
          setApplicantType(data.message.applicant_type || "");
        }
      } catch (err) {
        console.error("Error fetching employee data:", err);
      }
    };
    fetchEmployeeData();
  }, [token]);

  // Handle text/select change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" && e.target instanceof HTMLInputElement ? e.target.checked : value,
    }));
    if (name === "applicant_type") setApplicantType(value);
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files && files.length > 0 ? files[0] : null,
    }));
  };

  // Submit logic (POST formData to Frappe)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      setError("Missing token in URL ❗");
      return;
    }
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const submitData = new FormData();
      Object.entries({ ...formData, token }).forEach(([key, value]) => {
        if (value !== undefined && value !== null) submitData.append(key, value);
      });

      const response = await fetch(
        "/web-api/fb/method/finbyzweb.finbyzweb.doctype.employee_joining_detail.employee_joining_detail.update_employee_data",
        {
          method: "POST",
          body: submitData,
          credentials: "omit",
        }
      );

      const data = await response.json();
     if (data.message) {
        setSuccess("Data saved successfully ✔️");

        // 🧹 Delay reset slightly so message appears first
        setTimeout(() => {
          setFormData({});
          setApplicantType("");
          if (formRef.current) formRef.current.reset();
        }, 500);
      } else {
        setError("Something went wrong ❗ Please try again.");
      }

    } catch (err) {
      console.error("Unexpected error:", err);
      setError("Unexpected error occurred ❗");
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData({});
    setApplicantType("");
    setError(null);
    setSuccess(null);
    if (formRef.current) formRef.current.reset();
  };

  // Render field dynamically
  const renderField = (field: Field) => {
    // console.log("field data -----------",field.label)
    const hideLabel = ["Token", "Applicant Type"].includes(field.label);
    if (excludedFieldnames.includes(field.fieldname)) return null;
    if (field.fieldname === "salary_slip" && applicantType === "Fresher") return null;

    if (field.fieldname === "token" || field.fieldname === "applicant_type") {
      return (
        <input
          key={field.fieldname}
          type="hidden"
          name={field.fieldname}
          value={formData[field.fieldname] || field.default || ""}
        />
      );
    }

    const commonProps = {
      name: field.fieldname,
      id: field.fieldname,
      required: field.reqd || false,
      value: formData[field.fieldname] || "",
      onChange: handleChange,
      className:
        "block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none transition",
    };

    return (
      <div key={field.fieldname} className="mb-4">
        {!hideLabel && (
          
            <label htmlFor={field.fieldname} className="block text-sm font-medium mb-1">
              {String(field.label)}{" "}
              {field.reqd ? <span className="text-red-500">*</span> : null}
            </label>
          

        )}
        {field.fieldtype === "Attach" ? (
          <input type="file" name={field.fieldname} id={field.fieldname} onChange={handleFileChange} />
        ) : field.fieldtype === "Select" ? (
          <select {...commonProps}>
            <option value="">Select {field.label}</option>
            {field.options?.split("\n").map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : field.fieldtype === "Text" ? (
          <textarea {...commonProps} />
        ) : field.fieldtype === "Date" ? (
          <input type="date" {...commonProps} />
        ) : field.fieldtype === "Check" ? (
          <input type="checkbox" checked={!!formData[field.fieldname]} onChange={handleChange} />
        ) : (
          <input type="text" {...commonProps} placeholder={field.label} />
        )}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold mb-2 gap-2 text-[#1A5276]">
       
            Employee Joining Details Form
          </CardTitle>
        </CardHeader>
        <form ref={formRef} onSubmit={handleSubmit} onReset={handleReset} className="px-6 py-4">
          {/* <CardContent>{fields.map(renderField)}</CardContent> */}
          <CardContent>
            {fields
              .filter(
                (f) =>
                  !["Column Break", "Section Break", "Tab Break", "HTML"].includes(f.fieldtype) &&
                  f.label && 
                  !excludedFieldnames.includes(f.fieldname)
              )
              .map(renderField)}
          </CardContent>

          <CardFooter className="flex flex-col gap-2">
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            {success && <p className="text-green-600 text-sm text-center">{success}</p>}
            <div className="flex justify-between pt-3">
              <Button type="reset" variant="outline" className="flex items-center gap-2">
                <Undo2 size={18} /> Discard
              </Button>
              <Button type="submit" disabled={loading} className="flex items-center gap-2 bg-[#1A5276] hover:bg-[#1A5276] text-white ml-3">
                {loading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />} Save
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

