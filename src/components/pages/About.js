import React from 'react';

import Me from '../../assets/images/profilePicture.jpg';

import './About.css';

export default function About() {
    const styles = {
        top: {
            paddingTop: '60px',
            paddingBottom: '60px',
        },
        title: {
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
        },
        aboutMe: {
            textAlign: 'center',
        },
        me: {
            height: '200px',
            borderRadius: '50%',
            padding: '0.25rem',
            backgroundColor: '#fff',
            border: '1px solid #dee2e6',
            maxWidth: '100%',
        },
        hello: {
            color: 'green',
            fontSize: '30px',
            display: 'flex',
            textAlign: 'center',
            flexDirection: 'column',
        },
        bio: {
            color: 'white',
            display: 'flex',
            fontSize: '18px',
            textAlign: 'center',
            margin: '15px',
        },
    };
    return (
        <section style={styles.top}>
            <div className="about-page" style={styles.title}>
                <br />
                <h1>About Page</h1>
                <br />
            </div>
            <div>
                <div style={styles.aboutMe} className="about-me">
                    <img style={styles.me} src={Me} className="me rounded-circle img-thumbnail"
                        alt="Avni Patel" />
                </div>
                <br />
                <div style={styles.hello} className="hello">
                    Hello, my name is Avni Patel
                    <br />
                    I'm a Software Engineer
                </div>
            </div >
            <br />
            <div>
                <div style={styles.bio} className="bio">
                    Welcome to my story Software Engineer! I have a background in finance and mathematics, as well as training from University of Pennsylvania in full stack web development. I have experience building projects using JavaScript, Node, SQL, MongoDB, React, and other technologies.
                </div>
            </div>
        </section >
    );
}
