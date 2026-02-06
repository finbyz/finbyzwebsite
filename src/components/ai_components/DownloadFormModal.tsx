import React, { useState, useEffect } from "react";
import { X, Download, User, Mail, Phone, Building2, CheckCircle } from "lucide-react";
import { PhoneField } from "../ui/PhoneField";
import { useGeoLocation } from "@/hooks/useGeoLocation";

interface DownloadFormModalProps {
  open: boolean;
  onClose: () => void;
  fileUrl: string | null;
  onSubmit: (form: { name: string; email: string; mobile: string; organization: string; fileUrl: string }) => void;
}

const DownloadFormModal: React.FC<DownloadFormModalProps> = ({ open, onClose, fileUrl, onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    countryCode: "+91",
    organization: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const geoLocation = useGeoLocation('+91');

  useEffect(() => {
    if (open) {
      const storedFormData = localStorage.getItem("formData");
      if (storedFormData) {
        setForm(prev => ({ ...prev, ...JSON.parse(storedFormData) }));
      }
    }
  }, [open]);

  useEffect(() => {
    if (!geoLocation.loading && geoLocation.dialCode) {
      setForm(prev => ({ ...prev, countryCode: geoLocation.dialCode }));
    }
  }, [geoLocation.loading, geoLocation.dialCode, open]);

  useEffect(() => {
    if (!open) {
      setForm({ name: "", email: "", mobile: "", countryCode: geoLocation.dialCode || "+91", organization: "" });
      setSubmitting(false);
      setErrors({});
    }
  }, [open, geoLocation.dialCode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    } else if (!/^\d{10}$/.test(form.mobile.replace(/\D/g, ""))) {
      newErrors.mobile = "Invalid mobile number";
    }
    if (!form.organization.trim()) newErrors.organization = "Organization is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!fileUrl) return;

    if (validateForm()) {
      setSubmitting(true);
      const fullMobile = `${form.countryCode}${form.mobile.replace(/\D/g, '')}`;
      localStorage.setItem("formData", JSON.stringify(form));
      onSubmit({ ...form, mobile: fullMobile, fileUrl });
    }
  };

  if (!open) return null;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all">
        {/* Header with gradient */}
        {/* bg-gradient-to-r from-blue-600 to-indigo-600 */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-t-2xl p-6 relative overflow-hidden">
          {/* <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" /> */}
          {/* <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" /> */}

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
          >
            <X size={24} />
          </button>

          <div className="relative">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
              <Download className="text-white" size={28} />
            </div>
            <h2 className="text-2xl font-bold text-[#FF8C00] mb-1">Download Resource</h2>
            <p className="text-blue-100 text-sm">Fill in your details to access the file</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          {/* Name Field */}
          <div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.name
                    ? "border-red-300 focus:ring-red-200"
                    : "border-gray-200 focus:ring-blue-200 focus:border-blue-400"
                  }`}
                autoFocus
              />
              {form.name && !errors.name && (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={20} />
              )}
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.email
                    ? "border-red-300 focus:ring-red-200"
                    : "border-gray-200 focus:ring-blue-200 focus:border-blue-400"
                  }`}
              />
              {form.email && !errors.email && /\S+@\S+\.\S+/.test(form.email) && (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={20} />
              )}
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
          </div>

          {/* Mobile Field */}
          <div>
            <PhoneField
              countryCode={form.countryCode}
              phoneNumber={form.mobile}
              onCountryCodeChange={(value: string) => setForm(prev => ({ ...prev, countryCode: value }))}
              onPhoneNumberChange={(value: string) => setForm(prev => ({ ...prev, mobile: value }))}
              required
              showIcon={true}
              placeholder="Mobile Number"
              className="h-[46px]"
            />
            {errors.mobile && <p className="text-red-500 text-xs mt-1 ml-1">{errors.mobile}</p>}
          </div>

          {/* Organization Field */}
          <div>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                name="organization"
                type="text"
                placeholder="Organization"
                value={form.organization}
                onChange={handleChange}
                className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.organization
                    ? "border-red-300 focus:ring-red-200"
                    : "border-gray-200 focus:ring-blue-200 focus:border-blue-400"
                  }`}
              />
              {form.organization && !errors.organization && (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={20} />
              )}
            </div>
            {errors.organization && <p className="text-red-500 text-xs mt-1 ml-1">{errors.organization}</p>}
          </div>

          {/* Privacy Note */}
          <div className="bg-orange-50 border border-blue-100 rounded-lg p-3">
            <p className="text-xs text-blue-800">
              🔒 Your information is secure and will only be used to provide you with the requested resource.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="flex-1 bg-[#1A5276] text-white py-3 rounded-lg font-semibol disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Download size={18} />
                  <span>Submit & Download</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DownloadFormModal;