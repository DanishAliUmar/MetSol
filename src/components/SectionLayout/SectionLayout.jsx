import Svgs from "@/Assets/svgs"

const SectionLayout = ({ className, title, mainHeading, circle, triangle, subHeading, children }) => {
    return (
        <section className={`px-5 md:py-28 sm:py-16 py-10 md:space-y-20 sm:space-y-16 space-y-10 ${className ? className : ''}`}>
            <div className='flex items-center md:gap-14 gap-5 lg:flex-row flex-col'>
                <div className='flex-1'>
                    {title &&
                        <p className='text-[#ffb600] md:text-base text-sm font-semibold uppercase '>{title}</p>
                    }
                    {mainHeading &&
                        <h3 className=' text-[#004a86] font-bold md:text-[28px] sm:text-3xl text-2xl mt-1 md:leading-[54px] '>{mainHeading}</h3>
                    }
                </div>
                <div className='flex-1 relative'>
                    {circle &&
                        <div className='lg:flex items-center justify-center absolute -top-10 w-full z-0 hidden'>
                            <div className='rounded-full bg-[#eeeeee] h-[170px] w-[170px]'></div>
                        </div>
                    }
                    {subHeading &&
                        <div className="flex !items-start  flex-1 gap-3 " style={{alignItems:"flex-start"}}>
                            <Svgs.Play className={'fill-[#fae951] size-28 h-[2rem] -rotate-[30deg]'} />
                            <p className='text-[#757575]  z-50 relative md:text-base text-sm'>{subHeading}</p>
                        </div>
                    }
                </div>
            </div>
            {children}
        </section >
    )
}

export default SectionLayout
