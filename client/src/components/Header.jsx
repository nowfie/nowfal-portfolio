import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

const Header = ({name,description}) => {
    const decodedName = decodeURIComponent(name)
    // const nameSplit = decodedName.split(' ')
    const currentPath = useLocation().pathname
    const sub = currentPath.split('/')[1]
    
  return (
    <section className=' pt-36 pb-10 xl:pt-44 xl:pb-20 overflow-hidden relative '>
        <div
        className={`h-64 design absolute top-0 left-0 w-full !z-0 ease-in-out transition-opacity duration-100`}
        style={{
          background: 'linear-gradient(to bottom, rgb(210 210 208 / 0.1) 0%, #000 100%)',
        }}
      ></div>
        <div className="main !z-30 relative  space-y-10 ">
            <h3 className='  text-center text-xs text-paragraph uppercase font-semibold tracking-widest flex gap-4 mx-auto w-fit'> <Link to={'/'}>home</Link>   <span>/</span>   <span className=' text-primary'>{sub}</span></h3>
            <h1 className=' !font-heading text-6xl uppercase leading-sm mb-4 text-center font-extrabold '>
                {decodedName}
                {/* how to become a graphiq designer in simple steps */}
                {/* {nameSplit[0]} */}
                {/* <span className=' font-heading text-primary'> {nameSplit[1]}</span>  */}
            </h1>
            <p className=' text-center lg:w-1/2 m-auto text-paragraph'>{description}</p>            
        </div>
    </section>
  )
}

Header.propTypes = {
    name:PropTypes.string,
    description:PropTypes.string,
}

export default Header