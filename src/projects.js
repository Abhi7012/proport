import React from 'react';
import Slider from './slider';


function Projects() {
    return (
        <div className="Projects" id="projectlist" data-scroll-index="1">
                <h3 style={{textAlign:'center',display:'block',paddingBottom:'2rem'}}>I am a web developer <br></br>Who would love to work for you </h3>

            <h4>
                Here are some of my projects
            </h4>
            <Slider />


        </div>

    );
}
export default Projects;
