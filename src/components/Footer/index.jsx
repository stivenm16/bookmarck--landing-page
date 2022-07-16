import './index.css'
import React from 'react';

function Footer() {
    
    return (
      <div className='footer' id='footer'>
        <div className='top-footer'>
            <form action="" className='footer-form'>
                <p id='footer-small-text'>35,000+ already joined</p>
                <p id='footer-big-text'>Stay up-to-date with what we’re doing</p>
                <div className='input-div'>
                    <input type="email" name="" placeholder='Enter your email address' id='input-email'/>
                    <input type="submit" value="Contact us" className='submit-btn' id='contact-us-btn' />
                </div>
            </form>
        </div>
        <div className='bottom-footer'>
            <div className='left-bottom-footer'>
                <img src="../../../images/logo-bookmark-footer.svg" id='logo-footer-book'/>
                <ul className='footer-list'>
                    <li className='footer-links'>FEATURES</li>
                    <li className='footer-links'>PRICING</li>
                    <li className='footer-links'>CONTACT</li>
                </ul>
            </div>
            <div className='rigth-bottom-footer'>
                <img src="../../../images/icon-facebook.svg" alt="" className='footer-icons' />
                <img src="../../../images/icon-twitter.svg" alt="" className='footer-icons'/>
            </div>
        </div>
      </div>  
    );
  };
  export default Footer;