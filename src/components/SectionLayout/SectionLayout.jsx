import Svgs from "@/Assets/svgs";
import splitStringUsingRegex from "../../utils/splitingUsingRegex";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const charVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: 15, x: -50 },
  reveal: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const SectionLayout = ({
  className,
  title,
  mainHeading,
  circle,
  subHeading,
  children,
}) => {
  const splitTitle = splitStringUsingRegex(title);
  const splitHeading = splitStringUsingRegex(mainHeading);
  const splitSubHeading = splitStringUsingRegex(subHeading);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const revealVariants = {
    hidden: { opacity: 0, y: 50, clipPath: "inset(50% 50% 50% 50%)" },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={revealVariants}
      className={`px-5 md:py-28 sm:py-16 py-10 md:space-y-20 sm:space-y-16 space-y-10 ${className || ""}`}
    >
      <div className="flex items-center md:gap-14 gap-5 lg:flex-row flex-col">
        <div className="flex-1">
          {title && (
            <motion.p
              initial="hidden"
              animate={inView ? "reveal" : "hidden"}
              transition={{ staggerChildren: 0.05 }}
              className="text-[#ffb600] md:text-base text-sm font-semibold uppercase"
            >
              {splitTitle.map((char, index) => (
                <motion.span key={index} variants={charVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
          )}
          {mainHeading && (
            <motion.h3
              initial="hidden"
              animate={inView ? "reveal" : "hidden"}
              transition={{ staggerChildren: 0.03 }}
              className="text-[#004a86] font-semibold md:text-[40px] sm:text-3xl text-2xl mt-3 md:leading-[54px]"
            >
              {splitHeading.map((char, index) => (
                <motion.span key={index} variants={charVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h3>
          )}
        </div>
        <div className="flex-1 relative">
          {circle && (
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:flex items-center justify-center absolute -top-10 w-full z-0 hidden"
            >
              <div className="rounded-full bg-[#eeeeee] h-[170px] w-[170px]"></div>
            </motion.div>
          )}
          {subHeading && (
            <div className="flex !items-start flex-1 gap-3">
              <Svgs.Play className={"fill-[#fae951] size-28 h-[2rem] -rotate-[30deg]"} />
              <motion.p
                initial="hidden"
                animate={inView ? "reveal" : "hidden"}
                transition={{ staggerChildren: 0.05 }}
                className="text-[#757575] z-50 relative md:text-base text-sm"
              >
                {splitSubHeading.map((char, index) => (
                  <motion.span key={index} variants={charVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>
          )}
        </div>
      </div>
      {children}
    </motion.section>
  );
};

export default SectionLayout;
