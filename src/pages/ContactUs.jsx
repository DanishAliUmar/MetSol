import React from 'react'

import Contact from '/Images/Contact/Contact.jpeg';


const ContactUs = () => {
    return (
        <>
<div className="absolute w-full !bg-cover !bg-center !bg-no-repeat p-10">

            <img src={Contact} className='absolute sm:left-24 -left-40 z-0 sm:scale-150 min-w-[1016px] max-w-[1300px] bg-cover h-[350px]' alt="Contact Us Page"  />
</div>

        </>
    )
}

export default ContactUs
