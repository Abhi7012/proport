import React, { useEffect } from 'react';
import Typewriter from "typewriter-effect";



const date = new Date();
const greeting = () => {
    const hourpassed = date.getHours();
    if (hourpassed >= 0 && hourpassed <= 12) {
        return 'Good Morning';
    } else if (hourpassed > 12 && hourpassed <= 18) {
        return 'Good Afternoon';
    }

    return 'Good Evening';
};
const greetingNote = greeting();

function UpperBody() {
    const url = `url(${process.env.PUBLIC_URL + "/hello.gif"})`;
    
    return (
        <div className="content1">
        
            <h1 className="greetings">
            <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString(greetingNote)
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("Welcome")
       .start();
       }}
       />
            </h1>
            <h3>Its Abhishek,Your Developer</h3>
        </div>
    );
}
export default UpperBody;
