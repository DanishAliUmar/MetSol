import Svgs from '@/Assets/svgs'
import React, { useEffect, useState } from 'react'
import SpaceMan from '/Images/assets/slider-1-parallax-image-big.png';
import AwardImage from '/Images/assets/award-image-2.jpg';
import AwardImage2 from '/Images/assets/award-image-side.jpg';
import groupedImage from '/Images/assets/grouped-image.png';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AgencyServicesSingleCard from '@/components/AgencyServicesSingleCard';
import PortfolioSingleCard from '@/components/PortfolioSingleCard';
import FeaturedSingleCard from '@/components/FeaturedSingleCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPosition = window.scrollY;
      setScrollPosition(newScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll',
      handleScroll);
  }, []);

  return (
    <>
      <header className='min-h-[120vh] flex items-center relative lg:justify-between justify-center lg:flex-row flex-col overflow-hidden xl:gap-10 lg:gap-2 gap-10 !bg-cover !bg-center !bg-no-repeat p-10' style={{ background: 'url(/Images/assets/slider-1-parallax-bg.jpg)' }} >
        <img src={SpaceMan} className='absolute sm:left-24 -left-40 z-0 sm:scale-150 min-w-[1300px] max-w-[1300px]' style={{ bottom: (-scrollPosition + 700) / 3 }} alt="" />
        <div className=" space-y-6 absolute left-0 top-[40%] px-5 hidden md:block">
          <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white hover:scale-105 hover:bg-[#f8955b] transition-all group">
            <Svgs.X className={'size-5 fill-black group-hover:fill-white transition-all group-hover:scale-75'} />
          </div>
          <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white hover:scale-105 hover:bg-[#f8955b] transition-all group">
            <Svgs.YouTube className={'size-5 fill-black group-hover:fill-white transition-all group-hover:scale-75'} />
          </div>
          <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white hover:scale-105 hover:bg-[#f8955b] transition-all group">
            <Svgs.FaceBook className={'size-5 fill-black group-hover:fill-white transition-all group-hover:scale-75'} />
          </div>
          <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white hover:scale-105 hover:bg-[#f8955b] transition-all group">
            <Svgs.Instagram className={'size-5 fill-black group-hover:fill-white transition-all group-hover:scale-75'} />
          </div>
        </div>
        <div className="lg:flex-1 flex flex-col relative z-10 lg:pt-80">
          <div className="flex items-start md:gap-7 gap-3 md:pl-10">
            <Svgs.Play className={'fill-[#f8955b] size-24 !h-10 rotate-90'} />
            <p className="text-white sm:min-w-80 lg:pr-0 md:pr-20">Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Egestas fringilla phasellus faucibus scelerisque. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Facilisis gravida neque convallis a. Phasellus vestibulum lorem sed risus ultricies tristique.            </p>
          </div>
        </div>
        <div className="xl:flex-1 relative z-10 flex items-center gap-2 pr-20">
          <div className="xl:space-y-10 space-y-5">
            <h1 className="font-bold xl:text-9xl lg:text-7xl md:text-8xl text-6xl xl:leading-[1.2] lg:leading-[1] md:leading-[1.2] uppercase text-white">Global <br /> <span className='xl:pl-20 lg:pl-10 md:pl-20 text-[#f8955b]'>Agency</span></h1>
            <div className="flex sm:items-center flex-col sm:flex-row xl:gap-6 gap-3 xl:pl-40 lg:pl-20 md:pl-40">
              <img src={groupedImage} className='w-32 h-auto' alt="" />
              <div className="text-white space-y-3">
                <p className="font-semibold">Happy Customer</p>
                <div className="flex items-center xl:gap-2 gap-1">
                  <Svgs.Star className={'size-5 fill-[#f8955b]'} />
                  <Svgs.Star className={'size-5 fill-[#f8955b]'} />
                  <Svgs.Star className={'size-5 fill-[#f8955b]'} />
                  <Svgs.Star className={'size-5 fill-[#f8955b]'} />
                  <Svgs.Star className={'size-5 fill-[#f8955b]'} />
                  <p className="text-xs whitespace-nowrap">4.8 (15K reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center absolute right-0 top-[40%] justify-center flex-col gap-10 cursor-pointer ">
          <p className="rotate-90 w-[90px] text-white cursor-pointer">Get In Touch</p>
          <Svgs.EllipsisVertical className={'size-7 fill-[#f8955b]'} />
        </div>
      </header>
      <section className="px-10 py-28 space-y-20">
        <div className="flex items-center gap-20">
          <h2 className="text-4xl flex-1 font-medium capitalize leading-[1.4] tracking-wider">A Single Platform To Find World's Top Agency Services.</h2>
          <div className="flex items-start flex-1 md:gap-6 gap-3 md:pl-10">
            <Svgs.Play className={'fill-[#f8955b] size-24 !h-10 rotate-90'} />
            <p className="tracking-wider leading-[2] text-[#757575]  ">Quis vel eros donec ac odio tempor. Sit amet consectetur adipiscing elit ut aliquam purus sit. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada.Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Lectus mauris ultrices eros in cursus turpis.</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className='flex-1'>
            <div className="relative w-[560px] h-[635px]">
              {/* <div class="mx-auto bg-[#fff] h-[46px] top-24 absolute left-0 -rotate-90 w-[230px] rounded-bl-[22px] rounded-br-[22px] flex items-center justify-center z-50">
                <div className="flex items-center gap-3 border border-black hover:border-[#f8955b] group hover:bg-[#f8955b] custom_transition cursor-pointer w-fit bg-white p-3 rounded-full px-5">
                  <Svgs.Play className={'fill-[#f8955b] group-hover:fill-white custom_transition '} width={14} />
                  <p className="group-hover:text-white custom_transition uppercase">Watch Intro</p>
                </div>
              </div> */}
              <div className="flex items-center gap-3 border border-black hover:border-[#f8955b] -rotate-90 group hover:bg-[#f8955b] custom_transition cursor-pointer w-fit bg-white p-3 z-50 top-20 -left-10 absolute rounded-full px-5">
                <Svgs.Play className={'fill-[#f8955b] group-hover:fill-white custom_transition '} width={14} />
                <p className="group-hover:text-white custom_transition uppercase">Watch Intro</p>
              </div>
              <img src={AwardImage} alt="" className="absolute w-full h-full rounded-3xl" />
              <img src={AwardImage2} alt="" className="awardImage2 absolute w-52 h-52 rounded-2xl outline outline-[14px] outline-white right-0 top-1/2 translate-x-1/2" />
            </div>
          </div>
          <div className='flex-1 flex gap-6'>
            <div className='flex-1'>
              <p className='text-[#f8955b] font-semibold uppercase '>About Us</p>
              <h3 className='text-black font-semibold text-4xl mt-3 '>High Performing Digital Agency</h3>
              <p className='text-[#757575] mt-4 text-lg '>Risus sed vulputate odio ut enim blandit volutpat. Sed cras ornare arcu dui vivamus arcu.</p>
              <div className='py-12 border-b border-black'>
                <div className='flex '>
                  <div className='flex-1'>
                    <h3 className='font-bold text-5xl'>50k+</h3>
                    <p className='font-semibold text-black mt-4 '>Successful Projects</p>
                  </div>
                  <div className='flex-1'>
                    <h3 className='font-bold text-5xl'>25k</h3>
                    <p className='font-semibold text-black mt-4 '>Global Clients</p>
                  </div>
                </div>
                <div className='flex mt-12 '>
                  <div className='flex-1'>
                    <h3 className='font-bold text-5xl'>15k+</h3>
                    <p className='font-semibold text-black mt-4 '>On Going Projects</p>
                  </div>
                  <div className='flex-1'>
                    <h3 className='font-bold text-5xl'>80+</h3>
                    <p className='font-semibold text-black mt-4 '>Branches</p>
                  </div>
                </div>
              </div>
              <button className='mt-10 rounded-full px-10 py-3 flex items-center justify-center bg-[#f8955b] cursor-pointer custom_transition hover:bg-black text-white '>
                About Us
              </button>
            </div>
            <div className='flex flex-col justify-end pb-3'>
              <div className='max-w-max relative flex items-center justify-center'>
                <img loading="lazy" decoding="async" src="https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/rotate-backward-300x300.png" class="h-[150px] w-[150px] " alt="" srcset="https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/rotate-backward-300x300.png 300w, https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/rotate-backward-150x150.png 150w, https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/rotate-backward-768x768.png 768w, https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/rotate-backward.png 800w" sizes="(max-width: 300px) 100vw, 300px" ></img>
                <span className='flex items-center justify-center rounded-full h-[100px] w-[100px] bg-[#200233] absolute inset-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '>
                  <svg className='h-[34px] w-[34px] fill-[#f8955b] -rotate-45 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#f6f6f6] px-10 py-28 '>
        <div className='flex items-center gap-14'>
          <div className='flex-1'>
            <p className='text-[#f8955b] font-semibold uppercase '>Agency Services</p>
            <h3 className='text-black font-semibold text-[40px] mt-3 leading-[54px] '>Our Strategy & Patented Technology Serve As Our Driving Force.</h3>
          </div>
          <div className='flex-1 relative'>
            <div className='flex items-center justify-center absolute -top-10 w-full z-0'>
              <div className='rounded-full bg-[#eeeeee] h-[170px] w-[170px]'></div>
            </div>
            <p className='text-[#757575] max-w-[400px] ml-auto z-50 relative'>Nibh praesent tristique magna sit. Aliquam etiam erat velit scelerisque in dictum. Justo donec enim diam vulputate. Leo integer malesuada nunc vel.</p>
          </div>
        </div>
        <div className='flex gap-7 mt-20 custom_transition'>
          <AgencyServicesSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-1.jpg' text='Quisque id diam vel quam elementum. Mauris a diam maecenas sed enim ut. Tincidunt ornare massa eget egestas purus viverra. Ultrices eros in cursus turpis massa tincidunt dui.' />
          <AgencyServicesSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-2.jpg' text='Quisque id diam vel quam elementum. Mauris a diam maecenas sed enim ut. Tincidunt ornare massa eget egestas purus viverra. Ultrices eros in cursus turpis massa tincidunt dui.' />
          <AgencyServicesSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-3.jpg' text='Quisque id diam vel quam elementum. Mauris a diam maecenas sed enim ut. Tincidunt ornare massa eget egestas purus viverra. Ultrices eros in cursus turpis massa tincidunt dui.' />
          <AgencyServicesSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-4.jpg' text='Quisque id diam vel quam elementum. Mauris a diam maecenas sed enim ut. Tincidunt ornare massa eget egestas purus viverra. Ultrices eros in cursus turpis massa tincidunt dui.' />
        </div>
      </section>
      <section className='bg-black px-10 py-28 '>
        <p className='text-[#f8955b] font-semibold uppercase '>Our Portfolio</p>
        <h3 className='text-white font-semibold text-[40px] mt-3 leading-[54px] '>Business Development & Promotions</h3>
        <div className=' flex items-center justify-center'>
          <Swiper className='py-20'
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-01.jpg' title='Market Research' heading='Continually maintain web-enabled convergence before performance based initiatives. Dramatically network exceptional portals with worldwide.' />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-02.jpg' title='Business Strategy' heading='Continually maintain web-enabled convergence before performance based initiatives. Dramatically network exceptional portals with worldwide.' />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-03.jpg' title='Digital Security' heading='Continually maintain web-enabled convergence before performance based initiatives. Dramatically network exceptional portals with worldwide.' />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-04.jpg' title='Market Research' heading='Continually maintain web-enabled convergence before performance based initiatives. Dramatically network exceptional portals with worldwide.' />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-05.jpg' title='Digital Marketing' heading='Continually maintain web-enabled convergence before performance based initiatives. Dramatically network exceptional portals with worldwide.' />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-06.jpg' title='Market Research' heading='Continually maintain web-enabled convergence before performance based initiatives. Dramatically network exceptional portals with worldwide.' />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="px-10 pt-20">
        <p className='text-[#f8955b] font-semibold uppercase '>Featured Tools</p>
        <h3 className='text-black font-semibold text-[40px] mt-3 leading-[54px] '>Special Tools For Business Growth</h3>
        <div className='flex items-center justify-center Tools__slider select-none'>
          <Swiper className='py-20 custom_transition6s min-h-[700px]'
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            grabCursor={false}
            draggable={false}
            allowTouchMove={false}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1400,
              disableOnInteraction: false,
            }}
            speed={1000}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className='custom_transition6s'>
              <FeaturedSingleCard title='Paid Search' heading='Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.' />
            </SwiperSlide>
            <SwiperSlide className='custom_transition6s'>
              <FeaturedSingleCard title='Lead Generation' heading='Ullamcorper sit amet risus nullam eget felis eget nunc. Nunc non blandit massa enim nec dui. Lacus vel facilisis volutpat est velit. ' />
            </SwiperSlide>
            <SwiperSlide className='custom_transition6s'>
              <FeaturedSingleCard title='Email Marketing' heading='Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. ' />
            </SwiperSlide>
            <SwiperSlide className='custom_transition6s'>
              <FeaturedSingleCard title='Video Marketing' heading='Est pellentesque elit ullamcorper dignissim cras. Nunc vel risus commodo viverra maecenas. Neque viverra justo nec ultrices dui.' />
            </SwiperSlide>
            <SwiperSlide className='custom_transition6s'>
              <FeaturedSingleCard title='Graphic Design' heading='Montes nascetur ridiculus mus mauris vitae. Interdum posuere lorem ipsum dolor sit. Praesent semper feugiat nibh sed pulvinar. ' />
            </SwiperSlide>
            <SwiperSlide className='custom_transition6s'>
              <FeaturedSingleCard title='Lead Capture ' heading='Massa ultricies mi quis hendrerit. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Nunc faucibus a pellentesque sit.' />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="px-10 pb-20">
        <p className='text-[#f8955b] font-semibold uppercase '>Featured Tools</p>
        <h3 className='text-black font-semibold text-[40px] mt-3 leading-[54px] '>Special Tools For Business Growth</h3>
        <Accordion type="single" collapsible className={'space-y-5'}>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-1">
            <AccordionTrigger className={'font-semibold text-xl'}>What Is Your Service Pricing Structure?</AccordionTrigger>
            <AccordionContent>
              Condimentum id venenatis a condimentum. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Adipiscing bibendum est ultricies integer quis auctor elit.Commodo ullamcorper a lacus vestibulum sed. Mauris sit amet massa vitae.Egestas fringilla phasellus faucibus scelerisque eleifend. Egestas dui id ornare arcu odio.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-2">
            <AccordionTrigger className={'font-semibold text-xl'}>What Are The Payment Options Do You Have?
            </AccordionTrigger>
            <AccordionContent>
              Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Sit amet facilisis magna etiam tempor orci. Imperdiet nulla malesuada pellentesque elit. Adipiscing tristique risus nec feugiat. Proin sed libero enim sed faucibus.Ultricies lacus sed turpis tincidunt id. Urna duis convallis convallis tellus.


            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-3">
            <AccordionTrigger className={'font-semibold text-xl'}>Do You Follow All Guidelines & Norms?
            </AccordionTrigger>
            <AccordionContent>
              Malesuada fames ac turpis egestas integer eget aliquet. Risus viverra adipiscing at in tellus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Lectus proin nibh nisl condimentum.Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Tempor nec feugiat nisl pretium fusce id velit ut.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-4">
            <AccordionTrigger className={'font-semibold text-xl'}>Do You Use Freelancers Or Your In-House Team?
            </AccordionTrigger>
            <AccordionContent>
              Justo laoreet sit amet cursus sit amet dictum sit amet. Amet venenatis urna cursus eget nunc. Vitae elementum curabitur vitae nunc sed velit dignissim. Sit amet nisl purus in mollis nunc sed id semper. Rhoncus urna neque viverra justo nec ultrices dui sapien eget.Sed enim ut sem viverra aliquet eget sit amet tellus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-5">
            <AccordionTrigger className={'font-semibold text-xl'}>What Kind Of Marketing Techniques Do You Follow?</AccordionTrigger>
            <AccordionContent>
              Fringilla est ullamcorper eget nulla. Enim sed faucibus turpis in eu mi. Nibh tellus molestie nunc non blandit massa enim nec. Eros donec ac odio tempor orci dapibus ultrices. At augue eget arcu dictum varius duis at.Morbi leo urna molestie at. Egestas diam in arcu cursus euismod quis viverra bibendum arcu vitae nibh.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-6">
            <AccordionTrigger className={'font-semibold text-xl'}>Do You Provide Special Focus On Private Companies?</AccordionTrigger>
            <AccordionContent>
              Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Lacus viverra vitae congue eu. Dictum at tempor commodo ullamcorper a lacus. Maecenas ultricies mi eget mauris pharetra.Ut venenatis tellus in metus vulputate eu scelerisque felis. Orci eu lobortis etiam erat velit scelerisque elementum nibh.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </section>
    </>
  )
}

export default Home
