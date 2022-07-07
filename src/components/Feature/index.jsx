import './index.css'
import React from 'react';
// import imgPrueba from `../../../images/illustration-{title}.svg`

function Feature({title, text, imgId}) {
    let path = `../../../images/illustration-${imgId}.svg`
    

    console.log(imgId)
    console.log(0)
    return (
      <div className='feature-component'>
        <img src={path} alt="" />
        <div className='feature-text-container'>
            <h3 className='title-feature'>{title}</h3>
            <p>{text}</p>
            <input type="button" value="more info"/>
        </div>
      </div>  
    );
  };
  export default Feature;