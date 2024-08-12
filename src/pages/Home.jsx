import Svgs from '@/Assets/svgs'
import React from 'react'
import SpaceMan from '/Images/assets/slider-1-parallax-image-big.png';
import HeroBg from '/Images/assets/slider-1-parallax-bg.jpg';
import groupedImage from '/Images/assets/grouped-image.png';
const Home = () => {
  return (
    <>
      <header className='min-h-[120vh] flex items-center relative lg:justify-between justify-center lg:flex-row flex-col overflow-hidden xl:gap-10 lg:gap-2 gap-10 !bg-cover !bg-center !bg-no-repeat p-10' style={{ background: 'url(/Images/assets/slider-1-parallax-bg.jpg)' }} >
        <img src={SpaceMan} className='absolute sm:bottom-24 bottom-1 sm:left-24 -left-40 z-0 sm:scale-150 min-w-[1300px] max-w-[1300px]' alt="" />
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
        <div className="lg:flex-1 flex flex-col relative z-10">
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
    </>
  )
}

export default Home
