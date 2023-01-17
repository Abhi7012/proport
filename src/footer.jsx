import React from 'react';

const date = new Date();


function Footer() {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="/" className="footer-item nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="/" className="footer-item nav-link px-2 text-muted">Contact</a></li>
                    <li className="nav-item"><a href="/" className="footer-item nav-link px-2 text-muted">About</a></li>
                </ul>
                <p className="text-center text-muted">&copy; {date.getFullYear()} Abhishek, Inc</p>
            </footer>
        </div>
    );
}

export default Footer;
