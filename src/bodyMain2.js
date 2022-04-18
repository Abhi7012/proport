import React from 'react';

function Contentmid() {
    return (
        <div className="contentmid">
        <div className='row'>
            <div className='col-md-6 midh1'>
                <h1 style={{marginBottom:'2rem'}}>Want to Get Your <br></br>Personal Website ! </h1>
                <button className='btn btn-primary'  type='button'>Contact</button>
            </div>
            <div className='col-md-6'>
            <img className='minpic' src={process.env.PUBLIC_URL+'/minpic.jpg'} alt='not loaded'></img>
                
            </div>
        </div>
        </div>

    );
}
export default Contentmid;
