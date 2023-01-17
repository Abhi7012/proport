import React from 'react';
import UpperBody from './bodyMain1';
import Contentmid from './bodyMain2';
import Projects from './projects';


function BodyMain() {
    return (
        <div className="bodyMain" id='bodym'>
            <UpperBody />
            <Contentmid />
            <Projects />

        </div>
    );
}
export default BodyMain;
