'use client'

import React, { useMemo, useState, Suspense, useEffect } from 'react'
import { Container, Row, Col, Card, CardBody, Badge, Spinner } from 'reactstrap'
// import Breadcrumbs from '@/components/user-activity/common/Breadcrumbs'
import * as echarts from 'echarts'
import ActivityTimeLine from '@/components/user-activity/charts/ActivityTimeLine'
import { useRouter } from 'next/navigation'
import RecentActivity from '@/components/user-activity/RecentActivity'

// Simple reusable chart wrapper
const chartColors = [
    '#1e40af', // Brand Blue
    '#ea580c', // Brand Orange
    '#0ea5e9', // Sky Blue
    '#f59e0b', // Amber
    '#14b8a6', // Teal
    '#9333ea', // Purple
    '#22c55e', // Green
    '#eab308', // Yellow
    '#ef4444', // Red
    '#94a3b8', // Slate
]

async function fetchWithRetry(url: string, init: RequestInit, retries = 2, backoffMs = 500): Promise<Response> {
    let lastError: any
    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            const res = await fetch(url, init)
            if (!res.ok) {
                const body = await res.text().catch(() => '')
                throw new Error(`HTTP ${res.status} ${res.statusText} - ${body.slice(0, 400)}`)
            }
            return res
        } catch (err) {
            lastError = err
            if (attempt < retries) {
                await new Promise((r) => setTimeout(r, backoffMs * Math.pow(2, attempt)))
                continue
            }
        }
    }
    throw lastError
}

function StackedBarChart({ title, categories, series, onBarClick }: { 
    title: string; 
    categories: string[]; 
    series: { name: string; data: number[] }[]; 
    onBarClick?: (category: string) => void 
}) {
    const id = React.useId()
    const ref = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (!ref.current) return
        const chart = echarts.init(ref.current, null, { renderer: 'svg' })
        const manyCategories = categories.length > 12
        const option = {
            backgroundColor: 'transparent',
            color: chartColors,
            title: { text: title, left: 'center', textStyle: { fontSize: 14, fontWeight: 600, color: '#e2e8f0' } },
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' },
                backgroundColor: 'rgba(17,24,39,0.9)',
                borderColor: 'rgba(255,255,255,0.08)',
                textStyle: { color: '#fff' },
                padding: 10,
                formatter: function(params: any) {
                    let result = `<div style=\"font-weight: bold; margin-bottom: 8px;\">${params[0].name}</div>`
                    let total = 0
                    params.forEach((param: any) => {
                        if (param.value > 0) {
                            result += `<div style=\"display: flex; justify-content: space-between; margin: 4px 0;\">\n                                <span style=\"color: ${param.color};\">${param.seriesName}</span>\n                                <span style=\"margin-left: 20px;\">${param.value} h</span>\n                            </div>`
                            total += param.value
                        }
                    })
                    result += `<div style=\"border-top: 1px solid rgba(255,255,255,0.2); margin-top: 8px; padding-top: 8px; font-weight: bold;\">\n                        <span>Total:</span>\n                        <span style=\"margin-left: 20px;\">${total.toFixed(2)} h</span>\n                    </div>`
                    return result
                }
            },
            animationDuration: 500,
            grid: { left: 30, right: 20, top: 48, bottom: manyCategories ? 64 : 32, containLabel: true },
            dataZoom: manyCategories ? [
                { type: 'inside' },
                { type: 'slider', bottom: 10, height: 12, brushSelect: false }
            ] : [],
            legend: {
                data: series.map(s => s.name),
                bottom: manyCategories ? 40 : 10,
                textStyle: { fontSize: 12, color: '#cbd5e1' }
            },
            xAxis: {
                type: 'category',
                data: categories,
                axisLine: { lineStyle: { color: '#1f2937' } },
                axisTick: { show: false },
                axisLabel: {
                    rotate: manyCategories ? 45 : 0,
                    interval: manyCategories ? 0 : 'auto',
                    color: '#cbd5e1'
                },
            },
            yAxis: {
                type: 'value',
                axisLine: { show: false },
                axisTick: { show: false },
                splitLine: { show: true, lineStyle: { color: '#1f2937' } },
                name: 'Hours',
                nameTextStyle: { color: '#9ca3af' },
                axisLabel: { color: '#cbd5e1' }
            },
            series: series.map((s) => ({
                ...s,
                type: 'bar',
                stack: 'total',
                barMaxWidth: 22,
                itemStyle: { borderRadius: [6, 6, 0, 0] },
                emphasis: { focus: 'series' },
            })),
        }
        chart.setOption(option)
        const handleClick = (params: any) => {
            if (params && typeof params.name === 'string') {
                onBarClick && onBarClick(params.name)
            }
        }
        chart.on('click', handleClick)
        const r = () => chart.resize()
        window.addEventListener('resize', r)
        return () => {
            chart.off('click', handleClick)
            window.removeEventListener('resize', r)
            chart.dispose()
        }
    }, [categories, series, title, onBarClick])

    return <div id={id} ref={ref} style={{ height: 300 }} />
}

