import { NextResponse } from 'next/server'

// Normalized row structure expected by frontend
// Note: keep keys in snake_case compatibility with upstream semantics
// but return camel-ish names the frontend maps: day, employee, project, project_type, total_hours, application_hours, meeting_hours, call_hours, issue_hours

type NormalizedRow = {
    day: string
    employee: string
    employee_id: string  // Add employee ID field
    project: string
    project_type: string
    total_hours: number
    application_hours: number
    meeting_hours: number
    call_hours: number
    issue_hours: number
}

function asISODate(value: any): string {
    try {
        if (!value) return ''
        // value could be 'YYYY-MM-DD' or a datetime string
        const d = new Date(value)
        if (isNaN(d.getTime())) return String(value)
        return d.toISOString().slice(0, 10)
    } catch {
        return ''
    }
}

export async function GET(request: Request) {
    const url = new URL(request.url)
    const from_date = url.searchParams.get('from_date') || url.searchParams.get('start') || ''
    const to_date = url.searchParams.get('to_date') || url.searchParams.get('end') || ''
    const project = url.searchParams.get('project') || ''
    const employee = url.searchParams.get('employee') || ''

    const search = new URLSearchParams()
    if (from_date) search.append('from_date', from_date)
    if (to_date) search.append('to_date', to_date)
    if (project && project !== 'all') search.append('project', project)
    if (employee) search.append('employee', employee)
    const debug = url.searchParams.get('debug') === '1'
    const upstream = `https://finbyz.tech/api/method/productivity_next.api.get_time_utilization_daily?${search.toString()}`

    try {
        const headers: Record<string, string> = {}
        const incomingCookie = request.headers.get('cookie')
        if (incomingCookie) headers['Cookie'] = incomingCookie
        const res = await fetch(upstream, { cache: 'no-store', headers })
        if (!res.ok) {
            const text = await res.text().catch(() => '')
            return NextResponse.json({ error: `Upstream ${res.status}`, body: text?.slice(0, 500) }, { status: 502 })
        }
        // Read raw first for diagnostics
        const raw = await res.clone().text().catch(() => '')
        
        let json: any = null
        try {
            json = raw ? JSON.parse(raw) : null
        } catch (e) {
            console.warn('[API matrix] upstream not JSON', e)
        }
        
        const payload = Array.isArray(json?.data)
            ? json.data
            : Array.isArray(json?.message)
                ? json.message
                : Array.isArray(json?.message?.data)
                    ? json.message.data
                    : []
        
        if (Array.isArray(payload) && payload.length > 0) {
        }

        const rows: NormalizedRow[] = Array.isArray(payload) ? payload.map((it: any): NormalizedRow => ({
            day: asISODate(it.date ?? it.day ?? ''),
            employee: String(it.employee_name ?? it.employee ?? it.person ?? 'Unknown'),
            employee_id: String(it.employee_id ?? it.employee ?? it.person ?? ''),
            project: String(it.project ?? ''),
            project_type: String(it.project_type ?? ''),
            total_hours: Number(it.total_hours ?? it.hours ?? 0) || 0,
            application_hours: Number(it.application_hours ?? 0) || 0,
            meeting_hours: Number(it.meeting_hours ?? 0) || 0,
            call_hours: Number(it.call_hours ?? 0) || 0,
            issue_hours: Number(it.issue_hours ?? 0) || 0,
        })) : []

        if (rows.length > 0) {
        }

        const body = debug ? { raw: json, data: rows } : { data: rows }
        return NextResponse.json(body, { headers: { 'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60' } })
    } catch (e: any) {
        console.error('[API matrix] error', e?.message, e)
        return NextResponse.json({ error: e?.message || 'Failed to fetch' }, { status: 500 })
    }
}


