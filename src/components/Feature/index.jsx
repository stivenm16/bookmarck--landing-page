import './index.css'
import React from 'react';
import imgPrueba from '../../../images/illustration-1.svg'

function Feature() {
    return (
      <div className='feature-component'>
        <img src={imgPrueba} alt="" />
        <div className='feature-text-container'>
            <h3 className='title-feature'>Bookmark in one click</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad molestiae et, porro eligendi qui labore voluptas quam eum repellendus! Consectetur dolorum vitae optio esse sequi laboriosam laudantium amet illo?</p>
            <input type="button" value="more info"/>
        </div>
      </div>  
    );
  };
  export default Feature;