import React, { useState, useEffect } from 'react';
import Amenu from '../components/Amenu/Amenu';
import Navbar from "../components/NavBar/navbar";
import Intro from "../components/Intro/intro";
import Skills from "../components/Skills/skills";
import Works from "../components/Works/works";
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/footer";
import { motion, useScroll, useIsPresent, AnimatePresence } from "framer-motion";

const Home = () => {
  const isPresent = useIsPresent();
  const { scrollYProgress } = useScroll();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="App">
        <motion.div
            style={{ 
                position: 'fixed',
                width: '20px', 
                height: '20px', 
                backgroundColor: 'rgba(38, 8, 1, 0.5)',
                borderRadius: '50%', 
                pointerEvents: 'none', /* Empêche le curseur personnalisé de capturer les événements de la souris */
                zIndex: '99', 
                transition: 'all 0.1s ease',
                top: position.y - 10,
                left: position.x - 10, 
            }}
        />
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <Amenu />
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0, transition: { duration: 1.5, ease: "circOut" } }}
          exit={{ scaleX: 1, transition: { duration: 1.5, ease: "circIn" } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
      </AnimatePresence>
    </div>
  );
};

export default Home;
