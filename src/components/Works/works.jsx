import React, { useState, useEffect } from 'react';
import './works.css';
import { Link } from 'react-router-dom';
import data from '../../data.json';
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Works = () => {
  const [filteredProjects, setFilteredProjects] = useState(data.projects);
  const [filter, setFilter] = useState('all');
  const [isFiltered, setIsFiltered] = useState(false); 

  useEffect(() => {
    setIsFiltered(true);
    setTimeout(() => setIsFiltered(false), 1000); 
  }, [filteredProjects]);

  const filterProjects = (category) => {
    if (category === 'all') {
      setFilteredProjects(data.projects);
    } else {
      const filtered = data.projects.filter(project => project.categories.includes(category));
      setFilteredProjects(filtered);
    }
    setFilter(category);
  };

  const [isHoveredArray, setIsHoveredArray] = useState(Array(12).fill(false));

  const handleMouseEnter = (index) => {
    setIsHoveredArray(prevState => {
      const updatedHoveredArray = [...prevState];
      updatedHoveredArray[index] = true;
      return updatedHoveredArray;
    });
  };

  const handleMouseLeave = (index) => {
    setTimeout(() => {
      setIsHoveredArray(prevState => {
        const updatedHoveredArray = [...prevState];
        updatedHoveredArray[index] = false;
        return updatedHoveredArray;
      });
    }, 100);
  };

  return (
    <section id="works">
        <motion.h2 className="worksTitle" initial={{x: -300, opacity: 0}} whileInView={{x: 0, opacity: 1, transition: { type: "linear", duration: 0.7, delay: 0.5 }}}>Découvrez mes projets</motion.h2>
        <motion.span className="worksDescription" initial={{x: -300, opacity: 0}} whileInView={{x: 0, opacity: 1, transition: { type: "linear", duration: 0.7, delay: 0.5 }}}>Mes projets s'articulent autour de plusieurs thématiques parmi 
        le design éditorial, le design graphique, le webdesign, le zoning, le développement ou encore le 
        motion design. Ils ont été réalisés dans plusieurs situations, notamment dans le cadre de projets 
        étudiants, professionnels lors de mon stage et mon alternance, et dans le cadre de projets personnels. 
        <br/><i>La liste des réalisations ci-dessous n'est pas exhaustive, j'ai sélectionné ceux qui, pour moi,
          étaient pertinents.</i></motion.span>
        <div className='buttonFilter'>
          <button onClick={() => filterProjects('all')} className={filter === 'all' ? 'filterActive' : ''}>Tous</button>
          <button onClick={() => filterProjects('Design graphique')} className={filter === 'Design graphique' ? 'filterActive' : ''}>Design graphique</button>
          <button onClick={() => filterProjects('Design éditorial')} className={filter === 'Design éditorial' ? 'filterActive' : ''}>Design éditorial</button>
          <button onClick={() => filterProjects('Webdesign')} className={filter === 'Webdesign' ? 'filterActive' : ''}>Web Design</button>
          <button onClick={() => filterProjects('Animation')} className={filter === 'Animation' ? 'filterActive' : ''}>Animation</button>
          <button onClick={() => filterProjects('Communication')} className={filter === 'Communication' ? 'filterActive' : ''}>Communication</button>
          <button onClick={() => filterProjects('Développement web')} className={filter === 'Développement web' ? 'filterActive' : ''}>Développement web</button>
        </div>
          <AnimatePresence>
            <motion.div 
              className="worksImgs"
              key={filter} 
              initial={isFiltered ? {  y: 10, opacity: 0 } : {}}
              animate={{y: 0, opacity: 1 }}
              exit={{y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filteredProjects.map((projects, index) => (
                <div
                  key={projects.id}
                  className="image-zoom"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <Link to={`/project/${projects.id}`}>
                  <LazyLoadImage
                    alt={projects.titre}
                    effect="opacity"
                    src={projects.image} 
                    className={`worksImg ${isHoveredArray[index] ? 'zoomed' : ''}`}/>
                    <div className={`overlay ${isHoveredArray[index] ? 'visible' : ''}`}>
                      <div className='worksContent'>
                        <h3>{projects.titre}</h3>
                        <p>{projects.categories.join(' - ')}</p>
                        <p>{projects.type}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
              
    </section>
  );
};

export default Works;
