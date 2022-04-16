import React from 'react';


function CircleFrame(props) {
    const url = `url(${props.bg})`;
    return (
        <div className="circleContent"><div className="circle" style={{ backgroundImage: url }} />
            <h3 >
                {props.content}
            </h3></div>

    );
}
export default CircleFrame;
