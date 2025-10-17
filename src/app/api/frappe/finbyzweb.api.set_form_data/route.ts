import { NextResponse } from 'next/server'

const UPSTREAM = 'https://finbyz.tech/api/method/finbyzweb.api.set_form_data'

export async function POST(request: Request) {
 
  
  
  try {
    const contentType = request.headers.get('content-type') || ''
    let body: BodyInit | null = null
    let headers: Record<string, string> = {}

    if (contentType.includes('application/json')) {
      const incoming = await request.json().catch(() => ({})) as Record<string, any>

      // Map incoming payload -> upstream format
      const payload: Record<string, any> = {
        lead_name: incoming.lead_name ?? incoming.name ?? '',
        company_name: incoming.company_name ?? incoming.company ?? incoming.organization ?? '',
        mobile_no: incoming.mobile_no ?? incoming.mobile ?? '',
        title: incoming.title ?? incoming.subject ?? incoming.page_title ?? 'Website Inquiry',
        email: incoming.email ?? incoming.email_id ?? '',
      }

      // Basic validation
      const missing: string[] = []
      for (const key of ['lead_name','company_name','mobile_no','title','email']) {
        if (!String(payload[key] ?? '').trim()) missing.push(key)
      }
      if (missing.length) {
        return NextResponse.json({ error: 'Missing required fields', missing }, { status: 400 })
      }

      body = JSON.stringify(payload)
      headers['Content-Type'] = 'application/json'
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const form = await request.formData()
      const payload: Record<string, any> = {
        lead_name: form.get('lead_name') ?? form.get('name') ?? '',
        company_name: form.get('company_name') ?? form.get('company') ?? form.get('organization') ?? '',
        mobile_no: form.get('mobile_no') ?? form.get('mobile') ?? '',
        title: form.get('title') ?? form.get('subject') ?? 'Website Inquiry',
        email: form.get('email') ?? form.get('email_id') ?? '',
      }

      const missing: string[] = []
      for (const key of ['lead_name','company_name','mobile_no','title','email']) {
        if (!String(payload[key] ?? '').trim()) missing.push(key)
      }
      if (missing.length) {
        return NextResponse.json({ error: 'Missing required fields', missing }, { status: 400 })
      }

      body = new URLSearchParams(payload as Record<string, string>)
      headers['Content-Type'] = 'application/x-www-form-urlencoded'
    } else {
      // Fallback: pass raw body
      body = await request.text()
    }

    const upstream = await fetch(UPSTREAM, { method: 'POST', headers, body })
    

    const text = await upstream.text()
    let data: any = null
    try { data = JSON.parse(text) 
      
    } catch { /* not json */ }

    if (!upstream.ok) {
      return NextResponse.json({ error: 'Upstream error', status: upstream.status, message: data?.message ?? text }, { status: upstream.status })
    }

    return NextResponse.json(data ?? { ok: true })
  } catch (err: any) {
    
    return NextResponse.json({ error: 'Proxy failure', message: err?.message || String(err) }, { status: 500 })
  }
}
