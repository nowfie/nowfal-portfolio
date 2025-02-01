import { ParallaxProvider } from "react-scroll-parallax"
import AboutSection from "../sections/AboutSection"
import BlogSection from "../sections/BlogSection"
import ContactSection from "../sections/ContactSection"
import HeroSection from "../sections/HeroSection"
import ProjectSection from "../sections/ProjectSection"
import RecordSection from "../sections/RecordSection"
import ServiceSection from "../sections/ServiceSection"

const Home = () => {
  
  return (
    <ParallaxProvider className=''>
        <HeroSection/>
        <AboutSection/>
        <RecordSection/>
        <ServiceSection/>
        <ProjectSection/>
        <BlogSection/>
        <ContactSection/>
    </ParallaxProvider>
  )
}

export default Home