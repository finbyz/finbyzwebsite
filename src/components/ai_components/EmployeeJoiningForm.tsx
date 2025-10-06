import React, { useState, useEffect, useRef } from "react";
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

interface EmployeeJoiningFormProps {
  fields: Field[];
  excludedFieldnames: string[];
}

const EmployeeJoiningForm: React.FC<EmployeeJoiningFormProps> = ({ fields, excludedFieldnames }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // For salary slip visibility
  const [applicantType, setApplicantType] = useState<string>("");

  useEffect(() => {
    // Set default values for hidden fields
    const initialData: Record<string, any> = {};
    fields.forEach((field) => {
      if (field.default) {
        initialData[field.fieldname] = field.default;
      }
    });
    setFormData((prev) => ({ ...initialData, ...prev }));
  }, [fields]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" && e.target instanceof HTMLInputElement ? e.target.checked : value,
    }));
    if (name === "applicant_type") {
      setApplicantType(value);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files && files.length > 0 ? files[0] : null,
    }));
  };

  const handleReset = () => {
    setFormData({});
    setApplicantType("");
    setError(null);
    setSuccess(null);
    if (formRef.current) formRef.current.reset();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          submitData.append(key, value);
        }
      });
      const response = await fetch("/api/method/finbyzweb.finbyzweb.doctype.employee_joining_detail.employee_joining_detail.update_employee_data", {
        method: "POST",
        body: submitData,
        credentials: "omit"
      });
      if (!response.ok) {
        const errorText = await response.text();
        setError("Something went wrong ❗ Server returned " + response.status);
        setLoading(false);
        return;
      }
      const data = await response.json();
      if (data.message || data.status === "success") {
        setSuccess("Data saved successfully ✔️");
        setError(null);
      } else {
        setError("Something went wrong ❗ Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  // Helper to render field
  const renderField = (field: Field) => {
    // Hide label for Token/Applicant Type
    const hideLabel = ["Token", "Applicant Type"].includes(field.label);
    // Hide container for salary_slip if applicant_type is Fresher
    if (field.fieldname === "salary_slip" && applicantType === "Fresher") {
      return null;
    }
    if (field.fieldname === "token" || field.fieldname === "applicant_type") {
      return (
        <input
          type="hidden"
          name={field.fieldname}
          id={field.fieldname}
          value={formData[field.fieldname] || field.default || ""}
          key={field.fieldname}
        />
      );
    }
    return (
      <div className="mb-6" key={field.fieldname}>
        {!hideLabel && (
          <label htmlFor={field.fieldname} className="block text-sm font-medium mb-1">
            {field.label}
            {field.reqd && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        {(() => {
          switch (field.fieldtype) {
            case "Attach":
              return (
                <input
                  type="file"
                  name={field.fieldname}
                  id={field.fieldname}
                  required={!!field.reqd}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none transition"
                  onChange={handleFileChange}
                />
              );
            case "Link":
              // For demo, just a text input. In real, fetch options.
              return (
                <input
                  type="text"
                  name={field.fieldname}
                  id={field.fieldname}
                  required={!!field.reqd}
                  placeholder={field.label}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none transition"
                  value={formData[field.fieldname] || ""}
                  onChange={handleChange}
                />
              );
            case "Select":
              return (
                <select
                  name={field.fieldname}
                  id={field.fieldname}
                  required={!!field.reqd}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none transition"
                  value={formData[field.fieldname] || ""}
                  onChange={handleChange}
                >
                  <option value="">Select {field.label}</option>
                  {field.options?.split("\n").filter(Boolean).map((option) => (
                    <option value={option} key={option}>{option}</option>
                  ))}
                </select>
              );
            case "Data":
              return (
                <input
                  type="text"
                  name={field.fieldname}
                  id={field.fieldname}
                  required={!!field.reqd}
                  placeholder={field.label}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none transition"
                  value={formData[field.fieldname] || ""}
                  onChange={handleChange}
                />
              );
            case "Date":
              return (
                <input
                  type="date"
                  name={field.fieldname}
                  id={field.fieldname}
                  required={!!field.reqd}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none transition"
                  value={formData[field.fieldname] || ""}
                  onChange={handleChange}
                />
              );
            case "Check":
              return (
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name={field.fieldname}
                    id={field.fieldname}
                    checked={!!formData[field.fieldname]}
                    onChange={handleChange}
                    className="rounded border-gray-300 focus:ring-primary"
                  />
                  <span className="text-sm">{field.label}</span>
                </div>
              );
            case "Text":
              return (
                <textarea
                  name={field.fieldname}
                  id={field.fieldname}
                  required={!!field.reqd}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none transition"
                  value={formData[field.fieldname] || ""}
                  onChange={handleChange}
                />
              );
            default:
              return (
                <input
                  type="text"
                  name={field.fieldname}
                  id={field.fieldname}
                  required={!!field.reqd}
                  placeholder={field.label}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none transition"
                  value={formData[field.fieldname] || ""}
                  onChange={handleChange}
                />
              );
          }
        })()}
      </div>
    );
  };

  return (
    <Card className="border-none shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-center text-lg font-semibold tracking-tight">Employee Joining Details Form</CardTitle>
      </CardHeader>
      <form ref={formRef} onSubmit={handleSubmit} onReset={handleReset} className="px-4 pt-2 pb-6">
        <CardContent className="space-y-2">
          {fields.filter(
            (field) =>
              !excludedFieldnames.includes(field.fieldname) &&
              !["Section Break", "Column Break"].includes(field.fieldtype)
          ).map(renderField)}
        </CardContent>
        <CardFooter className="flex flex-col gap-2 pt-4">
          {error && <div className="text-red-500 text-sm text-center animate-pulse">{error}</div>}
          {success && <div className="text-green-600 text-sm text-center animate-fade-in">{success}</div>}
          <div className="flex gap-4 justify-between">
            <Button type="reset" variant="outline" className="flex items-center gap-2">
              <Undo2 size={18} /> Discard
            </Button>
            <Button type="submit" disabled={loading} className="flex items-center gap-2 bg-primary text-white hover:bg-primary/90">
              {loading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />} Save
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default EmployeeJoiningForm;