function PieChart({ title, data }: { title: string; data: { name: string; value: number }[] }) {
    const id = React.useId()
    const ref = React.useRef<HTMLDivElement>(null)
    React.useEffect(() => {
        if (!ref.current) return
        const chart = echarts.init(ref.current, null, { renderer: 'svg' })
        const option = {
            backgroundColor: 'transparent',
            color: chartColors,
            title: { text: title, left: 'center', textStyle: { fontSize: 14, fontWeight: 600, color: '#e2e8f0' } },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(17,24,39,0.9)',
                borderColor: 'rgba(255,255,255,0.08)',
                textStyle: { color: '#fff' },
                padding: 10,
                formatter: '{a} <br/>{b}: {c} h ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                textStyle: { fontSize: 12, color: '#cbd5e1' }
            },
            series: [
                {
                    name: 'Hours',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['60%', '50%'],
                    avoidLabelOverlap: false,
                    label: { show: false, position: 'center' },
                    emphasis: { label: { show: true, fontSize: 18, fontWeight: 'bold', color: '#e2e8f0' } },
                    labelLine: { show: false },
                    data: data.filter(item => item.value > 0)
                }
            ]
        }
        chart.setOption(option)
        const r = () => chart.resize()
        window.addEventListener('resize', r)
        return () => {
            window.removeEventListener('resize', r)
            chart.dispose()
        }
    }, [data, title])

    return <div id={id} ref={ref} style={{ height: 300 }} />
}

function LoadingOverlay({ show }: { show: boolean }) {
    if (!show) return null
    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(11,18,32,0.75)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(1px)'
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                <Spinner color='light' style={{ width: '3rem', height: '3rem' }} />
                <div style={{ color: '#e2e8f0', fontSize: 14 }}>Loading data…</div>
            </div>
        </div>
    )
}

function EmployeeChart({ title, data, onBarClick }: { title: string; data: { name: string; value: number }[]; onBarClick?: (employee: string) => void }) {
    const id = React.useId()
    const ref = React.useRef<HTMLDivElement>(null)
    React.useEffect(() => {
        if (!ref.current) return
        const chart = echarts.init(ref.current, null, { renderer: 'svg' })
        const option = {
            backgroundColor: 'transparent',
            color: chartColors,
            title: { text: title, left: 'center', textStyle: { fontSize: 14, fontWeight: 600, color: '#e2e8f0' } },
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' },
                backgroundColor: 'rgba(17,24,39,0.9)',
                borderColor: 'rgba(255,255,255,0.08)',
                textStyle: { color: '#fff' },
                padding: 10,
                formatter: '{b}: {c} h'
            },
            grid: { left: 30, right: 20, top: 48, bottom: 32, containLabel: true },
            xAxis: {
                type: 'value',
                axisLine: { lineStyle: { color: '#1f2937' } },
                axisTick: { show: false },
                splitLine: { show: true, lineStyle: { color: '#1f2937' } },
                name: 'Hours',
                nameTextStyle: { color: '#9ca3af' },
                axisLabel: { color: '#cbd5e1' }
            },
            yAxis: {
                type: 'category',
                data: data.map(d => d.name),
                axisLine: { lineStyle: { color: '#1f2937' } },
                axisTick: { show: false },
                axisLabel: { fontSize: 11, color: '#cbd5e1' }
            },
            series: [{
                type: 'bar',
                data: data.map(d => d.value),
                barMaxWidth: 22,
                itemStyle: { 
                    borderRadius: [0, 6, 6, 0],
                    color: '#1e40af' // flat blue
                },
                emphasis: { focus: 'series' }
            }]
        }
        chart.setOption(option)
        const r = () => chart.resize()
        window.addEventListener('resize', r)
        const handleClick = (params: any) => {
            if (params && typeof params.name === 'string') {
                onBarClick && onBarClick(params.name)
            }
        }
        chart.on('click', handleClick)
        return () => {
            window.removeEventListener('resize', r)
            chart.off('click', handleClick)
            chart.dispose()
        }
    }, [data, title, onBarClick])

    return <div id={id} ref={ref} style={{ height: 300 }} />
}

