import { FaLinkedin } from 'react-icons/fa6'
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { MdCopyright } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { navlist } from '../utils/staticData';

const Footer = () => {
    const socialLink = [
        {
            icon:LuInstagram,
            path:'https://www.instagram.com/nowfie__360/'
        },
        {
            icon:FaGithub,
            path:'https://github.com/nowfie'
        },
        {
            icon:FaLinkedin,
            path:'https://www.linkedin.com/in/mohammed-nowfal-8a4616221/'
        },
        {
            icon:IoLogoFacebook,
            path:'https://www.facebook.com/profile.php?id=100008449146269'
        }

    ]

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
      };

  return (
    <footer className=' overflow-hidden relative py-12 lg:py-16'>
        <div className="main">
            <div className=" flex gap-28 justify-between flex-col lg:flex-row border-y py-20 lg:py-16 border-paragraph/20">
                <div className=" flex flex-col lg:flex-row gap-8">
                    {navlist.map((item,index)=>(
                        <button 
                        key={index}
                        onClick={() => handleNavigation(item.path, item.to)}
                        className=' w-fit uppercase text-heading font-semibold tracking-widest text-xs'>{item.name}</button>
                    ))}
                </div>
                <div className=" flex gap-8">
                    {socialLink.map((item,index)=>{
                        let Icon = item.icon
                        return( <Link href={item.path} className=' hover:text-primary duration-300 text-xl' key={index}><Icon /></Link>)
                    })}
                </div>
            </div>
            <div className=" flex flex-col gap-3 lg:flex-row justify-between lg:items-center py-20">
                <h3 className=' text-paragraph !z-30  capitalize text-sm flex items-center gap-2'> <MdCopyright/> 2024, all rights reserved</h3>
                <h3 className=' text-paragraph !z-30  capitalize text-sm'>Developed by: <span className=' text-primary'>nowfal</span></h3>

            </div>
        </div>
        <div className=" h-32 !z-0 absolute bottom-0 left-0 w-full" style={{background:'linear-gradient(to top, rgb(210 210 208 / 0.1) 0%, transparent 100%'}}></div>
    </footer>
  )
}

export default Footer