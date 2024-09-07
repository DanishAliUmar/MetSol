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
            <section className="grid grid-cols-5 gap-10 px-5 md:py-28 sm:py-16 py-10 items-start">
                <div className="grid col-span-3 grid-cols-2 gap-5">
                    <img src={serviceImages1} alt="" className="rounded-lg" />
                    <img src={serviceImages2} alt="" className="rounded-lg" />
                    <img src={serviceImages3} alt="" className="rounded-lg" />
                    <img src={serviceImages4} alt="" className="rounded-lg" />
                </div>
                <div className="space-y-12 col-span-2">
                    <div className="space-y-2">
                        <p className="text-[#ffb600] font-bold uppercase">Amet nulla</p>
                        <h2 className="text-4xl font-semibold">Risus sed vulputate</h2>
                        <p className="text-slate-500">Odio euismod lacinia at quis. Eget nullam non nisi est sit. Praesent tristique magna sit amet purus gravida. Suspendisse faucibus interdum posuere.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xl font-semibold">Quisque non tellus  :</h4>
                        <p className="text-slate-500">Nunc sed id semper risus in hendrerit gravida. Donec ac odio tempor orci dapibus ultrices in iaculis. Ultrices eros in cursus ut pharetra sit amet turpis.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xl font-semibold">Pellentesque :</h4>
                        <p className="text-slate-500">Ut lectus arcu bibendum at. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xl font-semibold">Auctor neque :</h4>
                        <p className="text-slate-500">Photography Solution</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurServices
