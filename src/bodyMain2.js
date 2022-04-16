import React from 'react';

function Contentmid() {
    return (
        <div className="contentmid"><div className="container imgbox" >
            <img src={process.env.PUBLIC_URL+"/webdev.svg"} id="mainimg" alt="not loaded" />
            <h3>I am a web developer ,Who would love to work for you </h3>
            
        </div>
        </div>

    );
}
export default Contentmid;
