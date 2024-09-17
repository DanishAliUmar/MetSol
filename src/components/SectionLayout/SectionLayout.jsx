import Svgs from "@/Assets/svgs"
import splitStringUsingRegex from '../../utils/splitingUsingRegex'
import { motion } from 'framer-motion'
const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
}

// const SectionReveal = {
//     hidden: { opacity: 0 },
//     reveal: { opacity: 1 },
// }
const SectionLayout = ({ className, title, mainHeading, circle, triangle, subHeading, children }) => {
    const splitTitle = splitStringUsingRegex(title)
    const splitHeading = splitStringUsingRegex(mainHeading)
    const splitSubHeading = splitStringUsingRegex(subHeading)
    return (
        <section className={`px-5 md:py-28 sm:py-16 py-10 md:space-y-20 sm:space-y-16 space-y-10 ${className ? className : ''}`}>
            <div className='flex items-center md:gap-14 gap-5 lg:flex-row flex-col'>
                <div className='flex-1'>
                    {title &&
                        <motion.p initial='hidden' whileInView={'reveal'} transition={{ staggerChildren: .02 }} className='text-[#ffb600] md:text-base text-sm font-semibold uppercase'>{splitTitle.map((char) => [
                            <motion.span key={char} transition={{ duration: 0.0001 }} variants={charVariants}>
                                {char}
                            </motion.span>
                        ])}</motion.p>
                    }
                    {mainHeading &&
                        <motion.h3 initial='hidden' whileInView={'reveal'} transition={{ staggerChildren: .02 }} className=' text-[#004a86] font-semibold md:text-[40px] sm:text-3xl text-2xl mt-3 md:leading-[54px] ' >{splitHeading.map((char) => [
                            <motion.span key={char} transition={{ duration: 0.0001 }} variants={charVariants}>
                                {char}
                            </motion.span>
                        ])}</motion.h3>
                    }
                </div>
                <div className='flex-1 relative'>
                    {circle &&
                        <div className='lg:flex items-center justify-center absolute -top-10 w-full z-0 hidden'>
                            <div className='rounded-full bg-[#eeeeee] h-[170px] w-[170px]'></div>
                        </div>
                    }
                    {subHeading &&
                        <div className="flex !items-start  flex-1 gap-3 " style={{ alignItems: "flex-start" }}>
                            <Svgs.Play className={'fill-[#fae951] size-28 h-[2rem] -rotate-[30deg]'} />
                            <motion.p initial='hidden' whileInView={'reveal'} transition={{ staggerChildren: .02 }} className='text-[#757575]  z-50 relative md:text-base text-sm'>{splitSubHeading.map((char) => [
                                <motion.span key={char} transition={{ duration: 0.005 }} variants={charVariants}>
                                    {char}
                                </motion.span>
                            ])}</motion.p>
                        </div>
                    }
                </div>
            </div>
            {children}
        </section >
    )
}

export default SectionLayout
