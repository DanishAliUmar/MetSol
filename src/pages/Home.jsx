import Svgs from '@/Assets/svgs'
import React, { useEffect, useState } from 'react'
import SpaceMan from '/Images/assets/slider-1-parallax-image-big.png';
import AwardImage from '/Images/assets/award-image-2.jpg';
import AwardImage2 from '/Images/assets/award-image-side.jpg';
import groupedImage from '/Images/assets/grouped-image.png';
import { Navigation, Pagination, Autoplay , Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AgencyServicesSingleCard from '@/components/AgencyServicesSingleCard';
import PortfolioSingleCard from '@/components/PortfolioSingleCard';
import FeaturedSingleCard from '@/components/FeaturedSingleCard';




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
          <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white hover:scale-105 hover:bg-[#fae951] transition-all group">
            <Svgs.X className={'size-5 fill-black group-hover: transition-all group-hover:scale-75'} />
          </div>
          <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white hover:scale-105 hover:bg-[#fae951] transition-all group">
            <Svgs.YouTube className={'size-5 fill-black group-hover: transition-all group-hover:scale-75'} />
          </div>
          <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white hover:scale-105 hover:bg-[#fae951] transition-all group">
            <Svgs.FaceBook className={'size-5 fill-black group-hover: transition-all group-hover:scale-75'} />
          </div>
          <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white hover:scale-105 hover:bg-[#fae951] transition-all group">
            <Svgs.Instagram className={'size-5 fill-black group-hover: transition-all group-hover:scale-75'} />
          </div>
        </div>
        <div className="lg:flex-1 flex flex-col relative z-10 lg:pt-80">
          <div className="flex items-start md:gap-7 gap-3 md:pl-10">
            <Svgs.Play className={'fill-[#fae951] size-24 !h-10 rotate-90'} />
            <p className="text-white sm:min-w-80 lg:pr-0 md:pr-20">Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Egestas fringilla phasellus faucibus scelerisque. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Facilisis gravida neque convallis a. Phasellus vestibulum lorem sed risus ultricies tristique.            </p>
          </div>
        </div>
        <div className="xl:flex-1 relative z-10 flex items-center gap-2 pr-20">
          <div className="xl:space-y-10 space-y-5">
            <h1 className="font-bold xl:text-9xl lg:text-7xl md:text-8xl text-6xl xl:leading-[1.2] lg:leading-[1] md:leading-[1.2] uppercase text-white">Global <br /> <span className='xl:pl-20 lg:pl-10 md:pl-20 text-[#fae951]'>Agency</span></h1>
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
          <Svgs.EllipsisVertical className={'size-7 fill-[#fae951]'} />
        </div>
      </header>
      <section className="px-10 py-28 space-y-20">
        <div className="flex items-center gap-20">
          <h2 className="text-4xl flex-1 font-medium capitalize leading-[1.4] tracking-wider">A Single Platform To Find World's Top Agency Services.</h2>
<<<<<<< HEAD
          <div className="flex items-start  flex-1 md:gap-7 gap-3 md:pl-10">
            <Svgs.Play className={'fill-[#fae951] size-24 !h-10 rotate-90'} />
            <p className="tracking-wider leading-[2]">Quis vel eros donec ac odio tempor. Sit amet consectetur adipiscing elit ut aliquam purus sit. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada.Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Lectus mauris ultrices eros in cursus turpis.</p>
=======
          <div className="flex items-start  flex-1 md:gap-6 gap-3 md:pl-10">
            <Svgs.Play className={'fill-[#f8955b] size-24 !h-10 rotate-90'} />
            <p className="tracking-wider leading-[2] text-[#757575]  ">Quis vel eros donec ac odio tempor. Sit amet consectetur adipiscing elit ut aliquam purus sit. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada.Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Lectus mauris ultrices eros in cursus turpis.</p>
>>>>>>> 4025f56174bf2ccaf4de92fee4e9942bad6f5c57
          </div>
        </div>
        <div className="flex items-center">
          <div className='flex-1'>
            <div className="relative w-[510px] h-[610px]">
              <div className="flex items-center gap-3 -rotate-90 absolute -left-7 border border-black hover:border-[#f8955b] group hover:bg-[#f8955b] custom_transition cursor-pointer top-20 z-50 w-fit bg-white p-3 rounded-full px-5">
                <Svgs.Play className={'fill-[#f8955b] group-hover:fill-white custom_transition rotate-90'} width={14} />
                <p className="group-hover:text-white custom_transition">Watch Intro</p>
              </div>
              <img src={AwardImage} alt="" className="absolute w-full h-full rounded-3xl" />
              <img src={AwardImage2} alt="" className="awardImage2 absolute w-44 h-44 rounded-2xl outline outline-[14px] outline-white right-0 top-1/2 translate-x-1/2" />
            </div>
          </div>
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
          <AgencyServicesSingleCard image = 'https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-1.jpg' text = 'Quisque id diam vel quam elementum. Mauris a diam maecenas sed enim ut. Tincidunt ornare massa eget egestas purus viverra. Ultrices eros in cursus turpis massa tincidunt dui.' />
          <AgencyServicesSingleCard image = 'https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-2.jpg' text = 'Quisque id diam vel quam elementum. Mauris a diam maecenas sed enim ut. Tincidunt ornare massa eget egestas purus viverra. Ultrices eros in cursus turpis massa tincidunt dui.' />
          <AgencyServicesSingleCard image = 'https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-3.jpg' text = 'Quisque id diam vel quam elementum. Mauris a diam maecenas sed enim ut. Tincidunt ornare massa eget egestas purus viverra. Ultrices eros in cursus turpis massa tincidunt dui.' />
          <AgencyServicesSingleCard image = 'https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-4.jpg' text = 'Quisque id diam vel quam elementum. Mauris a diam maecenas sed enim ut. Tincidunt ornare massa eget egestas purus viverra. Ultrices eros in cursus turpis massa tincidunt dui.' />
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
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-01.jpg' title ='Market Research' heading = 'Continually maintain web-enabled convergence before performance based initiatives. Dramatically network exceptional portals with worldwide.' />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-02.jpg' title ='Business Strategy' heading = 'Continually maintain web-enabled convergence before performance based initiatives. Dramatically network exceptional portals with worldwide.' />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-03.jpg' title ='Digital Security' heading = 'Continually maintain web-enabled convergence before performance based initiatives. Dramatically network exceptional portals with worldwide.' />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-04.jpg' title ='Market Research' heading = 'Continually maintain web-enabled convergence before performance based initiatives. Dramatically network exceptional portals with worldwide.' />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-05.jpg' title ='Digital Marketing' heading = 'Continually maintain web-enabled convergence before performance based initiatives. Dramatically network exceptional portals with worldwide.' />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-06.jpg' title ='Market Research' heading = 'Continually maintain web-enabled convergence before performance based initiatives. Dramatically network exceptional portals with worldwide.' />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="px-10 py-28">
        <p className='text-[#f8955b] font-semibold uppercase '>Featured Tools</p>
        <h3 className='text-black font-semibold text-[40px] mt-3 leading-[54px] '>Special Tools For Business Growth</h3>
        <div className='flex items-center justify-center Tools__slider'>
        <Swiper className='py-20'
              modules={[ Autoplay]}
              spaceBetween={50}
              slidesPerView={3}
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
              <FeaturedSingleCard title ='Paid Search' heading = 'Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.' />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedSingleCard title ='Lead Generation' heading = 'Ullamcorper sit amet risus nullam eget felis eget nunc. Nunc non blandit massa enim nec dui. Lacus vel facilisis volutpat est velit. ' />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedSingleCard title ='Email Marketing' heading = 'Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. ' />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedSingleCard title ='Video Marketing' heading = 'Est pellentesque elit ullamcorper dignissim cras. Nunc vel risus commodo viverra maecenas. Neque viverra justo nec ultrices dui.' />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedSingleCard title ='Graphic Design' heading = 'Montes nascetur ridiculus mus mauris vitae. Interdum posuere lorem ipsum dolor sit. Praesent semper feugiat nibh sed pulvinar. ' />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedSingleCard title ='Lead Capture ' heading = 'Massa ultricies mi quis hendrerit. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Nunc faucibus a pellentesque sit.' />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Home
