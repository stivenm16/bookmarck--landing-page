import './index.css'
import React, {useState} from 'react';
import Feature from '../Feature';

function Features() {

    let [title, setTitle] = useState('Bookmark in one click')
    let [textContent, setText] = useState('Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.')
    let [imgId, setImgId] = useState (0)

    return (
        <div className="features">
            <h2 className='features-title'>Features</h2>
            <p className='features-text'>
                Our aim is to make it  quick and easy for you to access your favourite websites. 
                Your bookmarks sync between your devices so you can access them on the go.
            </p>
            <nav className='features-nav'>
                <ul className='features-options'>
                    <li className='feature'>
                        <input type="button" value="Simple Bookmarking" 
                        onClick={() => setTitle('Bookmark in one click') & setText('Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.') & setImgId(0)}
                        className='btn-slider'
                        />
                        
                    </li>
                    
                    <li className='feature'>
                        <input type="button" value="Speedy Searching" 
                        onClick={() => setTitle('Intelligent search') & setText('Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks.') & setImgId(1)}
                        className='btn-slider'
                        />
                         
                    </li>
                    
                    <li className='feature'>
                        <input type="button" value="Share your bookmarks" 
                        onClick={() => setTitle('Share your bookmarks') & setText('Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.') & setImgId(2)}
                        className='btn-slider'
                        />
                    </li>
                </ul>
                <hr className='line'/>
            </nav>
            <Feature title={title} text={textContent} imgId ={imgId}/>
        </div>
    );
  };
  export default Features;