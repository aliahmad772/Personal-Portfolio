import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavbarMain from './components/navbar/NavbarMain';
import Footer from './components/footer/footer';
import { AnimatePresence, motion } from 'framer-motion';

const layerColors = ['#111111', '#F97316', '#3B0764'];

function Layout() {
  const location = useLocation();
  const [transitioning, setTransitioning] = useState(true);

  useEffect(() => {
    setTransitioning(true);
    const timeout = setTimeout(() => setTransitioning(false), 1500);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <NavbarMain />

      
      <AnimatePresence>
        {transitioning && (
          <>
            {layerColors.map((color, index) => (
              <motion.div
                key={index}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                exit={{ width: '0%' }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.09,
                  ease: [0.23, 1, 0.32, 1],
                }}
                style={{
                  backgroundColor: color,
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  height: '100vh',
                  zIndex: 9999 - index,
                  
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0}}
        animate={{ opacity: transitioning ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 1}}
      >
        <Outlet />
      </motion.div>

      <Footer />
    </>
  );
}

export default Layout;
