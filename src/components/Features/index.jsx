import './index.css'


function Features() {
    return (
        <div className="features">
            <h2 className='features-title'>Features</h2>
            <p className='features-text'>Our aim is to make it quick and easy for you to access your favourite websites. 
  Your bookmarks sync between your devices so you can access them on the go.</p>
            <nav className='features-nav'>
                <ul className='features-options'>
                    <li>Simple Bookmarking</li>
                    
                    <li>Speedy Searching</li>
                    
                    <li>Easy Sharing</li>
                </ul>
                <hr className='line'/>
            </nav>
            <div>Components</div>
        </div>
    );
  };
  export default Features;