import axios from 'axios'
import PropTypes from 'prop-types'
import  { useEffect, useState } from 'react'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import PrimaryScroll from '../animations/PrimaryScroll'
import { Link } from 'react-router-dom'

const ProjectSection = () => {

  const [data,setData] = useState([])
  const [errorMessage,setErrorMessage] = useState('')
  
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/project`).then((res)=>{
      if(res.status === 200 && Array.isArray(res.data.data)){
        setData(res.data.data)
      }else{
        setErrorMessage(res.data.message || 'Unexpected response from server');
      }
    }).catch((error)=>{
      setErrorMessage('Failed to fetch data. Please try again later.');
      console.error('API Error:', error);
    })
  },[])


  const ProjectBox = ({ index, item }) => {
    return (
      <PrimaryScroll delay={index / 10}>
        <Link
          key={index}
          to={`/project/${item.title}`}
          className={`block ${index !== 0 ? ' mt-8' : ''} group rounded-lg overflow-hidden relative`}
          aria-label={`Go to project ${index + 1}`}
        >
          <div className="!z-30 flex justify-between w-11/12 items-center absolute bottom-0 right-0 duration-300 opacity-0 translate-y-52 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 group-active:opacity-100 group-active:translate-y-0">
            <h1 className="!font-heading uppercase text-2xl lg:text-3xl">{item.title}</h1>
            <button className="hidden lg:w-[25%] w-[40%] !z-30 h-full rounded-lg group-hover:bg-primary group-hover:text-heading duration-300 ease-in-out bg-paragraph/10 p-4 lg:flex items-center justify-center flex-col uppercase tracking-widest text-xs font-semibold gap-8">
              <FiArrowUpRight className="duration-300 ml-auto text-3xl lg:text-4xl" />
              read more
            </button>
          </div>
          <div style={{ background: 'linear-gradient(to bottom, transparent 0%, black 100%)' }} className="black-shade p-12 !z-10 duration-300 absolute bottom-0 left-0 w-full translate-y-52 group-hover:translate-y-0 group-focus:translate-y-0 group-active:translate-y-0" />
          <img
            src={`${import.meta.env.VITE_API_URL}/${item.image}`}
            alt={`Project ${index + 1} image`}
            width={1000}
            height={1000}
            className="w-full h-full group-hover:scale-110 group-focus:scale-110 group-active:scale-110 duration-300 z-0"
          />
        </Link>
      </PrimaryScroll>
    );
  };
  


  ProjectBox.propTypes = {
    index:PropTypes.number,
    item:PropTypes.object
  }

  return (
    <section id='portfolio' className=' snap-start py-12 lg:py-16 overflow-x-hidden' >
      <div className="main space-y-20">
        <div className="header flex flex-col lg:flex-row gap-9 justify-between items-baseline">
          <div className="flex flex-col gap-9 justify-between items-baseline">
            <PrimaryScroll>
              <h5 className=' flex items-center text-xs font-semibold gap-2 text-paragraph uppercase tracking-widest'>portfolio</h5>  
            </PrimaryScroll>
            <PrimaryScroll>
              <h1 className=' uppercase !font-heading heading'>Designing a <span className=' text-primary !font-heading'>Better</span> <br className=' hidden lg:hidden' /> World Today</h1>
            </PrimaryScroll>
          </div>
          <PrimaryScroll className={'mt-auto'}>
            <Link to={'/project'} className='font-semibold text-heading uppercase tracking-widest text-xs flex items-center gap-5'>view all <FiArrowRight className=' text-lg'/> </Link>
          </PrimaryScroll>
        </div>
        {/* <div className="project-list grid grid-cols-1 gap-8 md:grid-cols-2"> */}
        <div className="project-list columns-1 md:columns-2 gap-8">
          {data.length>0?(
            data.map((item, index) => (
              <ProjectBox index={index} item={item} key={index}/>
            ))
          ):(
            <h1>{errorMessage || 'projects are not available'}</h1>
          )}
        </div>
        <PrimaryScroll scale={.98} className="conclusion flex flex-col gap-8 justify-between lg:flex-row">
            <div className="border-l-[4px] border-primary pl-5">
              <p className=' text-paragraph leading-relaxed text-base lg:w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempora rem unde excepturi ut nesciunt, doloribus mollitia atque sit vitae.</p>
            </div>
            <Link to={'/project'} className=' bg-primary rounded-full lg:m-auto text-center w-fit font-semibold uppercase text-xs tracking-widest px-5 py-3 hover:scale-105 focus:scale-105 active:scale-105 duration-300'>view all projects</Link>
        </PrimaryScroll>
      </div>
    </section>
  )
}

export default ProjectSection