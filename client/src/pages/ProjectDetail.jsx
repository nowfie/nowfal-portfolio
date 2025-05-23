
import axios from 'axios'
import PrimaryScroll from '../animations/PrimaryScroll'
import Header from '../components/Header'
import ContactSection from '../sections/ContactSection'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
const ProjectPage =  () => {
  const {name} = useParams()

  // const main = 'optimize your fitness journey'
  // const mainWords = main.split(' ');

  const [data,setData] = useState()
  const [errorMessage,setErrorMessage] = useState('')

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/project/${name}`).then((res)=>{
      if(res.status === 200){
        setData(res.data.data)
      }else{
        setErrorMessage(res.data.message || 'Unexpected response from server');
      }
    }).catch((error)=>{
      setErrorMessage(error.response.data?.message || `Error: ${error.response.status} - ${error.response.statusText}`);
      console.error('API Error:', error || errorMessage);
    })
  },[name,errorMessage])

  
  if (!data) {
    return <div className='pt-32 text-heaing flex justify-center items-center'>
      <h1 className=' text-heading'>Loading..</h1>
    </div>;
  }

  // const DetialBox = ()=> {
  //   return(
  //     <div className="border p-6">
  //       <h1 className=' !font-heading capitalize text-lg mb-3'>problem statement</h1>
  //       <p className=' text-heading capitalize text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum nostrum repellendus perspiciatis voluptatibus pariatur mollitia magnam possimus id accusamus.</p>
  //     </div>
  //   )
  // }

  const Conclusion=({className})=>(
    <div className={className}>
      <PrimaryScroll>
        <h1 className=' !font-heading text-2xl uppercase  mb-4'>conclusion</h1>
      </PrimaryScroll>
      <PrimaryScroll>
        <p className=' text-paragraph capitalize mb-5'>{data.conclusion}</p>           
      </PrimaryScroll>
    </div>
  )

  Conclusion.propTypes = {
    className: PropTypes.string
  }

  const TechTable = () =>{
    let stack = data.technologyStack.stack
    
    return(
        <table className="table-auto w-full !rounded-2xl border-collapse border bg-boxground border-background">
            <tbody>
            {Object.entries(stack).map(([category, technologies], index) => {
                    return (
                        <tr key={index} className="border border-background">
                            <td className="capitalize pr-5 !font-heading text-lg border border-background p-4">
                                {category}
                            </td>
                            <td className="capitalize border !font-heading text-lg border-background p-4">
                                {technologies.join(', ')} {/* Joining the array of technologies with commas */}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
  }

  const InfoBox = ({heading,value}) =>{
    return(
        <PrimaryScroll className=" space-y-6">
            <h1 className=' !font-heading text-heading uppercase text-2xl'>{heading}</h1>
            <ul className=' space-y-1 text-paragraph font-light '>
                {heading == 'client' || heading == 'preview' ?(
                    value.map((item,index)=>(
                      <li key={index} className={`${(heading =='client' || heading=='preview') && index==1?' text-primary':'capitalize'}`}>{item}</li>
                  ))
                ):heading =='date'?(
                  value.map((item,index)=>(
                    <li key={index} className={`${heading =='client' && index==1?' text-primary':'capitalize'}`}> {item == value[0]?'from':'to'} {item}</li>
                ))
                ):(
                  value.map((item,index)=>(
                    <li key={index} className={``}>{item}</li>
                ))
                )}
            </ul>
        </PrimaryScroll>
    )
  }

  InfoBox.propTypes = {
    heading: PropTypes.string,
    value: PropTypes.array
  }

  const pageTitle = `${data.title} | My Portfolio`;
  const pageDescription = data.description || 'Explore the details of this amazing project.';
  const pageUrl = `${window.location.origin}/project/${name}`;
  const pageImage = `${import.meta.env.VITE_API_URL}/${data.image}`;

  return (
    <section className=' space-y-6'>
       <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={data.tags?.join(", ") || "portfolio, projects, development"} />
        <meta name="author" content="Mohammed Nowfal" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />

        {/* GitHub & Other Social Media */}
        <meta property="og:site_name" content="My Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Canonical Tag */}
        <link rel="canonical" href={pageUrl} />

        {/* Structured Data (JSON-LD for Rich Snippets) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Portfolio",
            "name": data.title,
            "description": pageDescription,
            "url": pageUrl,
            "image": pageImage,
            "author": {
              "@type": "Person",
              "name": "Mohammed Nowfal",
            },
          })}
        </script>
      </Helmet>
      <Header name={name} description={''}/>
      <div className="main flex flex-col justify-center space-y-14 items-center">
        <PrimaryScroll className={'w-full'}>
          <img src={`${import.meta.env.VITE_API_URL}/${data.image}`} width={1000} height={1000} alt='blog-image' className=' rounded-lg w-full h-full'/>  
        </PrimaryScroll>
        {/* <div className="space-y-10 xl:w-[75%]"> */}
        <div className="space-y-10 w-full">
            <div className="info flex flex-col lg:flex-row gap-14 lg:gap-24 !my-24">
                {data.freelance == true?(<InfoBox heading={'client'} value={[data.client,data.link]}/>):(<InfoBox heading={'preview'} value={['github',data.link]}/>)}
                <InfoBox heading={'date'}  value={[data.dateFrom,data.dateTo]}/>
                {data.freelance&&<InfoBox heading={'executors'}  value={data.executors}/>}
            </div>
            {/* <div className="sologan-info ">
                <h1 className=' !font-heading text-4xl text-heading uppercase'>about <span className=' !font-heading text-primary'>project</span></h1>
            </div> */}
            <div className="description">
                <PrimaryScroll>
                  <h1 className=' !font-heading mb-4 text-4xl text-heading uppercase'>about <span className=' !font-heading text-primary'>project</span></h1>
                </PrimaryScroll>
                <ul className=' space-y-3'>
                    {data.details.map((item,index)=>(
                      <PrimaryScroll key={index} delay={index/10}>
                        <li  className=' text-paragraph leading-relaxed capitalize'>{item}</li>
                      </PrimaryScroll>
                    ))}
                </ul>
            </div>
            <div className="details space-y-10">
              {/* <DetialBox/> */}
              <div className="problem">
                  <PrimaryScroll>
                    <h1 className=' !font-heading text-2xl uppercase mb-4'>statement</h1>
                  </PrimaryScroll>
                  <PrimaryScroll>
                    <p className=' text-paragraph capitalize'>{data.statement}</p>
                  </PrimaryScroll>
              </div>
              <div className="tech">
                  <PrimaryScroll>
                    <h1 className=' !font-heading text-2xl uppercase  mb-4'>technology stack</h1>
                  </PrimaryScroll>
                  <div className="flex flex-col xl:flex-row xl:gap-14 gap-6">
                      <div className="xl:w-1/2 space-y-6">
                          <PrimaryScroll>
                            <p className=' text-paragraph capitalize mb-5'>{data.technologyStack.paragraph}</p>           
                          </PrimaryScroll>
                          <Conclusion className={'hidden !mt-10 xl:block'}/>
                      </div>
                  <PrimaryScroll className="xl:w-1/2">
                      <TechTable/>
                  </PrimaryScroll>
                  <Conclusion className={'block !mt-10 xl:hidden'}/>
                  </div>
              </div>
            </div>
        </div>
      </div>
      {/* <ClientSection/> */}
      <ContactSection/>
    </section>
  )
}

export default ProjectPage
