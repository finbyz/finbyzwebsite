'use client'

import { useState, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import moment from 'moment'

interface WorkIntensityChartProps {
    employee?: { id?: string }
    startDate?: Date
    endDate?: Date
}

const WorkIntensityChart = ({ 
    employee = { id: 'current_user' }, 
    startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), 
    endDate = new Date() 
}: WorkIntensityChartProps) => {
    const chartRef = useRef<HTMLDivElement>(null)
    const [chartInstance, setChartInstance] = useState<echarts.ECharts | null>(null)
    const [data, setData] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Demo data for when API is not available
    const getDemoData = () => {
        const demoData: any[] = []
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const hours = Array.from({ length: 17 }, (_, index) => index + 7)
        
        for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
            for (let hourIndex = 0; hourIndex < 17; hourIndex++) {
                const hour = hours[hourIndex]
                const dayOfWeek = days[dayIndex]
                const value = Math.floor(Math.random() * 100) + 10
                demoData.push([hour, value, dayOfWeek])
            }
        }
        return demoData
    }

    useEffect(() => {
        // Always use demo for now (no external context needed)
        setIsLoading(true)
        setError('Using demo data - API not available')
        setData(getDemoData())
        setIsLoading(false)
    }, [startDate, endDate, employee?.id])

    useEffect(() => {
        if (!chartRef.current || isLoading) return

        const hours = Array.from({ length: 17 }, (_, index) => `${index + 7}:00`)
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const chartData: any[] = []

        data.forEach((entry: any) => {
            const [hour, value, dayOfWeek] = entry
            const xIndex = hour - 7
            const yIndex = days.indexOf(dayOfWeek)
            if (yIndex !== -1) chartData.push([xIndex, yIndex, value || 0])
        })

        const values = chartData.map((item: any) => item[2])
        const minValue = Math.min(...values)
        const maxValue = Math.max(...values)

        const chart = echarts.init(chartRef.current, null, { renderer: 'svg' })
        setChartInstance(chart)

        const option = {
            title: {
                text: 'Work Intensity Heatmap',
                left: 'center',
                textStyle: { color: '#495057', fontSize: 16, fontWeight: 'bold' }
            },
            tooltip: {
                position: 'top',
                formatter: function (params: any) {
                    const day = days[params.value[1]]
                    const hour = hours[params.value[0]]
                    return `${day} ${hour}: ${params.value[2]}`
                },
            },
            grid: { height: '50%', top: '15%' },
            xAxis: { type: 'category', data: hours, splitArea: { show: true } },
            yAxis: { type: 'category', data: days, splitArea: { show: true } },
            visualMap: {
                min: minValue,
                max: maxValue,
                orient: 'horizontal',
                left: 'center',
                bottom: '15%',
                color: ['rgb(0,100,200)', 'rgb(230,250,255)'],
            },
            series: [
                {
                    name: 'Intensity Count',
                    type: 'heatmap',
                    data: chartData,
                    label: { show: false },
                    emphasis: { itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0, 0, 0, 0.5)' } },
                    itemStyle: { borderWidth: 2, borderColor: '#ffffff' },
                },
            ],
        }

        chart.setOption(option)

        const handleResize = () => { chart.resize() }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [chartRef, isLoading, data])

    if (isLoading) {
        return (
            <div style={{ width: '100%', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div>Loading Work Intensity Chart...</div>
            </div>
        )
    }

    return (
        <div>
            {error && (
                <div style={{ textAlign: 'center', color: '#6c757d', marginBottom: '10px', fontSize: '14px' }}>{error}</div>
            )}
            <div ref={chartRef} style={{ width: '100%', height: '600px' }} />
        </div>
    )
}

export default WorkIntensityChart
