import React from 'react';
import sad from '../../assets/sad.svg';
import './NotFound.css';

const NotFound = () => {
  return (      
    <section className='section404'>
        <div className='image404'>
            <img src={sad} alt='emoji triste'/>
        </div>
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Oops, il semblerait que cette page n'existe pas !</p>
        </div>
    </section>
  );
};

export default NotFound;
