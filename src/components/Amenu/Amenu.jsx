//commande rafce pour générer le composant react basique
import React from 'react';
import './Amenu.css';

const Amenu = () => {
  return (
    <div>
        <ul className='a11y-nav'>
            <li>
                <a href='#intro'>Passer directement au contenu principal</a>
            </li>
            <li>
                <a href='#skills'>Voir la présentation</a>
            </li>
            <li>
                <a href='#works'>Aller à l'introduction des projets</a>
            </li>
            <li>
                <a href='#contact'>Voir les coordonnées</a>
            </li>
        </ul>
    </div>
  )
}

export default Amenu