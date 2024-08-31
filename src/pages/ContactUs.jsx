import React from 'react'
import Svgs from '@/Assets/svgs';
import Contact from '/Images/Contact/Contact.jpg';
import Contactimage2 from '/Images/Contact/Contactimage2.jpg';
import contactPerson from '/Images/assets/contact-page-image-1.jpg';
import HeaderLayout from '@/components/SectionLayout/HeaderLayout';
import SectionLayout from '@/components/SectionLayout/SectionLayout';
import { Facebook, InstagramIcon, X, Youtube } from 'lucide-react';

const ContactUs = () => {


    return (
        <>
            <HeaderLayout heading={'Contact Us'} page={'Contact Us'} />
            <SectionLayout title={'Contact Us'} className={'bg-[#f6f6f6]'} mainHeading={'Reach Us For Instant Service'} subHeading={'Consectetur libero id faucibus nisl tincidunt eget. Sed augue lacus viverra vitae congue. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Nibh praesent tristique magna sit amet.Amet dictum sit amet justo donec.'} >
                <div className="flex items-center gap-10">
                    <div className="p-10 bg-slate-100 flex-1 h-40">

                    </div>
                    <div className="p-12 bg-[#F8955B] text-white space-y-4 w-[430px]">
                        <h2 className="text-5xl font-medium">Say Hello!</h2>
                        <p className="">Lectus sit amet est placerat in. Tempor orci eu lobortis elementum nibh.</p>
                        <img src={contactPerson} className='w-full h-auto object-cover' alt="" />
                        <h4 className="text-3xl font-medium">Inquiries</h4>
                        <div className="flex items-center gap-5">
                            <p className="">info@example.com</p>
                            <p className="">support@example.com</p>
                        </div>
                        <p className="flex items-center gap-3"><Facebook className="hover:bg-white border-white border bg-[#f8955B] cursor-pointer hover:stroke-[#f8955B] stroke-white size-8 rounded-full p-[6px]" /> <InstagramIcon className="hover:bg-white border-white border bg-[#f8955B] cursor-pointer hover:stroke-[#f8955B] stroke-white size-8 rounded-full p-[6px]" /> <X className="hover:bg-white border-white border bg-[#f8955B] cursor-pointer hover:stroke-[#f8955B] stroke-white size-8 rounded-full p-[6px]" /> <Youtube className="hover:bg-white border-white border bg-[#f8955B] cursor-pointer hover:stroke-[#f8955B] stroke-white size-8 rounded-full p-[6px]" /></p>
                    </div>
                </div>
            </SectionLayout>
        </>
    )
}

export default ContactUs
