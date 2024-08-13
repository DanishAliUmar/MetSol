import React from 'react';
import { Link } from 'react-router-dom';
import Svgs from '../Assets/svgs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import logo from '/Images/Logo/met sole logo-01.png';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between z-50 px-10 py-5 bg-gradient-to-b fixed w-full from-[#000] to-[#F2295B00]">
        <div className="w-16 h-auto object-contain"><img src={logo} alt="" /></div>
        <ul className="lg:flex hidden justify-center ">
          <li className="mx-4">
            <Link to="/" className="group hover:text-[#f8955b] text-white">Home<div className="rounded-[30px] bg-[#f8955b] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
          </li>
          <li className="mx-4">
            <Link to="/about-us" className="group hover:text-[#f8955b] text-white">About Us<div className="rounded-[30px] bg-[#f8955b] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
          </li>
          <li className="mx-4">
            <DropdownMenu>
              <DropdownMenuTrigger className='focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none'>
                <div className="group hover:text-[#f8955b] text-white">Services<div className ="rounded-[30px] bg-[#f8955b] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></div></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Our Services</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Branding</DropdownMenuItem>
                <DropdownMenuItem>Web Development</DropdownMenuItem>
                <DropdownMenuItem>Digital Marketing</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="mx-4">
            <Link to="/pricing-plan" className="group hover:text-[#f8955b] text-white">Pricing<div className="rounded-[30px] bg-[#f8955b] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
          </li>
          <li className="mx-4">
            <Link to="/contact-us" className="group hover:text-[#f8955b] text-white">Contact Us<div className="rounded-[30px] bg-[#f8955b] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
          </li>
        </ul>
        <div className="hidden support lg:flex items-center gap-2">
          <div className="whatsapp"><Svgs.Phone className={'w-10 h-10 p-2 fill-white rounded-full border-white border'} /></div>
          <div className="text-white">
            <p className="">Support Center</p>
            <h4 className="hover:text-[#f8955b] font-medium">+00-123-456-789</h4>
          </div>

        </div>
        <div className="lg:hidden block">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className={'w-fit h-fit !bg-transparent !border-none !outline-none'}><Svgs.Hambar className={'w-5 h-auto fill-white'} /></Button>
            </SheetTrigger>
            <SheetContent className={'flex items-center justify-between flex-col'}>
              <ul className="flex flex-col items-center justify-center font-bold space-y-10 flex-1">
                <li className="mx-4">
                  <Link to="/" className="group hover:text-[#f8955b]">Home<div className="rounded-[30px] bg-[#f8955b] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
                </li>
                <li className="mx-4">
                  <Link to="/about-us" className="group hover:text-[#f8955b]">About Us<div className="rounded-[30px] bg-[#f8955b] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
                </li>
                <li className="mx-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger className='focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none'>
                      <div className="group hover:text-[#f8955b]">Services<div className="rounded-[30px] bg-[#f8955b] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></div></DropdownMenuTrigger>
                    <DropdownMenuContent className={'text-center p-4 py-2'}>
                      <DropdownMenuLabel>Branding</DropdownMenuLabel>
                      <DropdownMenuLabel>Web Development</DropdownMenuLabel>
                      <DropdownMenuLabel>Digital Marketing</DropdownMenuLabel>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li className="mx-4">
                  <Link to="/pricing-plan" className="group hover:text-[#f8955b]">Pricing<div className="rounded-[30px] bg-[#f8955b] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
                </li>
                <li className="mx-4">
                  <Link to="/team-member" className="group hover:text-[#f8955b]">Team<div className="rounded-[30px] bg-[#f8955b] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
                </li>
              </ul>
              <SheetFooter>
                <SheetClose asChild>
                  <div className="support flex items-center gap-2">
                    <div className="whatsapp"><Svgs.Phone className={'w-10 h-10 p-2 fill-black rounded-full border-black border'} /></div>
                    <div className="text-black">
                      <p className="">Support Center</p>
                      <h4 className="hover:text-[#f8955b] font-medium">+00-123-456-789</h4>
                    </div>
                  </div>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
