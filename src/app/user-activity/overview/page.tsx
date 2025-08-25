'use client'

import React, { useMemo, useState } from 'react'
import { Container, Row, Col, Card, CardBody, Badge } from 'reactstrap'
import Breadcrumbs from '@/components/user-activity/common/Breadcrumbs'
import * as echarts from 'echarts'

// Simple reusable chart wrapper
function BarChart({ title, categories, series }: { title: string; categories: string[]; series: { name: string; data: number[] }[] }) {
    const id = React.useId()
    const ref = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (!ref.current) return
        const chart = echarts.init(ref.current, null, { renderer: 'svg' })
        const option = {
            title: { text: title, left: 'center', textStyle: { fontSize: 14 } },
            tooltip: { trigger: 'axis' },
            grid: { left: 30, right: 20, top: 40, bottom: 30, containLabel: true },
            xAxis: { type: 'category', data: categories },
            yAxis: { type: 'value' },
            series: series.map((s) => ({ ...s, type: 'bar' })),
        }
        chart.setOption(option)
        const r = () => chart.resize()
        window.addEventListener('resize', r)
        return () => {
            window.removeEventListener('resize', r)
            chart.dispose()
        }
    }, [categories, series, title])

    return <div id={id} ref={ref} style={{ height: 300 }} />
}

