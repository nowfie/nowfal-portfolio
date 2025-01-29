import { FaLinkedin } from 'react-icons/fa6'
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { MdCopyright } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
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
  return (
    <footer className=' overflow-hidden relative py-12 lg:py-16'>
        <div className="main">
            <div className=" flex gap-28 justify-between flex-col lg:flex-row border-y py-20 lg:py-16 border-paragraph/20">
                <div className=" flex flex-col lg:flex-row gap-8">
                    {['home','about','services','portfolio','blog'].map((item,index)=>(
                        <Link href='/' key={index} className=' uppercase text-heading font-semibold tracking-widest text-xs'>{item}</Link>
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