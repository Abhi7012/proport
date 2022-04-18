import React from 'react';


function CircleFrame(props) {

    const url = `url(${process.env.PUBLIC_URL + props.bg})`;

    return (
        <div className="circleContent"><div className="circle" style={{ backgroundImage: url }} />
            <a href={props.href}><button type='button' className='btn btn-dark'>
            {console.log(url)}
                {props.content}
            </button></a></div>

    );
}
export default CircleFrame;
