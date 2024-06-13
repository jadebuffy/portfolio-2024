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
                <h2>1 – ÉDITION DU SITE</h2>
                <p>En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans 
                    l’économie numérique, il est précisé aux utilisateurs du site web 
                    www.jadebuffy.fr l’identité des différents intervenants dans le cadre de sa 
                    réalisation et de son suivi : </p>

                    <h3>Propriétaire du site</h3>
                    <p> Contact : jade.buffy[at]hotmail.fr - 07 82 61 48 14<br/>
                    Adresse :<br/>
                    Site web : www.jadebuffy.fr<br/>
                    Crédits illustrations :<br/>
                    @nvnevsk / Pinterest <br/>
                    @erinapearl / Pinterest</p>

                    <h3>Hébergeur</h3>
                    <p>OVH SAS 
                    2 rue Kellermann - 59100 Roubaix - France <br/>
                    Tel : 1007</p>

                    <h3>Réalisation du site internet </h3>
                    <p>Jade BUFFY</p>

                <h2>2 – PROPRIÉTÉ INTELLECTUELLE ET CONTREFAÇONS</h2>
                   <p>Jade BUFFY est propriétaire des droits de propriété intellectuelle et détient les 
                    droits d’usage sur tous les éléments accessibles sur le site internet, notamment 
                    les textes, images, graphismes, logos, vidéos, architecture, icônes et sons. 
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou 
                    partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est 
                    interdite, sauf autorisation écrite préalable de Jade BUFFY.<br/> Toute exploitation non 
                    autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée 
                    comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des 
                    articles L.335-2 et suivants du Code de Propriété Intellectuelle. </p>

                <h2>3 – LIMITATIONS DE RESPONSABILITÉ</h2>
                    <p>Jade BUFFY ne pourra être tenu pour responsable des dommages directs et indirects 
                        causés au matériel de l’utilisateur, lors de l’accès au site www.jadebuffy.fr.
                        Jade BUFFY décline toute responsabilité quant à l’utilisation qui pourrait être 
                        faite des informations et contenus présents sur www.jadebuffy.fr.
                        Jade BUFFY s’engage à sécuriser au mieux le site www.jadebuffy.fr, cependant sa 
                        responsabilité ne pourra être mise en cause si des données indésirables sont 
                        importées et installées sur son site à son insu.<br/>
                        Des espaces interactifs (espace contact) sont à la disposition des utilisateurs. 
                        Jade BUFFY se réserve le droit de supprimer, sans mise en demeure préalable, tout 
                        contenu déposé dans cet espace qui contreviendrait à la législation applicable en 
                        France, en particulier aux dispositions relatives à la protection des données. <br/>Le 
                        cas échéant, Jade BUFFY se réserve également la possibilité de mettre en cause la 
                        responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message 
                        à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le 
                        support utilisé (texte, photographie …). </p>

                <h2>4 – CNIL ET GESTION DES DONNÉES PERSONNELLES</h2>
                   <p> Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, 
                    l’utilisateur du site www.jadebuffy.fr dispose d’un droit d’accès, de 
                    modification et de suppression des informations collectées. Pour exercer ce droit, 
                    envoyez un message via notre formulaire de contact. </p>

                <h2>5 – LIENS HYPERTEXTES ET COOKIES</h2>
                    <p>Le site www.jadebuffy.fr contient des liens hypertextes vers d’autres sites 
                        et dégage toute responsabilité à propos de ces liens externes ou des liens créés
                         par d’autres sites vers www.jadebuffy.fr.<br/>
                        La navigation sur le site www.jadebuffy.fr est susceptible de provoquer 
                        l’installation de cookie(s) sur l’ordinateur de l’utilisateur. <br/>
                        Un « cookie » est un fichier de petite taille qui enregistre des informations 
                        relatives à la navigation d’un utilisateur sur un site. <br/>Les données ainsi 
                        obtenues permettent d’obtenir des mesures de fréquentation, par exemple. <br/>Vous 
                        avez la possibilité d’accepter ou de refuser les cookies en modifiant les 
                        paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre 
                        consentement. Les cookies sont enregistrés pour une durée maximale de 1 mois. </p>

                <h2>6 - DROIT APPLICABLE ET ATTRIBUTION DE JURIDICTION</h2>
                    <p>Tout litige en relation avec l’utilisation du site www.jadebuffy.fr est soumis au
                         droit français. En dehors des cas où la loi ne le permet pas, il est fait 
                         attribution exclusive de juridiction aux tribunaux compétents d'Annecy.</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Mention