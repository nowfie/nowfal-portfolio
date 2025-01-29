import PrimaryScroll from "../animations/PrimaryScroll"

const RecordSection = () => {
    const recordData = [
      {
        number: '02',
        text: 'years experience'
      },
      {
          number: 20,
          text: 'prototypes completed'
      },
      {
          number: '06',
          text: 'solution delivered'
      },
      {
          number: 30,
          text: 'technologies known'
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