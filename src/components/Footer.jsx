import Svgs from "@/Assets/svgs";
import { Facebook, Instagram, InstagramIcon, X, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="px-5 md:pt-28 sm:pt-16 pt-10 pb-10 bg-gradient-to-r from-[#193349]  to-[#6e5003] ">
      <div className="flex items-center justify-between border-none md:gap-10 sm:gap-6 gap-4 flex-wrap">
        <div className="flex items-center gap-10"><span className="md:text-6xl sm:text-4xl text-3xl font-bold" style={{ WebkitTextStrokeColor: "white", WebkitTextStrokeWidth: "2px" }}>DROP US A MAIL</span> <span className=""><Svgs.ArrowUpLong className={'md:size-14 sm:size-12 size-10 rotate-45 fill-[#F8955B]'} /></span></div>
        <Button className={'hover:!bg-white hover:!text-black'}>Get In Touch</Button>
      </div>
      <hr className="border-b border-solid border-white/40 my-10" />
      <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 text-white gap-10 ">
        <div className="col-span-2">
        <Link to='/'><div className="w-16 flex p-2 h-auto object-contain font-bold text-3xl"><h1 className='text-[#004a86] flex'>Met <span className='text-[#ffb600]'>Sole</span></h1> </div></Link>
          <p className="">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="">
          <h4 className="font-bold text-xl h-20 text-[#F8955B]">Company</h4>
          <div className="space-y-4">
            <p className="cursor-pointer ">Home</p>
            <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Services</p>
            <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Portfolio</p>
            <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Contact</p>
          </div>
        </div>
        <div className="">
          <h4 className="font-bold text-xl h-20 text-[#F8955B]">Product</h4>
          <div className="space-y-4">
            <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Integration</p>
            <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Customers</p>
            <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Case Studies</p>
            <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Our Blog</p>
            <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Careers</p>
          </div>
        </div>
        <div className="sm:col-span-1 col-span-2">
          <h4 className="font-bold text-xl h-20 text-[#F8955B]">Legal</h4>
          <div className="space-y-4">
            <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">404 Error Pages</p>
            <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Password Protected</p>
            <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Business Guide</p>
            <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Licensing</p>
            <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Online Community</p>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-2">
          <h4 className="font-bold text-xl h-20 text-[#F8955B]">Japan Agency</h4>
          <div className="space-y-4">
            <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">3F Mitaka Takagi Building, Musashino-shi,80-0006 Japan</p>
            <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Info@example.com</p>
            <p className="flex items-center gap-3"><Facebook className="bg-white hover:bg-[#f8955B] cursor-pointer stroke-black size-8 rounded-full p-[6px]" /> <InstagramIcon className="bg-white hover:bg-[#f8955B] cursor-pointer stroke-black size-8 rounded-full p-[6px]" /> <X className="bg-white hover:bg-[#f8955B] cursor-pointer stroke-black size-8 rounded-full p-[6px]" /> <Youtube className="bg-white hover:bg-[#f8955B] cursor-pointer stroke-black size-8 rounded-full p-[6px]" /></p>
          </div>
        </div>
=======
      <footer className="relative xl:h-[660px]" style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}>
        <div className="relative xl:h-[calc(100vh+660px)] xl:-top-[100vh]">
          <div className="px-5 md:pt-28 sm:pt-16 pt-10 pb-10 bg-black sticky xl:top-[calc(100vh-660px)] xl:h-[660px]">
            <div className="flex items-center justify-between border-none md:gap-10 sm:gap-6 gap-4 flex-wrap">
              <div className="flex items-center gap-10"><span className="md:text-6xl sm:text-4xl text-3xl font-bold" style={{ WebkitTextStrokeColor: "white", WebkitTextStrokeWidth: "2px" }}>DROP US A MAIL</span> <span className=""><Svgs.ArrowUpLong className={'md:size-14 sm:size-12 size-10 rotate-45 fill-[#F8955B]'} /></span></div>
              <Button className={'hover:!bg-white hover:!text-black'}>Get In Touch</Button>
            </div>
            <hr className="border-b border-solid border-white/40 my-10" />
            <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 text-white gap-10 ">
              <div className="col-span-2">
                <h2 className="font-bold text-4xl h-20">G.<span className="text-[#F8955B]">O</span>.A.<span className="text-[#F8955B]">T</span></h2>
                <p className="">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="">
                <h4 className="font-bold text-xl h-20 text-[#F8955B]">Company</h4>
                <div className="space-y-4">
                  <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Home</p>
                  <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Services</p>
                  <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Portfolio</p>
                  <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Contact</p>
                </div>
              </div>
              <div className="">
                <h4 className="font-bold text-xl h-20 text-[#F8955B]">Product</h4>
                <div className="space-y-4">
                  <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Integration</p>
                  <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Customers</p>
                  <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Case Studies</p>
                  <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Our Blog</p>
                  <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Careers</p>
                </div>
              </div>
              <div className="sm:col-span-1 col-span-2">
                <h4 className="font-bold text-xl h-20 text-[#F8955B]">Legal</h4>
                <div className="space-y-4">
                  <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">404 Error Pages</p>
                  <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Password Protected</p>
                  <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Business Guide</p>
                  <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Licensing</p>
                  <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Online Community</p>
                </div>
              </div>
              <div className="lg:col-span-1 col-span-2">
                <h4 className="font-bold text-xl h-20 text-[#F8955B]">Japan Agency</h4>
                <div className="space-y-4">
                  <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">3F Mitaka Takagi Building, Musashino-shi,80-0006 Japan</p>
                  <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Info@example.com</p>
                  <p className="flex items-center gap-3"><Facebook className="bg-white hover:bg-[#f8955B] cursor-pointer stroke-black size-8 rounded-full p-[6px]" /> <InstagramIcon className="bg-white hover:bg-[#f8955B] cursor-pointer stroke-black size-8 rounded-full p-[6px]" /> <X className="bg-white hover:bg-[#f8955B] cursor-pointer stroke-black size-8 rounded-full p-[6px]" /> <Youtube className="bg-white hover:bg-[#f8955B] cursor-pointer stroke-black size-8 rounded-full p-[6px]" /></p>
                </div>
              </div>
>>>>>>> 33a39bc6a16325e941b45dcba74859f571deeee0

            </div>
            <hr className="border-b border-solid border-white/40 my-10" />
            <div className="flex items-center justify-between md:flex-row flex-col  gap-2 text-white">
              <p className="">All Right Reserved © 2024 <span className="cursor-pointer border-b w-fit">MetsoleTech </span></p>
              <p className="flex items-center gap-4">
                <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Privacy Policy</p>
                <p className="">/</p>
                <p className="cursor-pointer hover:text-[#f8955B] hover:border-b border-solid w-fit transition-all border-[#F8955B]">Terms & Conditions</p>
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
