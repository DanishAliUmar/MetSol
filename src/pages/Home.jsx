import Svgs from '@/Assets/svgs'
import React from 'react'
import SpaceMan from '/Images/assets/slider-1-parallax-image-big.png';
import HeroBg from '/Images/assets/slider-1-parallax-bg.jpg';
import groupedImage from '/Images/assets/grouped-image.png';
const Home = () => {
  return (
    <>
      <header className='min-h-[120vh] flex items-center relative justify-between overflow-hidden gap-10 !bg-cover !bg-center !bg-no-repeat p-10' style={{ background: 'url(/Images/assets/slider-1-parallax-bg.jpg)' }} >
        <img src={SpaceMan} className='absolute bottom-0 left-0 z-0 scale-150' alt="" />
        <div className="flex-1 flex flex-col relative z-10">
          <div className="flex-1 items-center justify-center flex-col space-y-6">
            <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white">
              <Svgs.X className={'size-5 fill-black'} />
            </div>
            <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white">
              <Svgs.YouTube className={'size-5 fill-black'} />
            </div>
            <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white">
              <Svgs.FaceBook className={'size-5 fill-black'} />
            </div>
            <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white">
              <Svgs.Instagram className={'size-5 fill-black'} />
            </div>
          </div>
          <div className="flex items-start gap-7 pl-20">
            <Svgs.Play className={'fill-[#f8955b] size-24 !h-10 rotate-90'} />
            <p className="text-white">Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Egestas fringilla phasellus faucibus scelerisque. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Facilisis gravida neque convallis a. Phasellus vestibulum lorem sed risus ultricies tristique.            </p>
          </div>
        </div>
        <div className="flex-1 relative z-10 flex items-center gap-2 pr-20">
          <div className="space-y-10">
            <h1 className="font-bold text-9xl leading-[1.2] uppercase text-white">Global <br /> <span className='pl-20 text-[#f8955b]'>Agency</span></h1>
            <div className="flex items-center gap-6 pl-40">
              <img src={groupedImage} className='w-32 h-auto' alt="" />
              <div className="text-white space-y-3">
                <p className="font-semibold">Happy Customer</p>
                <div className="flex items-center gap-2">
                  <Svgs.Star className={'size-5 fill-[#f8955b]'} />
                  <Svgs.Star className={'size-5 fill-[#f8955b]'} />
                  <Svgs.Star className={'size-5 fill-[#f8955b]'} />
                  <Svgs.Star className={'size-5 fill-[#f8955b]'} />
                  <Svgs.Star className={'size-5 fill-[#f8955b]'} />
                  <p className="text-xs">4.8 (15K reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center absolute right-0 top-[40%] justify-center flex-col gap-10 cursor-pointer">
          <p className="rotate-90 w-[90px] text-white">Get In Touch</p>
          <Svgs.EllipsisVertical className={'size-7 fill-[#f8955b]'} />
        </div>
      </header>
    </>
  )
}

export default Home
