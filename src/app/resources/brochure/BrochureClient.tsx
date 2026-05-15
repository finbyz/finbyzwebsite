'use client'

import { useState } from "react"
import Section from "@/components/sections/Section"
import DownloadSection from "@/components/ai_components/DownloadSection"
import DownloadFormModal from "@/components/ai_components/DownloadFormModal"

interface BrochureItem {
  title: string
  image: string
  alt: string
  fileUrl: string
}

export default function BrochureClient({
  brochureItems, aiCrmItems, aiAutomationItems
}: {
  brochureItems: BrochureItem[]
  aiCrmItems: BrochureItem[]
  aiAutomationItems: BrochureItem[]
}) {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<string | null>(null)

  const handleDownload = (fileUrl: string) => {
    setSelectedFile(fileUrl)
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
    setSelectedFile(null)
  }

  const handleFormSubmit = (form: { name: string; email: string; mobile: string; organization: string; fileUrl: string }) => {
    const link = document.createElement('a')
    link.href = form.fileUrl
    link.download = ''
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setModalOpen(false)
    setSelectedFile(null)
  }

  return (
    <>
      <div id="brochure-section" className="text-[#1A5276]">
        <DownloadSection title="Download Brochure" items={brochureItems} onDownload={handleDownload} />
      </div>
      <div className="text-[#1A5276]">
        <DownloadSection title="AI-CRM Integration with ERPNext" items={aiCrmItems} onDownload={handleDownload} />
      </div>
      <div className="text-[#1A5276]">
        <DownloadSection title="AI Automations" items={aiAutomationItems} onDownload={handleDownload} />
      </div>
      <DownloadFormModal open={modalOpen} onClose={handleModalClose} fileUrl={selectedFile} onSubmit={handleFormSubmit} />
      <Section>
        <div className="container-custom py-8 flex flex-col items-center text-center gap-4">
          <h2 className="text-2xl font-bold text-[#1A5276]" id="download">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground">Contact us to learn more about our solutions or request a personalized demo.</p>
        </div>
      </Section>
    </>
  )
}
