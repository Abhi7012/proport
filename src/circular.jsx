import React from "react";

function CircleFrame(props) {
  const url = `url(${process.env.PUBLIC_URL + props.bg})`;

  return (
    <div className="circleContent">
      <a href={props.href}><div className="circle" style={{ backgroundImage: url }} /></a>
      <h5>
        &quot;{props.content}&quot;
      </h5>
    </div>
  );
}
export default CircleFrame;
