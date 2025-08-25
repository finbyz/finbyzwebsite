'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import * as echarts from 'echarts'
import moment from 'moment'

interface ApplicationUsageChartProps {
    employee?: { id?: string }
    startDate?: Date
    endDate?: Date
}

const ApplicationUsageChart = ({ 
    employee = { id: 'current_user' }, 
    startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), 
    endDate = new Date() 
}: ApplicationUsageChartProps) => {
    const chartRef = useRef<HTMLDivElement>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Demo data
    const getDemoData = () => [
        { name: 'Chrome Browser', value: 45, hours: 3, minutes: 45 },
        { name: 'VS Code', value: 30, hours: 2, minutes: 30 },
        { name: 'Terminal', value: 20, hours: 1, minutes: 40 },
        { name: 'Slack', value: 15, hours: 1, minutes: 15 },
        { name: 'Email Client', value: 10, hours: 0, minutes: 50 },
        { name: 'File Explorer', value: 8, hours: 0, minutes: 40 },
        { name: 'Other Apps', value: 5, hours: 0, minutes: 25 }
    ]

    useEffect(() => {
        // For now, always use demo data (no Frappe context required)
        try {
            renderChart(getDemoData())
            setError('Using demo data - API not available')
        } finally {
            setIsLoading(false)
        }
    }, [employee?.id, startDate, endDate])

    const renderChart = (data: any[]) => {
        const chartDom = chartRef.current
        if (!chartDom) return

        const myChart = echarts.init(chartDom, null, { renderer: 'svg' })

        const formattedData = data.map((item: any) => ({
            value: item.value || 0,
            name: item.name || 'Unknown',
            hours: item.hours || 0,
            minutes: item.minutes || 0,
        }))

        const option = {
            title: {
                text: 'Application Usage Time',
                left: 'center',
                textStyle: { color: '#495057', fontSize: 16, fontWeight: 'bold' }
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params: any) {
                    const hours = params.data.hours
                    const minutes = params.data.minutes
                    const formattedHours = hours.toString().padStart(2, '0')
                    const formattedMinutes = minutes.toString().padStart(2, '0')
                    return `${params.name} : ${formattedHours}:${formattedMinutes}`
                },
            },
            legend: { type: 'scroll', bottom: 20 },
            series: [
                {
                    name: 'Application Usage',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['40%', '50%'],
                    avoidLabelOverlap: false,
                    itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
                    label: { show: false, position: 'center' },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 20,
                            fontWeight: 'bold',
                            formatter: function (params: any) {
                                const hours = params.data.hours
                                const minutes = params.data.minutes
                                const formattedHours = hours.toString().padStart(2, '0')
                                const formattedMinutes = minutes.toString().padStart(2, '0')
                                return `${params.name}\n${formattedHours}:${formattedMinutes} Hours`
                            },
                        },
                    },
                    labelLine: { show: false },
                    data: formattedData,
                },
            ],
            color: [
                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
                '#FF9966', '#66CCCC', '#6699FF', '#FF6666', '#FFCC66',
            ],
        }

        myChart.setOption(option)
        const handleResize = () => { myChart.resize() }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
            myChart.dispose()
        }
    }

    if (isLoading) {
        return (
            <Card>
                <CardBody>
                    <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <div>Loading Application Usage Chart...</div>
                    </div>
                </CardBody>
            </Card>
        )
    }

    return (
        <Card>
            <CardBody>
                {error && (
                    <div style={{ textAlign: 'center', color: '#6c757d', marginBottom: '10px', fontSize: '14px' }}>
                        {error}
                    </div>
                )}
                <div ref={chartRef} style={{ height: '400px' }} />
            </CardBody>
        </Card>
    )
}

export default ApplicationUsageChart
