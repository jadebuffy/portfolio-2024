import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import menu from '../../assets/menu.svg';
import closeMenu from '../../assets/closemenu.svg';
import { Link } from 'react-scroll';
import BoutonOverlay from '../Bouton/bouton';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='navb'>
      <nav className="navbar">
        <img src={logo} alt="Mon logo" className='logonav' />
          <div className="desktopMenu">
              <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Accueil</Link>
              <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">En apprendre plus</Link>
              <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projets</Link>
          </div>
          <BoutonOverlay onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior : 'smooth'});
          }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.87 68.51" strokeWidth="0px" className='btnImg'>
                <g>
                  <path className="cls-1" d="M11.92,48.2c.66-9.99,1.31-19.98,1.97-29.97l.49-7.43c.15-2.24.06-4.65.58-6.85.1-.44.25-.86.47-1.25.09-.16.19-.3.29-.45l.23-.28-5.61,2.58c1.06-.07,2.1-.17,3.17-.17,2.5,0,5,0,7.49,0,10.07,0,20.15.01,30.22.02,2.5,0,5,0,7.49,0s4.84-.13,7.24.03c2.21.14,3.21,1.49,2.75,3.64s-1.39,4.44-2.09,6.62c-3.43,10.66-6.86,21.32-10.3,31.99-.09.28,1.81-.24,1.54-.16,1.12-.32,2.25-.79,3.3-1.28s2.14-1.01,3.13-1.66c.42-.27.97-.56,1.13-1.06,3.28-10.19,6.56-20.38,9.84-30.57.79-2.45,1.66-4.9,2.37-7.37.53-1.85.38-3.65-1.71-4.27-1.07-.32-2.23-.24-3.33-.24-1.42,0-2.83,0-4.25,0-2.66,0-5.33,0-7.99,0-10.74,0-21.48-.01-32.22-.02-2.63,0-5.28-.1-7.9.02-3.64.17-7.11,1.7-10.25,3.44-2.29,1.27-3.82,2.68-4.22,5.32-.36,2.42-.37,4.93-.53,7.37-.79,12.05-1.58,24.1-2.37,36.16-.03.45,4.51-1.29,4.84-1.44,1.07-.5,2.14-1.01,3.13-1.66.35-.23,1.1-.59,1.13-1.06h0Z"/>
                  <path className="cls-1" d="M69.06,1.74c-2.06,7.82-4.13,15.63-6.19,23.45-.92,3.47-1.69,7.02-2.86,10.42-1.03,3.03-2.6,5.67-5.36,7.41-4.97,3.13-11.52,2.49-17.13,2.39-6.67-.13-13.09.68-19.38,2.97-6.78,2.47-13,6.5-17.79,11.92l6.39,6.85c.21-6.05,2.04-11.97,4.96-17.25.34-.61-.27-2.03-.49-2.51-.51-1.13-1.31-2.3-2.18-3.19-.78-.8-3.04-3.05-3.97-1.37C1.89,48.57.23,54.86,0,61.42c-.06,1.69,1.62,3.9,2.72,5.03.54.55,2.79,2.82,3.67,1.82,8.86-10.01,21.83-14.75,35-14.58,5.99.08,12.54.72,18.1-2.02,6.31-3.1,7.61-10.36,9.24-16.52,2.32-8.77,4.63-17.55,6.95-26.32.51-1.92-1.42-4.43-2.66-5.7-.51-.53-3.47-3.25-3.97-1.37h0Z"/>
                </g>
              </svg>
              Contactez moi
          </BoutonOverlay>
          <img src={showMenu ? closeMenu : menu} alt="Bouton de menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
          <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
              <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Accueil</Link>
              <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-20} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Compétences</Link>
              <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projets</Link>
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
          </div>
      </nav>
    </div>
  )
}

export default Navbar