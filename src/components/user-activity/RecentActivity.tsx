"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { Modal, ModalBody } from 'reactstrap'
import moment from 'moment'
import { useInView } from 'react-intersection-observer'
import FrappeImage from '@/components/Common/FrappeImage'
// Activity timeline removed per requirement

interface RecentActivityProps {
    employee: string
    startDate: string | Date
    endDate: string | Date
}

const RecentActivity: React.FC<RecentActivityProps> = ({ employee, startDate, endDate }) => {
    const [imageData, setImageData] = useState<any[]>([])
    const [visibleData, setVisibleData] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)
    const [modalImage, setModalImage] = useState<string | null>(null)
    const [modalActiveApp, setModalActiveApp] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const [currentTime, setCurrentTime] = useState<moment.Moment | null>(null)
    const HOURS_TO_LOAD = 1

    const { ref: infiniteRef, inView } = useInView({ threshold: 0, rootMargin: '500px' })

    // Fetch activity screenshots via our proxy (no FrappeProvider required)
    const fetchActivity = useCallback(async () => {
        try {
            setIsLoading(true)

            const ddmmyyStart = moment(startDate).startOf('day').format('DD/MM/YYYY HH:mm:ss')
            const ddmmyyEnd = moment(endDate).endOf('day').format('DD/MM/YYYY HH:mm:ss')
            const isoStart = moment(startDate).startOf('day').format('YYYY-MM-DD HH:mm:ss')
            const isoEnd = moment(endDate).endOf('day').format('YYYY-MM-DD HH:mm:ss')

            const endpoints = [
                // Page method used in some sites
                '/api/fb/method/finbyz.finbyz.page.productify_activity_analysis_finbyz.productify_activity_analysis_finbyz.user_activity_images',
                // Direct app method from provided server snippet
                '/api/fb/api/method/productivity_next.api.user_activity_images',
            ]

            const paramCombos: Array<Record<string, string>> = [
                { user: String(employee || ''), start_date: ddmmyyStart, end_date: ddmmyyEnd },
                { employee: String(employee || ''), start_date: ddmmyyStart, end_date: ddmmyyEnd },
                { user: String(employee || ''), start_date: isoStart, end_date: isoEnd },
                { employee: String(employee || ''), start_date: isoStart, end_date: isoEnd },
            ]

            let processedList: any[] | null = null
            let lastStatus = 0
            let lastUrl = ''

            outer: for (const ep of endpoints) {
                for (const params of paramCombos) {
                    const qs = new URLSearchParams(params)
                    const url = `${ep}?${qs.toString()}`
                    lastUrl = url
                    console.log('[RecentActivity] try', { ep, params })
                    const res = await fetch(url, { credentials: 'include', cache: 'no-store' })
                    lastStatus = res.status
                    if (!res.ok) continue
                    let json: any = null
                    try { json = await res.json() } catch { json = {} }
                    const list = Array.isArray(json?.message) ? json.message : (Array.isArray(json?.data) ? json.data : [])
                    if (Array.isArray(list) && list.length > 0) {
                        processedList = list.map((item: any) => ({
                            ...item,
                            active_application: item.active_application || item.active_app,
                            time: item.time || item.time_,
                        }))
                        break outer
                    }
                }
            }

            if (processedList) {
                setError(null)
                setImageData(processedList)
                const startTime = currentTime || moment(processedList[0].time)
                const initialTimeLimit = moment(startTime).subtract(HOURS_TO_LOAD, 'hours')
                const initialItems = processedList.filter((item: any) => moment(item.time).isAfter(initialTimeLimit))
                setVisibleData(initialItems)
                setCurrentTime(initialTimeLimit)
                setHasMore(processedList.some((item: any) => moment(item.time).isSameOrBefore(initialTimeLimit)))
            } else {
                throw new Error(`Upstream returned no data (last status ${lastStatus}) @ ${lastUrl}`)
            }
        } catch (e: any) {
            console.error('[RecentActivity] fetch failed', e)
            setError(e?.message || 'Failed to fetch activity')
            setImageData([])
            setVisibleData([])
            setHasMore(false)
        } finally {
            setIsLoading(false)
        }
    }, [employee, startDate, endDate, currentTime])

    const showImageDialog = useCallback((imgSrc: string, activeApp: string) => {
        setModalImage(imgSrc)
        setModalActiveApp(activeApp)
        setIsModalOpen(true)
    }, [])

    const loadMoreImages = useCallback(() => {
        if (!hasMore || isLoading || !imageData.length) return

        setIsLoading(true)
        const lastLoadedTime =
            currentTime || (visibleData.length > 0 ? moment(visibleData[visibleData.length - 1].time) : moment(imageData[0].time))
        const nextTimeLimit = moment(lastLoadedTime).subtract(HOURS_TO_LOAD, 'hours')
        const nextItems = imageData.filter((item) => {
            const itemTime = moment(item.time)
            return itemTime.isAfter(nextTimeLimit)
        })
        if (nextItems.length > 0) {
            setVisibleData((prev) => [...prev, ...nextItems].reverse())
            setCurrentTime(nextTimeLimit)
        }

        const remainingImages = imageData.filter((item) => moment(item.time).isSameOrBefore(nextTimeLimit))
        setHasMore(remainingImages.length > 0)
        setIsLoading(false)
    }, [visibleData, imageData, hasMore, isLoading, currentTime])

    useEffect(() => {
        fetchActivity()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [employee, startDate, endDate])

    useEffect(() => {
        if (inView && hasMore && !isLoading) {
            loadMoreImages()
        }
    }, [inView, hasMore, isLoading, loadMoreImages])

    useEffect(() => {
        setVisibleData([])
        setCurrentTime(null)
        setHasMore(true)
    }, [employee, startDate, endDate])

    if (error) return (
        <div className='text-danger p-3'>
            <h6>Error loading activity data:</h6>
            <p>{error}</p>
            <details className='mt-2'>
                <summary>Debug Info</summary>
                <pre className='text-sm mt-2 p-2 bg-gray-800 rounded'>
                    Employee: {employee}<br/>
                    Start Date: {startDate instanceof Date ? startDate.toISOString() : startDate}<br/>
                    End Date: {endDate instanceof Date ? endDate.toISOString() : endDate}<br/>
                    API URL: {error.message.split('@')[1]}
                </pre>
            </details>
        </div>
    )
    // Remove the big loading placeholder box; keep UI responsive while data streams in
    // if (isLoading) return <div className='text-muted text-center py-3'>Loading…</div>
    if (!imageData.length && !isLoading) return (
        <div className='text-center py-3' style={{ color: '#ffffff' }}>
            <p>No screenshots found for this day.</p>
            <details className='mt-2'>
                <summary>Debug Info</summary>
                <pre className='text-sm mt-2 p-2 bg-gray-800 rounded'>
                    Employee: {employee}<br/>
                    Start Date: {startDate instanceof Date ? startDate.toISOString() : startDate}<br/>
                    End Date: {endDate instanceof Date ? endDate.toISOString() : endDate}<br/>
                    API Response: Empty or no data
                </pre>
            </details>
        </div>
    )

    const groupedImages: Record<string, Record<string, any[]>> = visibleData.reduce((acc: any, image: any) => {
        const imageDateTime = new Date(image.time)
        const date = imageDateTime.toDateString()
        const hour = imageDateTime.getHours()
        const slot = Math.floor(imageDateTime.getMinutes() / 5)

        if (!acc[date]) acc[date] = {}
        if (!acc[date][hour]) acc[date][hour] = new Array(12).fill(null)
        acc[date][hour][slot] = image
        return acc
    }, {})

    return (
        <div className='recent-activity-list'>
            {/* Debug UI removed for production */}

            {Object.keys(groupedImages)
                .reverse()
                .map((date) =>
                    Object.keys(groupedImages[date])
                        .reverse()
                        .map((hour) => (
                            <div key={`${date}-${hour}`}>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <h5 className='text-nowrap' style={{ color: '#ffffff' }}>
                                            <b>
                                                {date} {hour}:00
                                            </b>
                                        </h5>
                                    </div>
                                </div>
                                <div className='row'>
                                    {Array.from({ length: 12 }).map((_, slot) => {
                                        const slotTime = new Date(date)
                                        slotTime.setHours(Number(hour))
                                        slotTime.setMinutes((11 - slot) * 5)
                                        const slotTimeString = moment(slotTime).format('HH:mm')
                                        const image = groupedImages[date][hour][11 - slot]

                                        return (
                                            <div key={`${date}-${hour}-${slot}`} className='col-12 col-md-6 col-lg-3'>
                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '160px' }}>
                                                    {image ? (
                                                        <div style={{ cursor: 'pointer', height: '160px' }} onClick={() => showImageDialog(image.screenshot, image.active_application)}>
                                                            <FrappeImage
                                                                fileUrl={'/api/fb/n'+image.screenshot}
                                                                alt='Screenshot'
                                                                className='img-fluid clickable-image'
                                                                id={image.screenshot}
                                                                style={{ maxHeight: '160px', objectFit: 'contain' }}
                                                                lazyLoad={false}
                                                                loadPrivate={true}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div style={{
                                                            width: '100%',
                                                            height: '160px',
                                                            borderRadius: 8,
                                                            border: '1px dashed #334155',
                                                            background: 'linear-gradient(135deg, rgba(30,41,59,0.6), rgba(15,23,42,0.6))',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            position: 'relative',
                                                            overflow: 'hidden'
                                                        }}>
                                                            <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(3px)' }} />
                                                            <span style={{ position: 'relative', color: '#ffffff', fontWeight: 700 }}>No Image</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <p style={{ textAlign: 'center', color: '#ffffff' }}>
                                                    <b>{slotTimeString}</b>
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )),
                )}

            <div ref={infiniteRef} style={{ height: '20px', margin: '20px 0' }}>
                {hasMore && <div className='text-center'>{isLoading ? 'Loading more...' : 'Scroll for more'}</div>}
            </div>

            <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(false)} size='xl'>
                <ModalBody>
                    <div style={{ textAlign: 'center', color: '#ffffff' }}>
                        <h5 style={{ color: '#ffffff' }}>Active Application: {modalActiveApp}</h5>
                        {modalImage && (
                            <FrappeImage fileUrl={'/api/fb/n'+modalImage} alt='Activity Detail' defaultImage={modalImage} className='img-fluid' id={modalImage} />
                        )}
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default RecentActivity