function PieChart({ title, data }: { title: string; data: { name: string; value: number }[] }) {
    const id = React.useId()
    const ref = React.useRef<HTMLDivElement>(null)
    React.useEffect(() => {
        if (!ref.current) return
        const chart = echarts.init(ref.current, null, { renderer: 'svg' })
        const option = {
            title: { text: title, left: 'center', textStyle: { fontSize: 14 } },
            tooltip: { trigger: 'item' },
            legend: { bottom: 0, type: 'scroll' },
            series: [
                {
                    type: 'pie',
                    radius: ['35%', '70%'],
                    center: ['50%', '45%'],
                    data,
                    label: { show: false },
                },
            ],
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

// Filters bar
type TimeSpan = 'today' | 'last7' | 'last30' | 'thisMonth' | 'custom'

function FiltersBar({
    onChange,
}: {
    onChange: (filters: { start: Date; end: Date; project: string }) => void
}) {
    const [timeSpan, setTimeSpan] = useState<TimeSpan>('last7')
    const [customFrom, setCustomFrom] = useState<Date | null>(null)
    const [customTo, setCustomTo] = useState<Date | null>(null)
    const [project, setProject] = useState<string>('all')

    const computeRange = (): { start: Date; end: Date } => {
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

    return (
        <Card className='mb-4'>
            <CardBody>
                <Row className='gy-3 align-items-end'>
                    <Col md={3} sm={6}>
                        <label className='form-label'>Time span</label>
                        <select className='form-control' value={timeSpan} onChange={(e) => setTimeSpan(e.target.value as TimeSpan)}>
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
                                <input type='date' className='form-control' onChange={(e) => setCustomFrom(new Date(e.target.value))} />
                            </Col>
                            <Col md={3} sm={6}>
                                <label className='form-label'>End</label>
                                <input type='date' className='form-control' onChange={(e) => setCustomTo(new Date(e.target.value))} />
                            </Col>
                        </>
                    )}
                    <Col md={3} sm={6}>
                        <label className='form-label'>Project</label>
                        <select className='form-control' value={project} onChange={(e) => setProject(e.target.value)}>
                            <option value='all'>All Projects</option>
                            <option value='proj_alpha'>Project Alpha</option>
                            <option value='proj_beta'>Project Beta</option>
                            <option value='proj_gamma'>Project Gamma</option>
                        </select>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

// Dummy data builders
const tasks = ['Setup', 'Development', 'Testing', 'Review', 'Deployment']
const people = ['Alice', 'Bob', 'Charlie', 'Diana']
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
function random(n: number, max = 8) { return Array.from({ length: n }, () => +(Math.random() * max).toFixed(1)) }

export default function Overview() {
    const [filters, setFilters] = useState<{ start: Date; end: Date; project: string } | null>(null)

    const taskWise = useMemo(() => ({ categories: tasks, data: random(tasks.length) }), [filters])
    const dayWise = useMemo(() => ({ categories: days, data: random(days.length) }), [filters])
    const personWise = useMemo(() => ({ categories: people, data: random(people.length) }), [filters])

    const pairs = (cats: string[]) => cats.map((c, i) => ({ name: c, value: i < 6 ? Math.round(Math.random() * 20) : 0 }))

    const workingTasks = useMemo(() => (
        [
            { id: 'TASK11221', title: 'Create Invoice Print Format', employee: 'Parth', project: 'Rameswar Udyog', spent: '1h 51m', since: 'few seconds ago' },
            { id: 'TASK11857', title: 'Fix Product Page', employee: 'Meghwin', project: 'Accurate Systems', spent: '2h 35m', since: '3 minutes ago' },
        ]
    ), [filters])

    return (
        <div className='page-content'>
            <Container fluid>
                <Breadcrumbs title='Dashboards' breadcrumbItem='Activity Overview' />
                <FiltersBar onChange={setFilters} />

                {/* 1. Task wise */}
                <Row className='mb-4'>
                    <Col lg={12}><h5 className='mb-3'>Task wise hours</h5></Col>
                    <Col lg={6} className='mb-4'>
                        <Card><CardBody>
                            <BarChart title='Task wise hours' categories={taskWise.categories} series={[{ name: 'Hours', data: taskWise.data }]} />
                        </CardBody></Card>
                    </Col>
                    <Col lg={3} className='mb-4'>
                        <Card><CardBody>
                            <PieChart title='Day wise hours' data={pairs(days)} />
                        </CardBody></Card>
                    </Col>
                    <Col lg={3} className='mb-4'>
                        <Card><CardBody>
                            <PieChart title='Person wise hours' data={pairs(people)} />
                        </CardBody></Card>
                    </Col>
                </Row>

                {/* 2. Day wise */}
                <Row className='mb-4'>
                    <Col lg={12}><h5 className='mb-3'>Day wise hours</h5></Col>
                    <Col lg={6} className='mb-4'>
                        <Card><CardBody>
                            <BarChart title='Day wise hours' categories={dayWise.categories} series={[{ name: 'Hours', data: dayWise.data }]} />
                        </CardBody></Card>
                    </Col>
                    <Col lg={3} className='mb-4'>
                        <Card><CardBody>
                            <PieChart title='Person wise hours' data={pairs(people)} />
                        </CardBody></Card>
                    </Col>
                    <Col lg={3} className='mb-4'>
                        <Card><CardBody>
                            <PieChart title='Task wise hours' data={pairs(tasks)} />
                        </CardBody></Card>
                    </Col>
                </Row>

                {/* 3. Person wise */}
                <Row className='mb-4'>
                    <Col lg={12}><h5 className='mb-3'>Person wise hours</h5></Col>
                    <Col lg={6} className='mb-4'>
                        <Card><CardBody>
                            <BarChart title='Person wise hours' categories={personWise.categories} series={[{ name: 'Hours', data: personWise.data }]} />
                        </CardBody></Card>
                    </Col>
                    <Col lg={3} className='mb-4'>
                        <Card><CardBody>
                            <PieChart title='Day wise hours' data={pairs(days)} />
                        </CardBody></Card>
                    </Col>
                    <Col lg={3} className='mb-4'>
                        <Card><CardBody>
                            <PieChart title='Task wise hours' data={pairs(tasks)} />
                        </CardBody></Card>
                    </Col>
                </Row>

                {/* 4. Working tasks */}
                <Row className='mb-4'>
                    <Col lg={12}><h5 className='mb-3'>Current Working Tasks</h5></Col>
                    {workingTasks.map((t) => (
                        <Col lg={12} key={t.id}>
                            <Card className='mb-3'>
                                <CardBody>
                                    <Row className='align-items-center'>
                                        <Col md={6}>
                                            <div className='d-flex align-items-center gap-2'>
                                                <Badge color='success' pill>✓</Badge>
                                                <div>
                                                    <div className='fw-bold'>{t.employee}</div>
                                                    <div className='text-muted'>{t.id}</div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={3} className='text-md-center mt-3 mt-md-0'>
                                            <Badge color='light' className='text-dark'>{t.project}</Badge>
                                        </Col>
                                        <Col md={3} className='text-md-end mt-3 mt-md-0'>
                                            <div className='text-muted small'>Last logged {t.since}</div>
                                            <div className='fw-semibold'>Spent Time: {t.spent}</div>
                                        </Col>
                                    </Row>
                                    <div className='mt-2'>{t.title}</div>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
