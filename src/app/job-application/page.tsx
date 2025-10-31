"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, ArrowLeft, Save, X, FileText } from "lucide-react";
import Link from "next/link";
import {  useEffect,useState, useRef } from "react";
import styles from "./job-application.module.css";

export default function JobApplication() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [applicantTypes, setApplicantTypes] = useState<string[]>([]);
  const [jobOpenings, setJobOpenings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const WEB_FORM_NAME = "job-application";


useEffect(() => {
  const fetchJobOpenings = async () => {
    // https://finbyz.tech//api/method/finbyz.api.get_all_job_openings
    // cors issue
    try {
     
      const res = await fetch(
       "/web-api/method/finbyzweb.api.get_all_job_openings"
      );
      const data = await res.json();

      if (Array.isArray(data.message?.data)) {
        setJobOpenings(data.message.data);
      } else {
        setJobOpenings([]);
      }
    } catch (error) {
      console.error("Error fetching job openings:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchJobOpenings();
}, []);



useEffect(() => {
  async function fetchApplicantTypes() {
    // https://finbyz.tech//api/method/finbyz.api.get_applicant_types
    // cors issue
    try {
      
      const response = await fetch(
       "/web-api/method/finbyzweb.api.get_applicant_types"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Handle nested message.message structure
      const types =
        Array.isArray(data.message?.message) ? data.message.message : [];

      setApplicantTypes(types);
    } catch (error) {
      console.error("Failed to fetch applicant types:", error);
    }
  }

  fetchApplicantTypes();
}, []);



  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB limit. Please upload a smaller file.");
        return;
      }
      // Validate file type
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a file in PDF, DOC, or DOCX format.");
        return;
      }
      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    try {
      const form = e.currentTarget;
      const getValue = (id: string) =>
        (form.querySelector(`#${id}`) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)?.value || '';

      // Prepare form data
      const formData = new FormData();
      formData.append("web_form", WEB_FORM_NAME);
      formData.append("for_payment", "0");
      // Prepare document data
      const doc = {
        job_title: getValue("jobOpening"),
        applicant_name: getValue("applicantName"),
        gender: getValue("gender"),
        email_id: getValue("email"),
        mobile: getValue("mobile"),
        location: getValue("location"),
        applicant_type: getValue("applicantType"),
        qualification: getValue("qualification"),
        additional_info: getValue("additionalInfo"),
        linkedin_link : getValue("linkedin_link")
      };

      // Append document data as JSON
      formData.append("data", JSON.stringify(doc));

      // Append file if selected
      if (selectedFile) {
        formData.append("resume", selectedFile, selectedFile.name);
      } else {
        alert("Please upload a resume.");
        return;
      }

      

      // Send request to Frappe web form API
      // https://finbyz.tech//api/method/finbyz.api.set_form_job_applicant
      const res = await fetch("/web-api/method/finbyzweb.api.set_form_job_applicant", {
        method: "POST",
        body: formData,
      });

      // Handle response
      if (!res.ok) {
        const raw = await res.text();
        let message = raw;
        try {
          const json = JSON.parse(raw);
          message = json.message || json._server_messages || json.exc || raw;
          if (json.exc_type === "ValidationError") {
            message = "Invalid form data. Please check all required fields and the resume file.";
          } else if (json.exc_type === "PermissionError") {
            message = "You do not have permission to submit this form. Please contact support.";
          }
        } catch {}
        if (res.status === 409) {
          alert("Application already exists. Thank you!");
        } else {
          alert(message || "An error occurred while submitting your application.");
        }
        return;
      }

      // Success
      alert("Application submitted successfully.");
      form.reset();
      setSelectedFile(null);
      setFileName("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error("Application submission failed:", err);
      alert("Sorry, something went wrong submitting your application. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={styles.heroContainer}>
              <div className={styles.breadcrumb}>
                <Link href="/career" className={styles.breadcrumbLink}>
                  <ArrowLeft className={styles.breadcrumbIcon} />
                  Back to Careers
                </Link>
              </div>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Job Application Form</h1>
                <p className={styles.heroDescription}>
                  Join our team and be part of innovative projects. Please fill out the form below to apply for the position.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.formSection}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={styles.formContainer}>
              <form className={styles.applicationForm} onSubmit={handleSubmit}>
                <div className={styles.formSectionHeader}>
                  <h3 className={styles.sectionTitle}>Personal Information</h3>
                  <p className={styles.sectionDescription}>Basic details about the applicant</p>
                </div>

                {/* <div className={styles.formGroup}>
                  <label htmlFor="jobOpening" className={styles.formLabel}>
                    Job Opening <span className={styles.required}>*</span>
                  </label>
                  <select id="jobOpening" className={styles.selectInput} required>
                    <option value="">Select a job opening</option>
                    <option value="frontend-developer">Frontend Developer</option>
                    <option value="backend-developer">Backend Developer</option>
                    <option value="fullstack-developer">Full Stack Developer</option>
                    <option value="ui-ux-designer">UI/UX Designer</option>
                    <option value="project-manager">Project Manager</option>
                    <option value="devops-engineer">DevOps Engineer</option>
                    <option value="data-analyst">Data Analyst</option>
                    <option value="qa-engineer">QA Engineer</option>
                  </select>
                </div> */}
                <div className={styles.formGroup}>
                    <label htmlFor="jobOpening" className={styles.formLabel}>
                      Job Opening <span className={styles.required}>*</span>
                    </label>
                
                    <select id="jobOpening" className={styles.selectInput} required>
                      <option value="">{loading ? "Loading..." : "Select a job opening"}</option>

                      {!loading &&
                    jobOpenings.map((job, index) => (
                      <option key={index} value={job.designation}>
                        {job.designation}
                      </option>
                    ))}
                    </select>
                  </div>
                 
  

                <div className={styles.formGroup}>
                  <label htmlFor="applicantName" className={styles.formLabel}>
                    Applicant Name <span className={styles.required}>*</span>
                  </label>
                  <Input
                    id="applicantName"
                    type="text"
                    placeholder="Enter your full name"
                    className={styles.textInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="gender" className={styles.formLabel}>
                    Gender <span className={styles.required}>*</span>
                  </label>
                  <select id="gender" className={styles.selectInput} required>
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email Address <span className={styles.required}>*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className={styles.textInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="mobile" className={styles.formLabel}>
                    Mobile Number <span className={styles.required}>*</span>
                  </label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    className={styles.textInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="location" className={styles.formLabel}>
                    Current Location <span className={styles.required}>*</span>
                  </label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="Enter your current location"
                    className={styles.textInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="applicantType" className={styles.formLabel}>
                    Applicant Type <span className={styles.required}>*</span>
                  </label>
                  <select id="applicantType" className={styles.selectInput} required>
                  <option value="">Select applicant type</option>
                  {/* <option value="Fresher">Fresher</option>
                  <option value="Experience">Experience</option>  */}
                   {applicantTypes.map((type, idx) => (
                    <option key={idx} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="qualification" className={styles.formLabel}>
                    Highest Qualification <span className={styles.required}>*</span>
                  </label>
                  <select id="qualification" className={styles.selectInput} required>
                    <option value="">Select your highest qualification</option>
                    <option value="high-school">High School</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">PhD</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formSectionHeader}>
                  <h3 className={styles.sectionTitle}>Documents & Additional Information</h3>
                  <p className={styles.sectionDescription}>Resume and additional details</p>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="linkedin_link" className={styles.formLabel}>
                    LinkedIn Profile URL
                  </label>
                  <Input
                    id="linkedin_link"
                    type="url"
                    placeholder="Enter your LinkedIn profile URL (e.g., https://www.linkedin.com/in/username)"
                    className={styles.textInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="resume" className={styles.formLabel}>
                    Resume Attachment <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.fileUploadContainer}>
                    {!selectedFile ? (
                      <Button
                        type="button"
                        variant="outline"
                        className={styles.attachButton}
                        onClick={handleAttachClick}
                      >
                        <Upload className={styles.uploadIcon} />
                        Attach Resume
                      </Button>
                    ) : (
                      <div className={styles.fileInfo}>
                        <div className={styles.fileDetails}>
                          <FileText className={styles.fileIcon} />
                          <span className={styles.fileName}>{fileName}</span>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className={styles.removeButton}
                          onClick={handleRemoveFile}
                        >
                          <X className={styles.buttonIcon} />
                          Remove
                        </Button>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className={styles.fileInput}
                      onChange={handleFileSelect}
                      required
                    />
                    <p className={styles.fileNote}>Please upload your resume in PDF, DOC, or DOCX format (Max 5MB)</p>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="additionalInfo" className={styles.formLabel}>
                    Additional Information
                  </label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Tell us about your experience, skills, and why you're interested in this position..."
                    className={styles.textareaInput}
                    rows={4}
                  />
                </div>

                <div className={styles.actionButtons}>
                  <Button type="button" variant="outline" className={styles.discardButton}>
                    <X className={styles.buttonIcon} />
                    Discard
                  </Button>
                  <Button type="submit" className={styles.saveButton}>
                    <Save className={styles.buttonIcon} />
                    Save Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};