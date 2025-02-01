'use client'

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
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const socialLink = [
          {
              icon:LuInstagram,
              path:'/'
          },
          {
              icon:FaGithub,
              path:'/'
          },
          {
              icon:FaLinkedin,
              path:'/'
          },
          {
              icon:IoLogoFacebook,
              path:'/'
          }
  
      ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [nav,setNav] = useState(false)

  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;
  const handleNavigation = (path, to) => {
    if (currentPath !== path) {
      navigate(path, { state: { scrollTo: to } });
    } else {
      scroller.scrollTo(to, {
        smooth: true,
        duration: 1000,
        offset: -100,
      });
    }
    if (nav) {
      setNav(false);
    }
  };

  const Navlist = [
    {
      name: 'About',
      to: 'about',
      path: '/',
    },
    {
      name: 'services',
      to: 'services',
      path: '/',
    },
    {
      name: 'Portfolio',
      to: 'portfolio',
      path: '/',
    },
    {
      name: 'blog',
      to: 'blog',
      path: '/',
    },
  ];


  return (
    <nav className={`w-full fixed !z-40`}>
      <div className={` py-7 xl:py-10 transition-all !z-40 ease-in-out duration-300 border-b  ${isScrolled ? 'backdrop-blur-lg !bg-[#111110]/50  border-paragraph/20 ': 'border-b-transparent bg-transparent'} ${nav ?'!backdrop-blur-lg !border-transparent !bg-background':' bg-transparent'}`}>
        <div className={`main flex justify-between items-center !z-40`}>
          <Link to={'/'} onClick={()=>setNav(false)} className="pl-4 border-l-4 border-primary !z-40 uppercase text-3xl !font-heading">
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
          <div className=" hidden xl:flex gap-x-10">
          {Navlist.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.path, item.to)}
              className=' cursor-pointer uppercase text-heading font-semibold tracking-widest text-xs'
            >
              {item.name}
            </button>
          ))}
          </div>
          <div className=" hidden xl:flex gap-5">
            {/* <HiOutlineMail  className=' text-2xl'/> */}
            <ScrollLink
            to='contact'
            smooth={true}
                duration={1000}
                offset={-100}
            className=' uppercase bg-primary py-3 px-5 hover:scale-105 duration-300 rounded-full text-heading font-semibold tracking-widest text-xs'>contact</ScrollLink>
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
              {Navlist.map((item, index) => (
              <div
                key={index}
                onClick={() => handleNavigation(item.path, item.to)}
                className={`flex ${nav?' scale-100 translate-y-0':' scale-95  -translate-y-full backdrop-blur-lg'} ease-in-out duration-300 delay-[.${index+1}s] items-center justify-between uppercase !font-heading text-heading text-xl`}

              >
                {item.name}
                <FiArrowRight className="p-2 rounded-full bg-boxground text-heading text-4xl" />

              </div>
            ))}
            </div>
            <div className={ `bg-boxground p-[0.7px] my-14 ${nav?' opacity-100':' opacity-0'} duration-100`} />
            <div className={`flex gap-8 z-30 ${nav?' opacity-100':' opacity-0'} duration-300`}>
              {socialLink.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    to={item.path}
                    className="hover:text-primary duration-300 text-xl"
                    key={index}
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
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

export default NavBar;
