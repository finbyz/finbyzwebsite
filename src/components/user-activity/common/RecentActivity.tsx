'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Modal, ModalBody } from 'reactstrap'
import moment from 'moment'
import { useInView } from 'react-intersection-observer'
import FrappeImage from '@/components/Common/FrappeImage'
import ActivityTimeLine from '../charts/ActivityTimeLine'

interface RecentActivityProps {
    employee?: string
    startDate?: Date
    endDate?: Date
}

const RecentActivity = ({ 
    employee = 'current_user', 
    startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), 
    endDate = new Date() 
}: RecentActivityProps) => {
    const [imageData, setImageData] = useState<any[]>([])
    const [visibleData, setVisibleData] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [modalImage, setModalImage] = useState<string | null>(null)
    const [modalActiveApp, setModalActiveApp] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const [currentTime, setCurrentTime] = useState<Date | null>(null)
    const HOURS_TO_LOAD = 1

    const { ref: infiniteRef, inView } = useInView({
        threshold: 0,
        rootMargin: '500px',
    })

    // Demo data for when API is not available
    const getDemoData = () => {
        const demoData = []
        const apps = ['Chrome Browser', 'VS Code', 'Terminal', 'Slack', 'Email Client']
        const currentTime = new Date()
        
        for (let i = 0; i < 24; i++) {
            const time = new Date(currentTime.getTime() - i * 60 * 60 * 1000)
            const app = apps[Math.floor(Math.random() * apps.length)]
            
            demoData.push({
                time: time.toISOString(),
                screenshot: `https://picsum.photos/400/300?random=${i}`, // Random placeholder images
                active_application: app
            })
        }
        return demoData
    }

    const showImageDialog = useCallback((imgSrc: string, activeApp: string) => {
        setModalImage(imgSrc)
        setModalActiveApp(activeApp)
        setIsModalOpen(true)
    }, [])

    const loadMoreImages = useCallback(() => {
        if (!hasMore || isLoading || !imageData.length) return

        setIsLoading(true)
        const lastLoadedTime = currentTime || 
            (visibleData.length > 0 ? new Date(visibleData[visibleData.length - 1].time) : new Date(imageData[0].time))
        const nextTimeLimit = new Date(lastLoadedTime.getTime() - HOURS_TO_LOAD * 60 * 60 * 1000)
        
        const nextItems = imageData.filter((item) => {
            const itemTime = new Date(item.time)
            return itemTime > nextTimeLimit
        })
        
        if (nextItems.length > 0) {
            setVisibleData((prev) => [...prev, ...nextItems].reverse())
            setCurrentTime(nextTimeLimit)
        }

        const remainingImages = imageData.filter((item) => new Date(item.time) <= nextTimeLimit)
        setHasMore(remainingImages.length > 0)
        setIsLoading(false)
    }, [visibleData, imageData, hasMore, isLoading, currentTime])

    useEffect(() => {
        // Use demo data for now
        const processedData = getDemoData()
        setImageData(processedData)
        
        const startTime = currentTime || new Date(processedData[0].time)
        const initialTimeLimit = new Date(startTime.getTime() - HOURS_TO_LOAD * 60 * 60 * 1000)
        const initialItems = processedData.filter((item) => {
            const itemTime = new Date(item.time)
            return itemTime > initialTimeLimit
        })

        setVisibleData(initialItems)
        setCurrentTime(initialTimeLimit)
        setHasMore(processedData.some((item) => new Date(item.time) <= initialTimeLimit))
        setError('Using demo data - API not available')
    }, [])

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

    if (error) {
        return (
            <div className='recent-activity-list'>
                <div style={{ 
                    textAlign: 'center', 
                    color: '#6c757d', 
                    padding: '20px',
                    fontSize: '14px'
                }}>
                    {error}
                </div>
            </div>
        )
    }

    const groupedImages = visibleData.reduce((acc: any, image) => {
        const imageDateTime = new Date(image.time)
        const date = imageDateTime.toDateString()
        const hour = imageDateTime.getHours()
        const slot = Math.floor(imageDateTime.getMinutes() / 5)

        if (!acc[date]) {
            acc[date] = {}
        }
        if (!acc[date][hour]) {
            acc[date][hour] = new Array(12).fill(null)
        }
        acc[date][hour][slot] = image
        return acc
    }, {})

    return (
        <div className='recent-activity-list'>
            <h4 className="mb-4">Recent Activity Timeline</h4>
            
            {Object.keys(groupedImages)
                .reverse()
                .map((date) =>
                    Object.keys(groupedImages[date])
                        .reverse()
                        .map((hour) => (
                            <div key={`${date}-${hour}`}>
                                <div className='row'>
                                    <div className='col-md-1'>
                                        <h5 className='text-nowrap'>
                                            <b>
                                                {date} {hour}:00
                                            </b>
                                        </h5>
                                    </div>
                                    <ActivityTimeLine
                                        employee={employee}
                                        date={moment(date).format('YYYY-MM-DD')}
                                        hour={hour}
                                    />
                                </div>
                                <div className='row'>
                                    {Array.from({ length: 12 }).map((_, slot) => {
                                        const slotTime = new Date(date)
                                        slotTime.setHours(parseInt(hour))
                                        slotTime.setMinutes((11 - slot) * 5)
                                        const slotTimeString = moment(slotTime).format('HH:mm')
                                        const image = groupedImages[date][hour][11 - slot]

                                        return (
                                            <div key={`${date}-${hour}-${slot}`} className='col-12 col-md-6 col-lg-3'>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        height: '160px',
                                                    }}
                                                >
                                                    {image ? (
                                                        <div
                                                            style={{ cursor: 'pointer', height: '160px' }}
                                                            onClick={() =>
                                                                showImageDialog(
                                                                    image.screenshot,
                                                                    image.active_application,
                                                                )
                                                            }
                                                        >
                                                            <FrappeImage
                                                                fileUrl={image.screenshot}
                                                                alt='Screenshot'
                                                                className='img-fluid clickable-image'
                                                                id={image.screenshot}
                                                                style={{ maxHeight: '160px', objectFit: 'contain' }}
                                                                lazyLoad={false}
                                                                loadPrivate={true}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div
                                                            style={{
                                                                width: '100%',
                                                                height: '160px',
                                                                backgroundColor: '#dddddd',
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                            }}
                                                        >
                                                            <span style={{ fontWeight: 'bold' }}>Not Active</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <p style={{ textAlign: 'center' }}>
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
                    <div style={{ textAlign: 'center' }}>
                        <h5>Active Application: {modalActiveApp}</h5>
                        <FrappeImage
                            fileUrl={modalImage || ''}
                            alt='Activity Detail'
                            defaultImage={modalImage || ''}
                            className='img-fluid'
                            id={modalImage || ''}
                        />
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default RecentActivity
