import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Footer from '../components/Footer/footer';
import flecheretour from "../assets/flechereturn.svg";

const Mention = () => { 
    return (
        <div className="Mention">
            <div className='headProject'>
                <h1 className='titles'>Mentions légales</h1>
                <HashLink to="/#contact" smooth={true} className='return'>
                    <img src={flecheretour} alt='flèche retour' className='flecheretour'/>
                    <p>Retour</p>
                </HashLink>
            </div>
            <div className='para'>
                <h2>Crédits illustrations :</h2>
                @nvnevsk / Pinterest <br/>
                @erinapearl / Pinterest
            </div>
            <Footer/>
        </div>
    )
}

export default Mention