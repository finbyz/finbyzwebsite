"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, ArrowLeft, Save, X, FileText } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import styles from "./job-application.module.css";

export default function JobApplication() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
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

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
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
                <h1 className={styles.heroTitle}>
                  Job Application Form
                </h1>
                <p className={styles.heroDescription}>
                  Join our team and be part of innovative projects. Please fill out the form below to apply for the position.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className={styles.formSection}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={styles.formContainer}>
              <form className={styles.applicationForm}>
                {/* Personal Information Section */}
                <div className={styles.formSectionHeader}>
                  <h3 className={styles.sectionTitle}>Personal Information</h3>
                  <p className={styles.sectionDescription}>Basic details about the applicant</p>
                </div>

                {/* Job Opening */}
                <div className={styles.formGroup}>
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
                </div>

                {/* Applicant Name */}
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

                {/* Gender */}
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

                {/* Email Address */}
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

                {/* Mobile Number */}
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

                {/* Current Location */}
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

                {/* Applicant Type */}
                <div className={styles.formGroup}>
                  <label htmlFor="applicantType" className={styles.formLabel}>
                    Applicant Type <span className={styles.required}>*</span>
                  </label>
                  <select id="applicantType" className={styles.selectInput} required>
                    <option value="">Select applicant type</option>
                    <option value="fresher">Fresher</option>
                    <option value="experienced">Experienced</option>
                    <option value="intern">Intern</option>
                    <option value="contractor">Contractor</option>
                  </select>
                </div>

                {/* Highest Qualification */}
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

                {/* Documents & Additional Information Section */}
                <div className={styles.formSectionHeader}>
                  <h3 className={styles.sectionTitle}>Documents & Additional Information</h3>
                  <p className={styles.sectionDescription}>Resume and additional details</p>
                </div>

                {/* Resume Attachment */}
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

                {/* Additional Information */}
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

                {/* Action Buttons */}
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
}
