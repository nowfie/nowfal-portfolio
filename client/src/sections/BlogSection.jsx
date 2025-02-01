import  { useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios'
import PrimaryScroll from '../animations/PrimaryScroll';
import { Link } from 'react-router-dom';

const BlogSection = () => {

  const [data,setData] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/blog`).then((res)=>{
      if(res.status === 200 && Array.isArray(res.data.data)){
        setData(res.data.data)
      }else{
        setErrorMessage(res.data.message || 'Unexpected response from server');
      }
    }).catch((error) => {
      setErrorMessage('Failed to fetch data. Please try again later.');
      console.error('API Error:', error);
    });
  },[])

  const BlogBox = ({item}) =>{
    return(
    <PrimaryScroll>
      <Link to={`/blog/${item.title}`} className={` flex flex-col relative group gap-8`}>
        <div className=" z-30 snap-start absolute top-0 flex justify-between p-5 left-0 w-full">
          <h3 className=' !bg-heading !text-background py-3 px-5 uppercase font-semibold text-xs tracking-widest rounded-full'>design</h3>
          <h3 className=' bg-background text-heading  py-3 px-5 uppercase font-semibold text-xs tracking-widest  rounded-full'>11.05.2025</h3>
        </div>
        <div className=" overflow-hidden rounded-lg">
          <img src={`${import.meta.env.VITE_API_URL}/${item.image}`} width={700} height={700} alt='blog-image' className=' duration-300 group-hover:scale-110 group-focus:scale-110 group-active:scale-110 w-full h-full'/>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className=" lg:w-[70%] space-y-4">
            <h1 className=' !font-heading text-2xl uppercase text-heading'>{item.title}</h1>
            <p className=' text-paragraph  capitalize leading-relaxed'>{item.description}</p>
          </div>
          <div className="hidden lg:block lg:w-[25%]">
            <button className=' w-fit lg:w-full h-full rounded-lg group-hover:bg-primary group-focus:bg-primary group-active:bg-primary group-hover:text-heading group-focus:text-heading group-active:text-heading duration-300 ease-in-out bg-paragraph/10 p-4 flex items-center justify-center flex-col uppercase tracking-widest text-xs font-semibold gap-8'> <FiArrowUpRight className=' duration-300 ml-auto text-4xl group-hover:rotate-45 group-focus:rotate-45 group-active:rotate-45' /> read more</button>
          </div>
        </div>
      </Link>
    </PrimaryScroll>
  )}

  BlogBox.propTypes = {
    index:PropTypes.number,
    item:PropTypes.object
  }

  return (
    <section id='blog' className='py-12 snap-start lg:py-16  overflow-x-hidden' >
      <div className="main space-y-20">
        <div className="header  flex flex-col gap-9">
            <PrimaryScroll>
              <h5 className=' flex items-center text-xs font-semibold gap-2 text-paragraph uppercase tracking-widest'>news letter</h5>
            </PrimaryScroll>
            <PrimaryScroll>
              <h1 className=' uppercase !font-heading heading'>latest from <span className=' text-primary !font-heading'>blog</span></h1>
            </PrimaryScroll>
        </div>
        {/* <div className=" grid grid-cols-1 gap-10 md:grid-cols-2 ">
           {Array.from({length:2}).map((item,index)=>(
            <BlogBox key={index}/>
           ))}
        </div> */}
        <div className="transition-all relative w-full duration-300 text-heading">
          {data.length>0?(
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
              //!h-[25rem] md:!h-[35rem] lg:!h-[27rem] xl:!h-full
            }}
            className=" !overflow-visible"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className='  !overflow-hidden'>
                <BlogBox item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          ):(
            <h1>{errorMessage || 'No data found'}</h1>
          )}
        </div> 
      </div>
    </section>
  )
}

export default BlogSection