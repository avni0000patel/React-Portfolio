import React from 'react';

import Me from '../../assets/images/profilePicture.jpg';

import './About.css';

export default function About() {
    return (
        <section className="top">
            <div className="about-page">
                <h1 className="page-name">About Page</h1>
            </div>
            <div className="about-me">
                <img src={Me} className="me"
                    alt="Avni Patel" />
            </div>
            <div className="hello">
                Hello, my name is Avni Patel
                <br />
                I'm a Software Engineer
            </div>
            <div>
                <div className="bio">
                    Welcome to my story Software Engineer! I have a background in finance and mathematics, as well as training from University of Pennsylvania in full stack web development. I have experience building projects using JavaScript, Node, SQL, MongoDB, React, and other technologies.
                </div>
            </div>
        </section >
    );
}
