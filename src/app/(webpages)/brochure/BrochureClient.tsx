'use client'

import { useState } from "react"
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
    </>
  )
}
