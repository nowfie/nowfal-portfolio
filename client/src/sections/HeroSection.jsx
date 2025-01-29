import { FaRegHandPeace } from "react-icons/fa6"
import Button from "../components/Button"

const HeroSection = () => {
  return (
    <section className="overflow-hidden relative pt-36  pb-10 md:pt-44 md:pb-24 flex-col flex justify-center items-center">
      <div
        className={`h-64 design absolute top-0 left-0 w-full ease-in-out transition-opacity duration-100`}
        style={{
          background: 'linear-gradient(to bottom, rgb(210 210 208 / 0.1) 0%, transparent 100%)',
        }}
      ></div>
      <div className="main !z-20">
        <div className="flex flex-col xl:flex-row gap-14">
          <div className="xl:w-1/2 space-y-10">
            <div className="content space-y-10">
              <h5 className=' flex items-center text-xs font-semibold gap-2 text-paragraph uppercase tracking-widest'><FaRegHandPeace className={'!text-primary text-2xl'}/> welcome my friend</h5>
               <h1 className=' text-[56px] uppercase !font-heading  leading-sm'>hello i&lsquo;m <br /> mohammed <span className=' !font-heading  text-primary'>nowfal,</span> fullstack developer</h1>
              {/* <p className=' !mb-7 text-paragraph capitalize leading-relaxed'>I develop web, mobile, and desktop applications, integrating AI for enhanced functionality. Committed to creating user-centric solutions with the latest technologies.</p> */}
            </div>
            <div className=" flex items-center gap-6">
                <Button item='download cv'/>
            </div>
          </div>
          <div className="xl:w-[30%]">
          
          </div>
        </div>
      </div>
      <div className="w-[102%] overflow-visible relative bg-primary rotate-[-5deg] p-4">
        <div className="scrollable flex whitespace-nowrap">
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