import React from 'react';
import './intro.css';
import bg from '../../assets/fleur_illu.svg';
import flower from '../../assets/fleur2.svg';
import { Link } from 'react-scroll';
import BoutonOverlay from '../Bouton/bouton';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section id="intro">
        <main className="introContent">
            <motion.h1 
              className="hello"
              initial={{x: -300, opacity: 0}}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  type: "linear",
                  duration: 0.7
                }
               }}
            >
              Bonjour,</motion.h1>
            <motion.h2 className="introText"
              initial={{x: -300, opacity: 0}}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  type: "linear",
                  duration: 0.7,
                  delay: 0.5
                }
               }}>Moi, c'est <span className="introName">Jade !</span> <br/> Bienvenue sur mon portfolio</motion.h2>
            <motion.p className="introPara"
              initial={{x: -300, opacity: 0}}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  type: "linear",
                  duration: 0.7,
                  delay: 1
                }
              }}>Créative et motivée, je veux devenir polyvalente dans les métiers<br/> de la création digitale</motion.p>
            <Link to='skills' smooth={true} offset={-50} duration={500}>
              <motion.div 
                initial={{x: -300, opacity: 0}}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: "linear",
                    duration: 0.7,
                    delay: 1.5
                  }
              }}>
                <BoutonOverlay>
                  En apprendre plus
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.76 50.47" strokeWidth="0px" className='btnImg'>
                    <g id="patience">
                      <path className="cls-1" d="M5.25,25.91c28.12,5.96,57.11,7.81,85.75,5.24,8.08-.73,16.13-1.8,24.12-3.21,3.17-.56-1.97-8.86-5.01-8.32-27.89,4.9-56.5,5.72-84.6,2.16-7.99-1.01-15.94-2.37-23.82-4.04-2.13-.45-1.86,1.96-1.27,3.26.84,1.84,2.66,4.45,4.83,4.91h0Z"/>
                      <path className="cls-1" d="M66.71,8.33c15.67,11.01,34.09,17.63,53.1,19.61-.2-2.92-.41-5.85-.61-8.77-18,4.76-34.92,12.82-50,23.71-1.95,1.41-2.26,4.68-.42,6.3,2.08,1.83,4.88,1.6,7.02.05,1.78-1.28,3.58-2.53,5.41-3.73-.91.59.62-.39.77-.49.49-.31.99-.62,1.49-.93.87-.54,1.75-1.07,2.63-1.58,3.72-2.19,7.53-4.21,11.42-6.05s7.87-3.51,11.92-5c.2-.07,1.96-.7.8-.29.41-.14.83-.29,1.24-.43,1.11-.38,2.22-.74,3.33-1.09,2.09-.65,4.2-1.26,6.32-1.82s4.12-2.39,3.95-4.82-2.28-3.71-4.56-3.95c-.58-.06-1.15-.12-1.73-.19-.19-.02-1.98-.26-.89-.11-1.15-.16-2.29-.34-3.43-.54-2.14-.37-4.27-.81-6.38-1.31-4.37-1.04-8.67-2.35-12.87-3.92-.54-.2-1.08-.41-1.62-.62.91.36-.72-.3-.87-.36-.94-.39-1.87-.79-2.79-1.21-2.11-.95-4.19-1.97-6.24-3.05-3.97-2.1-7.79-4.46-11.46-7.04-2.04-1.43-5.59-.44-6.9,1.55-1.51,2.31-.76,4.61,1.37,6.11h0Z"/>
                    </g>
                  </svg>
                </BoutonOverlay>
              </motion.div>
            </Link>

        </main>
        <motion.img src={bg} alt="Profil" className="bg" whileInView={{rotate: 360}} transition={{duration: 2}}/>
        <motion.img src={flower} alt='fleur' className='fleur' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 2}}/>
    </section>
  )
}

export default Intro;
