import { Helmet } from "react-helmet-async";
import { ParallaxProvider } from "react-scroll-parallax";
import AboutSection from "../sections/AboutSection";
import BlogSection from "../sections/BlogSection";
import ContactSection from "../sections/ContactSection";
import HeroSection from "../sections/HeroSection";
import ProjectSection from "../sections/ProjectSection";
import RecordSection from "../sections/RecordSection";
import ServiceSection from "../sections/ServiceSection";

const Home = () => {
  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        {/* Basic SEO */}
        <title>Mohammed Nowfal | Full Stack Developer & AI Expert</title>
        <meta name="description" content="Explore the portfolio of Mohammed Nowfal, a skilled full-stack developer specializing in web, mobile, desktop, and AI solutions." />
        <meta name="keywords" content="Mohammed Nowfal, Full Stack Developer, AI Developer, Web Development, Mobile Apps, React, Django, AI Solutions" />
        <meta name="author" content="Mohammed Nowfal" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL (Prevents Duplicate Content Issues) */}
        <link rel="canonical" href="https://nowfal.dev/" />

        {/* Open Graph Meta Tags (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mohammed Nowfal | Full Stack Developer & AI Expert" />
        <meta property="og:description" content="Explore the portfolio of Mohammed Nowfal, a skilled full-stack developer specializing in web, mobile, desktop, and AI solutions." />
        <meta property="og:image" content="https://nowfal.dev/logo.png" />
        <meta property="og:url" content="https://nowfal.dev/" />
        <meta property="og:site_name" content="Nowfal Dev Portfolio" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mohammed Nowfal | Full Stack Developer & AI Expert" />
        <meta name="twitter:description" content="Explore the portfolio of Mohammed Nowfal, a skilled full-stack developer specializing in web, mobile, desktop, and AI solutions." />
        <meta name="twitter:image" content="https://nowfal.dev/logo.png" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        
        {/* GitHub, Instagram & Other Social Media Meta Tags */}
        <meta name="github:card" content="summary" />
        <meta name="instagram:card" content="summary" />

        {/* Favicon & Apple Touch Icons */}
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Preconnect & DNS Prefetching (Performance Optimization) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        
        {/* JSON-LD Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mohammed Nowfal",
            "url": "https://nowfal.dev/",
            "image": "https://nowfal.dev/logo.png",
            "jobTitle": "Full Stack Developer & AI Expert",
            "worksFor": {
              "@type": "Organization",
              "name": "Nowfal Dev"
            },
            "sameAs": [
              "https://github.com/nowfaldev",
              "https://linkedin.com/in/mohammed-nowfal",
              "https://twitter.com/nowfaldev",
              "https://instagram.com/nowfaldev"
            ]
          })}
        </script>
      </Helmet>

      {/* Page Content */}
      <ParallaxProvider>
        <HeroSection />
        <AboutSection />
        <RecordSection />
        <ServiceSection />
        <ProjectSection />
        <BlogSection />
        <ContactSection />
      </ParallaxProvider>
    </>
  );
};

export default Home;
