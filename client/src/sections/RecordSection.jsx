import { useEffect, useState } from "react"
import PrimaryScroll from "../animations/PrimaryScroll"
import axios from "axios"

const RecordSection = () => {

  const [data,setData] = useState('')

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/about/record`).then((res)=>{
      if (res.status === 200) {
        setData(res.data.data)
      }else{
        console.log('API error ',res.data.message)
      }
    }).catch((error)=>{
      console.log('API error ',error)
    })
  },[])

  const [expYear,setExpYear] = useState('')
  const calculateYearsOfExperience = () => {
    const birthDate = new Date(2022, 4, 11); 
    const today = new Date();
    let yearsOfExperience = today.getFullYear() - birthDate.getFullYear();

    const thisYearMay11 = new Date(today.getFullYear(), 4, 11);
    if (today < thisYearMay11) {
      yearsOfExperience--;
    }

    setExpYear(yearsOfExperience)
  };

  useEffect(()=>{
    calculateYearsOfExperience();
  },[expYear])

    const recordData = [
      {
        number: expYear > 9 ? expYear : '0'+expYear,
        text: 'years experience'
      },
      {
          number: data.project > 9? data.project : '0'+data.project || 25,
          text: 'solution delivered'
      },
      {
          number: data.skill > 9? data.skill : '0'+data.skill || 30,
          text: 'technologies known'
      },
      {
          number: data.award > 9? data.award : '0'+data.award || 2,
          text: 'achievements numbers'
      },
    ]
  return (
    <section className="  overflow-x-hidden pt-12 pb-12 lg:pb-16">
        <div className="main grid grid-cols-1 gap-10 md:grid-cols-2 px-2 xl:grid-cols-4">
            {recordData.map((item,index)=>{
              const splittedtext = item.text.split(' ')
              return(
                <div key={index} className="flex flex-col lg:flex-row  items-center gap-3 ">
                    <PrimaryScroll>
                    <h1 className=' text-8xl lg:text-7xl font-extrabold'>{item.number}</h1>
                    </PrimaryScroll>
                    <div className="flex flex-col">
                    {splittedtext.map((item,index)=>(
                      <PrimaryScroll key={index} delay={.2}>
                        <h2  className={`!font-heading text-2xl uppercase ${index ===1?' text-primary':'text-heading'} `}>
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

export default RecordSection