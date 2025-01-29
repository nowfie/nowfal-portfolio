import Header from "../components/Header"
import BlogSection from "../sections/BlogSection"
import ProjectSection from "../sections/ProjectSection"

const About = () => {
  return (
    <section className=' space-y-2 overflow-x-hidden' >
        <Header name={'how to become a graphic designer in simple steps'} description={''}/>
        {/* <ProfileSection/> */}
        <ProjectSection/>
        <BlogSection/>
    </section>
  )
}

export default About