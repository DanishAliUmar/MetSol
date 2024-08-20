import React from 'react'

const AgencyServicesSingleCard = (props) => {
  return (
    <div className='w-full flex-[2] h-[540px] bg-cover bg-no-repeat bg-center rounded-xl overflow-hidden hover:flex-[4] custom_transition ' style={{backgroundImage: `url(${props.image})` }}>
        <div className='h-full w-full bg-black/40 custom_transition p-7 group custom_transition'>
            <div className=' overflow-hidden h-0 group-hover:h-full flex flex-col justify-end custom_transition'>
                <p className='text-white max-w-[320px] w-full '>{props.text}</p>
                <button className='mt-4 custom_transition rounded-full max-w-max px-10 py-3 flex items-center justify-center bg-[#f8955b] cursor-pointer hover:bg-black text-white '>
                    Know More
                </button>
            </div>
        </div>
    </div>
  )
}

export default AgencyServicesSingleCard
// https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-3.jpg