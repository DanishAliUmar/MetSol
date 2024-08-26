import Svgs from "@/Assets/svgs";
import { Facebook, Instagram, X, Youtube } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="px-5 md:py-28 sm:py-16 py-10 bg-black">
      <div className="flex items-center justify-between gap-10">
        <div className="flex items-center gap-10"><span className="text-6xl font-bold" style={{WebkitTextStrokeColor:"white",WebkitTextStrokeWidth:"2px"}}>DROP US A MAIL</span> <span className=""><Svgs.ArrowUpLong className={'size-14 rotate-45 fill-[#F8955B]'}/></span></div>
        <Button className={'hover:!bg-white hover:!text-black'}>Get In Touch</Button>
      </div>
    </footer>
  );
};

export default Footer;
