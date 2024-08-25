import React from 'react'

const PortfolioSingleCard = (props) => {
  return (
    <div className='flex rounded-xl overflow-hidden'>
        <div className="w-1/2 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${props.image})` }}></div>
        <div className="w-1/2 p-8 bg-white">
            <h4 className='hover:text-[#004a86] custom_transition cursor-default select-none font-semibold text-2xl text-[#ffb600]'>{props.title}</h4>
            <p className='mt-3 text-black '>{props.heading}</p>
            <button className='mt-5 custom_transition rounded-full max-w-max px-10 py-3 flex items-center justify-center bg-[#004a86] cursor-pointer hover:bg-[#ffb600] text-white '>
                View Details
            </button>
        </div>
    </div>
  )
}

export default PortfolioSingleCard