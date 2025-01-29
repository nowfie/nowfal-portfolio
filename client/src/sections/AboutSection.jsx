import { Link } from "react-router-dom"
import PrimaryScroll from "../animations/PrimaryScroll"

const AboutSection = () => {


  return (
    <section className=' pt-12 pb-1 lg:pt-16 lg:pb-12 overflow-x-hidden'>
      <div className="main">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 space-y-10">
            <PrimaryScroll >
              <h1 className=' !font-heading text-heading heading uppercase'>story <br /> about <span className="text-primary !font-heading">me</span></h1>
            </PrimaryScroll>
            <PrimaryScroll className={'border-l-[4px] border-primary pl-5'} >
              <p className=' text-paragraph leading-relaxed text-base lg:w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempora rem unde excepturi ut nesciunt, doloribus mollitia atque sit vitae. 
              <Link href={'/about'} className=' text-primary  underline-offset-8 italic !mt-5'> read more</Link>
               </p>
            </PrimaryScroll>
          </div>
          <div className="lg:w-1/2">
            <ul className=' space-y-8'>
              {Array.from({length:2}).map((item,index)=>(
                <PrimaryScroll key={index} delay={index/10} >
                  <li className=' leading-relaxed text-paragraph' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit delectus, porro dicta quam est sapiente iste dolor earum sed! Eius, aut, cumque culpa sint voluptates tenetur suscipit, mollitia laborum laboriosam consequuntur accusantium doloribus quod.</li>
                </PrimaryScroll>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection