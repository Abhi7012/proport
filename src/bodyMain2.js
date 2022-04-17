import React from 'react';

function Contentmid() {
    return (
        <div className="contentmid">
        <div className="container imgbox" >
            <img src={process.env.PUBLIC_URL+"/webdev.svg"} id="mainimg" alt="not loaded" />
            
        </div>
        </div>

    );
}
export default Contentmid;
