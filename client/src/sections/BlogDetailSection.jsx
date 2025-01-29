import { MdOutlineDateRange } from 'react-icons/md'
import PrimaryScroll from '../animations/PrimaryScroll'
import PropTypes from 'prop-types'

const BlogDetailSection = ({data}) => {
  // data?console.log(data):console.log('data is not fuond')

  let blogData = data.data
  return (
    <div className=' space-y-6'>
      <PrimaryScroll className="date flex ">
          {/* <h1 className=' !font-heading text-3xl capitalize font-bold mb-4'>{serviceData[0].title}</h1> */}
          <h3 className=' text-base capitalize !font-heading flex items-center gap-3'>
            <MdOutlineDateRange className=' text-primary text-lg relative'/>
            may 11, 2024  
          </h3>
      </PrimaryScroll>
      <div className="description">
        <ul className=' space-y-8'>
          {blogData.content.map((item,index)=>(
            <div key={index}>
              <PrimaryScroll >
              <li className=' text-paragraph leading-relaxed capitalize'>{item}</li>
              </PrimaryScroll>
              <PrimaryScroll className={`message pl-5 ${index ===2?'block':'hidden'} !my-12 italic text-paragraph border-l-[7px] border-primary`}>
                <p>{blogData.message}</p>
              </PrimaryScroll>
            </div>
          ))}
        </ul>
      </div>
      
        <div className=" space-y-3">
            <PrimaryScroll>
              <h1 className=' text-heading !font-heading uppercase text-2xl'>conclusion</h1>
            </PrimaryScroll>
            <PrimaryScroll>
              <p className=' text-paragraph leading-relaxed capitalize'>{blogData.conclusion}</p>
            </PrimaryScroll>
        </div>
    </div>
  )
}

BlogDetailSection.propTypes = {
  data: PropTypes.object
}


export default BlogDetailSection