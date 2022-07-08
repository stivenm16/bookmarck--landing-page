import './index.css'
import React from 'react';

function Footer() {
    
    return (
      <div className='footer'>
        <div className='top-footer'>
            <form action="">
                <p id='footer-small-text'>35,000+ already joined</p>
                <p id='footer-big-text'>Stay up-to-date with what we’re doing</p>
                <input type="text" name="" placeholder='Enter your email address' id='input-email'/>
                <input type="button" value="Contact us" className='submit-btn' />
            </form>
        </div>
        <div className='bottom-footer'>
            <div className='left-bottom-footer'>
                <img src="../../../images/logo-bookmark-footer.svg"/>
                <ul className='footer-list'>
                    <li>FEATURES</li>
                    <li>PRICING</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className='rigth-bottom-footer'>
                <img src="../../../images/icon-facebook.svg" alt="" />
                <img src="../../../images/icon-twitter.svg" alt="" />
            </div>
        </div>
      </div>  
    );
  };
  export default Footer;