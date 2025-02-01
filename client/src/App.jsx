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
    <main className="bg-background relative">

      <ScrollToTop />
      <NavBar />

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
              <Route path="/about" element={<About title="about" />} />
              <Route path="/project" element={<Project title="project" />} />
              <Route path="/project/:name" element={<ProjectDetail title="project detail" />} />
              <Route path="/service/:name" element={<ServiceDetail title="service detail" />} />
              <Route path="/blog/:name" element={<BlogDetail title="blog detail" />} />
            </Routes>
            <Footer />
          </motion.div>
        </div>
      </AnimatePresence>
    </main>

  )
}

export default App
