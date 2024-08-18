import React from 'react'
import Svgs from '@/Assets/svgs';
import Contact from '/Images/Contact/Contact.jpg';
import Contactimage2 from '/Images/Contact/Contactimage2.jpg';



const ContactUs = () => {
    return (
        <>
            <div className="flex flex-col w-full bg-cover bg-center bg-no-repeat items-center justify-center relative">
                <img
                    src={Contact}
                    className=" inset-0 w-full h-96 object-cover z-0"
                    alt="Contact Us Page"
                />
                <div className="  z-10 flex flex-col items-center justify-center">
                    <h1 className=" text-Black text-4xl font-bold  text-[#004a8e]">Contact Us</h1>
                    <h2 className=" text-Black font-normal mt-2 text-[#004a8e]">Home / Contact Us</h2>
                </div>
                <div className="flex flex-row justify-between items-center pt-16">
                    <div className="flex flex-col items-start justify-evenly w-full pl-14">
                        <h3 className='text-[#fae951] text-xl font-semibold'>Contact Us</h3>
                        <h1 className='text-[#fae951] text-4xl font-bold'>Reach Us For Instant Service</h1>
                    </div>
                    <div className="flex items-start md:gap-7 gap-3 md:pl-10 ">
                        <Svgs.Play className={'fill-[#fae951] size-16 !h-10 rotate-90'} />
                        <p className="sm:min-w-80 lg:pr-0 md:pr-20 text-black">Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Egestas fringilla phasellus faucibus scelerisque. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Facilisis gravida neque convallis a. Phasellus vestibulum lorem sed risus ultricies tristique.</p>
                    </div>
                </div>
                <div className="flex justify-evenly items-between">
                <div className="form"></div>
                <div className="flex flex-col justify-between items-start bg-[#fae951] w-full p-10 rounded-lg">
                <h1 className="font-bold text-3xl pb-4 text-[#004a8e]"> Let's Talk !</h1>
                <img
                    src={Contactimage2}
                    className=" inset-0 w-full h-64 rounded-md object-cover z-0"
                    alt="Contact Us Page"
                />
                <h1 className="font-bold text-2xl pb-4 text-[#004a8e]">Inquiries</h1>
                <div className="flex justifybetween item-center">
                    <p></p>
                </div>

                </div>
                </div>
            </div>


        </>
    )
}

export default ContactUs
