import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPages.css';
import { HashLink } from 'react-router-hash-link';
import data from '../../data.json';
import Footer from '../../components/Footer/footer';
import flecheretour from "../../assets/flechereturn.svg";
import { motion, useIsPresent, AnimatePresence } from 'framer-motion';
import Lottie from 'react-lottie';

function ProjectDetail() {
  const { id } = useParams();
  const project = data.projects.find(proj => proj.id === parseInt(id));
  const isPresent = useIsPresent();

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  // Options for Lottie animation
  const defaultOptions = project.lottie ? {
    loop: true,
    autoplay: true,
    animationData: require(`../../animations/${project.lottie}`),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice' // Assurez-vous que l'aspect ratio est préservé
    }
  } : null;

  return (
    <section>
    <div className='headProject'>
      <HashLink to="/#works" smooth={true} className='return'>
        <img src={flecheretour} alt='flèche retour' className='flecheretour'/>
        <p>Retour</p>
      </HashLink>
      <div className='titles'>
        <i>{project.type}</i>
        <h1>{project.titre}</h1>
        <div className='categories'>
            {project.categories.map((category, index) => (
                <h2 key={index}>{category}</h2>
            ))}
        </div>
      </div>
    </div>
    <div className='introProject'>
      {project.image1 && (
          <img src={require(`../../assets/${project.image1}`)} alt={project.titre} className='image'/>
        )}
      {project.lottie && (
        <div className='lottie-container'>
          <Lottie options={defaultOptions} />
        </div>
      )}
      {project.video && (
          <video src={require(`../../assets/${project.video}`)} type="video/webm" className='image'/>
        )}
      <div className='projectDescription'>
        <div>
          <h3>Le brief</h3>
          <p>{project.brief}</p>
        </div>
        <div className='bref'>
          <h3>En bref</h3>
          <p>{project.bref}</p>
        </div>
        <div className='ressenti'>
          <h3>Mon ressenti</h3>
          <p>{project.ressenti}</p>
        </div>
        {project.lien && (
            <a href={project.lien} className='project-button' target='_blank' rel="noreferrer">
              Voir le projet
            </a>
          )}
      </div>
    </div>
    <div className='cards'>
      <div className='card'>
        <h3>Compétences développées</h3>
        <ul>
            {project.competences.map((competence, index) => (
                <li key={index}>{competence}</li>
            ))}
        </ul>
      </div>
      <div className='card'>
        <h3>Outils</h3>
        <div className='cardImgs'>
            {project.tools.map((tool, index) => (
                <img src={require(`../../assets/${tool}`)} alt={project.titre} key={index}/>
            ))}
        </div>
      </div>
    </div>
    <div className='imgProject'>
      <div className='recadrage'>
        {project.image2 && (
          <img src={require(`../../assets/${project.image2}`)} alt={project.titre} className='logo'/>
        )}
      </div>
      <div className='recadrage'>
        {project.image3 && (
          <img src={require(`../../assets/${project.image3}`)} alt={project.titre} className='logo'/>
        )}
      </div>
      <div className='recadrage'>
        {project.image4 && (
          <img src={require(`../../assets/${project.image4}`)} alt={project.titre} className='logo'/>
        )}
      </div>
      <div className='recadrage'>
        {project.image5 && (
          <img src={require(`../../assets/${project.image5}`)} alt={project.titre} className='logo'/>
        )}
      </div>
    </div>
    <Footer/>
    <AnimatePresence>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 1.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </AnimatePresence>
    </section>
  );
}

export default ProjectDetail;


