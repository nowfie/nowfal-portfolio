import {motion} from 'framer-motion'
const strokeColor = "#CD512F";
//CD512F
//d2d2d099
const Photo = () => {
  return (
    <div className=' h-[120%] w-full relative'>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: 'easeIn' } }}
            className='flex flex-col justify-center items-end'
        >
            {/*---Image---*/}
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeInOut' } }}
            className=" hero-inner-image w-full mix-blend-lighten flex mx-auto">
                <img src="/hero.png" className=" !grayscale p-2 xl:p-0 object-contain rounded-full mx-auto" alt="nowfal" />
            </motion.div>
            {/*---Circle---*/}
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 506 506"
                className=" w-full lg:w-3/4 absolute"
                fill='transparent'
            >
                <motion.circle
                    cx={253}
                    cy={253}
                    r={250}
                    stroke={strokeColor}
                    strokeWidth={7}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: '24 10 0 0' }}
                    animate={{
                        strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                        rotate: [120, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }}
                />
            </motion.svg>
        </motion.div>
    </div>
  )
}

export default Photo