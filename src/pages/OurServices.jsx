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
                    <img src={serviceImages1} alt="" className="" />
                    <img src={serviceImages2} alt="" className="" />
                    <img src={serviceImages3} alt="" className="" />
                    <img src={serviceImages4} alt="" className="" />
                </div>
                <div className="flex-2"></div>
            </section>
        </div>
    )
}

export default OurServices
