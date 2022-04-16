import React from 'react';


function CircleFrame(props) {

    const url = `url(${process.env.PUBLIC_URL + props.bg})`;

    return (
        <div className="circleContent"><div className="circle" style={{ backgroundImage: url }} />
            <h3 >
            {console.log(url)}
                {props.content}
            </h3></div>

    );
}
export default CircleFrame;
