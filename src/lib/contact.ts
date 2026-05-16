const BASE = process.env.NEXT_PUBLIC_ERP_URL || 'https://web.finbyz.com'
const CONTACT_PATH = '/contact'

export function contactUrl(params: {
  notes?: string
  referer?: string
  plan?: 'basic' | 'professional' | 'enterprise'
  lead_name?: string
  email_id?: string
  company_name?: string
}): string {
  const searchParams = new URLSearchParams()

  if (params.notes) searchParams.set('notes', params.notes)
  if (params.referer) searchParams.set('referer', params.referer)
  if (params.plan) searchParams.set('plan', params.plan)
  if (params.lead_name) searchParams.set('lead_name', params.lead_name)
  if (params.email_id) searchParams.set('email_id', params.email_id)
  if (params.company_name) searchParams.set('company_name', params.company_name)

  const qs = searchParams.toString()
  const path = qs ? `${CONTACT_PATH}?${qs}#contact-form-section` : `${CONTACT_PATH}#contact-form-section`
  return path;
}
