import { FaRegHandPeace } from "react-icons/fa6"
import Button from "../components/Button"
import {useParallax} from 'react-scroll-parallax'
import { useEffect, useMemo, useState } from "react"
const HeroSection = () => {

  const getTranslateX = () => {
    if (window.matchMedia("(max-width: 640px)").matches) {
      return [0, -50]; 
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
      return [0, -20];
    } else {
      return [0, -5];
    }
  };

  const [translateX, setTranslateX] = useState(getTranslateX());

  useEffect(() => {
    const handleResize = () => setTranslateX(getTranslateX());
    const mediaQueries = [
      window.matchMedia("(max-width: 640px)"),
      window.matchMedia("(max-width: 1024px)"),
    ];

    mediaQueries.forEach((mq) => mq.addEventListener("change", handleResize));

    return () => {
      mediaQueries.forEach((mq) => mq.removeEventListener("change", handleResize));
    };
  }, []);

  const parallaxConfig = useMemo(
    () => ({
      easing: "easeOutSine",
      translateX: translateX,
      shouldAlwaysCompleteAnimation: true,
    }),
    [translateX]
  );

  const { ref } = useParallax(parallaxConfig);
  

  return (
    <section id='hero'
    className="overflow-hidden h-screen snap-start relative pt-36  pb-10 md:pt-44 md:pb-24 flex-col flex justify-center items-center">
      <div
        className={`h-64 design absolute top-0 left-0 w-full ease-in-out transition-opacity duration-100`}
        style={{
          background: 'linear-gradient(to bottom, rgb(210 210 208 / 0.1) 0%, transparent 100%)',
        }}
      ></div>
      <div className="main !z-20">
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="lg:w-1/2 space-y-10">
            <div className="content space-y-10">
              <h5 className=' flex items-center text-xs font-semibold gap-2 text-paragraph uppercase tracking-widest'><FaRegHandPeace className={'!text-primary text-2xl'}/> welcome my friend</h5>
               <h1 className=' text-[56px] uppercase !font-heading  leading-sm'>hello i&lsquo;m <br /> mohammed <span className=' !font-heading  text-primary'>nowfal,</span> fullstack developer</h1>
              {/* <p className=' !mb-7 text-paragraph capitalize leading-relaxed'>I develop web, mobile, and desktop applications, integrating AI for enhanced functionality. Committed to creating user-centric solutions with the latest technologies.</p> */}
            </div>
            <div className=" flex items-center gap-6">
                <Button item='download cv'/>
            </div>
          </div>
          <div className="hero-image  lg:w-1/2  relative flex justify-end items-center ml-auto">
            <div className=" rounded-full h-[110%]  flex justify-center items-center relative overflow-hidden w-[85%]">
              <img src="hero.png" className=" grayscale-75 opacity-75 rotate-[3deg] absolute w-[80%] -top-16  h-fit" alt="" />
            </div>
            {/* <Photo/> */}
          </div>
        </div>
      </div>
      <div className="w-[102%] z-30 overflow-visible relative bg-primary rotate-[-5deg] p-4">
        <div ref={ref} className=" flex whitespace-nowrap">
            {[
            'web development',
            'mobile app development',
            'desktop app development',
            'artificial intelligence',
            'search engine optimization',
            ].map((item, index) => (
            <h1 key={`original-${index}`} className="text-heading !font-heading uppercase text-2xl inline-block mx-4">
                {item}
            </h1>
            ))}
            {[
            'web development',
            'mobile app development',
            'desktop app development',
            'artificial intelligence',
            'search engine optimization',
            ].map((item, index) => (
            <h1 key={`duplicate-${index}`} className="text-heading !font-heading uppercase text-2xl inline-block mx-4">
                {item}
            </h1>
            ))}
        </div>
        </div>

    </section>
  )
}

export default HeroSection