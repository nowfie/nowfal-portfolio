import {serviceData} from '../utils/staticData'
import PrimaryScroll from '../animations/PrimaryScroll'
import PropTypes from 'prop-types'
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import ContactSection from '../sections/ContactSection';
import { Helmet } from 'react-helmet-async';

const ServiceDetail = () => {
  const {name} = useParams()
  
  const service = serviceData.find((item) => item.name === name);

  if (!service) {
    return (
      <div className="py-16 bg-black">
        <h1 className="text-8xl text-white">Service not found</h1>
      </div>
    );
  }

  const FeaturesBox = ({item,index})=>{
    let Icon = item.icon
    return(
        <PrimaryScroll delay={index/10} className="p-6 space-y-5 bg-boxground rounded-lg">
          <Icon className=' text-4xl text-primary'/>
          <h1 className=' !font-heading capitalize text-xl'>{item.heading}</h1>
          <p className=' text-paragraph capitalize text-sm'>{item.description}</p>
        </PrimaryScroll>
      //   <div className={`  p-8 border space-y-8`}>
      //   <h1 className=' !font-heading capitalize text-3xl font-semibold'>{item.heading}</h1>
      //   <Icon className=' text-primary  text-5xl'/>
      //   <p className=' capitalize text-sm  font-medium text-heading'>{item.description}</p>
      // </div>
    )
  }

  FeaturesBox.propTypes = {
    item:PropTypes.object,
    index: PropTypes.number,
  }

  //  <Header name={service.title} description={service.description} />

  const pageTitle = `${service.title} - Our Services | Your Website Name`;
  const pageDescription = service.description || "Discover our services with top-notch solutions.";
  const pageUrl = `${window.location.origin}/services/${name}`;
  const pageImage = `${import.meta.env.VITE_API_URL}/${service.image}`; // Change this to a relevant image

  return (
    <main className=' space-y-8'>
       <Helmet>
        {/* Standard Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="services, web development, AI solutions, mobile apps, SEO" />
        <meta name="author" content="Mohammed Nowfal" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn, GitHub) */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Your Website Name" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:site" content="@yourTwitterHandle" />
        <meta name="twitter:creator" content="@yourTwitterHandle" />

        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.ico" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "url": pageUrl,
            "image": pageImage,
            "provider": {
              "@type": "Organization",
              "name": "Your Website Name",
              "url": "https://yourwebsite.com"
            }
          })}
        </script>
      </Helmet>
      <Header name={service.title} description={''} />
      <section>
        <div className="main space-y-14">
          <PrimaryScroll>
            <img src={'/blog.jpg'} width={1000} height={1000} alt='blog-image' className=' rounded-lg w-full h-full'/>  
          </PrimaryScroll>
          <div className="flex flex-col justify-center items-center">
            <div className=" w-full space-y-10">
            {/* <div className="xl:w-[75%] space-y-10"> */}
              <div className="description">
                <PrimaryScroll>
                  <h1 className=' !font-heading text-2xl uppercase mb-4'>{service.title}</h1>
                </PrimaryScroll>
                <ul className=' space-y-3'>
                  {service.details.map((item,index)=>(
                    <PrimaryScroll key={index} delay={index/10}>
                      <li key={index} className=' text-paragraph leading-relaxed capitalize'>{item}</li>
                    </PrimaryScroll>
                  ))}
                </ul>
              </div>
              <div className="features">
                <PrimaryScroll>
                  <h1 className=' !font-heading text-2xl uppercase mb-5'>What&apos;s Included</h1>
                </PrimaryScroll>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                  {service.features.map((item,index)=>(
                    <FeaturesBox index={index} item={item} key={index}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ClientSection/> */}
      <div className=" !my-24"></div>
      <ContactSection/>
    </main>
  );
};

export default ServiceDetail