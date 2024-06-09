import React from 'react';
import './contact.css';
import contact from '../../assets/contact.svg'
import phone from '../../assets/tel.svg'
import mail from '../../assets/mail.svg'
import BoutonOverlay from '../Bouton/bouton';
import { motion } from 'framer-motion';

const Contact = () => {

  const openPDFInNewTab = () => {
    window.open('/buffy_jade_cv_alternance.pdf', '_blank');
  };

  return (
    <section className="contactPage">
        <div id="contact">
          <img src={contact} alt='contact' className='contact-image'/>
            <div className='contact-content'>
              <motion.h2 className="contactPageTitle" initial={{x: -300, opacity: 0}} whileInView={{x: 0, opacity: 1, transition: { type: "linear", duration: 0.5, delay: 0.5 }}}>Restons en contact</motion.h2>
              <div className="contact-description">
                <motion.span  initial={{x: -300, opacity: 0}} whileInView={{x: 0, opacity: 1, transition: { type: "linear", duration: 0.5, delay: 0.75 }}}><img src={phone} alt='phone'/>07 82 61 48 14</motion.span>
                <motion.span  initial={{x: -300, opacity: 0}} whileInView={{x: 0, opacity: 1, transition: { type: "linear", duration: 0.5, delay: 1 }}}><img src={mail} alt='mail'/>jade.buffy@hotmail.fr</motion.span>
                <motion.div  initial={{x: -300, opacity: 0}} whileInView={{x: 0, opacity: 1, transition: { type: "linear", duration: 0.5, delay: 1.25 }}}>
                  <BoutonOverlay onClick={openPDFInNewTab}>
                    Télécharger mon CV
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.66 54.91" className='btnImg'>
                      <g>
                        <path className="cls-1" d="M2.08,25.02c-.65,6.98-1.3,13.95-1.94,20.93-.13,1.38-.31,2.83.22,4.15.46,1.14,1.43,1.89,2.48,2.45,2.53,1.36,5.45,1.96,8.31,2.03,7.04.16,14.09.12,21.13.17,3.63.03,7.26.06,10.89.09,1.65.01,3.3.03,4.95.04,1.24.01,2.79.19,3.88-.55,1.38-.94,1.21-2.81,1.25-4.27.05-1.99.09-3.98.14-5.97.09-4.15.19-8.3.28-12.45.02-1.07-4.73-1.83-4.74-1.61-.15,6.39-.27,12.78-.44,19.17-.03,1.1-.01,2.53-.94,3.31-1.08.91-3.07.55-4.36.54-3.14-.03-6.27-.05-9.41-.08-6.27-.05-12.55-.1-18.82-.15-2.95-.02-5.97.14-8.91-.12-.27-.02-.55-.1-.82-.1-.61,0,.41-.96.96.37-.13-.32-.75-.7-.95-1.06-.71-1.24-.51-2.76-.39-4.12.65-7.06,1.31-14.11,1.96-21.17.09-.98-4.7-1.94-4.74-1.61h0Z"/>
                        <path className="cls-1" d="M25.61,1.18c.34,12.7-.12,25.42-1.37,38.06-.18,1.78,4.59,3.08,4.81.85,1.25-12.65,1.71-25.36,1.37-38.06-.05-1.84-4.87-3.03-4.81-.85h0Z"/>
                        <path className="cls-1" d="M14.17,26.46c3,5.56,5.99,11.12,8.99,16.68.2.37,2.55,3.25,3.15,2.23,3.81-6.52,8.98-12.12,15.17-16.44,1.03-.72-2.11-4.57-3.35-3.71-6.19,4.31-11.37,9.92-15.17,16.44l3.15,2.23c-3-5.56-5.99-11.12-8.99-16.68-.46-.86-1.51-2.16-2.55-2.3s-.71.97-.39,1.56h0Z"/>
                      </g>
                    </svg>
                  </BoutonOverlay>
                </motion.div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Contact