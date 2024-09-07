import HeaderLayout from '@/components/SectionLayout/HeaderLayout'
import React from 'react'
import serviceImages1 from '/Images/assets/home-1-team-01.jpg'
import serviceImages2 from '/Images/assets/slider-1-parallax-bg.jpg'
import serviceImages3 from '/Images/assets/Service-3.jpg'
import serviceImages4 from '/Images/assets/Service-4.jpg'

const OurServices = () => {
    return (
        <div>
            <HeaderLayout heading={'Services'} page={'Services'} />
            <section className="grid lg:grid-cols-5 gap-10 px-5 md:py-28 sm:py-16 py-10 !pb-0  items-start">
                <div className="grid lg:col-span-3 grid-cols-2 gap-5 lg:sticky top-10">
                    <img src={serviceImages1} alt="" className="rounded-lg w-full max-h-56 object-cover object-top" />
                    <img src={serviceImages2} alt="" className="rounded-lg w-full max-h-56 object-cover object-top" />
                    <img src={serviceImages3} alt="" className="rounded-lg w-full max-h-56 object-cover object-top" />
                    <img src={serviceImages4} alt="" className="rounded-lg w-full max-h-56 object-cover object-top" />
                </div>
                <div className="space-y-12 lg:col-span-2">
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
            <section className='space-y-2 px-5 md:py-28 sm:py-16 py-10 !pt-20 '>
                <h2 className="text-4xl font-semibold">Bibendum enim facilisis gravida.</h2>
                <p className="text-slate-500">Lacus vestibulum sed arcu non odio euismod lacinia at. Nunc congue nisi vitae suscipit tellus mauris a diam.malesuada quis, sagittis ut dui. Maecenas et interdum ex. Nullam non magna eu nisi congue maximus ac vel justo. Nulla viverra sapien eros, ac convallis urna semper quis. Donec convallis turpis justo, a viverra nisi cursus sit amet. Proin aliquet erat dolor, non tempus tellus euismod pellentesque. Nam iaculis diam tellus. Donec tristique, erat sit amet finibus semper, risus ipsum volutpat lacus, sit amet ultrices augue elit sit amet velit. In facilisis vulputate vestibulum. Suspendisse potenti. Curabitur a sem purus. Ut ut elit sed leo euismod laoreet sit amet feugiat ex. Nulla et enim velit. Maecenas posuere sem quis nunc faucibus, quis rutrum nunc commodo.</p>
            </section>
        </div>
    )
}

export default OurServices
