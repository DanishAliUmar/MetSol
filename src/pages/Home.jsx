import Svgs from '@/Assets/svgs'
import React, { useEffect, useState } from 'react'
import SpaceMan from '/Images/assets/slider-1-parallax-image-big.png';
import AwardImage from '/Images/assets/award-image-2.jpg';
import AwardImage2 from '/Images/assets/award-image-side.jpg';
import groupedImage from '/Images/assets/grouped-image.png';
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
        <img src={SpaceMan} className='absolute sm:left-24 -left-40 z-0 sm:scale-150 min-w-[1300px] max-w-[1300px]' style={{ bottom: (-scrollPosition + 180) / 1.5 }} alt="" />
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
      <section className="px-10 py-20 space-y-20">
        <div className="flex items-center gap-20">
          <h2 className="text-4xl flex-1 font-medium capitalize leading-[1.4] tracking-wider">A Single Platform To Find World's Top Agency Services.</h2>
          <div className="flex items-start  flex-1 md:gap-7 gap-3 md:pl-10">
            <Svgs.Play className={'fill-[#fae951] size-24 !h-10 rotate-90'} />
            <p className="tracking-wider leading-[2]">Quis vel eros donec ac odio tempor. Sit amet consectetur adipiscing elit ut aliquam purus sit. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada.Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Lectus mauris ultrices eros in cursus turpis.</p>
          </div>
        </div>
        <div className="flex items-center gap-20">
          <div className="relative w-[450px] h-[530px]">
            <img src={AwardImage} alt="" className="absolute w-full h-full" />
            <img src={AwardImage2} alt="" className="awardImage2 absolute w-40 h-40 rounded-2xl outline outline-[14px] outline-white right-0 top-1/2 translate-x-1/2" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
