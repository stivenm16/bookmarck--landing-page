import './index.css'
import logoHero from '../../../images/illustration-hero.svg'

function Main() {
    return (
        <div className="main-content">
            <div className="main-text">
                <h1>A Simple Bookmark Manager</h1>
                <p className='main-decription'>A clean and simple interface to organize your favourite websites. Open a new 
                     browser tab and see your sites load instantly. Try it for free.
                </p>

                <div className='extensions'>
                    <button className='download-extension' id='chrome'>
                    <a href="#extensions">
                        Get it on Chrome
                    </a>
                    </button>
                    
                    <button className='download-extension' id='firefox'>
                    <a href="#extensions">
                        Get it on Firefox
                    </a>
                    </button>
                </div>

            </div>
            <div className="main-img">
                <img src={logoHero} alt="" className='logoHero'  />
                <div>
                    <div className='square'></div>
                    <div className='circle'></div>
                </div>
            </div>
        </div>
    );
  };
  export default Main;