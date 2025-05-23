import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ServiceDetail from './pages/ServiceDetail'
import { AnimatePresence,motion } from 'framer-motion'
import Project from './pages/Project'
import ProjectDetail from './pages/ProjectDetail'
import BlogDetail from './pages/BlogDetail'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import { useEffect } from 'react'
import { scroller } from 'react-scroll'
// import { FaArrowUp } from "react-icons/fa6";
import Cursor from './components/Cursor'
import { HelmetProvider } from 'react-helmet-async';
import Admin from './pages/Admin'
import SideBar from './components/SideBar'
import DataCrud from './pages/DataCrud'

function App() {
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      if (target) {
        scroller.scrollTo(location.state.scrollTo, {
          smooth: true,
          duration: 1000,
          offset: 0,
        });
      } else {
        const observer = new MutationObserver((mutations, obs) => {
          const target = document.getElementById(location.state.scrollTo);
          if (target) {
            scroller.scrollTo(location.state.scrollTo, {
              smooth: true,
              duration: 1000,
              offset: -100,
            });
            obs.disconnect();
          }
        });
        observer.observe(document, {
          childList: true,
          subtree: true,
        });
      }
    }
  }, [location]);

    
  return (
    <HelmetProvider>
    <main className="bg-background relative">
      {/* <div className="main relative overflow-hidden">
        <FaArrowUp className=' fixed right-0 bottom-0 border border-heading rounded-full p-3 text-5xl text-primary !z-40'/>

      </div> */}
      <Cursor/>
      <ScrollToTop />
      {location.pathname.startsWith('/admin')?null:<NavBar/>}
      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <motion.div
            location={location}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.2 }}
            className="h-full w-full relative"
          >
            <Routes location={location}>
              <Route path="/" element={<Home title="home" />} />
              <Route path='/admin' element={<Admin title="admin" />} />
              <Route path='/admin/:table/add-data' element={<DataCrud title="add-data" />} />
              <Route path='/admin/:table/:id' element={<DataCrud title="update-data" />}/>
              <Route path="/about" element={<About title="about" />} />
              <Route path="/project" element={<Project title="project" />} />
              <Route path="/project/:name" element={<ProjectDetail title="project detail" />} />
              <Route path="/service/:name" element={<ServiceDetail title="service detail" />} />
              <Route path="/blog/:name" element={<BlogDetail title="blog detail" />} />
            </Routes>
            {location.pathname.startsWith('/admin')?null:<Footer/>}
          </motion.div>
        </div>
      </AnimatePresence>
    </main>
    </HelmetProvider>
  )
}

export default App
