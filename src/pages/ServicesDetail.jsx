import React from 'react'
import { useParams } from 'react-router-dom';
import HeaderLayout from '@/components/SectionLayout/HeaderLayout'
import serviceImages1 from '/Images/assets/home-1-team-01.jpg'
import serviceImages2 from '/Images/assets/slider-1-parallax-bg.jpg'
import serviceImages3 from '/Images/assets/Service-3.jpg'
import serviceImages4 from '/Images/assets/Service-4.jpg'
import { CheckCircle, CircleCheck, CircleCheckIcon, CircleChevronUpIcon, LucideCircleCheck } from 'lucide-react'
import Svgs from '@/Assets/svgs'

const ServicesDetail = ({ servicesData }) => {
    const { serviceCategory } = useParams();

    const service = servicesData.find(service => service.category.toLowerCase() === serviceCategory.toLowerCase());

    if (!service) {
        return <p>Service not found</p>;
    }

    const {
        image,
        description,
        features,
        ctaHeading,
        ctadesc,
        images,
        checkpointsHeading,
        checkpointsDesc,
        checkpoints,
        videoUrl,
        videoHeading,
        videoDesc,
        videoDesc2,
        videoDesc3
    } = service;



    return (
        <div>
            <HeaderLayout heading={serviceCategory?.replace(/-/g, ' ')} page={'Services'} />
            <section className="grid lg:grid-cols-5 gap-10 px-5 md:py-28 sm:py-16 py-10 !pb-0  items-start">
                <div className="grid lg:col-span-3 grid-cols-2 sm:gap-5 gap-3 lg:sticky top-10">
                    {images.map((img, index) => (
                        <img key={index} src={img} alt="" className="rounded-lg w-full sm:h-56 h-32 object-cover object-top" />
                    ))}
                </div>
                <div className="sm:space-y-12 space-y-6 lg:col-span-2">
                    <div className="space-y-2">
                        <p className="text-[#ffb600] font-bold uppercase">Service</p>
                        <h2 className="text-4xl font-semibold">{service.title}</h2>
                        <p className="text-slate-500">{description}</p>
                    </div>
                    {features.map((feature, index) => (
                        <div key={index} className="space-y-2">
                            <h4 className="text-xl font-semibold">{feature.title}</h4>
                            <p className="text-slate-500">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className='space-y-2 px-5 md:py-28 sm:py-16 py-10 sm:!pt-20 !pt-10 '>
                <h4 className="text-xl font-semibold">{ctaHeading}</h4>
                <p className="text-slate-500">{ctadesc}</p>  </section>
            <section className='px-5'>
                <div className="flex  border-solid border rounded-lg">
                    <div className="flex-1 bg-slate-100 sm:p-12 p-5 rounded space-y-8">
                        <h3 className="text-3xl font-semibold">{checkpointsHeading}</h3>
                        <p className="text-slate-500">{checkpointsDesc}</p>
                        <div className="flex items-center gap-10 gap-y-5 flex-wrap">
                            {checkpoints.map((checkpoint, index) => (
                                <div className="flex items-center gap-2">
                                    <CircleCheckIcon className='fill-[#ffb600] stroke-slate-100' />
                                    <p className="text-black">{checkpoint}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:px-24 p-16 m-auto hidden md:block">
                        <Svgs.BigPlus className={'lg:!size-52 !size-40'} />
                    </div>
                </div>
            </section>
            <section className='space-y-7 px-5 md:py-28 sm:py-16 py-10 sm:!pt-20 !pt-10 '>
                <h2 className="sm:text-4xl text-3xl font-semibold text-[#ffb600]">{videoHeading}</h2>
                <p className="text-slate-500">{videoDesc}</p>
                <p className="text-slate-500">{videoDesc2}</p>
                <iframe className='w-full aspect-video rounded-2xl' src={videoUrl} title="YT Vedio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p className="text-slate-500">{videoDesc3}</p>
                <div className="flex lg:items-center lg:flex-row flex-col lg:gap-0 gap-10 justify-between sm:p-10 p-5 border border-solid rounded-2xl lg:divide-x divide-y lg:divide-y-0 divide-solid divide-[#ffb600]">
                    <div className="flex items-center gap-10 flex-1">
                        <img src={serviceImages1} className='size-28 cursor-pointer rounded-md object-cover' alt="" />
                        <div className="space-y-3 cursor-pointer">
                            <p className="text-sm text-[#ffb600]">Previous</p>
                            <h3 className="text-2xl font-medium">Business Strategy</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-10 text-right flex-1 justify-end cursor-pointer lg:pt-0 pt-10">
                        <div className="space-y-3 cursor-pointer">
                            <p className="text-sm text-[#ffb600]">Next</p>
                            <h3 className="text-2xl font-medium">Business Strategy</h3>
                        </div>
                        <img src={serviceImages3} className='size-28 cursor-pointer rounded-md object-cover' alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesDetail
