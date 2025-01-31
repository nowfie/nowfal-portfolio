import { FaRegHandPeace } from "react-icons/fa6"
import Button from "../components/Button"

const HeroSectionAlt = () => {
  //style={{background: 'linear-gradient(to right, #000 0%, #000 50%, #1d1616 50%, #1d1616 100%)',}}
  return (
    <section 
    className="overflow-hidden space-y-10 relative pt-36  pb-10 md:pt-44 md:pb-24 flex-col flex justify-center items-center">
      <div
        className={`h-64 design absolute top-0 left-0 w-full ease-in-out transition-opacity duration-100`}
        style={{
          background: 'linear-gradient(to bottom, rgb(210 210 208 / 0.1) 0%, transparent 100%)',
        }}
      ></div>
      <div className="main !z-20">
        <div className="flex justify-center md:items-center gap-14">
          <div className="md:w-[75%] space-y-10">
            <div className="content flex flex-col  md:items-center space-y-10">
              <h5 className=' flex items-center text-xs font-semibold gap-2 text-paragraph uppercase tracking-widest'><FaRegHandPeace className={'!text-primary text-2xl'}/> welcome my friend</h5>
               <h1 className=' text-[56px] md:text-center uppercase !font-heading  leading-sm'>hello i&lsquo;m mohammed <span className=' !font-heading  text-primary'>nowfal,</span> fullstack developer</h1>
                <p className=' !mb-7 text-paragraph md:text-center capitalize leading-relaxed'>I develop web, mobile, and desktop applications, integrating AI for enhanced functionality. Committed to creating user-centric solutions with the latest technologies.</p>
            </div>
            <div className=" flex md:items-center md:justify-center gap-6">
                <Button item='download cv'/>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[102%] z-30 overflow-visible relative bg-primary rotate-[-5deg]  p-4">
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

export default HeroSectionAlt