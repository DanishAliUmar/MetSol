import React from 'react'
import { Button } from './ui/button'

const PortfolioSingleCard = (props) => {
  return (
    <div className='flex lg:flex-row flex-col rounded-xl overflow-hidden'>
      <div className="lg:w-1/2 w-full min-h-[250px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${props.image})` }}></div>
      <div className="lg:w-1/2 w-full p-8 bg-white">
        <h4 className='text-[#f8955b] custom_transition cursor-default select-none font-semibold text-2xl '>{props.title}</h4>
        <p className='mt-3 text-black py-5 text-sm'>{props.heading}</p>
        <Button>
          View Details
        </Button>
      </div>
    </div>
  )
}

export default PortfolioSingleCard