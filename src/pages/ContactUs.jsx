import React from 'react'
import Svgs from '@/Assets/svgs'

import Contact from '/Images/Contact/Contact.jpg';


const ContactUs = () => {
    return (
        <>
            <div className="flex flex-col w-full bg-cover bg-center bg-no-repeat items-center justify-center relative">
                <img
                    src={Contact}
                    className=" inset-0 w-full h-96 object-cover z-0"
                    alt="Contact Us Page"
                />
                <div className="absolute z-10 flex flex-col items-center justify-center">
                    <h1 className=" text-white text-4xl font-bold">Contact Us</h1>
                    <h2 className=" text-white font-normal mt-2">Home / Contact Us</h2>
                </div>
                <div className="flex flex-row justify-between items-center"> 
                    <div className="flex flex-col items-center justify-evenly ">Left
                    <div className="flex items-start md:gap-7 gap-3 md:pl-10">
                        <Svgs.Play className={'fill-[#fae951] size-16 !h-10 rotate-90'} />
                        <p className="sm:min-w-80 lg:pr-0 md:pr-20 text-black">Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Egestas fringilla phasellus faucibus scelerisque. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Facilisis gravida neque convallis a. Phasellus vestibulum lorem sed risus ultricies tristique.            </p>
                    </div>
                    </div>
                    <div className="flex flex-col items-center justify-evenly">Right
                        <div className="flex items-start md:gap-7 gap-3 md:pl-10">
                        <Svgs.Play className={'fill-[#fae951] size-16 !h-10 rotate-90'} />
                        <p className="sm:min-w-80 lg:pr-0 md:pr-20 text-black">Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Egestas fringilla phasellus faucibus scelerisque. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Facilisis gravida neque convallis a. Phasellus vestibulum lorem sed risus ultricies tristique.            </p>
                    </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ContactUs
