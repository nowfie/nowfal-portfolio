import { FiArrowUpRight } from 'react-icons/fi'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import PrimaryScroll from '../animations/PrimaryScroll'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import ErrorMessage from '../components/ErrorMessage'

const Project = () => {
    const [select,setSelect] = useState('website')

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
        setErrorMessage(error.response.data?.message || `Error: ${error.response.status} - ${error.response.statusText}`);
        console.error('API Error:', error);
      })
    },[])

  const filteredData = data.filter((item)=>item.category == select)

  return (
    <section className=' space-y-6'>
          <Header name={'Our best works'} description={''}/>
          <div className="main space-y-9">
            <PrimaryScroll className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
              {['website','mobile app','desktop','ai'].map((item,index)=>(
                <button key={index} onClick={()=>setSelect(item)} className={` transition-all  duration-300 uppercase font-semibold text-xs p-3 rounded-lg tracking-widest ${item === select?' bg-primary':'bg-paragraph/10'}`}>{item}</button>
              ))}
            </PrimaryScroll>
      <AnimatePresence mode="wait">
            
            {data.length > 0 ? (
  filteredData.length > 0 ? (
    <div className="project-list columns-1 md:columns-2 lg:columns-3 gap-8">
        <motion.div
          key={select}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {filteredData.map((item, index) => (
            <PrimaryScroll key={index} delay={index / 10}>
              <Link
                to={`${item.title}`}
                className={`block ${index !== 0 ? "mt-8" : ""} group rounded-lg overflow-hidden relative`}
                aria-label={`Go to project ${index + 1}`}
              >
                <div className="!z-30 flex justify-between w-11/12 items-center absolute bottom-0 right-0 duration-300 opacity-0 translate-y-52 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 group-active:opacity-100 group-active:translate-y-0">
                  <h1 className="!font-heading uppercase text-2xl lg:text-3xl">{item.title}</h1>
                  <button className="hidden lg:w-[35%] w-[40%] !z-30 h-full rounded-lg group-hover:bg-primary group-hover:text-heading duration-300 ease-in-out bg-paragraph/10 p-4 lg:flex items-center justify-center flex-col uppercase tracking-widest text-xs font-semibold gap-8">
                    <FiArrowUpRight className="duration-300 ml-auto text-3xl lg:text-4xl" />
                    Read more
                  </button>
                </div>
                <div
                  style={{ background: "linear-gradient(to bottom, transparent 0%, black 100%)" }}
                  className="black-shade p-12 !z-10 duration-300 absolute bottom-0 left-0 w-full translate-y-52 group-hover:translate-y-0 group-focus:translate-y-0 group-active:translate-y-0"
                />
                <img
                  src={`${import.meta.env.VITE_API_URL}/${item.image}`}
                  alt={`Project ${index + 1} image`}
                  width={1000}
                  height={1000}
                  className="w-full h-full group-hover:scale-110 group-focus:scale-110 group-active:scale-110 duration-300 z-0"
                />
              </Link>
            </PrimaryScroll>
          ))}
        </motion.div>
    </div>
  ) : (
    <motion.div
          key={select}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
              <ErrorMessage>
                <h1 className=' capitalize'>{`${select} is not found`}</h1>
              </ErrorMessage>
              </motion.div>
            )
          ) : (
            <motion.div
            key={select}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <ErrorMessage>
              <h1 className=' capitalize'>{errorMessage || "Not found"}</h1>
            </ErrorMessage>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
    </section>
  )
}

export default Project