function FiltersBar({ onChange, initial, timeSpanRef, projectRef }: { onChange: (filters: { start: Date; end: Date; project: string }) => void, initial?: { start?: Date; end?: Date; project?: string }, timeSpanRef?: React.RefObject<HTMLSelectElement | null>, projectRef?: React.RefObject<HTMLSelectElement | null> }) {
    const [timeSpan, setTimeSpan] = useState<'today' | 'last7' | 'last30' | 'thisMonth' | 'custom'>(initial?.start || initial?.end ? 'custom' : 'last7')
    const [customFrom, setCustomFrom] = useState<Date | null>(initial?.start ?? null)
    const [customTo, setCustomTo] = useState<Date | null>(initial?.end ?? null)
    const [project, setProject] = useState(initial?.project ?? 'all')
    const [projectOptions, setProjectOptions] = useState<Array<{ name: string; project_name?: string }>>([])

type TimeSpan = 'today' | 'last7' | 'last30' | 'thisMonth' | 'custom'

    function computeRange() {
        const now = new Date()
        const start = new Date(now)
        const end = new Date(now)
        switch (timeSpan) {
            case 'today':
                start.setHours(0, 0, 0, 0)
                end.setHours(23, 59, 59, 999)
                break
            case 'last7':
                start.setDate(now.getDate() - 6)
                start.setHours(0, 0, 0, 0)
                end.setHours(23, 59, 59, 999)
                break
            case 'last30':
                start.setDate(now.getDate() - 29)
                start.setHours(0, 0, 0, 0)
                end.setHours(23, 59, 59, 999)
                break
            case 'thisMonth':
                start.setDate(1)
                start.setHours(0, 0, 0, 0)
                end.setHours(23, 59, 59, 999)
                break
            case 'custom':
                if (customFrom) start.setTime(customFrom.getTime())
                if (customTo) end.setTime(customTo.getTime())
                break
        }
        return { start, end }
    }

    React.useEffect(() => {
        const { start, end } = computeRange()
        onChange({ start, end, project })
    }, [timeSpan, customFrom, customTo, project])

    React.useEffect(() => {
        // Load project options for current user
        const currentUser = (typeof window !== 'undefined' && (window as any).erpnext_user) || ''
        const q = currentUser ? `?user=${encodeURIComponent(currentUser)}` : ''
        const url = `/api/user-activity/projects${q}${q ? '&' : '?'}debug=1`
        fetch(url, { cache: 'no-store', credentials: 'include' })
            .then(async (r) => (r.ok ? r.json() : r.json().catch(() => ({})).then((j)=>Promise.reject(j))))
            .then((json) => {
                console.log('[Projects] client received', { count: Array.isArray(json?.projects) ? json.projects.length : 0, debug: json?.debug })
                const list = Array.isArray(json?.projects) ? json.projects : []
                setProjectOptions(list)
                // Auto-select first project if none selected yet
                if ((!project || project === 'all') && list.length > 0) {
                    setProject(list[0].name)
                }
            })
            .catch((e) => {
                console.warn('[Projects] fetch failed', e)
                setProjectOptions([])
            })
    }, [])

    return (
        <div className='filters-section'>
            <h5>Filters</h5>
                <Row className='gy-3 align-items-end'>
                    <Col md={3} sm={6}>
                        <label className='form-label'>Time span</label>
                        <select
                            className='form-control'
                            value={timeSpan}
                            onChange={(e) => {
                                const v = e.target.value as TimeSpan
                                // When switching away from custom, clear any previously entered custom dates
                                if (v !== 'custom') {
                                    setCustomFrom(null)
                                    setCustomTo(null)
                                }
                                setTimeSpan(v)
                            }}
                            ref={timeSpanRef}
                        >
                            <option value='today'>Today</option>
                            <option value='last7'>Last 7 days</option>
                            <option value='last30'>Last 30 days</option>
                            <option value='thisMonth'>This month</option>
                            <option value='custom'>Custom</option>
                        </select>
                    </Col>
                    {timeSpan === 'custom' && (
                        <>
                            <Col md={3} sm={6}>
                                <label className='form-label'>Start</label>
                                <input
                                    type='date'
                                    className='form-control'
                                    value={customFrom ? new Date(customFrom).toISOString().slice(0,10) : ''}
                                    onChange={(e) => setCustomFrom(e.target.value ? new Date(e.target.value) : null)}
                                />
                            </Col>
                            <Col md={3} sm={6}>
                                <label className='form-label'>End</label>
                                <input
                                    type='date'
                                    className='form-control'
                                    value={customTo ? new Date(customTo).toISOString().slice(0,10) : ''}
                                    onChange={(e) => setCustomTo(e.target.value ? new Date(e.target.value) : null)}
                                />
                            </Col>
                        </>
                    )}
                    <Col md={3} sm={6}>
                        <label className='form-label'>Project</label>
                        <select className='form-control' value={project} onChange={(e) => setProject(e.target.value.trim())} ref={projectRef}>
                        {projectOptions.map((p) => (
                            <option key={p.name} value={p.name}>{p.name || p.name}</option>
                        ))}
                        </select>
                    </Col>
                </Row>
        </div>
    )
}

// Helpers
function formatDayLabel(dateStr: string) {
    const d = new Date(dateStr)
    return d.toLocaleDateString(undefined, { day: '2-digit', month: 'short' })
}

function formatDDMMYY(value?: string | Date) {
    if (!value) return ''
    const d = new Date(value as any)
    if (isNaN(d.getTime())) return ''
    const dd = String(d.getDate()).padStart(2, '0')
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const yy = String(d.getFullYear()).slice(-2)
    return `${dd}-${mm}-${yy}`
}

