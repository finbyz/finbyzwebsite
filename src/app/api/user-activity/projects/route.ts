import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const url = new URL(request.url)
    let user = url.searchParams.get('user') || ''
    const debug = url.searchParams.get('debug') === '1'
    const headers: Record<string, string> = {}
    const incomingCookie = request.headers.get('cookie')
    if (incomingCookie) headers['Cookie'] = incomingCookie


    // If user was not provided explicitly, try to resolve it from ERPNext session
    if (!user) {
        try {
            const whoUrl = `${process.env.FRAPPE_URL || 'https://finbyz.tech'}/api/method/frappe.auth.get_logged_user`
            const who = await fetch(whoUrl, { headers, cache: 'no-store' })
            if (who.ok) {
                const wj = await who.json()
                const resolved = (wj as any)?.message || (wj as any)?.data
                if (typeof resolved === 'string') user = resolved
            } else {
                console.warn('[projects] who not ok')
            }
        } catch (e) {
            console.warn('[projects] who error', (e as any)?.message)
        }
    }

    const search = new URLSearchParams()
    if (user) search.append('user', user)
    const base = process.env.FRAPPE_URL || 'https://finbyz.tech'
    const upstream = `${base}/api/method/productivity_next.api.get_projects${search.toString() ? `?${search.toString()}` : ''}`
    try {
        const res = await fetch(upstream, { cache: 'no-store', headers })
        if (!res.ok) {
            const text = await res.text().catch(() => '')
            return NextResponse.json({ error: `Upstream ${res.status}`, body: text?.slice(0, 500), debug: debug ? { upstream, cookies: !!incomingCookie, user } : undefined }, { status: 502 })
        }
        const raw = await res.clone().text().catch(() => '')
        let json: any = null
        try { json = raw ? JSON.parse(raw) : null } catch {}
        const rows = Array.isArray((json as any)?.message)
            ? (json as any).message
            : Array.isArray((json as any)?.data)
                ? (json as any).data
                : []
        return NextResponse.json({ projects: rows, ...(debug ? { upstream, raw: raw.slice(0, 1000), cookies: !!incomingCookie, user } : {}) }, { headers: { 'Cache-Control': 'no-store' } })
    } catch (e: any) {
        console.error('[projects] error', e?.message)
        return NextResponse.json({ error: e?.message || 'Failed to fetch', debug: debug ? { upstream, cookies: !!incomingCookie, user } : undefined }, { status: 500 })
    }
}


