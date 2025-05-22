import PrimaryScroll from "../animations/PrimaryScroll"
import Header from "../components/Header"
// import BlogSection from "../sections/BlogSection"
import ProjectSection from "../sections/ProjectSection"
import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from "framer-motion"
import axios from "axios"
import loadIcon from "../components/LoadIcon"
import ContactSection from "../sections/ContactSection"
// import Loading from "../components/Loading"
import ErrorMessage from "../components/ErrorMessage"
import { Helmet } from "react-helmet-async"
import {aboutData} from '../utils/staticData'

const About = () => {

  const [profile,setProfile] = useState()
  const [errorProfileMessage,setProfileErrorMessage] = useState('')

    useEffect(()=>{
      axios.get(`${import.meta.env.VITE_API_URL}/about`).then((res)=>{
        if(res.status === 200){
          setProfile(res.data.data)
        }else{
          setProfileErrorMessage(res.data.message || 'Unexpected response from server');
        }
      }).catch((error)=>{
        setProfileErrorMessage(error.response.data?.message || `Error: ${error.response.status} - ${error.response.statusText}`);
        console.error('API Error:', error || errorProfileMessage);
      })
    },[errorProfileMessage])

    const [skill,setSkill] = useState([])
    const [errorSkillMessage,setSkillErrorMessage] = useState('')
    

    useEffect(()=>{
      axios.get(`${import.meta.env.VITE_API_URL}/skill`).then((res)=>{
        if(res.status === 200){
          setSkill(res.data.data)
        }else{
          setSkillErrorMessage(res.data.message || 'Unexpected response from server');
        }
      }).catch((error)=>{
        setSkillErrorMessage(error.response.data?.message || `Error: ${error.response.status} - ${error.response.statusText}`);
        console.error('API Error:', error || errorSkillMessage);
      })
    },[errorSkillMessage,errorProfileMessage])

    // if(!(profile || skill) ){
    //   return(
    //     <Loading/>
    //   )
    // }


  const AboutDetailSection = () =>{
    const [record,setRecord] = useState('')

    useEffect(()=>{
      axios.get(`${import.meta.env.VITE_API_URL}/about/record`).then((res)=>{
        if (res.status === 200) {
          setRecord(res.data.data)
        }
      }).catch((error)=>{
        console.log('API error ',error)
      })
    },[])

    const RecordRow = () => {
      const recordData = [
        {
          number:  typeof(record.solution) != 'number'? 27 : record.solution > 9 ? record.solution : '0'+ record.solution,
          text: 'solution delivered'
      },
      {
          number:  typeof(record.prototype) != 'number'? '0'+3 : record.prototype > 9 ? record.prototype : '0'+ record.prototype,
          text: 'prototypes completed'
      }, 
      {
        number:  typeof(record.skill) != 'number'? 30 : record.skill > 9 ? record.skill : '0'+ record.skill,
        text: 'technologies known'
      },
      ]
      return (
        <section className="  overflow-hidden pt-8">
            <div className=" grid grid-cols-1 gap-10 md:gap-20 lg:gap-3 xl:gap-5 md:grid-cols-3">
                {recordData.map((item,index)=>{
                  const splittedtext = item.text.split(' ')
                  return(
                    <div key={index} className="flex flex-col md:flex-row  items-center gap-3 ">
                        <PrimaryScroll>
                        <h1 className=' text-8xl md:text-6xl lg:text-[38px] xl:text-6xl font-extrabold'>{item.number}</h1>
                        </PrimaryScroll>
                        <div className="flex flex-col">
                        {splittedtext.map((item,index)=>(
                          <PrimaryScroll key={index} delay={.2}>
                            <h2  className={`!font-heading text-2xl md:text-base lg:text-xs xl:text-base uppercase ${index ===1?' text-primary':'text-heading'} `}>
                            {item}
                          </h2>
                          </PrimaryScroll>
                        ))}
                        </div>
                    </div>
                  )})}
            </div>
        </section>
      )
    }

    return(
      <section className="py-12 overflow-x-hidden">
          <div className="main flex flex-col justify-center items-center gap-14">
            <PrimaryScroll className={'w-full'}>
              <img src={'/blog.jpg'} width={1000} height={1000} alt='blog-image' className=' rounded-lg w-full h-full'/>
            </PrimaryScroll>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-1/2 space-y-10">
                <PrimaryScroll >
                  <h1 className=' !font-heading text-heading heading uppercase'>passionate  <br /> <span className="text-primary !font-heading">tech </span> innovator</h1>
                </PrimaryScroll>
                <PrimaryScroll className={''} >
                  <p className=' text-paragraph leading-relaxed text-base lg:w-3/4'>{aboutData.detail[0]}</p>
                </PrimaryScroll>
              </div>
              <div className="lg:w-1/2">
                 <ul className=' space-y-8'>
                    {[aboutData.detail[1],aboutData.detail[2]].map((item,index)=>(
                      <PrimaryScroll key={index} delay={index/10} >
                        <li className=' leading-relaxed text-paragraph' >{item}</li>
                      </PrimaryScroll>
                    ))}
                  </ul>
                  <RecordRow/>
              </div>
            </div>
          </div>
        </section>
    )
  }

  const ProfileSection = () =>{
    const [select,setSelect] = useState(0)

    const EducationBox = ({index,item}) =>{
      return(
        <PrimaryScroll delay={index/10} className=" bg-boxground p-8 md:p-10 rounded-lg ">
              <div className="pl-4 border-l-4 border-primary flex flex-col md:flex-row w-full justify-between gap-2 md:items-center">
                <h2 className=" uppercase font-semibold text-extra tracking-widest text-xs flex items-center gap-2">{item.institution}</h2>
                <h2 className=" uppercase font-semibold text-paragraph tracking-widest  md:block text-xs">{item.duration}</h2>
                {/* <h2 className=" uppercase font-semibold text-extra tracking-widest md:hidden text-[10px]">(may 2024 - may 2025)</h2> */}
            </div>
            <div className=" p-[.5px] bg-paragraph/30 w-full !my-10"></div>
            {/* <div className="space-y-3">
              <h1 className=" text-heading uppercase text-2xl !font-heading">b.tech computer science and busniess systems</h1>
              <p className=' text-paragraph leading-relaxed text-base '>That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects</p>
            </div> */}
             <div className=" flex flex-col md:flex-row justify-baseline gap-10">
             <div className="md:w-[40%] lg:w-1/4 h-[8rem] relative flex items-center md:m-auto justify-center overflow-hidden rounded-lg">
                <img 
                  src={`${import.meta.env.VITE_API_URL}/${item.image}`} 
                  className="w-full h-full object-cover md:m-auto absolute rounded-lg" 
                  alt="" 
                />
              </div>
                <div className="md:w-[60%] lg:w-3/4 space-y-3">
                  <h1 className=" text-heading uppercase text-2xl !font-heading">{item.degree}</h1>
                  <p className=' text-paragraph leading-relaxed text-base '>{item.description}</p>
                </div>
            </div>
        </PrimaryScroll>
      )
    }

    EducationBox.propTypes ={
      index: PropTypes.number,
      item: PropTypes.object
    }

    const ExperienceBox = ({index,item}) =>{
      return(
        <PrimaryScroll delay={index/10} className=" bg-boxground p-8 md:p-10 rounded-lg ">
            <div className="pl-4 border-l-4 border-primary flex flex-col md:flex-row w-full justify-between gap-2 md:items-center">
              <h2 className=" uppercase font-semibold text-extra tracking-widest text-xs flex items-center gap-2">{item.company}</h2>
              <h2 className=" uppercase font-semibold text-paragraph tracking-widest  md:block text-xs">{item.duration}</h2>
              {/* <h2 className=" uppercase font-semibold text-extra tracking-widest md:hidden text-[10px]">(may 2024 - may 2025)</h2> */}
            </div>
            <div className=" p-[.5px] bg-paragraph/30 w-full !my-10"></div>
            <div className=" flex flex-col md:flex-row justify-baseline gap-10">
              <div className="md:w-[40%] lg:w-1/4 h-[8rem] relative flex items-center md:m-auto justify-center overflow-hidden rounded-lg">
                <img 
                  src={`${import.meta.env.VITE_API_URL}/${item.image}`} 
                  className="w-full h-full object-cover md:m-auto absolute rounded-lg" 
                  alt="" 
                />
              </div>
                <div className="md:w-[60%] lg:w-3/4 space-y-3">
                  <h1 className=" text-heading uppercase text-2xl !font-heading">{item.role}</h1>
                  <p className=' text-paragraph leading-relaxed text-base '>{item.description}</p>
                </div>
            </div>
        </PrimaryScroll>
      )
    }

    ExperienceBox.propTypes ={
      index: PropTypes.number,
      item: PropTypes.object
    }

    const AchievementBox = ({index,item}) =>{
      return(
        <PrimaryScroll delay={index/10} className=" bg-boxground p-8 md:p-10 rounded-lg ">
          <div className="pl-4 border-l-4 border-primary flex flex-col md:flex-row w-full justify-between gap-2 md:items-center">
              <h2 className=" uppercase font-semibold text-extra tracking-widest text-xs flex items-center gap-2">{item.location}</h2>
              <h2 className=" uppercase font-semibold text-paragraph tracking-widest  md:block text-xs">{item.date}</h2>
              {/* <h2 className=" uppercase font-semibold text-extra tracking-widest md:hidden text-[10px]">(may 2024 - may 2025)</h2> */}
            </div>
            <div className=" p-[.5px] bg-paragraph/30 w-full !my-10"></div>
          <div className=" flex flex-col md:flex-row justify-baseline gap-10">
            <div className="md:w-[40%] lg:w-1/4 h-[8rem] relative flex items-center md:m-auto justify-center overflow-hidden rounded-lg">
              <img 
                src={`${import.meta.env.VITE_API_URL}/${item.image}`} 
                className="w-full h-full object-cover md:m-auto absolute rounded-lg" 
                alt="" 
              />
            </div>
            <div className="md:w-[60%] lg:w-3/4 space-y-3">
              <h1 className=" text-heading uppercase text-2xl !font-heading">{item.name}</h1>
              <p className=' text-paragraph leading-relaxed text-base '>{item.description}</p>
            </div>
          </div>
        </PrimaryScroll>
      )
    }

    AchievementBox.propTypes ={
      index: PropTypes.number,
      item: PropTypes.object
    }

    const AboutBox = ({index}) =>{
      const aboutData = {
        Name: "Mohammed Nowfal",
        phone: "+91 9786221304",
        nationality: "india",
        languages: "tamil, english",
        freelance: "available",
        mail: "contact@nowfal.dev",
        linkedIn: "mohammed nowfal",
        git: "mohammed nowfal",
      };

      //border-l-[4px] border-primary pl-5
      return(
        <PrimaryScroll delay={index/10} className=" justify-between bg-boxground flex flex-col lg:flex-row gap-16 p-8 md:p-10 rounded-lg ">
            <div className="lg:w-[30%] ">
              <div className=" w-full border-l-[4px]  border-primary pl-5 h-full relative overflow-hidden ">
                <div className="lg:w-[75%]  justify-center lg:justify-normal flex h-[250px] xxs:h-[300px] xs:h-[400px] md:h-[500px] lg:h-full !bg-background/40 relative !rounded-xl">
                  <img src="/hero.png" className=" grayscale-50 rotate-[3deg] absolute w-fit -top-10 lg:top-0 xl:-top-10  lg:h-fit " alt="" />
                </div>
              </div>
            </div>
            <div className="lg:w-[65%] grid grid-cols-1 md:grid-cols-2  gap-10">
              {Object.entries(aboutData).map(([key, value], index) => (
                <div className="space-y-1 flex  items-baseline" key={index}>
                  <h3 className="text-xs lg:text-[10px] xl:text-xs font-semibold w-[50%] lg:w-[50%] xl:w-[40%] tracking-widest text-paragraph uppercase">
                    {key}
                  </h3>
                  <h1 className="!font-heading uppercase w-[50%] lg:w-[50%] xl:w-[60%] text-lg lg:text-sm xl:text-lg">{value}</h1>
                </div>
              ))}
            </div>
        </PrimaryScroll>
      )
    }

    AboutBox.propTypes ={
      index: PropTypes.number,
    }

    const renderProfile = () =>{
      switch(select){
        case 0:
          return <AboutBox/>
        case 1:
          return (
            !(profile.education == 'please add the education detail')?
            ((profile.education).map((item,index)=>(
              <EducationBox index={index} item={item} key={index}/>
            ))):(
                <ErrorMessage>
                  <h1 className=" capitalize">{errorProfileMessage || 'education not found'}</h1>
                </ErrorMessage>
            )
          )
        case 2:
          return (
            !(profile.experience == 'please add the experience detail')?
            ((profile.experience).map((item,index)=>(
              <ExperienceBox index={index} item={item} key={index}/>
            ))):(
                <ErrorMessage>
                   <h1 className=" capitalize">{errorProfileMessage || 'experience not found'}</h1>
                </ErrorMessage>
            )
          )
        case 3:
          return (
            !(profile.award == 'please add the award detail')?
            ((profile.award).map((item,index)=>(
              <AchievementBox index={index} item={item} key={index}/>
            ))):(
                <ErrorMessage>
                  <h1 className=" capitalize">{errorProfileMessage || 'achievement not found'}</h1>
                </ErrorMessage>
            )
          )
      }
    }

    return(
      <section className=" overflow-x-hidden py-12 space-y-2">
        <div className="main space-y-9">
          <div className="header space-y-9">
            <PrimaryScroll>
              <h5 className=' flex items-center text-xs font-semibold gap-2 text-paragraph uppercase tracking-widest'>timeline</h5>  
            </PrimaryScroll>
            <div className="header flex flex-col lg:flex-row justify-between gap-14">
              <div className="flex lg:w-1/2 flex-col gap-9 justify-between ">
                <PrimaryScroll>
                  <h1 className=' uppercase !font-heading heading'>all over my <span className=' text-primary !font-heading'>details</span> <br className=' hidden lg:block' /> find here</h1>
                </PrimaryScroll>
              </div>
              <div className="lg:w-1/2 space-y-7 flex flex-col justify-between">
                <PrimaryScroll className={''} >
                  <p className=' text-paragraph leading-relaxed text-base'>{aboutData.profileData.paragraph}</p>
                </PrimaryScroll>
                <PrimaryScroll className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
                {['profile','education','experience','achievement'].map((item,index)=>(
                  <button key={index} onClick={()=>setSelect(index)} className={` transition-all  duration-300 uppercase font-semibold text-xs p-3 rounded-lg tracking-widest ${index === select?' bg-primary':'bg-boxground'}`}>{item}</button>
                ))}
              </PrimaryScroll>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
              key={select} 
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              transition={{duration:.5,delay:.2}}
              className=" space-y-7">
                {renderProfile()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    )
  }

  const SkillSection =()=>{
    const [select,setSelect] = useState('backend')

    const [loadedSkills, setLoadedSkills] = useState([]);

    useEffect(() => {
      const updateSkills = async () => {
          const skillsWithIcons = await Promise.all(
              skill && skill.map(async (item) => {
                  const Icon = await loadIcon(item.iconFamily, item.iconName);
                  return { ...item, Icon };
              })
          );

          setLoadedSkills(skillsWithIcons);
      };

      if (skill && skill.length > 0) {
          updateSkills();
      }
  }, []);

    const SkillBox = ({index,name,icon}) =>{
      
        return(
            <PrimaryScroll delay={index/10} className=" select-none bg-boxground overflow-hidden gap-3 relative rounded-lg px-7 py-11 justify-center items-center flex cursor-pointer group">
                <div className=' text-4xl transition-all absolute left-1/2 -translate-x-1/2 group-hover:left-[20%] group-focus:left-[20%] group-active:left-[20%] group-hover:text-primary group-focus:text-primary group-active:text-primary duration-500'  dangerouslySetInnerHTML={{ __html: icon }}/>
                <div className="bg-primary absolute top-0 right-0 !h-full w-full px-6 py-3 flex flex-col justify-center  gap-3 opacity-0 duration-500 transition-all group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 ">
                    <div className=' text-4xl transition-all  text-heading duration-500'  dangerouslySetInnerHTML={{ __html: icon }}/>
                      <h1 className=' opacity-0 duration-500 transition-all group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100  text-heading z-20 uppercase tracking-widest text-sm !font-heading'>{name}</h1>
                </div>
            </PrimaryScroll>
        )
    }

    SkillBox.propTypes = {
        index:PropTypes.number,
        name:PropTypes.string,
        icon:PropTypes.any
    }

    const filteredSkill = loadedSkills.filter((item)=>item.category == select)
    // const filteredParagraph = Object.entries(aboutData.skillData.technologies).filter(([key]) => key == select)[0][1]
    
    return (
      <section className='lg:py-16 py-12 overflow-x-hidden'>
          <div className="main space-y-8">
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
                  <div className="lg:w-[30%] space-y-10">
                      <PrimaryScroll>
                          <h1 className=' !font-heading text-heading heading uppercase'>my <br /> tech <span className="text-primary !font-heading">stack</span></h1>
                      </PrimaryScroll>
                  </div>
                  {/* <div className="lg:w-[70%]  lg:block space-y-4">
                      <PrimaryScroll>
                        <h2 className='  !font-heading text-heading uppercase text-xl'>{select} <span className="text-primary !font-heading">{select == 'language'?'known':'tehcnologies'}</span></h2>
                      </PrimaryScroll>
                      <PrimaryScroll>
                          <p className=' text-paragraph leading-relaxed w-11/12'>{filteredParagraph}</p>
                      </PrimaryScroll>
                  </div> */}
                  <div className="lg:w-[70%] space-y-4">
                      <PrimaryScroll>
                          <p className=' text-paragraph leading-relaxed w-11/12'>{aboutData.skillData.paragraph}</p>
                      </PrimaryScroll>
                  </div>
              </div>
              <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-20">
                  <div className="lg:w-[30%] space-y-10">
                      <div className="flex flex-col gap-5">
                      {['language','frontend','backend','aiml','others',].map((item,index)=>(
                          <PrimaryScroll className={'w-full'} key={index} delay={index/10}>
                              <button  onClick={()=>setSelect(item)} className={` w-full transition-all  duration-300 uppercase font-semibold text-xs p-4 rounded-lg tracking-widest ${item === select?' bg-primary':'bg-boxground'}`}>{item}</button>
                          </PrimaryScroll>
                      ))}
                      </div>
                  </div>
                  {/* <div className=" space-y-4 block lg:hidden mt-6">
                      <PrimaryScroll>
                          <h2 className='  !font-heading text-heading uppercase text-xl'>{select} <span className="text-primary !font-heading">{select == 'language'?'known':'tehcnologies'}</span></h2>
                      </PrimaryScroll>
                      <PrimaryScroll>
                          <p className=' text-paragraph leading-relaxed'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nesciunt aspernatur aliquam tempora laborum perspiciatis optio, tempore fugit magnam. Quisquam expedita minima iste deserunt voluptas?</p>
                      </PrimaryScroll>
                  </div> */}
                  <div className="lg:w-[70%] relative">
                  <AnimatePresence mode="wait">
                    {skill.length > 0 ? (
                      <motion.div
                        key={select}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid pr-1 lg:pr-3 gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        // className="grid skill-scrolls pr-1 lg:pr-3 gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:max-h-[19rem] overflow-y-auto"
                        
                        >
                        {filteredSkill.map((item, index) => (
                          <SkillBox name={item.name} icon={item.Icon} index={index} key={index} />
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div 
                      key={select}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex flex-col w-full gap-7 h-full justify-center items-center">
                        <ErrorMessage>
                        <h1 className=" capitalize">{errorSkillMessage ? `${errorSkillMessage} in ${select}!` : `Skills are not found in ${select}!`}</h1>
                          
                          </ErrorMessage>                        
                      </motion.div>
                    )}
                  </AnimatePresence>

                      {/* <h4 className=' italic text-primary capitalize absolute right-0 -bottom-5 text-xs lg:bottom-0'>scroll down</h4> */}
                  </div>
              </div>
          </div>
      </section>
    )
  }

  const pageTitle = "About Me | Mohammed Nowfal"
  const pageDescription = "Explore my profile, education, experience, skills, and resume. I am a versatile software developer specializing in web, mobile, desktop, and AI applications."
  const pageUrl = `${import.meta.env.VITE_SITE_URL}/about`
  const pageImage = `${import.meta.env.VITE_SITE_URL}/assets/profile-image.jpg`

  return (
    <main className='' >
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="Mohammed Nowfal, software developer, web development, AI, mobile apps, resume, portfolio" />
        <meta name="author" content="Mohammed Nowfal" />
        
        {/* Open Graph Meta Tags (For Facebook, LinkedIn, etc.) */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:site_name" content="Mohammed Nowfal Portfolio" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:site" content="@nowfal_dev" />
        <meta name="twitter:creator" content="@nowfal_dev" />

        {/* Canonical Link */}
        <link rel="canonical" href={pageUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data for SEO (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mohammed Nowfal",
            "url": pageUrl,
            "image": pageImage,
            "jobTitle": "Software Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance & Open Source"
            },
            "sameAs": [
              "https://github.com/nowfal-dev",
              "https://www.linkedin.com/in/nowfal-dev",
              "https://twitter.com/nowfal_dev"
            ],
            "description": pageDescription
          })}
        </script>
      </Helmet>
        <Header name={'Software developer dedicated to AI, problem-solving, and digital transformation'} description={''}/>
        <AboutDetailSection/>
        <SkillSection/>
        <ProfileSection/>
        <ProjectSection/>
        {/* <BlogSection/> */}
        <ContactSection/>
    </main>
  )
}

export default About