import React from 'react';

function Footer() {
    return (
        <footer>
        <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
        </div>
        <ul className="social_icon">
            <li><a href="/"><i className="fa fab-facebook"></i></a></li>
            <li><a href="/"><i className="fa fab-instagram"></i></a></li>
            <li><a href="/"><i className="fa fab-youtube"></i></a></li>
            <li><a href="/"><i className="fa fab-linkedin"></i></a></li>
            <li><a href="/"><i className="fa fab-twitter"></i></a></li>
        </ul>
        <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/download">Download</a></li>
            <li><a href="/help">Help</a></li>
        </ul>
        <p>&copy; 2022 Valid Audio | All Right Reserved</p>
    </footer>
    )
}

export default Footer;
