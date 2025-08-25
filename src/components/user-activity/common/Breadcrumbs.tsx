'use client'

import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import Link from 'next/link'

interface BreadcrumbsProps {
    title: string
    breadcrumbItem: string
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ title, breadcrumbItem }) => {
    return (
        <div className='page-title-box'>
            <div className='row'>
                <div className='col-12'>
                    <div className='page-title-right'>
                        <Breadcrumb listClassName='breadcrumb m-0'>
                            <BreadcrumbItem>
                                <Link href='/' className='text-decoration-none'>
                                    {title}
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>{breadcrumbItem}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <h4 className='page-title'>{breadcrumbItem}</h4>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs
