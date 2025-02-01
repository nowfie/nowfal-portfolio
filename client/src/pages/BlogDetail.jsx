import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import PrimaryScroll from '../animations/PrimaryScroll'
import BlogSection from '../sections/BlogSection'
import BlogDetailSection from '../sections/BlogDetailSection'
import { useEffect, useState } from 'react'
import ContactSection from '../sections/ContactSection'

const BlogPage = () => {
  const { name } = useParams()

  const [data,setData] = useState()
  const [errorMessage,setErrorMessage] = useState('')
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/blog/${name}`).then((res)=>{
      if(res.status === 200){
        setData(res.data.data)
      }else{
        setErrorMessage(res.data.message || 'Unexpected response from server');
      }
    }).catch((error)=>{
      setErrorMessage('Failed to fetch data. Please try again later.');
      console.error('API Error:', errorMessage || error);
    })
  },[name,errorMessage])

  
  if (!data) {
    return <div className='pt-32 text-heaing flex justify-center items-center'>
      <h1 className=' text-heading'>Loading..</h1>
    </div>;
  }
  
  return (
    <section className=' space-y-2'>
        <Header name={name} description={''}/>
        <div className="main !mb-24 flex flex-col justify-center items-center gap-14">
            <PrimaryScroll className={'w-full'}>
              <img src={`${import.meta.env.VITE_API_URL}/${data.image}`} width={1000} height={1000} alt='blog-image' className=' rounded-lg w-full h-full'/>
            </PrimaryScroll>
            {/* <div className="xl:w-[75%] w-full"> */}
            <div className=" w-full">
            <BlogDetailSection data={data}/>
            </div>
        </div>
      <BlogSection/>
      <ContactSection/>
    </section>
  )
}



export default BlogPage