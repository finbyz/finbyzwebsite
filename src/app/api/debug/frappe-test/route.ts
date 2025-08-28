import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    try {
        const url = new URL(request.url)
        const employee = url.searchParams.get('employee') || 'Nandkishor Bhadada'
        const startDate = url.searchParams.get('start_date') || '27/08/2025 00:00:00'  // DD/MM/YYYY format
        const endDate = url.searchParams.get('end_date') || '27/08/2025 23:59:59'      // DD/MM/YYYY format
        
        const params = new URLSearchParams({
            user: employee,  // Use 'user' parameter as expected by API (not 'employee')
            start_date: startDate,
            end_date: endDate,
        })
        
        const frappeUrl = process.env.FRAPPE_URL || 'https://finbyz.tech'
        const targetUrl = `${frappeUrl}/api/method/productivity_next.api.user_activity_images?${params.toString()}`
        
        console.log('[DEBUG] Testing Frappe API directly:', targetUrl)
        console.log('[DEBUG] Parameters:', { employee, startDate, endDate })
        
        const headers: Record<string, string> = {}
        const incomingCookie = request.headers.get('cookie')
        if (incomingCookie) headers['Cookie'] = incomingCookie
        
        const res = await fetch(targetUrl, { 
            cache: 'no-store', 
            headers 
        })
        
        console.log('[DEBUG] Frappe response status:', res.status, res.statusText)
        
        const rawResponse = await res.text()
        console.log('[DEBUG] Frappe raw response length:', rawResponse.length)
        console.log('[DEBUG] Frappe raw response:', rawResponse)
        
        let jsonResponse = null
        try {
            jsonResponse = JSON.parse(rawResponse)
            console.log('[DEBUG] Frappe parsed JSON:', JSON.stringify(jsonResponse, null, 2))
        } catch (e) {
            console.log('[DEBUG] Frappe response is not JSON:', e)
        }
        
        return NextResponse.json({
            success: true,
            status: res.status,
            statusText: res.statusText,
            rawResponse,
            parsedResponse: jsonResponse,
            url: targetUrl,
            parameters: { employee, startDate, endDate }
        })
        
    } catch (error) {
        console.error('[DEBUG] Error testing Frappe API:', error)
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined
        }, { status: 500 })
    }
}
