import React from 'react'
import Svgs from '@/Assets/svgs';
import Contact from '/Images/Contact/Contact.jpg';
import Contactimage2 from '/Images/Contact/Contactimage2.jpg';
import HeaderLayout from '@/components/SectionLayout/HeaderLayout';
import SectionLayout from '@/components/SectionLayout/SectionLayout';



const ContactUs = () => {
    return (
        <>
          <HeaderLayout heading={'Contact Us'} page={'Contact Us'}/>
          <SectionLayout title={'Contact Us'} className={'bg-[#f6f6f6]'} mainHeading={'Reach Us For Instant Service'} subHeading={'Consectetur libero id faucibus nisl tincidunt eget. Sed augue lacus viverra vitae congue. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Nibh praesent tristique magna sit amet.Amet dictum sit amet justo donec.'} >
            <div className="flex items-center gap-10">
                <div className="p-12">
                    <h2 className="">Say Hello!</h2>
                    <p className="">Lectus sit amet est placerat in. Tempor orci eu lobortis elementum nibh.</p>
                    <img src="" alt="" />
                    <h4 className="">Inquiries</h4>
                    <div className="flex items-center gap-20">
                        <p className="">info@example.com</p>
                        <p className="">contact-us@example.com</p>
                        <p className="">support@example.com</p>
                    </div>
                </div>
            </div>
          </SectionLayout>
        </>
    )
}

export default ContactUs
