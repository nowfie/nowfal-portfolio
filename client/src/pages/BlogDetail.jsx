import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import PrimaryScroll from '../animations/PrimaryScroll'
import BlogSection from '../sections/BlogSection'
import BlogDetailSection from '../sections/BlogDetailSection'
import { useEffect, useState } from 'react'
import ContactSection from '../sections/ContactSection'
import { Helmet } from 'react-helmet-async'

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
      setErrorMessage(error.response.data?.message || `Error: ${error.response.status} - ${error.response.statusText}`);
      console.error('API Error:', errorMessage || error);
    })
  },[name,errorMessage])

  
  if (!data) {
    return <div className='pt-32 text-heaing flex justify-center items-center'>
      <h1 className=' text-heading'>Loading..</h1>
    </div>;
  }
  
  const pageTitle = `${data.title} | My Blog`
  const pageDescription = data.description || 'Read this insightful blog post on My Blog!'
  const pageUrl = `${import.meta.env.VITE_SITE_URL}/blog/${name}`
  const pageImage = `${import.meta.env.VITE_API_URL}/${data.image}`


  return (
    <section className=' space-y-2'>
       <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="blog, technology, AI, programming, news, articles" />
        <meta name="author" content="My Blog" />
        
        {/* Open Graph Meta Tags (For Facebook, LinkedIn, etc.) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:site_name" content="My Blog" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:site" content="@myblog" />
        <meta name="twitter:creator" content="@myblog" />

        {/* Canonical Link */}
        <link rel="canonical" href={pageUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data for SEO (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": pageTitle,
            "description": pageDescription,
            "image": pageImage,
            "url": pageUrl,
            "datePublished": data.publishedAt,
            "author": {
              "@type": "Person",
              "name": "My Blog"
            }
          })}
        </script>
      </Helmet>
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