function OverviewInner() {
    const router = useRouter()
    const initialFromParam: string | null = null
    const initialToParam: string | null = null
    const initialProjectParam: string = 'all'
    const initialSelectedDayParam: string | null = null
    const parseISO = (v?: string | null) => {
        if (!v) return undefined
        const d = new Date(v)
        return isNaN(d.getTime()) ? undefined : d
    }

    const [filters, setFilters] = useState<{ start: Date; end: Date; project: string } | null>(null)
    const [selectedDay, setSelectedDay] = useState<string | null>(initialSelectedDayParam)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Updated data structure to match the API response
    type RecordRow = { 
        day: string; 
        employee: string; 
        employee_id: string;  // Add employee ID field
        project: string; 
        project_type: string;
        total_hours: number; 
        application_hours: number; 
        meeting_hours: number; 
        call_hours: number; 
        issue_hours: number;
    }
    const [baseData, setBaseData] = useState<RecordRow[]>([])

    // Completed tasks state
    const [tasks, setTasks] = useState<Array<{ id: string; subject: string; assignee: string; completedOn: string }>>([])
    const [tasksLoading, setTasksLoading] = useState(false)
    const [tasksError, setTasksError] = useState<string | null>(null)

    // Tutorial state
    const [showTutorial, setShowTutorial] = useState<boolean>(false)
    const [tutorialStep, setTutorialStep] = useState<number>(0)

    // Tutorial anchors
    const timeSpanRef = React.useRef<HTMLSelectElement>(null)
    const projectRef = React.useRef<HTMLSelectElement>(null)
    const stackedChartRef = React.useRef<HTMLDivElement>(null)
    const employeeChartRef = React.useRef<HTMLDivElement>(null)

    const Coachmark: React.FC<{ target?: Element | null; title: string; body: string; onSkip: () => void; onDont: () => void; onNext: () => void; side?: 'right' | 'left' | 'bottom' | 'top' }>=({ target, title, body, onSkip, onDont, onNext, side='right' }) => {
        const [style, setStyle] = React.useState<React.CSSProperties>({ position: 'fixed', zIndex: 10000, top: 0, left: 0, visibility: 'hidden' })
        React.useEffect(() => {
            if (!target) return
            const rect = target.getBoundingClientRect()
            const gap = 8
            const pos: any = { position: 'fixed', zIndex: 10000 }
            if (side === 'right') { pos.top = rect.top + rect.height/2 - 80; pos.left = rect.right + gap }
            if (side === 'left') { pos.top = rect.top + rect.height/2 - 80; pos.left = Math.max(8, rect.left - 300 - gap) }
            if (side === 'bottom') { pos.top = rect.bottom + gap; pos.left = rect.left }
            if (side === 'top') { pos.top = Math.max(8, rect.top - 120 - gap); pos.left = rect.left }
            setStyle({ ...pos, visibility: 'visible' })
        }, [target])
        return (
            <div style={style} className='tutorial-card'>
                <div className='tutorial-title'>{title}</div>
                <div className='tutorial-body'>{body}</div>
                <div className='tutorial-actions'>
                    <button className='btn btn-sm btn-outline-secondary' onClick={onSkip}>Skip</button>
                    <button className='btn btn-sm btn-outline-danger' onClick={onDont}>Don't show again</button>
                    <button className='btn btn-sm btn-primary' onClick={onNext}>Next</button>
                </div>
            </div>
        )
    }

    useEffect(() => {
        try {
            const dont = localStorage.getItem('dontShowOverviewTutorial') === '1'
            if (!dont) {
                // start tutorial on first load
                setShowTutorial(true)
                const savedStep = parseInt(localStorage.getItem('overviewTutorialStep') || '0', 10)
                setTutorialStep(isNaN(savedStep) ? 0 : savedStep)
            }
        } catch {}
    }, [])

    const endTutorial = (dontShow: boolean) => {
        setShowTutorial(false)
        setTutorialStep(0)
        try {
            if (dontShow) localStorage.setItem('dontShowOverviewTutorial', '1')
            localStorage.removeItem('overviewTutorialStep')
        } catch {}
    }

    const nextTutorial = () => {
        setTutorialStep((s) => {
            const n = s + 1
            try { localStorage.setItem('overviewTutorialStep', String(n)) } catch {}
            return n
        })
    }

    React.useEffect(() => {
        if (!filters) return
        // Clear existing selections and data immediately so UI resets while new data loads
        setSelectedDay(null)
        setSelectedEmployee(null)
        setSelectedEmployeeDay(null)
        setBaseData([])
        const params = new URLSearchParams()
        params.append('from_date', filters.start.toISOString().slice(0, 10))
        params.append('to_date', filters.end.toISOString().slice(0, 10))
        if (filters.project && filters.project !== 'all') params.append('project', filters.project)
        setLoading(true)
        setError(null)
        const url = `/api/user-activity/matrix?${params.toString()}`
        console.log('[Overview] fetching', url, { project: filters.project })
        const controller = new AbortController()
        // Increase timeout to accommodate slower upstream (~16s observed)
        const timeoutId = setTimeout(() => controller.abort(), 35000)

        ;(async () => {
            try {
                const res = await fetchWithRetry(url, { signal: controller.signal, cache: 'no-store' }, 2)
                const status = `${res.status} ${res.statusText}`
                const raw = await res.clone().text().catch(() => '')
                console.log('[Overview] upstream status', status)
                console.log('[Overview] upstream raw (first 2k chars) ->\n', raw.slice(0, 2000))

                let json: any = null
                try {
                    json = raw ? JSON.parse(raw) : null
                } catch (parseErr) {
                    console.warn('[Overview] JSON parse failed, raw response logged above')
                }
                if (!json || typeof json !== 'object') {
                    setBaseData([])
                    setError('Unexpected response from API')
                    return
                }
                console.log('[Overview] json keys', Object.keys(json || {}))
                const payload = Array.isArray(json?.data) ? json.data : (Array.isArray(json?.message) ? json.message : [])
                console.log('[Overview] payload length', Array.isArray(payload) ? payload.length : 'not-array')
                const rows: RecordRow[] = Array.isArray(payload) ? payload.map((it: any) => ({
                    day: String(it.day ?? ''),
                    employee: String(it.employee ?? it.person ?? 'Unknown'),
                    employee_id: String(it.employee_id ?? it.employee ?? it.person ?? ''),
                    project: String(it.project ?? ''),
                    project_type: String(it.project_type ?? ''),
                    total_hours: Number(it.total_hours ?? it.hours ?? 0),
                    application_hours: Number(it.application_hours ?? 0),
                    meeting_hours: Number(it.meeting_hours ?? 0),
                    call_hours: Number(it.call_hours ?? 0),
                    issue_hours: Number(it.issue_hours ?? 0),
                })) : []
                if (rows.length > 0) {
                    console.log('[Overview] sample row', rows[0])
                    // Debug: Check if employee_id is present
                    console.log('[Overview] employee_id check:', {
                        hasEmployeeId: !!rows[0].employee_id,
                        employeeIdValue: rows[0].employee_id,
                        employeeName: rows[0].employee,
                        rawData: payload[0]
                    })
                }
                setBaseData(rows)
            } catch (e: any) {
                // Ignore aborts from unmount or timeout
                const msg = e?.message ? String(e.message) : ''
                const isAbort = e?.name === 'AbortError' || msg.toLowerCase().includes('aborted')
                if (isAbort) {
                    console.log('[Overview] fetch aborted')
                    return
                }
                console.error('[Overview] fetch error', e)
                setError(msg || 'Failed to load data')
            } finally {
                clearTimeout(timeoutId)
                setLoading(false)
            }
        })()

        return () => {
            controller.abort()
            clearTimeout(timeoutId)
        }
    }, [filters])

    React.useEffect(() => {
        if (!filters) return
        try {
            const params = new URLSearchParams(window.location.search)
            params.set('from', filters.start.toISOString().slice(0, 10))
            params.set('to', filters.end.toISOString().slice(0, 10))
            if (filters.project && filters.project !== 'all') params.set('project', filters.project)
            else params.delete('project')
            router.replace(`?${params.toString()}`, { scroll: false })
        } catch {}
    }, [filters?.start, filters?.end, filters?.project])

    // Fetch completed tasks for the selected period/project
    React.useEffect(() => {
        if (!filters?.start || !filters?.end) return
        ;(async () => {
            try {
                setTasksLoading(true)
                setTasksError(null)
                const qp = new URLSearchParams()
                qp.append('from_date', filters.start.toISOString().slice(0, 10))
                qp.append('to_date', filters.end.toISOString().slice(0, 10))
                qp.append('project', filters.project && filters.project !== 'all' ? filters.project : '')
                const url = `/api/fb/method/productivity_next.api.get_task_list?${qp.toString()}`
                const res = await fetch(url, { cache: 'no-store' })
                if (!res.ok) {
                    const raw = await res.text().catch(() => '')
                    const status = res.status
                    if (status === 401 || status === 403) {
                        throw new Error('Permission denied for tasks (portal user or login required)')
                    }
                    throw new Error(`Tasks ${status}: ${raw?.slice(0, 200)}`)
                }
                const j = await res.json()
                const arr: any[] = Array.isArray(j?.message) ? j.message : (Array.isArray(j?.data) ? j.data : [])
                const mapped = arr.map((t: any) => ({
                    id: String(t.task_id ?? t.name ?? ''),
                    subject: String(t.subject ?? ''),
                    assignee: String(t.assignee ?? ''),
                    completedOn: String(t.completed_on ?? ''),
                }))
                setTasks(mapped)
            } catch (e: any) {
                setTasksError(e?.message || 'Failed to load tasks')
                setTasks([])
            } finally {
                setTasksLoading(false)
            }
        })()
    }, [filters?.start, filters?.end, filters?.project])

    // Get unique employees and days
    const employees = useMemo(() => Array.from(new Set(baseData.map((r) => r.employee))), [baseData])
    const days = useMemo(() => Array.from(new Set(baseData.map((r) => r.day))).sort(), [baseData])

    // Day-wise stacked bar chart data
    const dayWiseData = useMemo(() => {
        const series = employees.map(emp => ({
            name: emp,
            data: days.map(day => {
                const dayData = baseData.filter(r => r.day === day && r.employee === emp)
                return dayData.reduce((sum, r) => sum + r.total_hours, 0)
            })
        }))
        return {
            categories: days.map(d => formatDayLabel(d)),
            series: series.filter(s => s.data.some(v => v > 0)) // Only show employees with data
        }
    }, [baseData, employees, days])

    // Hours breakdown for selected day
    const selectedDayBreakdown = useMemo(() => {
        if (!selectedDay) return []
        const dayData = baseData.filter(r => formatDayLabel(r.day) === selectedDay)
        const totalApp = dayData.reduce((sum, r) => sum + r.application_hours, 0)
        const totalMeeting = dayData.reduce((sum, r) => sum + r.meeting_hours, 0)
        const totalCall = dayData.reduce((sum, r) => sum + r.call_hours, 0)
        const totalIssue = dayData.reduce((sum, r) => sum + r.issue_hours, 0)
        
        return [
            { name: 'Application', value: totalApp },
            { name: 'Meeting', value: totalMeeting },
            { name: 'Call', value: totalCall },
            { name: 'Issue', value: totalIssue }
        ].filter(item => item.value > 0)
    }, [selectedDay, baseData])

    // Employee-wise total hours
    const employeeWiseData = useMemo(() => {
        return employees.map(emp => {
            const empData = baseData.filter(r => r.employee === emp)
            const totalHours = empData.reduce((sum, r) => sum + r.total_hours, 0)
            return { name: emp, value: totalHours }
        }).filter(item => item.value > 0).sort((a, b) => b.value - a.value)
    }, [baseData, employees])

    // KPIs
    const totalHours = useMemo(() => {
        const sum = baseData.reduce((a, b) => a + (Number.isFinite(b.total_hours) ? b.total_hours : 0), 0)
        return sum.toFixed(1)
    }, [baseData])

    const kpiAvgPerDay = useMemo(() => {
        const daysCount = days.length || 1
        return (Number(totalHours) / daysCount).toFixed(1)
    }, [totalHours, days])

    const kpiEmployees = employees.length
    const kpiProjects = useMemo(() => {
        if (filters?.project && filters.project !== 'all') return 1
        const unique = new Set<string>()
        for (const r of baseData) {
            if (r.project && r.project.trim().length > 0) unique.add(r.project)
        }
        return unique.size
    }, [baseData, filters])

    const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null)

    const employeeDayTable = useMemo(() => {
        if (!selectedEmployee) return [] as Array<{ date: string; total: number; application: number; meeting: number; call: number; issue: number }>
        const map: Record<string, { total: number; application: number; meeting: number; call: number; issue: number }> = {}
        for (const r of baseData) {
            if (r.employee !== selectedEmployee) continue
            const key = r.day
            if (!map[key]) map[key] = { total: 0, application: 0, meeting: 0, call: 0, issue: 0 }
            map[key].total += Number.isFinite(r.total_hours) ? r.total_hours : 0
            map[key].application += Number.isFinite(r.application_hours) ? r.application_hours : 0
            map[key].meeting += Number.isFinite(r.meeting_hours) ? r.meeting_hours : 0
            map[key].call += Number.isFinite(r.call_hours) ? r.call_hours : 0
            map[key].issue += Number.isFinite(r.issue_hours) ? r.issue_hours : 0
        }
        return Object.entries(map)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([d, v]) => ({ date: d, total: +v.total.toFixed(2), application: +v.application.toFixed(2), meeting: +v.meeting.toFixed(2), call: +v.call.toFixed(2), issue: +v.issue.toFixed(2) }))
    }, [baseData, selectedEmployee])

    const [selectedEmployeeDay, setSelectedEmployeeDay] = useState<string | null>(null)

    // Loading/Error wrapper
    const LoadingErrorWrapper = ({ children }: { children: React.ReactNode }) => (
        <div>
            {error ? <div className='text-danger text-center py-4'>Error: {error}</div> : children}
        </div>
    )

    return (
        <div className='page-content'>
            <LoadingOverlay show={loading} />
            <Container fluid>
                {/* Tutorial styles */}
                <style>{`
                    .tutorial-popover { position: relative; }
                    .tutorial-card { position: absolute; z-index: 1000; top: -12px; right: -12px; background: #0b1220; border: 1px solid #334155; border-radius: 8px; padding: 12px; width: 280px; box-shadow: 0 6px 24px rgba(0,0,0,0.4); }
                    .tutorial-title { color: #fff; font-weight: 600; margin-bottom: 6px; }
                    .tutorial-body { color: #cbd5e1; font-size: 13px; margin-bottom: 10px; }
                    .tutorial-actions { display: flex; gap: 8px; justify-content: flex-end; }
                `}</style>
                {/* Title header without breadcrumb */}
                <div className='mb-4'>
                    <h2 className='page-title' style={{ color: '#e2e8f0' }}>Activity Overview</h2>
                    <div style={{ width: 64, height: 4, background: '#ea580c', borderRadius: 2, marginTop: 8 }} />
                </div>
                {/* <Breadcrumbs title='Dashboards' breadcrumbItem='Activity Overview' /> */}
                <div style={{ position: 'relative' }}>
                    <FiltersBar onChange={setFilters} initial={{ start: parseISO(initialFromParam), end: parseISO(initialToParam), project: initialProjectParam }} timeSpanRef={timeSpanRef} projectRef={projectRef} />
                    {showTutorial && tutorialStep === 0 && (
                        <Coachmark
                            target={timeSpanRef.current}
                            title='Choose a time span'
                            body='Start here. Select the period you want to analyze.'
                            onSkip={() => endTutorial(false)}
                            onDont={() => endTutorial(true)}
                            onNext={nextTutorial}
                            side='right'
                        />
                    )}
                    {showTutorial && tutorialStep === 1 && (
                        <Coachmark
                            target={projectRef.current}
                            title='Filter by project'
                            body='Optionally narrow down the view to a single project.'
                            onSkip={() => endTutorial(false)}
                            onDont={() => endTutorial(true)}
                            onNext={nextTutorial}
                            side='right'
                        />
                    )}
                </div>

                {/* KPIs */}
                <Row className='mb-4'>
                    <Col md={3} sm={6} className='mb-3'>
                        <div className='kpi-card'>
                            <div className='kpi-value'>{totalHours} h</div>
                            <div className='kpi-label'>Total Hours</div>
                        </div>
                    </Col>
                    <Col md={3} sm={6} className='mb-3'>
                        <div className='kpi-card'>
                            <div className='kpi-value'>{kpiAvgPerDay} h</div>
                            <div className='kpi-label'>Avg / Day</div>
                        </div>
                    </Col>
                    <Col md={3} sm={6} className='mb-3'>
                        <div className='kpi-card'>
                            <div className='kpi-value'>{kpiEmployees}</div>
                            <div className='kpi-label'>Employees</div>
                        </div>
                    </Col>
                    <Col md={3} sm={6} className='mb-3'>
                        <div className='kpi-card'>
                            <div className='kpi-value'>{kpiProjects}</div>
                            <div className='kpi-label'>Projects</div>
                        </div>
                    </Col>
                </Row>

                {/* Selection summary + clear */}
                {selectedDay && (
                    <Row className='mb-3'>
                        <Col lg={12}>
                            <div className='d-flex align-items-center gap-3'>
                                <span className='badge-primary'>
                                    Selected Day: {selectedDay}
                                </span>
                                <button className='btn btn-outline-primary btn-sm' onClick={() => {
                                    setSelectedDay(null)
                                    try {
                                        const params = new URLSearchParams(window.location.search)
                                        params.delete('day')
                                        router.replace(`?${params.toString()}`, { scroll: false })
                                    } catch {}
                                }}>Clear selection</button>
                            </div>
                        </Col>
                    </Row>
                )}

                {/* Completed Tasks */}
                <Row className='mb-4'>
                    <Col lg={12}>
                        <div className='chart-section'>
                            <h5>Completed Tasks</h5>
                            {tasksError && <div className='text-danger'>Error: {tasksError}</div>}
                            <div className='table-responsive'>
                                <table className='ua-table'>
                                    <thead>
                                        <tr>
                                            <th>Task ID</th>
                                            <th>Subject</th>
                                            <th>Assignee</th>
                                            <th>Completed On</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tasks.map((t) => (
                                            <tr key={`${t.id}-${t.completedOn}`}>
                                                <td>{t.id}</td>
                                                <td>{t.subject}</td>
                                                <td>{t.assignee}</td>
                                                <td>{formatDDMMYY(t.completedOn)}</td>
                                            </tr>
                                        ))}
                                        {tasks.length === 0 && !tasksLoading && (
                                            <tr>
                                                <td colSpan={4} style={{ color: '#94a3b8' }}>No tasks found in this period.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* 1. Day-wise stacked bar chart */}
                <Row className='mb-4'>
                    <Col lg={12}><h5 className='mb-3' style={{ color: '#ffffff' }}>Day-wise Hours Breakdown</h5></Col>
                    <Col lg={12} className='mb-4'>
                        <div className='chart-section' ref={stackedChartRef}>
                            <h5>Daily Hours by Employee</h5>
                            <LoadingErrorWrapper>
                                <StackedBarChart
                                    key={`stacked-${filters?.start?.toISOString?.().slice(0,10)}-${filters?.end?.toISOString?.().slice(0,10)}-${filters?.project}`}
                                    title='Daily Hours by Employee' 
                                    categories={dayWiseData.categories} 
                                    series={dayWiseData.series} 
                                    onBarClick={(day) => {
                                        setSelectedDay(day)
                                        try {
                                            const params = new URLSearchParams(window.location.search)
                                            params.set('day', day)
                                            router.replace(`?${params.toString()}`, { scroll: false })
                                        } catch {}
                                    }} 
                                />
                            </LoadingErrorWrapper>
                            {showTutorial && tutorialStep === 2 && (
                                <Coachmark
                                    target={stackedChartRef.current}
                                    title='Day-wise chart'
                                    body='Point at a bar to inspect. Click a bar/day to focus.'
                                    onSkip={() => endTutorial(false)}
                                    onDont={() => endTutorial(true)}
                                    onNext={nextTutorial}
                                    side='top'
                                />
                            )}
                        </div>
                    </Col>
                </Row>

                {/* 2. Hours breakdown pie chart when day is selected */}
                {selectedDay && (
                <Row className='mb-4'>
                    <Col lg={6} className='mb-4'>
                            <div className='chart-section'>
                                <h5 style={{ color: '#ffffff' }}>Hours Breakdown for {selectedDay}</h5>
                                <PieChart
                                    key={`breakdown-${filters?.start?.toISOString?.().slice(0,10)}-${filters?.end?.toISOString?.().slice(0,10)}-${filters?.project}-${selectedDay}`}
                                    title={`Hours Breakdown for ${selectedDay}`}
                                    data={selectedDayBreakdown}
                                />
                            </div>
                    </Col>
                        <Col lg={6} className='mb-4'>
                            <div className='chart-section'>
                                <h5 style={{ color: '#ffffff' }}>Employee Contribution for {selectedDay}</h5>
                                <PieChart
                                    key={`emp-contri-${filters?.start?.toISOString?.().slice(0,10)}-${filters?.end?.toISOString?.().slice(0,10)}-${filters?.project}-${selectedDay}`}
                                    title={`Employee Contribution for ${selectedDay}`}
                                    data={(() => {
                                        // Aggregate total_hours per employee for the selected day
                                        const map: Record<string, number> = {}
                                        for (const r of baseData) {
                                            if (formatDayLabel(r.day) !== selectedDay) continue
                                            map[r.employee] = (map[r.employee] || 0) + (Number.isFinite(r.total_hours) ? r.total_hours : 0)
                                        }
                                        return Object.entries(map)
                                            .filter(([, v]) => v > 0)
                                            .map(([name, value]) => ({ name, value }))
                                    })()}
                                />
                            </div>
                    </Col>
                </Row>
                )}

                {/* 3. Employee-wise chart (always visible) */}
                <Row className='mb-4'>
                    <Col lg={12}><h5 className='mb-3' style={{ color: '#ffffff' }}>Employee Performance Overview</h5></Col>
                    <Col lg={12} className='mb-4'>
                        <div className='chart-section' ref={employeeChartRef}>
                            <h5>Total Hours by Employee</h5>
                            <LoadingErrorWrapper>
                                <EmployeeChart
                                    key={`emp-chart-${filters?.start?.toISOString?.().slice(0,10)}-${filters?.end?.toISOString?.().slice(0,10)}-${filters?.project}`}
                                    title='Total Hours by Employee'
                                    data={employeeWiseData}
                                    onBarClick={(emp) => {
                                        try {
                                            const params = new URLSearchParams()
                                            // lookup employee_id from baseData
                                            const match = baseData.find(r => r.employee === emp)
                                            if (match?.employee_id) params.set('employee_id', match.employee_id)
                                            params.set('employee', emp)
                                            if (filters?.start) params.set('from', filters.start.toISOString().slice(0, 10))
                                            if (filters?.end) params.set('to', filters.end.toISOString().slice(0, 10))
                                            if (filters?.project && filters.project !== 'all') params.set('project', filters.project)
                                            router.push(`/user-activity/employee?${params.toString()}`)
                                            if (showTutorial && tutorialStep === 3) nextTutorial()
                                        } catch {
                                            setSelectedEmployee(emp)
                                        }
                                    }}
                                />
                            </LoadingErrorWrapper>
                            {showTutorial && tutorialStep === 3 && (
                                <Coachmark
                                    target={employeeChartRef.current}
                                    title='Open employee details'
                                    body='Click a bar to navigate to the Employee Activity page.'
                                    onSkip={() => endTutorial(false)}
                                    onDont={() => endTutorial(true)}
                                    onNext={nextTutorial}
                                    side='top'
                                />
                            )}
                        </div>
                    </Col>
                </Row>

                {selectedEmployee && (
                    <Row className='mb-4'>
                        <Col lg={12}>
                            <div className='chart-section'>
                                <div className='d-flex justify-content-between align-items-center mb-3'>
                                    <h5>Daily breakdown for {selectedEmployee}</h5>
                                    <button className='btn btn-outline-primary btn-sm' onClick={() => setSelectedEmployee(null)}>Close</button>
                                </div>
                                <div className='table-responsive'>
                                    <table className='ua-table'>
                                        <thead>
                                            <tr>
                                                <th className='ua-date'>Date</th>
                                                <th className='ua-num'>Total Time (h)</th>
                                                <th className='ua-num'>System Time (h)</th>
                                                <th className='ua-num'>Calls Time (h)</th>
                                                <th className='ua-num'>Meeting Time (h)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {employeeDayTable.map((row) => (
                                                <tr key={row.date} style={{ cursor: 'pointer' }} onClick={() => setSelectedEmployeeDay(row.date)}>
                                                    <td className='ua-date'>{formatDDMMYY(row.date)}</td>
                                                    <td className='ua-num'>{row.total.toFixed(2)}</td>
                                                    <td className='ua-num'>{row.application.toFixed(2)}</td>
                                                    <td className='ua-num'>{row.call.toFixed(2)}</td>
                                                    <td className='ua-num'>{row.meeting.toFixed(2)}</td>
                                                </tr>
                                            ))}
                                            {employeeDayTable.length === 0 && (
                                                <tr>
                                                    <td colSpan={5} className='ua-num' style={{ color: '#94a3b8' }}>No records for this employee in the selected range.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                        {employeeDayTable.length > 0 && (
                                            <tfoot>
                                                <tr>
                                                    <th style={{ textAlign: 'right' }}>Total</th>
                                                    <th className='ua-num'>
                                                        {employeeDayTable.reduce((s, r) => s + r.total, 0).toFixed(2)}
                                                    </th>
                                                    <th className='ua-num'>
                                                        {employeeDayTable.reduce((s, r) => s + r.application, 0).toFixed(2)}
                                                    </th>
                                                    <th className='ua-num'>
                                                        {employeeDayTable.reduce((s, r) => s + r.call, 0).toFixed(2)}
                                                    </th>
                                                    <th className='ua-num'>
                                                        {employeeDayTable.reduce((s, r) => s + r.meeting, 0).toFixed(2)}
                                                    </th>
                                                </tr>
                                            </tfoot>
                                        )}
                                    </table>
                                </div>
                                {selectedEmployeeDay && (
                                    <div className='mt-3'>
                                        <h6 className='mb-2' style={{ color: '#ffffff' }}>Screenshots timeline for {selectedEmployee} on {formatDayLabel(selectedEmployeeDay)}</h6>
                                        <div className='mt-3'>
                                            <RecentActivity 
                                                employee={(() => {
                                                    // Find the employee_id for the selected employee and date
                                                    const empData = baseData.find(r => 
                                                        r.employee === selectedEmployee && 
                                                        r.day === selectedEmployeeDay
                                                    )
                                                    
                                                    // Fallback: if no data for specific date, find any data for this employee
                                                    const fallbackData = empData || baseData.find(r => r.employee === selectedEmployee)
                                                    
                                                    console.log('[Overview] Employee lookup:', {
                                                        selectedEmployee,
                                                        selectedEmployeeDay,
                                                        foundData: empData,
                                                        fallbackData,
                                                        allMatchingData: baseData.filter(r => r.employee === selectedEmployee)
                                                    })
                                                    
                                                    return fallbackData?.employee_id || selectedEmployee || ''
                                                })()} 
                                                startDate={selectedEmployeeDay ? new Date(selectedEmployeeDay) : undefined as any} 
                                                endDate={selectedEmployeeDay ? new Date(selectedEmployeeDay) : undefined as any} 
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    )
}

// Persist filters to URL when they change
// Placed after component to use the same file scope
// eslint-disable-next-line react/display-name
;(() => {})()

export default function Overview() {
    return (
        <Suspense fallback={null}>
            <OverviewInner />
        </Suspense>
    )
}
