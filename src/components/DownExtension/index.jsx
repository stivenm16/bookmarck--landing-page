import './index.css'
import React from 'react';
import chromeIcon from '../../../images/logo-chrome.svg'
import firefoxIcon from '../../../images/logo-firefox.svg'
import operaIcon from '../../../images/logo-opera.svg'
import dots from '../../../images/bg-dots.svg'

function Extensions() {
    return (
      <div id='extensions'>
        <h2 id='ext-title'>Download the extension</h2>
        <div className='ext-text'>    
            <span >We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                got a favourite you’d like us to prioritize.
            </span>
        </div>
        <div className='feature-component'>
            <div className="cards-containers" id='chrome-ext'>
                <div>
                    <img src={chromeIcon} alt="" className='ext-logo' />
                </div>
                <h3>Add to Chrome</h3>
                <p>Minimum version 62</p>
                <img src={dots} alt="" srcset="" />
                <div>
                    <input type="button" value="Add & install Extension" />
                </div>

            </div>
            <div className="cards-containers" id='firefox-ext'>
                <div>
                    <img src={firefoxIcon} alt="" className='ext-logo' />
                </div>
                <h3>Add to Chrome</h3>
                <p>Minimum version 62</p>
                <img src={dots} alt="" srcset="" />
                <div>
                    <input type="button" value="Add & install Extension" />
                </div>
            </div>
            <div className="cards-containers" id='opera-ext'>
                <div>
                    <img src={operaIcon} alt="" className='ext-logo' />
                </div>
                <h3>Add to Chrome</h3>
                <p>Minimum version 62</p>
                <img src={dots} alt="" srcset="" />
                <div>
                    <input type="button" value="Add & install Extension" />
                </div>
            </div>
            </div>  
      </div>
    );
  };
  export default Extensions;