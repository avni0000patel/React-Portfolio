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
                    As a software engineer, my passion lies in solving complex problems and creating innovative solutions. My background in finance and mathematics, coupled with my training from the University of Pennsylvania in full stack web development, has equipped me with a unique set of skills and a strong understanding of both the technical and business aspects of software development.
                    <br />
                    <br />
                    I have experience building projects using a variety of technologies, including JavaScript, Node, SQL, MongoDB, and React. My expertise in these technologies, along with my ability to adapt to new technologies quickly, enables me to deliver high-quality and efficient solutions that meet the needs of my clients.
                    <br />
                    <br />
                    I am always eager to take on new challenges, and I am continuously learning and growing as a software engineer. I am excited to share my skills, knowledge and experience to help others to achieve their goals and bring their ideas to life. Welcome to my portfolio and I hope you enjoy exploring my work as much as I enjoyed creating it.                </div>
            </div>
        </section >
    );
}
