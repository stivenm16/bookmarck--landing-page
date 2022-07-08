import './index.css'
import React from 'react';

function Feature({title, text, imgId}) {
    let path = `../../../images/illustration-${imgId}.svg`
    
    return (
      <div className='feature-component'>
        <div className='img-container'>
          <img src={path} alt="" className='img-feature'/>
          <div className='figures'>
            <div className='square-feature'></div>
            <div className='circle-feature'></div>
          </div>
        </div>
        <div className='feature-text-container'>
            <h3 className='title-feature'>{title}</h3>
            <p>{text}</p>
            <input type="button" value="more info"/>
        </div>
      </div>  
    );
  };
  export default Feature;