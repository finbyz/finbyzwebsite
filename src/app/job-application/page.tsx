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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
 
  const [applicantType, setApplicantType] = useState('');
  const [selectedJobOpening, setSelectedJobOpening] = useState('');
  const WEB_FORM_NAME = "job-application";


useEffect(() => {
  const fetchJobOpenings = async () => {
    try {
      const res = await fetch("/web-api/jobs");
      const data = await res.json();
   
      if (Array.isArray(data.data)) {
        setJobOpenings(data.data);
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


// Add this useEffect to extract job_title from URL
useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const jobTitleParam = urlParams.get('job_title');
  
  if (jobTitleParam) {
    // Decode the URL-encoded string 
    const decodedJobTitle = decodeURIComponent(jobTitleParam.replace(/\+/g, ' '));
    setSelectedJobOpening(decodedJobTitle);
  }
}, []);




useEffect(() => {
  async function fetchApplicantTypes() {
    try {
      const url =`/web-api/fb/method/finbyz.job_application_api.get_applicant_types`
      const response = await fetch(
       url
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
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
    if (isSubmitting) return; // stop double click
    setIsSubmitting(true);
    try {
    
      const form = e.currentTarget;
      const getValue = (id: string) =>
        (form.querySelector(`#${id}`) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)?.value || '';

      // Prepare form data
      const formData = new FormData();
      formData.append("web_form", WEB_FORM_NAME);
      formData.append("for_payment", "0");
      const applicantTypeValue = getValue("applicantType");
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
        linkedin_link : getValue("linkedin_link"),
        // Conditionally spread experienced fields
        ...(applicantTypeValue === "Experienced" && {
          current_ctc: getValue("currentCTC"),
          expected_ctc: getValue("expectedCTC"),
          current_employer_: getValue("currentEmployer"),
          total_experience: getValue("totalExperience")
        })
       
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

      const url =`/web-api/fb/method/finbyz.job_application_api.set_form_job_applicant`
      const res = await fetch(url, {
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
      setApplicantType(''); // Reset applicant type state
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error("Application submission failed:", err);
      alert("Sorry, something went wrong submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
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

                  <div className={styles.formGroup}>
                    <label htmlFor="jobOpening" className={styles.formLabel}>
                      Job Opening <span className={styles.required}>*</span>
                    </label>

                    <select 
                      id="jobOpening" 
                      className={styles.selectInput} 
                      required
                      value={selectedJobOpening}
                      onChange={(e) => setSelectedJobOpening(e.target.value)}
                    >
                      <option value="">{loading ? "Loading..." : "Select a job opening"}</option>

                      {!loading &&
                        jobOpenings.map((job, index) => (
                          <option key={index} value={job.name}>
                            {job.name}
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

              <select 
                id="applicantType" 
                className={styles.selectInput} 
                required
                value={applicantType}
                onChange={(e) => setApplicantType(e.target.value)}
              >
                <option value="">Select applicant type</option>

                {applicantTypes && applicantTypes.length > 0 ? (
                  applicantTypes.map((type, idx) => (
                    <option key={idx} value={type}>
                      {type}
                    </option>
                  ))
                ) : (
                  <>
                    <option value="Fresher">Fresher</option>
                    <option value="Experienced">Experienced</option>
                  </>
                )}
              </select>
            </div>

{/* Conditional fields for Experienced applicants */}
              {applicantType === 'Experienced' && (
                <>
                  <div className={styles.formGroup}>
                    <label htmlFor="currentCTC" className={styles.formLabel}>
                      Current CTC (Per Annum) <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="number"
                      id="currentCTC"
                      className={styles.textInput}
                      placeholder="Enter current CTC"
                      step="0.01"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="expectedCTC" className={styles.formLabel}>
                      Expected CTC (Per Annum) <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="number"
                      id="expectedCTC"
                      className={styles.textInput}
                      placeholder="Enter expected CTC"
                      step="0.01"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="currentEmployer" className={styles.formLabel}>
                      Current Employer <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="currentEmployer"
                      className={styles.textInput}
                      placeholder="Enter current employer name"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="totalExperience" className={styles.formLabel}>
                      Total Experience (Years) <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="number"
                      id="totalExperience"
                      className={styles.textInput}
                      placeholder="Enter total years of experience"
                      step="0.01"
                      required
                    />
                  </div>
                </>
              )}


                <div className={styles.formGroup}>
                  <label htmlFor="qualification" className={styles.formLabel}>
                    Highest Qualification <span className={styles.required}>*</span>
                  </label>
                  <select id="qualification" className={styles.selectInput} required>
                    <option value="">Select your highest qualification</option>
                    <option value="High School">High School</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="PhD<">PhD</option>
                    <option value="Other">Other</option>
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
                  <Button type="button" variant="outline" className={styles.discardButton} disabled={isSubmitting}>
                    <X className={styles.buttonIcon} />
                    Discard
                  </Button>
                  <Button type="submit" className={styles.saveButton} disabled={isSubmitting}>
                    <Save className={styles.buttonIcon} />
                    {isSubmitting ? "Submitting..." : "Save Application"}
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