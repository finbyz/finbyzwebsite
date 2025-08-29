'use client'

import React from 'react'
import { Container, Row, Col, Card, CardBody, Modal, ModalBody } from 'reactstrap'
import RecentActivity from '@/components/user-activity/RecentActivity'
// Avoid useSearchParams warnings by parsing query from window on client

function asDate(value?: string | null): Date | undefined {
	if (!value) return undefined
	const d = new Date(value)
	return isNaN(d.getTime()) ? undefined : d
}

export default function EmployeeActivityPage() {
	const [mounted, setMounted] = React.useState(false)
	React.useEffect(() => { setMounted(true) }, [])
	const isClient = typeof window !== 'undefined' && mounted
	const sp = React.useMemo(() => {
		return new URLSearchParams(isClient ? window.location.search : '')
	}, [isClient])
	const employee = sp.get('employee') || ''
	const employee_id = sp.get('employee_id') || ''
	const from = sp.get('from') || ''
	const to = sp.get('to') || ''
	const day = sp.get('day') || ''
	const project = sp.get('project') || ''

	const startDate = day ? asDate(day) : asDate(from)
	const endDate = day ? asDate(day) : asDate(to)

	const apiEmployee = React.useMemo(() => employee_id || employee, [employee_id, employee])

	const [rows, setRows] = React.useState<Array<{ date: string; total: number; application: number; meeting: number; call: number; issue: number }>>([])
	const [loading, setLoading] = React.useState(false)
	const [error, setError] = React.useState<string | null>(null)
	const [selectedDay, setSelectedDay] = React.useState<string | null>(day || null)

	// Final tutorial popup when landing here
	const [showFinalTip, setShowFinalTip] = React.useState(false)
	const finalTipShown = React.useRef(false)

	// Completed tasks state
	const [tasks, setTasks] = React.useState<Array<{ id: string; subject: string; assignee: string; completedOn: string }>>([])
	const [tasksLoading, setTasksLoading] = React.useState(false)
	const [tasksError, setTasksError] = React.useState<string | null>(null)

	const formatDDMMMYY = (value?: string | Date) => {
		if (!value) return ''
		const d = new Date(value as any)
		if (isNaN(d.getTime())) return ''
		const dd = String(d.getDate()).padStart(2, '0')
		const mmm = d.toLocaleString(undefined, { month: 'short' })
		const yy = String(d.getFullYear()).slice(-2)
		return `${dd}-${mmm}-${yy}`
	}

	// Task detail modal state
	const [taskModalOpen, setTaskModalOpen] = React.useState(false)
	const [taskLoading, setTaskLoading] = React.useState(false)
	const [taskDetail, setTaskDetail] = React.useState<Record<string, any> | null>(null)

	const openTaskDetail = React.useCallback(async (taskId: string) => {
		try {
			setTaskLoading(true)
			setTaskDetail(null)
			setTaskModalOpen(true)
			const url = `/api/fb/api/resource/Task/${encodeURIComponent(taskId)}`
			const res = await fetch(url, { cache: 'no-store' })
			if (!res.ok) throw new Error(`Task ${res.status}`)
			const j = await res.json()
			const data = j?.data || j?.message || null
			setTaskDetail(data)
		} catch (e) {
			setTaskDetail({ error: (e as any)?.message || 'Failed to load task' })
		} finally {
			setTaskLoading(false)
		}
	}, [])

	// Reset selected day when filters or employee change
	React.useEffect(() => {
		setSelectedDay(day || null)
	}, [apiEmployee, from, to, project, day])

	// Fetch matrix data (abortable)
	React.useEffect(() => {
		if (!startDate || !endDate) return
		const controller = new AbortController()
		let cancelled = false
		;(async () => {
			try {
				setLoading(true)
				setError(null)
				const params = new URLSearchParams()
				params.append('from_date', startDate.toISOString().slice(0, 10))
				params.append('to_date', endDate.toISOString().slice(0, 10))
				if (project && project !== 'all') params.append('project', project)
				const url = `/api/user-activity/matrix?${params.toString()}`
				const res = await fetch(url, { cache: 'no-store', signal: controller.signal })
				if (!res.ok) throw new Error(`Matrix ${res.status}`)
				const j = await res.json()
				if (cancelled) return
				const payload: any[] = Array.isArray(j?.data) ? j.data : []
				const empId = (employee_id || '').trim()
				const empName = (employee || '').trim().toLowerCase()
				const filtered = payload.filter(r => {
					const rId = (r.employee_id || '').trim()
					const rName = (r.employee || '').trim().toLowerCase()
					if (empId) return rId === empId
					if (empName) return rName === empName
					return false
				})
				const map: Record<string, { total: number; application: number; meeting: number; call: number; issue: number }> = {}
				for (const r of filtered) {
					const d = r.day
					if (!map[d]) map[d] = { total: 0, application: 0, meeting: 0, call: 0, issue: 0 }
					map[d].total += Number(r.total_hours || 0)
					map[d].application += Number(r.application_hours || 0)
					map[d].meeting += Number(r.meeting_hours || 0)
					map[d].call += Number(r.call_hours || 0)
					map[d].issue += Number(r.issue_hours || 0)
				}
				const list = Object.entries(map)
					.sort((a, b) => a[0].localeCompare(b[0]))
					.map(([d, v]) => ({ date: d, total: +v.total.toFixed(2), application: +v.application.toFixed(2), meeting: +v.meeting.toFixed(2), call: +v.call.toFixed(2), issue: +v.issue.toFixed(2) }))
				setRows(list)
			} catch (e: any) {
				if (e?.name === 'AbortError') return
				setError(e?.message || 'Failed to load')
				setRows([])
			} finally {
				if (!cancelled) setLoading(false)
			}
		})()
		return () => { cancelled = true; controller.abort() }
	}, [apiEmployee, project, from, to])

// Show final tip only after data is rendered (no loading and rows exist)
React.useEffect(() => {
    if (loading) return
    if (finalTipShown.current) return
    if (rows.length === 0) return
    try {
        const dont = localStorage.getItem('dontShowOverviewTutorial') === '1'
        if (!dont) {
            setShowFinalTip(true)
            finalTipShown.current = true
        }
    } catch {}
}, [loading, rows.length])

	// Fetch completed tasks for the period (abortable)
	React.useEffect(() => {
		if (!startDate || !endDate) return
		const controller = new AbortController()
		;(async () => {
			try {
				setTasksLoading(true)
				setTasksError(null)
				const qp = new URLSearchParams()
				qp.append('from_date', startDate.toISOString().slice(0, 10))
				qp.append('to_date', endDate.toISOString().slice(0, 10))
				if (project && project !== 'all') qp.append('project', project)
				// Pass the selected employee id as assignee for filtering (fallback to name if id missing)
				if (employee_id) qp.append('assignee', employee_id)
				else if (employee) qp.append('assignee', employee)
				const url = `/api/fb/method/productivity_next.api.get_task_list?${qp.toString()}`
				const res = await fetch(url, { cache: 'no-store', signal: controller.signal })
				if (!res.ok) throw new Error(`Tasks ${res.status}`)
				const j = await res.json()
				const arr: any[] = Array.isArray(j?.message) ? j.message : (Array.isArray(j?.data) ? j.data : [])
				const mapped = arr.map((t: any) => ({
					id: String(t.name ?? t.id ?? t.task_id ?? ''),
					subject: String(t.subject ?? t.title ?? ''),
					assignee: String(t.assignee ?? t.allocated_to ?? ''),
					completedOn: String(t.completed_on ?? t.completed_on_datetime ?? t.modifed ?? t.modified ?? ''),
				}))
				setTasks(mapped)
			} catch (e: any) {
				if (e?.name === 'AbortError') return
				setTasksError(e?.message || 'Failed to load tasks')
				setTasks([])
			} finally {
				setTasksLoading(false)
			}
		})()
		return () => controller.abort()
	}, [project, from, to])

	return (
		<div className='page-content'>
			<Container fluid>
				<div className='mb-4'>
					<h2 className='page-title' style={{ color: '#e2e8f0' }}>Employee Activity</h2>
					<div style={{ width: 64, height: 4, background: '#ea580c', borderRadius: 2, marginTop: 8 }} />
					<div style={{ color: '#94a3b8', marginTop: 8 }}>
						<span>Employee: </span><b style={{ color: '#ffffff' }}>{employee || employee_id || '—'}</b>
						{project ? (<><span style={{ marginLeft: 12 }}>Project:</span> <b style={{ color: '#ffffff' }}>{project}</b></>) : null}
					</div>
				</div>

				{/* Completed Tasks */}
				<Row className='mb-4'>
					<Col lg={12}>
						<Card>
							<CardBody>
								<h5 style={{ color: '#ffffff' }}>Completed Tasks</h5>
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
												<tr key={`${t.id}-${t.completedOn}`} style={{ cursor: 'pointer' }} onClick={() => openTaskDetail(t.id)}>
													<td>{t.id}</td>
													<td>{t.subject}</td>
													<td>{t.assignee}</td>
													<td>{formatDDMMMYY(t.completedOn)}</td>
												</tr>
											))}
											{tasks.length === 0 && !tasksLoading && (
												<tr><td colSpan={4} style={{ color: '#94a3b8' }}>No tasks found in this period.</td></tr>
											)}
										</tbody>
									</table>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>

				{/* Task Detail Modal */}
				<Modal isOpen={taskModalOpen} toggle={() => setTaskModalOpen(false)} size='lg'>
					<ModalBody>
						<div style={{ color: '#ffffff' }}>
							<h5 style={{ marginBottom: 12 }}>Task Details</h5>
							{taskLoading && <div style={{ color: '#94a3b8' }}>Loading…</div>}
							{!taskLoading && taskDetail && !taskDetail.error && (
								<div>
									<div style={{ marginBottom: 8 }}><b>ID:</b> {taskDetail.name}</div>
									<div style={{ marginBottom: 8 }}><b>Subject:</b> {taskDetail.subject || taskDetail.title}</div>
									<div style={{ marginBottom: 8 }}><b>Status:</b> {taskDetail.status}</div>
									<div style={{ marginBottom: 8 }}><b>Priority:</b> {taskDetail.priority}</div>
									<div style={{ marginBottom: 8 }}><b>Assignee:</b> {taskDetail.allocated_to || taskDetail.assignee}</div>
									<div style={{ marginBottom: 8 }}><b>Project:</b> {taskDetail.project}</div>
									<div style={{ marginBottom: 8 }}><b>Completed On:</b> {taskDetail.completed_on ? new Date(taskDetail.completed_on).toLocaleString() : ''}</div>
									{taskDetail.description && (
										<div style={{ marginTop: 12 }}>
											<b>Description:</b>
											<div style={{ whiteSpace: 'pre-wrap', marginTop: 6 }}>{taskDetail.description}</div>
										</div>
									)}
								</div>
							)}
							{!taskLoading && taskDetail?.error && (
								<div className='text-danger'>Error: {String(taskDetail.error)}</div>
							)}
						</div>
					</ModalBody>
				</Modal>

				{/* Daily Breakdown */}
				<Row className='mb-4'>
					<Col lg={12}>
						<Card>
							<CardBody>
								<h5 style={{ color: '#ffffff' }}>Daily Breakdown</h5>
								{error && <div className='text-danger'>Error: {error}</div>}
								<div className='table-responsive'>
									<table className='ua-table'>
										<thead>
											<tr>
												<th className='ua-date'>Date</th>
												<th className='ua-num'>Total Time (h)</th>
												<th className='ua-num'>System Time (h)</th>
												<th className='ua-num'>Calls (h)</th>
												<th className='ua-num'>Meetings (h)</th>
										</tr>
										</thead>
										<tbody>
											{rows.map((r) => (
												<tr key={r.date} style={{ cursor: 'pointer' }} onClick={() => { setSelectedDay(r.date); setShowFinalTip(false); }}>
													<td className='ua-date'>{formatDDMMMYY(r.date)}</td>
													<td className='ua-num'>{r.total.toFixed(2)}</td>
													<td className='ua-num'>{r.application.toFixed(2)}</td>
													<td className='ua-num'>{r.call.toFixed(2)}</td>
													<td className='ua-num'>{r.meeting.toFixed(2)}</td>
												</tr>
											))}
											{rows.length === 0 && !loading && (
												<tr><td colSpan={5} className='ua-num' style={{ color: '#94a3b8' }}>No records in this range.</td></tr>
											)}
										</tbody>
										{rows.length > 0 && (
											<tfoot>
												<tr>
													<th style={{ textAlign: 'right' }}>Total</th>
													<th className='ua-num'>{rows.reduce((s, r) => s + r.total, 0).toFixed(2)}</th>
													<th className='ua-num'>{rows.reduce((s, r) => s + r.application, 0).toFixed(2)}</th>
													<th className='ua-num'>{rows.reduce((s, r) => s + r.call, 0).toFixed(2)}</th>
													<th className='ua-num'>{rows.reduce((s, r) => s + r.meeting, 0).toFixed(2)}</th>
												</tr>
											</tfoot>
										)}
									</table>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>

				<Row>
					<Col lg={12}>
						<Card>
							<CardBody>
								<h5 style={{ color: '#ffffff' }}>Screenshots Timeline</h5>
								{apiEmployee && selectedDay && (
									<RecentActivity key={selectedDay} employee={apiEmployee} startDate={new Date(selectedDay) as any} endDate={new Date(selectedDay) as any} />
								)}
								{!selectedDay && (
									<div style={{ color: '#94a3b8' }}>Click a day in the table to view screenshots.</div>
								)}
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
			{showFinalTip && (
				<div style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}>
					<div style={{ background: '#0b1220', border: '1px solid #334155', borderRadius: 8, padding: 12, width: 320, boxShadow: '0 6px 24px rgba(0,0,0,0.4)' }}>
						<div style={{ color: '#fff', fontWeight: 600, marginBottom: 6 }}>View screenshots</div>
						<div style={{ color: '#cbd5e1', fontSize: 13, marginBottom: 10 }}>Click a day in the table to open the screenshots timeline for that date.</div>
						<div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
							<button className='btn btn-sm btn-outline-danger' onClick={() => { try { localStorage.setItem('dontShowOverviewTutorial', '1') } catch {}; setShowFinalTip(false) }}>Don't show me again</button>
							<button className='btn btn-sm btn-primary' onClick={() => setShowFinalTip(false)}>Finish</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
