'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import * as echarts from 'echarts'
import moment from 'moment'

interface WebBrowsingTimeChartProps {
    employee?: string
    startDate?: Date
    endDate?: Date
}

const WebBrowsingTimeChart = ({ 
    employee = 'current_user', 
    startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), 
    endDate = new Date() 
}: WebBrowsingTimeChartProps) => {
    const chartRef = useRef<HTMLDivElement>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Demo data
    const getDemoData = () => [
        { name: 'google.com', value: 2.5 },
        { name: 'github.com', value: 1.8 },
        { name: 'stackoverflow.com', value: 1.2 },
        { name: 'linkedin.com', value: 0.8 },
        { name: 'youtube.com', value: 0.6 },
        { name: 'reddit.com', value: 0.4 },
        { name: 'other domains', value: 0.3 }
    ]

    useEffect(() => {
        try {
            renderChart(getDemoData())
            setError('Using demo data - API not available')
        } finally {
            setIsLoading(false)
        }
    }, [employee, startDate, endDate])

    const renderChart = (data: any[]) => {
        const chartDom = chartRef.current
        if (!chartDom) return

        let myChart = echarts.getInstanceByDom(chartDom)
        if (!myChart) {
            myChart = echarts.init(chartDom, null, { renderer: 'svg' })
        }

        const formattedData = Array.isArray(data)
            ? data
                  .map((item: any) => ({ name: item.name || 'Unknown', value: parseFloat(item.value) || 0 }))
                  .filter((item: any) => item.value > 0)
            : []

        const option = {
            title: {
                text: 'Web Browsing Time',
                left: 'center',
                textStyle: { color: '#495057', fontSize: 16, fontWeight: 'bold' }
            },
            tooltip: {
                trigger: 'item',
                formatter: (params: any) => {
                    let totalHours = params.value
                    let hours = Math.floor(totalHours)
                    let minutes = Math.round((totalHours - hours) * 60)
                    return `${params.name} : ${hours}:${minutes < 10 ? '0' + minutes : minutes} Hours`
                },
            },
            legend: { type: 'scroll', bottom: 20, textStyle: { color: '#333' } },
            series: [
                {
                    name: 'Web Browsing Time',
                    type: 'pie',
                    radius: ['0%', '75%'],
                    top: '15%',
                    center: ['50%', '40%'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: formattedData,
                    emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' } },
                },
            ],
            color: ['#FF6384','#36A2EB','#FFCE56','#4BC0C0','#9966FF','#FF9966','#66CCCC','#6699FF','#FF6666','#FFCC66'],
            textStyle: { color: '#333' },
            backgroundColor: 'transparent',
        }

        try {
            myChart.setOption(option)
            myChart.resize()
        } catch (err) {
            console.error('Error setting chart options:', err)
        }

        const handleResize = () => {
            try { myChart.resize() } catch {}
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
            try { myChart.dispose() } catch {}
        }
    }

    if (isLoading) {
        return (
            <Card>
                <CardBody>
                    <CardTitle className='mb-4'>Web Browsing Time</CardTitle>
                    <div style={{ height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <div>Loading Web Browsing Time Chart...</div>
                    </div>
                </CardBody>
            </Card>
        )
    }

    return (
        <Card>
            <CardBody>
                <CardTitle className='mb-4'>Web Browsing Time</CardTitle>
                {error && (
                    <div style={{ textAlign: 'center', color: '#6c757d', marginBottom: '10px', fontSize: '14px' }}>{error}</div>
                )}
                <div ref={chartRef} style={{ height: '350px', width: '100%' }} id='web-browsing-time' />
            </CardBody>
        </Card>
    )
}

export default WebBrowsingTimeChart
