import React, { useMemo } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';
import splitStringUsingRegex from '../../utils/splitingUsingRegex';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OptimizedImage from '@/components/OptimizedImage';

const charVariants = {
    hidden: { opacity: 0, y: 20 },
    reveal: { 
        opacity: 1, 
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 20 }
    },
};

const HeaderLayout = ({ heading, page, bgImage }) => {
    const splitHeading = useMemo(() => splitStringUsingRegex(heading), [heading]);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.section 
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className='relative flex items-center justify-center flex-col h-96 text-white overflow-hidden'>
            
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <OptimizedImage
                    src={bgImage || "/Images/Contact/Contact.webp"}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Heading Text */}
            {heading && (
                <motion.h1
                    initial="hidden"
                    animate={inView ? 'reveal' : 'hidden'}
                    transition={{ staggerChildren: 0.03 }}
                    className='relative z-10 text-white font-semibold md:text-[40px] sm:text-3xl text-2xl mt-3 md:leading-[54px]'
                >
                    {splitHeading.map((char, index) => (
                        <motion.span key={index} variants={charVariants} style={{ display: 'inline-block' }}>
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>
            )}

            {/* Breadcrumb Navigation */}
            <Breadcrumb className='relative z-10 text-white'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link to={'/'}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <BreadcrumbLink className='text-white hover:text-[#004b86] font-medium'>
                                    Home
                                </BreadcrumbLink>
                            </motion.div>
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='text-white font-medium' />
                    <BreadcrumbItem>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 }}
                        >
                            <BreadcrumbPage className='text-[#ffb600] font-medium'>
                                {page}
                            </BreadcrumbPage>
                        </motion.div>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </motion.section>
    );
};

export default HeaderLayout;