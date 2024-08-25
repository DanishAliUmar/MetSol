import React from 'react'

const FeaturedSingleCard = (props) => {
  return (
    <div className='rounded-2xl border border-black group cursor-grab px-8 py-16 custom_transition6s'>
        <svg
            className='h-28 w-28 group-hover:fill-[#004a86] fill-[black] custom_transition'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 200 200"
            xmlSpace="preserve"
        >
            <path d="M114.3,199H57.1v-56.1H1V85.7l28.5-28.5h27.6V29.5L85.7,1h57.2v56.1H199v57.2l-28.5,28.5h-27.6v27.6L114.3,199z M58.6,197.5 h55.1l27.6-27.6v-28.5h28.5l27.6-27.6V58.6h-56.1V2.5H86.3L58.6,30.1v28.5H30.1L2.5,86.3v55.1h56.1V197.5z"></path>
            <path d="M114,199H57.9l-0.7-0.7v-55.4H1.7L1,142.1V86l0.7-0.7h55.4V29.8l0.7-0.7H114l0.7,0.7v55.4h55.4l0.7,0.7v56.1l-0.7,0.7h-55.4 v55.4L114,199z M58.6,197.5h54.7v-55.4l0.7-0.7h55.4V86.7H114l-0.7-0.7V30.6H58.6V86l-0.7,0.7H2.5v54.7h55.4l0.7,0.7V197.5z"></path>
            <rect x="108.2" y="15" transform="matrix(0.7071 -0.7071 0.7071 0.7071 26.3568 95.1832)" width="39.7" height="1.5"></rect>
            <rect x="164.4" y="71.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 3.099 151.3324)" width="39.7" height="1.5"></rect>
            <rect x="108.2" y="43.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 6.505 103.406)" width="39.7" height="1.5"></rect>
            <rect x="108.2" y="71.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -13.3467 111.6289)" width="39.7" height="1.5"></rect>
            <rect x="136.3" y="71.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -5.1239 131.4807)" width="39.7" height="1.5"></rect>
            <rect x="24" y="71.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -38.0153 52.0736)" width="39.7" height="1.5"></rect>
            <rect x="108.2" y="155.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -72.902 136.2975)" width="39.7" height="1.5"></rect>
        </svg>
        <h3 className='text-black font-semibold text-3xl mt-6 group-hover:text-[#ffb600] custom_transition '>{props.title}</h3>
        <p className='text-[#757575] text-[17px] mt-7'>{props.heading}</p>
    </div>
  )
}

export default FeaturedSingleCard