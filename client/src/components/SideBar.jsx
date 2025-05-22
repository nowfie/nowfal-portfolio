import {  motion } from 'framer-motion';
import  { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { FaLinkedin } from 'react-icons/fa6'
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { MdCopyright } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { navlist } from '../utils/staticData';
import PropTypes from 'prop-types'
const SideBar = ({selectTable}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const dashbaordList = ['home','skill','experience','education','project','award','blog']


  const [nav,setNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [select,setSelect] = useState(null)

  return (
    <nav className={` w-full xl:w-[17%] fixed !z-40 xl:relative bg-boxground`}>
      <div className={` py-7 xl:py-10 transition-all !z-40 ease-in-out duration-300 border-b  ${isScrolled ? 'backdrop-blur-lg !bg-[#111110]/50  border-paragraph/20 ': 'border-b-transparent bg-transparent'} ${nav ?'!backdrop-blur-lg !border-transparent !bg-background':' bg-transparent'}`}>
        <div className={`w-11/12 xl:w-10/12 mx-auto  flex xl:flex-col justify-between items-center xl:items-start !z-40`}>
          <Link
          to={'/admin'}
          className="pl-4 border-l-4 text-heading border-primary !z-40 uppercase text-3xl !font-heading">
            nowfal
          </Link>
          <div className="nav-btns xl:hidden z-30">
            <motion.button whileTap={{scale:.5}} onClick={()=>setNav(!nav)} className="!z-30">
              {nav?(
                <IoClose className="!z-30 text-heading text-4xl" />
              ):(
                <HiMiniBars3BottomLeft className="!z-30 text-heading text-4xl" />
              )}
            </motion.button>
          </div>
          <div className=" hidden xl:flex flex-col space-y-4 w-full mt-10">
          {dashbaordList.map((item, index) => (
            <button
            onClick={()=>{ selectTable[1](item)}}
              key={index}
            //   to={`/admin/dashboard/${item}/data`}
              className={`${selectTable[0] === item?'bg-background':''} text-left duration-300 transition-all p-5 rounded-xl !w-full cursor-pointer uppercase text-heading font-semibold tracking-widest text-xs`}
            >
              {item}
            </button>
          ))}
          </div>
        </div>
      </div>
      {/* Mobile nav */}
      <div className={` fixed inset-0 transition-opacity duration-300 ease-in-out ${nav?'opacity-100 z-40 top-[6.1rem] bg-background pointer-events-auto':' opacity-0 -z-10 pointer-events-none'} `}>
      {/* <div className={`fixed inset-0 ${
          nav ? 'opacity-100 z-40 bg-background top-20 pointer-events-auto' : 'opacity-0 -z-10 pointer-events-none'
        } transition-opacity duration-300 ease-in-out`}
      > */}
        <div className={` duration-300 w-full h-screen relative `}>
          <div className={` transform transition-transform flex flex-col main xl:hidden  space-y-9 pt-9`}>
            <div className={`  duration-300 space-y-7`}>
              {dashbaordList.map((item, index) => (
              <Link
              onClick={()=>setNav(!nav)}
              to={`/admin/dashboard/${item}/data`}
                key={index}
                className={`flex ${nav?' scale-100 translate-y-0':' scale-95  -translate-y-full backdrop-blur-lg'} ease-in-out duration-300 delay-[.${index+1}s] items-center justify-between uppercase !font-heading text-heading text-xl`}

              >
                {item}
                <FiArrowRight className="p-2 rounded-full bg-boxground text-heading text-4xl" />

              </Link>
            ))}
            </div>
            <div className={ `bg-boxground p-[0.7px] my-14 ${nav?' opacity-100':' opacity-0'} duration-100`} />
            
            <div className={`flex flex-col gap-3 lg:flex-row justify-between duration-300 lg:items-center ${nav?' opacity-100':' opacity-0'}`}>
              <h3 className="text-paragraph z-30 capitalize text-sm flex items-center gap-2">
                <MdCopyright /> 2024, all rights reserved
              </h3>
              <h3 className="text-paragraph z-30 capitalize text-sm">
                Developed by: <span className="text-primary">nowfal</span>
              </h3>
            </div>
          </div>
          <div className={`${ nav ? 'block' : 'hidden'} h-56 z-0 absolute bottom-0 left-0 w-full`} style={{background: 'linear-gradient(to top, rgb(210 210 208 / 0.1) 0%, transparent 100%)'}}/>  
        </div>
      </div> 
    </nav>
  );
};

SideBar.propTypes = {
    selectTable:PropTypes.any
}

export default SideBar;
