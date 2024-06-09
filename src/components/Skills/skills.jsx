import React from 'react';
import './skills.css';
import creativite from '../../assets/creativite-w.svg';
import patience from '../../assets/patience-w.svg';
import team from '../../assets/team-w.svg';
import energy from '../../assets/dynamisme-w.svg';
import backgroundImg from '../../assets/fond.webp';
import FilImg from '../../assets/fil.svg';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills">
        <motion.h2 className="skillTitle" initial={{x: -300, opacity: 0}} whileInView={{x: 0, opacity: 1, transition: { type: "linear", duration: 0.7, delay: 0.25 }}}>Faisons connaissance !</motion.h2>
        <motion.span className="skillDescription" id='skillsDescription' initial={{x: -300, opacity: 0}} whileInView={{x: 0, opacity: 1, transition: { type: "linear", duration: 0.7, delay: 0.5 }}}>J'ai 21 ans et je suis en 3e (et dernière !) année de BUT MMI (Métiers du Multimédia et de l'Internet) à Chambéry. 
        J'arrive à la fin de mon cursus, mais ça n'a pas étanché ma soif d'apprendre !</motion.span>
        <motion.span className="skillDescription" initial={{x: -300, opacity: 0}} whileInView={{x: 0, opacity: 1, transition: { type: "linear", duration: 0.7, delay: 0.75 }}}>Pour moi, la création a débuté depuis très jeune, et elle continue de rythmer mon quotidien encore aujourd'hui. Et ce, peu importe le domaine. Mélangez curiosité et envie de créer, et me voilà !
         Enfin, pas besoin d'en dire plus, vous pouvez découvrir mes réalisations plus bas. J'espère que ma patte vous plaira !</motion.span>
        <div className="skillBars">
            <motion.div className="skillBar" initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.7, delay: 1}}}>
                <img src={creativite} alt="Ampoule éclairée" className="skillBarImg" />
                <div className="skillBarText">
                    <h3>Le cerveau à l'affût !</h3>
                </div>
            </motion.div>
            <motion.div className="skillBar" initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.7, delay: 1.25}}}>
                <img src={patience} alt="Webdesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h3>La patience, ça me connait</h3>
                </div>
            </motion.div>
            <motion.div className="skillBar" initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.7, delay: 1.5}}}>
                <img src={team} alt="Appdesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h3>Toute seule, c'est bien <br/>Ensemble c'est mieux</h3>
                </div>
            </motion.div>
            <motion.div className="skillBar"  initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.7, delay: 1.75}}}>
                <img src={energy} alt="Appdesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h3>Jamais fatiguée !</h3>
                </div>
            </motion.div>
        </div>
        <img src={FilImg} alt='fil' className='filImg'/>
        <img src={backgroundImg} alt='background' className='backgroundImg'/>
    </section>
  )
}

export default Skills