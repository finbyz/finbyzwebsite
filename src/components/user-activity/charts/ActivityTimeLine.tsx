'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts'

interface ActivityTimeLineProps {
    employee?: string
    date?: string
    hour?: string | number
}

const ActivityTimeLine = ({ 
    employee = 'current_user', 
    date = new Date().toISOString().split('T')[0], 
    hour = 0 
}: ActivityTimeLineProps) => {
    const chartRef = useRef<HTMLDivElement>(null)
    const [isLoading, setIsLoading] = useState(true)

    // Demo data for when API is not available
    const getDemoData = () => {
        const demoData = []
        const timeSlots = ['00:00', '00:05', '00:10', '00:15', '00:20', '00:25', '00:30', '00:35', '00:40', '00:45', '00:50', '00:55']
        
        for (let i = 0; i < 12; i++) {
            demoData.push({
                time: timeSlots[i],
                value: Math.floor(Math.random() * 100) + 10 // Random value between 10-110
            })
        }
        return demoData
    }

    useEffect(() => {
        if (!chartRef.current) return

        setIsLoading(false)
        const chartDom = chartRef.current
        let myChart = echarts.getInstanceByDom(chartDom)
        if (!myChart) {
            myChart = echarts.init(chartDom, null, { renderer: 'svg' })
        }

        const demoData = getDemoData()
        const option = {
            tooltip: {
                trigger: 'axis',
                formatter: function (params: any) {
                    return `${params[0].name}: ${params[0].value}`
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                data: demoData.map((item: any) => item.time),
                axisLabel: {
                    rotate: 45,
                    fontSize: 8,
                },
                show: false, // Hide x-axis for cleaner look
            },
            yAxis: {
                type: 'value',
                name: 'Activity Level',
                show: false, // Hide y-axis for cleaner look
            },
            series: [
                {
                    name: 'Activity',
                    type: 'line',
                    data: demoData.map((item: any) => item.value),
                    smooth: true,
                    lineStyle: {
                        color: '#36A2EB',
                        width: 2,
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                { offset: 0, color: 'rgba(54, 162, 235, 0.3)' },
                                { offset: 1, color: 'rgba(54, 162, 235, 0.1)' },
                            ],
                        },
                    },
                    symbol: 'circle',
                    symbolSize: 4,
                    showSymbol: false, // Hide symbols for cleaner look
                },
            ],
        }

        try {
            myChart.setOption(option)
            myChart.resize()
        } catch (err) {
            console.error('Error setting timeline chart options:', err)
        }

        const handleResize = () => {
            try {
                myChart.resize()
            } catch (err) {
                console.error('Error resizing timeline chart:', err)
            }
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            if (myChart) {
                try {
                    myChart.dispose()
                } catch (err) {
                    console.error('Error disposing timeline chart:', err)
                }
            }
        }
    }, [date, hour])

    if (isLoading) {
        return (
            <div className='col-md-11'>
                <div style={{ 
                    height: '100px', 
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '4px'
                }}>
                    <div style={{ fontSize: '12px', color: '#6c757d' }}>Loading...</div>
                </div>
            </div>
        )
    }

    return (
        <div className='col-md-11'>
            <div ref={chartRef} style={{ height: '100px', width: '100%' }} />
        </div>
    )
}

export default ActivityTimeLine
