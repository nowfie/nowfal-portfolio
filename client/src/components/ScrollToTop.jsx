import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    },800); 

    return () => clearTimeout(timeout); 
  }, [pathname]);

  return null;
};

export default ScrollToTop;
