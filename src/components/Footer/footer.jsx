import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <span><p>Copyright &copy; 2024 Jade Buffy - Tout droit réservé</p></span>
        <div> 
          <p>Codé avec amour ❤</p>
          <Link to="/mentionslégales">
              <p className='linkP'>Mentions légales</p>
          </Link>
        </div>
    </footer>
  )
}

export default Footer