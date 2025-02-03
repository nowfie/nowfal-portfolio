import { FiArrowUpRight } from 'react-icons/fi'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import PrimaryScroll from '../animations/PrimaryScroll'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import ErrorMessage from '../components/ErrorMessage'
import { Helmet } from 'react-helmet-async'

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
      <Helmet>
        {/* ✅ Basic SEO */}
        <title>Our Best Projects - Nowfal.dev</title>
        <meta name="description" content="Explore our best projects, including web development, mobile apps, desktop applications, and AI solutions. Innovative and high-quality results." />
        <meta name="keywords" content="projects, web development, mobile apps, AI, desktop applications, innovative software development, Nowfal" />
        <meta name="author" content="Mohammed Nowfal" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="7 days" />

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://nowfal.dev/projects" />

        {/* ✅ Open Graph Meta Tags (For Facebook, LinkedIn, Instagram, GitHub) */}
        <meta property="og:title" content="Our Best Projects - Nowfal.dev" />
        <meta property="og:description" content="Explore our best projects, including web development, mobile apps, desktop applications, and AI solutions. Innovative and high-quality results." />
        <meta property="og:image" content="https://nowfal.dev/path-to-image.jpg" />
        <meta property="og:url" content="https://nowfal.dev/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nowfal.dev" />
        <meta property="og:locale" content="en_US" />

        {/* ✅ Twitter Card (For Twitter Sharing) */}
        <meta name="twitter:title" content="Our Best Projects - Nowfal.dev" />
        <meta name="twitter:description" content="Explore our best projects, including web development, mobile apps, desktop applications, and AI solutions. Innovative and high-quality results." />
        <meta name="twitter:image" content="https://nowfal.dev/path-to-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:creator" content="@yourtwitterhandle" />

        {/* ✅ LinkedIn Meta Tags (Uses Open Graph) */}
        <meta property="og:image" content="https://nowfal.dev/path-to-image.jpg" />
        <meta property="og:image:secure_url" content="https://nowfal.dev/path-to-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* ✅ GitHub & Instagram Meta Tags (Uses Open Graph) */}
        <meta property="og:image" content="https://nowfal.dev/path-to-image.jpg" />

        {/* ✅ Structured Data (JSON-LD for SEO) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Our Best Projects - Nowfal.dev",
            "url": "https://nowfal.dev/projects",
            "author": {
              "@type": "Person",
              "name": "Mohammed Nowfal"
            },
            "description": "Explore our best projects, including web development, mobile apps, desktop applications, and AI solutions. Innovative and high-quality results.",
            "image": "https://nowfal.dev/path-to-image.jpg",
            "publisher": {
              "@type": "Organization",
              "name": "Nowfal.dev",
              "logo": {
                "@type": "ImageObject",
                "url": "https://nowfal.dev/favicon.ico"
              }
            }
          })}
        </script>

        {/* ✅ Favicon & Apple Touch Icons */}
        <link rel="icon" href="https://nowfal.dev/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://nowfal.dev/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://nowfal.dev/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://nowfal.dev/favicon-16x16.png" />

        {/* ✅ Sitemap & Robots.txt for SEO Crawling */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="https://nowfal.dev/sitemap.xml" />
        <link rel="robots" href="https://nowfal.dev/robots.txt" />

        {/* ✅ Google Site Verification */}
        <meta name="google-site-verification" content="your-google-verification-code" />

        {/* ✅ Bing Site Verification */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />

        {/* ✅ Extra Meta Tags */}
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* ✅ External Scripts (Google Analytics, etc.) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_GA_TRACKING_ID');`}
        </script>

      </Helmet>
          <Header name={'Our best works'} description={''}/>
          <div className="main space-y-9">
            <PrimaryScroll className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
              {['website','mobile app','desktop','ai'].map((item,index)=>(
                <button key={index} onClick={()=>setSelect(item)} className={` transition-all  duration-300 uppercase font-semibold text-xs p-3 rounded-lg tracking-widest ${item === select?' bg-primary':'bg-boxground'}`}>{item}</button>
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
                  <button className="hidden lg:w-[35%] w-[40%] !z-30 h-full rounded-lg group-hover:bg-primary group-hover:text-heading duration-300 ease-in-out bg-boxground p-4 lg:flex items-center justify-center flex-col uppercase tracking-widest text-xs font-semibold gap-8">
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