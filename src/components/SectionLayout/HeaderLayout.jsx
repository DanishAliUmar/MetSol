import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from 'react-router-dom'

const HeaderLayout = ({ heading, page, bgImage }) => {
    return (
        <div className='flex items-center justify-center flex-col gap-5 h-96 !bg-cover !bg-center !bg-no-repeat !text-white' style={{ background: 'url(/Images/assets/breadcrumb-common.jpg)' }}>
            <h1 className="text-5xl font-semibold">{heading}</h1>
            <Breadcrumb className={'!text-white'}>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link to={'/'}>
                            <BreadcrumbLink className={'text-white font-medium'}>Home</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className={'text-white font-medium'} />
                    <BreadcrumbItem>
                        <BreadcrumbPage className={'text-[#f8955B] font-medium'}>{page}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

        </div>
    )
}

export default HeaderLayout
