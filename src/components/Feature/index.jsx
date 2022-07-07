import './index.css'
import React from 'react';
import imgPrueba from '../../../images/illustration-1.svg'

function Feature({title, text}) {
    
    console.log(text)
    return (
      <div className='feature-component'>
        <img src={imgPrueba} alt="" />
        <div className='feature-text-container'>
            <h3 className='title-feature'>{title}</h3>
            <p>{text}</p>
            <input type="button" value="more info"/>
        </div>
      </div>  
    );
  };
  export default Feature;