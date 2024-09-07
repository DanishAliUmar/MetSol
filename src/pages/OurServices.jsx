import HeaderLayout from '@/components/SectionLayout/HeaderLayout'
import React from 'react'
import serviceImages1 from '/Images/assets/Service-1.jpg'
import serviceImages2 from '/Images/assets/Service-2.jpg'
import serviceImages3 from '/Images/assets/Service-3.jpg'
import serviceImages4 from '/Images/assets/Service-4.jpg'

const OurServices = () => {
    return (
        <div>
            <HeaderLayout heading={'Services'} page={'Services'} />
            <section className="flex gap-10">
                <div className="flex-3">
                    <img src="" alt="" className="" />
                    <img src="" alt="" className="" />
                    <img src="" alt="" className="" />
                    <img src="" alt="" className="" />
                </div>
                <div className="flex-2"></div>
            </section>
        </div>
    )
}

export default OurServices
