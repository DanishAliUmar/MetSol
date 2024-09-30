import Svgs from "@/Assets/svgs";
import { Link } from "lucide-react";
import { Facebook, Instagram, InstagramIcon, X, Youtube } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="relative xl:h-[660px]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="relative xl:h-[calc(100vh+660px)] xl:-top-[100vh]">
        <div className="px-5 md:pt-28 sm:pt-16 pt-10 pb-10 bg-black sticky xl:top-[calc(100vh-660px)] xl:h-[660px]">
          <div className="flex items-center justify-between border-none md:gap-10 sm:gap-6 gap-4 flex-wrap">
            <div className="flex items-center gap-10"><span className="md:text-6xl sm:text-4xl text-3xl font-bold" style={{ WebkitTextStrokeColor: "white", WebkitTextStrokeWidth: "2px" }}>DROP US A MAIL</span> <span className=""><Svgs.ArrowUpLong className={'md:size-14 sm:size-12 size-10 rotate-45 fill-[#F8955B]'} /></span></div>
            <Button className={'hover:!bg-[#ffb200] !bg-[#004b86]'}>Get In Touch</Button>
          </div>
          <hr className="border-b border-solid border-white/40 my-10" />
          <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 text-white gap-10 ">
            <div className="col-span-2">
              <img src="public/Images/Logo/met sole logo-01.png" alt="" className="w-24 h-auto sm:w-32 md:w-40  lg:w-48 xl:w-32" />
              <p className="p-2">Crafting innovative digital solutions that illuminate your brand`s unique story.</p>
            </div>
            <div className="">
              <h4 className="font-bold text-xl h-20 text-[#F8955B]">Company</h4>
              <div className="space-y-4">
                <p className=" cursor-pointer group hover:text-[#ffb600] text-white">Home<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-[60px] transition-all duration-400"></div></p>
                <p className=" cursor-pointer group hover:text-[#ffb600] text-white">Services<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-[65px] transition-all duration-400"></div></p>
                <p className=" cursor-pointer group hover:text-[#ffb600] text-white">Portfolio<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-[65px] transition-all duration-400"></div></p> 
                <p className=" cursor-pointer group hover:text-[#ffb600] text-white">Contact Us<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-[90px] transition-all duration-400"></div></p>

              </div>
            </div>
            <div className="">
              <h4 className="font-bold text-xl h-20 text-[#F8955B]">Product</h4>
              <div className="space-y-4">
              <p className=" cursor-pointer group hover:text-[#ffb600] text-white">Integration<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-[60px] transition-all duration-400"></div></p>
              <p className=" cursor-pointer group hover:text-[#ffb600] text-white">Case Studies<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-[60px] transition-all duration-400"></div></p>
              <p className=" cursor-pointer group hover:text-[#ffb600] text-white">Our Blog<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-[60px] transition-all duration-400"></div></p>
              <p className=" cursor-pointer group hover:text-[#ffb600] text-white">Careers<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-[60px] transition-all duration-400"></div></p>
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
