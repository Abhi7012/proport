import React from 'react';


function Nav() {
    return (
        <div className="fnav">
            <div className="navbar fixed-top navbar-dark bg-dark">
                <a className="nav-link" href="/">Home</a>
                <a className="nav-link " id="projectbtn" href="#projectlist">Projects</a>
                <a className="nav-link" href="/">Contact</a>


            </div>
        </div>
    );
}
export default Nav;
