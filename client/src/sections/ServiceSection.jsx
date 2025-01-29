import { FiArrowUpRight } from "react-icons/fi";
import PropType from 'prop-types'
import {serviceData} from '../utils/staticData'
import PrimaryScroll from '../animations/PrimaryScroll';
import { Link } from "react-router-dom";
const ServiceSection = () => {
    const ServiceBox = ({item,index}) =>{
        return(
            <div className={`group cursor-pointer flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between ${index == 0 ? 'border-t pt-10' : ''} border-b border-paragraph/15 pb-12`}>
                <div className="lg:w-[80%] space-y-8">
                    <PrimaryScroll delay={index/10}>
                    <h1 className='!font-heading text-heading text-3xl uppercase leading-normal'> {index+1}. {item.title}</h1>

                    </PrimaryScroll>
                    <PrimaryScroll delay={index/10} className="border-l-[4px] border-primary pl-8">
                        <p className=' text-paragraph leading-relaxed text-base lg:w-3/4'>{item.description}</p>
                    </PrimaryScroll>
                </div>
                <PrimaryScroll className=" ">
                    <Link to={`/service/${item.name}`} className=' rounded-lg group-hover:bg-primary group-hover:text-heading duration-300 ease-in-out bg-paragraph/10 p-5 flex flex-row-reverse items-center lg:flex-col w-fit uppercase tracking-widest text-xs font-semibold gap-5'> <FiArrowUpRight className=' duration-300 ml-auto text-lg lg:text-4xl group-hover:rotate-45' /> read more</Link>
                </PrimaryScroll>
            </div>
        )
    }

    ServiceBox.propTypes = {
        item:PropType.object,
        index: PropType.number
    }

  return (
    <section className='py-12 lg:py-16 overflow-x-hidden' >
      <div className="main space-y-20">
        <div className="header flex flex-col gap-9">
            <PrimaryScroll>
                <h5 className=' flex items-center text-xs font-semibold gap-2 text-paragraph uppercase tracking-widest'>my services</h5>
            </PrimaryScroll>
            <PrimaryScroll>
                <h1 className=' uppercase !font-heading heading'> We generate <span className=' text-primary !font-heading'>unique</span> ideas</h1>
            </PrimaryScroll>
        </div>
        <div className="project-list space-y-8">
            {serviceData.map((item,index)=>(
                <ServiceBox item={item} index={index} key={index}/>
            ))}
        </div>
        
      </div>
    </section>
  )
}

export default ServiceSection