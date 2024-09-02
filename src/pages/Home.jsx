import Svgs from '@/Assets/svgs'
import React, { useEffect, useState } from 'react'
import SpaceMan from '/Images/assets/slider-1-parallax-image-big.png';
import AwardImage from '/Images/assets/award-image-2.jpg';
import AwardImage2 from '/Images/assets/award-image-side.jpg';
import CirclerText from '/Images/assets/rotate-backward-300x300.png';
import ArrowRightUp from '/Images/assets/rotate-forward-300x300.png';
import ToolImg1 from '/Images/assets/tool-img1.png';
import ToolImg2 from '/Images/assets/tool-img2.png';
import ToolImg3 from '/Images/assets/tool-img3.png';
import ToolImg4 from '/Images/assets/tool-img4.png';
import ToolImg5 from '/Images/assets/tool-img5.png';
import ToolImg6 from '/Images/assets/tool-img6.png';
import ToolImg7 from '/Images/assets/tool-img7.png';
import ToolImg8 from '/Images/assets/tool-img8.png';
import groupedImage from '/Images/assets/grouped-image.png';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AgencyServicesSingleCard from '@/components/AgencyServicesSingleCard';
import PortfolioSingleCard from '@/components/PortfolioSingleCard';
import FeaturedSingleCard from '@/components/FeaturedSingleCard';
import { Button } from "@/components/ui/button"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SectionLayout from '@/components/SectionLayout/SectionLayout';


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
          <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white hover:scale-105 hover:bg-[#ffb600] transition-all group">
            <Svgs.X className={'size-5 fill-black group-hover: transition-all group-hover:scale-75'} />
          </div>
          <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white hover:scale-105 hover:bg-[#ffb600] transition-all group">
            <Svgs.YouTube className={'size-5 fill-black group-hover: transition-all group-hover:scale-75'} />
          </div>
          <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white hover:scale-105 hover:bg-[#ffb600] transition-all group">
            <Svgs.FaceBook className={'size-5 fill-black group-hover: transition-all group-hover:scale-75'} />
          </div>
          <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white hover:scale-105 hover:bg-[#ffb600] transition-all group">
            <Svgs.Instagram className={'size-5 fill-black group-hover: transition-all group-hover:scale-75'} />
          </div>
        </div>
        <div className="lg:flex-1 flex flex-col relative z-10 lg:pt-80">
          <div className="flex items-start md:gap-7 gap-3 md:pl-10">
            <Svgs.Play className={'fill-[#ffb600] size-24 !h-10 rotate-90'} />
            <p className="text-white sm:min-w-80 lg:pr-0 md:pr-20">Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Egestas fringilla phasellus faucibus scelerisque. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Facilisis gravida neque convallis a. Phasellus vestibulum lorem sed risus ultricies tristique.            </p>
          </div>
        </div>
        <div className="xl:flex-1 relative z-10 flex items-center gap-2 pr-20">
          <div className="xl:space-y-10 space-y-5">
            <h1 className="font-bold xl:text-9xl lg:text-7xl md:text-8xl text-6xl xl:leading-[1.2] lg:leading-[1] md:leading-[1.2] uppercase text-white">Global <br /> <span className='xl:pl-20 lg:pl-10 md:pl-20 text-[#ffb600]'>Agency</span></h1>
            <div className="flex sm:items-center flex-col sm:flex-row xl:gap-6 gap-3 xl:pl-40 lg:pl-20 md:pl-40">
              <img src={groupedImage} className='w-32 h-auto' alt="" />
              <div className="text-white space-y-3">
                <p className="font-semibold">Happy Customer</p>
                <div className="flex items-center xl:gap-2 gap-1">
                  <Svgs.Star className={'size-5 fill-[#ffb600]'} />
                  <Svgs.Star className={'size-5 fill-[#ffb600]'} />
                  <Svgs.Star className={'size-5 fill-[#ffb600]'} />
                  <Svgs.Star className={'size-5 fill-[#ffb600]'} />
                  <Svgs.Star className={'size-5 fill-[#ffb600]'} />
                  <p className="text-xs whitespace-nowrap">4.8 (15K reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center absolute right-0 top-[40%] justify-center flex-col gap-10 cursor-pointer ">
          <p className="rotate-90 text-white w-full p-1">Get In Touch</p>
          <Svgs.EllipsisVertical className={'size-7 fill-[#ffb600]'} />
        </div>
      </header>
      <SectionLayout mainHeading={"A Single Platform To Find World's Top Agency Services."} subHeading={'Quis vel eros donec ac odio tempor. Sit amet consectetur adipiscing elit ut aliquam purus sit. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada.Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Lectus mauris ultrices eros in cursus turpis.'}>
        <div className="flex lg:flex-row flex-col-reverse w-full gap-10">
          <div className="lg:flex-[4] max-w-[calc(100%-7.5rem)]">
            <div className="relative w-full sm:h-[600px] h-[400px]">
              <img src={AwardImage} alt="" className="absolute sm:w-full w-[120%] h-full object-cover rounded-3xl " />
              <img src={AwardImage2} alt="" className="absolute size-60 top-1/2 right-0 translate-x-1/2 bg-white p-4 sm:pr-4 pr-0 object-cover rounded-[30px] " />
              <div className="bg-white absolute -rotate-90 w-[210px] p-4 h-[80px] top-[30px] rounded-full left-[-90px] flex items-end justify-start ">
                <div className="flex items-center gap-2 border-solid border-black border px-3 bg-white p-2 rounded-3xl">
                  <Svgs.Play className={'size-4'} />
                  <p className="uppercase font-light">Watch Intro</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex-[5] lg:pl-24 pt-10 space-y-10">
            <div className="space-y-2">
              <p className='text-[#ffb600] md:text-base text-sm font-semibold uppercase '>About Us</p>
              <h3 className='font-semibold md:text-[40px] sm:text-3xl text-2xl mt-3 md:leading-[54px] '>High Performing Digital Agency</h3>
              <p className='text-[#757575]  z-50 relative md:text-base text-sm'>Risus sed vulputate odio ut enim blandit volutpat. Sed cras ornare arcu dui vivamus arcu.</p>
            </div>
            <div className="flex items-end gap-5">
              <div className="flex-1 space-y-10">
                <div className="grid grid-cols-2 gap-10 ">
                  <div className="space-y-2">
                    <h2 className="text-5xl font-semibold">50k+</h2>
                    <p className="font-semibold">Global Clients</p>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-5xl font-semibold">25k</h2>
                    <p className="font-semibold">Successful Projects</p>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-5xl font-semibold">50k+</h2>
                    <p className="font-semibold">On Going Projects</p>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-5xl font-semibold">50k+</h2>
                    <p className="font-semibold">Branches</p>
                  </div>
                </div>
                <hr className='border-b border-solid  border-black' />
                <Button>About Us</Button>
              </div>
              <div className="size-36 relative sm:flex items-center justify-center hidden">
                <img src={CirclerText} className='w-full h-full absolute left-0 top-0' alt="" />
                <img src={ArrowRightUp} className='' alt="" />
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout title={'Agency Services'} className={'bg-[#f6f6f6]'} mainHeading={'Our Strategy & Patented Technology Serve As Our Driving Force.'} circle subHeading={'Nibh praesent tristique magna sit. Aliquam etiam erat velit scelerisque in dictum. Justo donec enim diam vulputate. Leo integer malesuada nunc vel.'}>
        <div className='lg:flex grid sm:grid-cols-2 grid-cols-1 gap-7 flex-wrap custom_transition'>
          <AgencyServicesSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-1.jpg' text='Quisque id diam vel quam elementum. Mauris a diam maecenas sed enim ut. Tincidunt ornare massa eget egestas purus viverra. Ultrices eros in cursus turpis massa tincidunt dui.' />
          <AgencyServicesSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-2.jpg' text='Quisque id diam vel quam elementum. Mauris a diam maecenas sed enim ut. Tincidunt ornare massa eget egestas purus viverra. Ultrices eros in cursus turpis massa tincidunt dui.' />
          <AgencyServicesSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-3.jpg' text='Quisque id diam vel quam elementum. Mauris a diam maecenas sed enim ut. Tincidunt ornare massa eget egestas purus viverra. Ultrices eros in cursus turpis massa tincidunt dui.' />
          <AgencyServicesSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-4.jpg' text='Quisque id diam vel quam elementum. Mauris a diam maecenas sed enim ut. Tincidunt ornare massa eget egestas purus viverra. Ultrices eros in cursus turpis massa tincidunt dui.' />
        </div>

      </SectionLayout>
      <SectionLayout title={'Our Portfolio'} className={'bg-black text-white'} mainHeading={'Business Development & Promotions'}>
        <div className=' flex items-center justify-center'>
          <Swiper className='portfolio__slider'
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
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // you can add more breakpoints if needed
            }}
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
      </SectionLayout>
      <SectionLayout title={'Featured Tools'} className={''} mainHeading={'Special Tools For Business Growth'}>
        <div className='flex items-center justify-center Tools__slider select-none lg:px-0 sm:px-10 pl-2'>
          <Swiper className='custom_transition6s min-h-[540px]'
            modules={[Autoplay]}
            spaceBetween={50}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              // you can add more breakpoints if needed
            }}
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
              <FeaturedSingleCard title='Paid Search' svgs={<Svgs.Plus className={'size-4'}/>} heading='Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.' />
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
      </SectionLayout>

      <SectionLayout title={'COMMON QUESTIONS'} className={'bg-[#f6f6f6]'} mainHeading={'About Our Projects & Services'}>
        <Accordion type="single" collapsible className={'space-y-5 bg-[#f6f6f6'}>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-1">
            <AccordionTrigger className={'font-bold text-xl text-left'}>What Is Your Service Pricing Structure?</AccordionTrigger>
            <AccordionContent>
              Condimentum id venenatis a condimentum. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Adipiscing bibendum est ultricies integer quis auctor elit.Commodo ullamcorper a lacus vestibulum sed. Mauris sit amet massa vitae.Egestas fringilla phasellus faucibus scelerisque eleifend. Egestas dui id ornare arcu odio.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-2">
            <AccordionTrigger className={'font-bold text-xl text-left'}>What Are The Payment Options Do You Have?
            </AccordionTrigger>
            <AccordionContent>
              Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Sit amet facilisis magna etiam tempor orci. Imperdiet nulla malesuada pellentesque elit. Adipiscing tristique risus nec feugiat. Proin sed libero enim sed faucibus.Ultricies lacus sed turpis tincidunt id. Urna duis convallis convallis tellus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-3">
            <AccordionTrigger className={'font-bold text-xl text-left'}>Do You Follow All Guidelines & Norms?
            </AccordionTrigger>
            <AccordionContent>
              Malesuada fames ac turpis egestas integer eget aliquet. Risus viverra adipiscing at in tellus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Lectus proin nibh nisl condimentum.Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Tempor nec feugiat nisl pretium fusce id velit ut.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-4">
            <AccordionTrigger className={'font-bold text-xl text-left'}>Do You Use Freelancers Or Your In-House Team?
            </AccordionTrigger>
            <AccordionContent>
              Justo laoreet sit amet cursus sit amet dictum sit amet. Amet venenatis urna cursus eget nunc. Vitae elementum curabitur vitae nunc sed velit dignissim. Sit amet nisl purus in mollis nunc sed id semper. Rhoncus urna neque viverra justo nec ultrices dui sapien eget.Sed enim ut sem viverra aliquet eget sit amet tellus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-5">
            <AccordionTrigger className={'font-bold text-xl text-left'}>What Kind Of Marketing Techniques Do You Follow?</AccordionTrigger>
            <AccordionContent>
              Fringilla est ullamcorper eget nulla. Enim sed faucibus turpis in eu mi. Nibh tellus molestie nunc non blandit massa enim nec. Eros donec ac odio tempor orci dapibus ultrices. At augue eget arcu dictum varius duis at.Morbi leo urna molestie at. Egestas diam in arcu cursus euismod quis viverra bibendum arcu vitae nibh.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-6">
            <AccordionTrigger className={'font-bold text-xl text-left'}>Do You Provide Special Focus On Private Companies?</AccordionTrigger>
            <AccordionContent>
              Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Lacus viverra vitae congue eu. Dictum at tempor commodo ullamcorper a lacus. Maecenas ultricies mi eget mauris pharetra.Ut venenatis tellus in metus vulputate eu scelerisque felis. Orci eu lobortis etiam erat velit scelerisque elementum nibh.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </SectionLayout>
      <SectionLayout title={'Friendly Services'} className={''} mainHeading={'Accelerate Your Growth With Our Digital Agency Services.'} subHeading={'Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Adipiscing vitae proin sagittis nisl rhoncus mattis. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Nec tincidunt praesent semper feugiat.'}>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          <div className="flex items-center gap-3 p-5 rounded-lg border-solid border bg-white hover:bg-slate-50 cursor-pointer">
            <img src={ToolImg1} className='size-16 object-contain' alt="" />
            <div className="space-y-1">
              <h5 className="font-bold text-lg">MailChimp</h5>
              <p className="font-light text-sm">The digital empire your business.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-5 rounded-lg border-solid border bg-white hover:bg-slate-50 cursor-pointer">
            <img src={ToolImg2} className='size-16 object-contain' alt="" />
            <div className="space-y-1">
              <h5 className="font-bold text-lg">Google Analytics</h5>
              <p className="font-light text-sm">Devoted to helping your business.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-5 rounded-lg border-solid border bg-white hover:bg-slate-50 cursor-pointer">
            <img src={ToolImg3} className='size-16 object-contain' alt="" />
            <div className="space-y-1">
              <h5 className="font-bold text-lg">Amplitude</h5>
              <p className="font-light text-sm">Accelerate your growth</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-5 rounded-lg border-solid border bg-white hover:bg-slate-50 cursor-pointer">
            <img src={ToolImg4} className='size-16 object-contain' alt="" />
            <div className="space-y-1">
              <h5 className="font-bold text-lg">Google Analytics</h5>
              <p className="font-light text-sm">Quality software for businesses.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-5 rounded-lg border-solid border bg-white hover:bg-slate-50 cursor-pointer">
            <img src={ToolImg5} className='size-16 object-contain' alt="" />
            <div className="space-y-1">
              <h5 className="font-bold text-lg">Hubspot</h5>
              <p className="font-light text-sm">Invest in the future of your business.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-5 rounded-lg border-solid border bg-white hover:bg-slate-50 cursor-pointer">
            <img src={ToolImg6} className='size-16 object-contain' alt="" />
            <div className="space-y-1">
              <h5 className="font-bold text-lg">Dropbox</h5>
              <p className="font-light text-sm">Innovative solutions for businesses.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-5 rounded-lg border-solid border bg-white hover:bg-slate-50 cursor-pointer">
            <img src={ToolImg7} className='size-16 object-contain' alt="" />
            <div className="space-y-1">
              <h5 className="font-bold text-lg">ToolImg1</h5>
              <p className="font-light text-sm">Transform your business.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-5 rounded-lg border-solid border bg-white hover:bg-slate-50 cursor-pointer">
            <img src={ToolImg8} className='size-16 object-contain' alt="" />
            <div className="space-y-1">
              <h5 className="font-bold text-lg">Google Drive</h5>
              <p className="font-light text-sm">Elevate your business Saas</p>
            </div>
          </div>
        </div>
      </SectionLayout>

      <div className="marque__slider bg-[#F8955B] flex items-center w-full h-24" style={{
        // '--width': "800px",
        // '--quantity': 8
      }}>
        <div className="list flex text-center font-bold uppercase md:text-5xl sm:text-3xl text-xl w-full h-full relative max-w-[calc(--width*--quantity]">
          <div className="item h-full flex items-center" style={{ '--position': 1 }}>
            <p className="">
              fresh ideas
            </p>
          </div>
          <div className="item h-full flex items-center" style={{ '--position': 2 }}>
            <p className="">
              *
            </p>
          </div>
          <div className="item h-full flex items-center" style={{ '--position': 3 }}>
            <p className="">
              Full-service
            </p>
          </div>
          <div className="item h-full flex items-center" style={{ '--position': 4 }}>
            <p className="">
              *
            </p>
          </div>
          <div className="item h-full flex items-center" style={{ '--position': 5 }}>
            <p className="">
              technology
            </p>
          </div>
          <div className="item h-full flex items-center" style={{ '--position': 6 }}>
            <p className="">
              *
            </p>
          </div>
          <div className="item h-full flex items-center" style={{ '--position': 7 }}>
            <p className="">
              cost-effective
            </p>
          </div>
          <div className="item h-full flex items-center" style={{ '--position': 8 }}>
            <p className="">
              *
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
