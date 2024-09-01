import React from 'react'
import Svgs from '@/Assets/svgs';
import Contact from '/Images/Contact/Contact.jpg';
import Slide__Image__1 from '/Images/assets/home-1-team-03.jpg';
import contactPerson from '/Images/assets/contact-page-image-1.jpg';
import HeaderLayout from '@/components/SectionLayout/HeaderLayout';
import SectionLayout from '@/components/SectionLayout/SectionLayout';
import { Facebook, Instagram, InstagramIcon, PhoneCallIcon, X, Youtube } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import FeaturedSingleCard from '@/components/FeaturedSingleCard';

const ContactUs = () => {


    return (
        <>
            <HeaderLayout heading={'Contact Us'} page={'Contact Us'} />
            <SectionLayout title={'Contact Us'} className={'bg-white !pb-0'} mainHeading={'Reach Us For Instant Service'} subHeading={'Consectetur libero id faucibus nisl tincidunt eget. Sed augue lacus viverra vitae congue. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Nibh praesent tristique magna sit amet.Amet dictum sit amet justo donec.'} >
                <div className="flex items-start lg:flex-row flex-col-reverse gap-10">
                    <div className="p-10 space-y-6 bg-[#f6f6f6] flex-1 w-full">
                        <Input
                            placeholder='Your Name'
                            type='text'
                            name="name"
                            className={'!p-5 !py-8 placeholder:text-lg text-lg'}
                        />
                        <Input
                            placeholder='Your Phone Number'
                            type='number'
                            name="phone_number"
                            className={'!p-5 !py-8 placeholder:text-lg text-lg'}
                        />
                        <Input
                            placeholder='Your Email'
                            type='email'
                            name="email"
                            className={'!p-5 !py-8 placeholder:text-lg text-lg'}
                        />
                        <Textarea placeholder="Type your message here." className={'!p-5 min-h-40 max-h-80 placeholder:text-lg text-lg'} id="message" />
                        <Button className={'uppercase'}>Let's Talks</Button>
                    </div>
                    <div className="p-12 bg-[#F8955B] text-white space-y-4 lg:w-[430px] w-full">
                        <h2 className="text-5xl font-medium">Say Hello!</h2>
                        <p className="">Lectus sit amet est placerat in. Tempor orci eu lobortis elementum nibh.</p>
                        <img src={contactPerson} className='w-full h-auto object-cover' alt="" />
                        <h4 className="text-3xl font-medium">Inquiries</h4>
                        <div className="flex items-center flex-wrap sm:flex-nowrap gap-5 gap-y-2">
                            <p className="">info@example.com</p>
                            <p className="">support@example.com</p>
                        </div>
                        <p className="flex items-center gap-3"><Facebook className="hover:bg-white border-white border bg-[#f8955B] cursor-pointer hover:stroke-[#f8955B] stroke-white size-8 rounded-full p-[6px]" /> <InstagramIcon className="hover:bg-white border-white border bg-[#f8955B] cursor-pointer hover:stroke-[#f8955B] stroke-white size-8 rounded-full p-[6px]" /> <X className="hover:bg-white border-white border bg-[#f8955B] cursor-pointer hover:stroke-[#f8955B] stroke-white size-8 rounded-full p-[6px]" /> <Youtube className="hover:bg-white border-white border bg-[#f8955B] cursor-pointer hover:stroke-[#f8955B] stroke-white size-8 rounded-full p-[6px]" /></p>
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout title={'Address'} className={'bg-white'} mainHeading={'GOAT Agency Office Locations'} >
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    <div className="flex gap-4">
                        <div className="flex items-center justify-center min-w-16 size-16  bg-[#f6f6f6] hover:bg-[#f8955B] group rounded-full drop-shadow-lg transition-all duration-500">{<PhoneCallIcon className='w-7 h-7 drop-shadow-lg fill-[#f8955B] group-hover:fill-[#f6f6f6] group-hover:stroke-[#f6f6f6] stroke-[#f8955B]' />}</div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold">Head Office</h4>
                            <div className="">
                                <p className="">No: 58 A, East Madison Street, Baltimore, MD, USA 4508 </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center justify-center min-w-16 size-16  bg-[#f6f6f6] hover:bg-[#f8955B] group rounded-full drop-shadow-lg transition-all duration-500">{<PhoneCallIcon className='w-7 h-7 drop-shadow-lg fill-[#f8955B] group-hover:fill-[#f6f6f6] group-hover:stroke-[#f6f6f6] stroke-[#f8955B]' />}</div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold">Mobile Number</h4>
                            <div className="">
                                <p className="">+00 (0)12 3456 789</p>
                                <p className="">+00 (0)12 3456 897</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center justify-center min-w-16 size-16  bg-[#f6f6f6] hover:bg-[#f8955B] group rounded-full drop-shadow-lg transition-all duration-500">{<PhoneCallIcon className='w-7 h-7 drop-shadow-lg fill-[#f8955B] group-hover:fill-[#f6f6f6] group-hover:stroke-[#f6f6f6] stroke-[#f8955B]' />}</div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold">Have Quires ?</h4>
                            <div className="">
                                <p className="">Seestrasse St, Zurich, CH</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center justify-center min-w-16 size-16  bg-[#f6f6f6] hover:bg-[#f8955B] group rounded-full drop-shadow-lg transition-all duration-500">{<PhoneCallIcon className='w-7 h-7 drop-shadow-lg fill-[#f8955B] group-hover:fill-[#f6f6f6] group-hover:stroke-[#f6f6f6] stroke-[#f8955B]' />}</div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold">Contact Support</h4>
                            <div className="">
                                <p className="">info@example.com</p>
                                <p className="">support@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionLayout>
            <div className="">
                <div className='flex items-center justify-center select-none p-10 px-5'>
                    <Swiper className=''
                        modules={[Autoplay]}
                        spaceBetween={50}
                        breakpoints={{
                            100: {
                                slidesPerView: 1,
                                spaceBetween: 100,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                            // you can add more breakpoints if needed
                        }}
                        slidesPerView={5}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 140000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className='!w-full md:!w-[33%] relative lg:!w-1/4 xl:!w-[20%] flex items-center justify-center'>
                            <div className="!size-72 group cursor-pointer rounded-2xl overflow-hidden border-black border-solid border">
                                <img src={Slide__Image__1} className='w-full h-full' alt="" />
                                <div className="absolute group-hover:scale-100 scale-0 rounded-2xl duration-500  w-full h-full left-0 top-0 bg-black/10">
                                    {<Instagram className='stroke-white group-hover:bg-[#F8955B] rounded-full size-16 p-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='!w-full md:!w-[33%] relative lg:!w-1/4 xl:!w-[20%] flex items-center justify-center'>
                            <div className="!size-72 group cursor-pointer rounded-2xl overflow-hidden border-black border-solid border">
                                <img src={Slide__Image__1} className='w-full h-full' alt="" />
                                <div className="absolute group-hover:scale-100 scale-0 rounded-2xl duration-500  w-full h-full left-0 top-0 bg-black/10">
                                    {<Instagram className='stroke-white group-hover:bg-[#F8955B] rounded-full size-16 p-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='!w-full md:!w-[33%] relative lg:!w-1/4 xl:!w-[20%] flex items-center justify-center'>
                            <div className="!size-72 group cursor-pointer rounded-2xl overflow-hidden border-black border-solid border">
                                <img src={Slide__Image__1} className='w-full h-full' alt="" />
                                <div className="absolute group-hover:scale-100 scale-0 rounded-2xl duration-500  w-full h-full left-0 top-0 bg-black/10">
                                    {<Instagram className='stroke-white group-hover:bg-[#F8955B] rounded-full size-16 p-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='!w-full md:!w-[33%] relative lg:!w-1/4 xl:!w-[20%] flex items-center justify-center'>
                            <div className="!size-72 group cursor-pointer rounded-2xl overflow-hidden border-black border-solid border">
                                <img src={Slide__Image__1} className='w-full h-full' alt="" />
                                <div className="absolute group-hover:scale-100 scale-0 rounded-2xl duration-500  w-full h-full left-0 top-0 bg-black/10">
                                    {<Instagram className='stroke-white group-hover:bg-[#F8955B] rounded-full size-16 p-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='!w-full md:!w-[33%] relative lg:!w-1/4 xl:!w-[20%] flex items-center justify-center'>
                            <div className="!size-72 group cursor-pointer rounded-2xl overflow-hidden border-black border-solid border">
                                <img src={Slide__Image__1} className='w-full h-full' alt="" />
                                <div className="absolute group-hover:scale-100 scale-0 rounded-2xl duration-500  w-full h-full left-0 top-0 bg-black/10">
                                    {<Instagram className='stroke-white group-hover:bg-[#F8955B] rounded-full size-16 p-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='!w-full md:!w-[33%] relative lg:!w-1/4 xl:!w-[20%] flex items-center justify-center'>
                            <div className="!size-72 group cursor-pointer rounded-2xl overflow-hidden border-black border-solid border">
                                <img src={Slide__Image__1} className='w-full h-full' alt="" />
                                <div className="absolute group-hover:scale-100 scale-0 rounded-2xl duration-500  w-full h-full left-0 top-0 bg-black/10">
                                    {<Instagram className='stroke-white group-hover:bg-[#F8955B] rounded-full size-16 p-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />}
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ContactUs
