import { NextResponse } from 'next/server'

const UPSTREAM = 'https://website.finbyz.com/api/method/finbyzweb.api.set_form_contact_data'

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || ''
    let body: BodyInit | null = null
    let headers: Record<string, string> = {}

    if (contentType.includes('application/json')) {
      const incoming = await request.json().catch(() => ({})) as Record<string, any>
      // Map friendly keys -> upstream required keys
      const payload: Record<string, any> = {
        lead_name: incoming.lead_name ?? incoming.name ?? '',
        company_name: incoming.company_name ?? incoming.company ?? incoming.organization ?? '',
        mobile_no: incoming.mobile_no ?? incoming.mobile ?? '',
        title: incoming.title ?? incoming.subject ?? incoming.page_title ?? 'Website Inquiry',
        notes: incoming.notes ?? incoming.message ?? '',
      }
      // Pass-through optional fields if provided
      if (incoming.email || incoming.email_id) payload.email_id = incoming.email_id ?? incoming.email
      if (incoming.source) payload.source = incoming.source
      if (incoming.utm_source) payload.utm_source = incoming.utm_source
      if (incoming.utm_medium) payload.utm_medium = incoming.utm_medium
      if (incoming.utm_campaign) payload.utm_campaign = incoming.utm_campaign

      // Basic validation for required fields
      const missing: string[] = []
      for (const key of ['lead_name','company_name','mobile_no','title','notes']) {
        if (!String(payload[key] ?? '').trim()) missing.push(key)
      }
      if (missing.length) {
        return NextResponse.json({ error: 'Missing required fields', missing }, { status: 400 })
      }

      body = JSON.stringify(payload)
      headers['Content-Type'] = 'application/json'
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const form = await request.formData()
      // Normalize into required keys
      const get = (k: string) => form.get(k) as string | null
      const payload = new URLSearchParams()
      payload.set('lead_name', get('lead_name') || get('name') || '')
      payload.set('company_name', get('company_name') || get('company') || get('organization') || '')
      payload.set('mobile_no', get('mobile_no') || get('mobile') || '')
      payload.set('title', get('title') || get('subject') || get('page_title') || 'Website Inquiry')
      payload.set('notes', get('notes') || get('message') || '')
      const email = get('email_id') || get('email')
      if (email) payload.set('email_id', email)

      // Validate
      const missing: string[] = []
      for (const key of ['lead_name','company_name','mobile_no','title','notes']) {
        if (!payload.get(key)) missing.push(key)
      }
      if (missing.length) {
        return NextResponse.json({ error: 'Missing required fields', missing }, { status: 400 })
      }

      body = payload
      headers['Content-Type'] = 'application/x-www-form-urlencoded'
    } else if (contentType.includes('multipart/form-data')) {
      // pass through as-is for file uploads
      const form = await request.formData()
      const upstreamForm = new FormData()
      for (const [key, value] of form.entries()) {
        upstreamForm.append(key, value as any)
      }
      body = upstreamForm as any
      // fetch will set proper multipart boundary
    } else {
      // default: try json
      const json = await request.json().catch(() => ({}))
      body = JSON.stringify(json || {})
      headers['Content-Type'] = 'application/json'
    }

    const incomingCookie = request.headers.get('cookie')
    if (incomingCookie) headers['Cookie'] = incomingCookie

    const res = await fetch(UPSTREAM, {
      method: 'POST',
      headers,
      body,
      cache: 'no-store',
    })

    const text = await res.text().catch(() => '')
    // Try to forward JSON if possible
    try {
      const json = text ? JSON.parse(text) : null
      return NextResponse.json(json, { status: res.status })
    } catch {
      return new NextResponse(text, { status: res.status, headers: { 'Content-Type': res.headers.get('content-type') || 'text/plain' } })
    }
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Proxy failed' }, { status: 500 })
  }
}

export async function GET() {
  // Prevent accidental navigation or listing when the endpoint is opened in the browser
  return NextResponse.json({ error: 'Method not allowed. Use POST.' }, { status: 405, headers: { 'Allow': 'POST' } })
}

export async function OPTIONS() {
  // Minimal CORS/preflight support if needed
  return new NextResponse(null, { status: 204, headers: { 'Allow': 'POST, OPTIONS' } })
}


