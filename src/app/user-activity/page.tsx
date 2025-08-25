'use client'

import React, { useMemo, useState } from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import WorkIntensityChart from '@/components/user-activity/charts/WorkIntensityChart'
import ApplicationUsageChart from '@/components/user-activity/charts/ApplicationUsageChart'
import WebBrowsingTimeChart from '@/components/user-activity/charts/WebBrowsingTimeChart'
import Breadcrumbs from '@/components/user-activity/common/Breadcrumbs'
import RecentActivity from '@/components/user-activity/common/RecentActivity'

type TimeSpan = 'today' | 'yesterday' | 'last7' | 'last30' | 'thisMonth' | 'lastMonth' | 'custom'

function getRange(span: TimeSpan, customFrom?: Date, customTo?: Date) {
    const now = new Date()
    const start = new Date(now)
    const end = new Date(now)

    switch (span) {
        case 'today':
            start.setHours(0, 0, 0, 0)
            end.setHours(23, 59, 59, 999)
            break
        case 'yesterday':
            start.setDate(now.getDate() - 1)
            start.setHours(0, 0, 0, 0)
            end.setDate(now.getDate() - 1)
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
        case 'lastMonth': {
            const firstThis = new Date(now.getFullYear(), now.getMonth(), 1)
            const lastPrev = new Date(firstThis.getTime() - 1)
            start.setFullYear(lastPrev.getFullYear())
            start.setMonth(lastPrev.getMonth())
            start.setDate(1)
            start.setHours(0, 0, 0, 0)
            end.setFullYear(lastPrev.getFullYear())
            end.setMonth(lastPrev.getMonth())
            end.setDate(lastPrev.getDate())
            end.setHours(23, 59, 59, 999)
            break
        }
        case 'custom':
            if (customFrom) start.setTime(customFrom.getTime())
            if (customTo) end.setTime(customTo.getTime())
            break
    }

    return { start, end }
}

export default function UserActivity() {
    const [timeSpan, setTimeSpan] = useState<TimeSpan>('last7')
    const [customFrom, setCustomFrom] = useState<Date | null>(null)
    const [customTo, setCustomTo] = useState<Date | null>(null)

    const [employee, setEmployee] = useState<string>('all')
    const [project, setProject] = useState<string>('all')

    const { start, end } = useMemo(() => getRange(timeSpan, customFrom || undefined, customTo || undefined), [timeSpan, customFrom, customTo])

    const selectedEmployee = useMemo(() => ({ id: employee }), [employee])

    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumbs title='Dashboards' breadcrumbItem='User Activity' />

                    {/* Filters */}
                    <Card className='mb-4'>
                        <CardBody>
                            <Row className='gy-3 align-items-end'>
                                <Col md={3} sm={6}>
                                    <label className='form-label'>Time span</label>
                                    <select
                                        className='form-control'
                                        value={timeSpan}
                                        onChange={(e) => setTimeSpan(e.target.value as TimeSpan)}
                                    >
                                        <option value='today'>Today</option>
                                        <option value='yesterday'>Yesterday</option>
                                        <option value='last7'>Last 7 days</option>
                                        <option value='last30'>Last 30 days</option>
                                        <option value='thisMonth'>This month</option>
                                        <option value='lastMonth'>Last month</option>
                                        <option value='custom'>Custom range</option>
                                    </select>
                                </Col>

                                {timeSpan === 'custom' && (
                                    <>
                                        <Col md={3} sm={6}>
                                            <label className='form-label'>Start Date</label>
                                            <input
                                                type='date'
                                                className='form-control'
                                                value={(customFrom || start).toISOString().split('T')[0]}
                                                onChange={(e) => setCustomFrom(new Date(e.target.value))}
                                            />
                                        </Col>
                                        <Col md={3} sm={6}>
                                            <label className='form-label'>End Date</label>
                                            <input
                                                type='date'
                                                className='form-control'
                                                value={(customTo || end).toISOString().split('T')[0]}
                                                onChange={(e) => setCustomTo(new Date(e.target.value))}
                                            />
                                        </Col>
                                    </>
                                )}

                                <Col md={3} sm={6}>
                                    <label className='form-label'>Employee</label>
                                    <select
                                        className='form-control'
                                        value={employee}
                                        onChange={(e) => setEmployee(e.target.value)}
                                    >
                                        <option value='all'>All Employees</option>
                                        <option value='current_user'>Current User</option>
                                        <option value='emp_001'>Employee 001</option>
                                        <option value='emp_002'>Employee 002</option>
                                    </select>
                                </Col>

                                <Col md={3} sm={6}>
                                    <label className='form-label'>Project</label>
                                    <select
                                        className='form-control'
                                        value={project}
                                        onChange={(e) => setProject(e.target.value)}
                                    >
                                        <option value='all'>All Projects</option>
                                        <option value='proj_alpha'>Project Alpha</option>
                                        <option value='proj_beta'>Project Beta</option>
                                        <option value='proj_gamma'>Project Gamma</option>
                                    </select>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    {/* Charts */}
                    <Row className='mb-4'>
                        <Col lg={6} className='mb-4 mb-lg-0'>
                            <ApplicationUsageChart employee={selectedEmployee} startDate={start} endDate={end} />
                        </Col>
                        <Col lg={6}>
                            <WebBrowsingTimeChart employee={employee} startDate={start} endDate={end} />
                        </Col>
                    </Row>

                    <Row className='mb-4'>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <WorkIntensityChart employee={selectedEmployee} startDate={start} endDate={end} />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <RecentActivity employee={employee} startDate={start} endDate={end} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}
