import React from 'react';

import Me from '../../assets/images/profilePicture.jpg';

export default function About() {
    const styles = {
        top: {
            paddingTop: '40px',
            paddingBottom: '60px',
        },
        aboutMe: {
            textAlign: 'center',
        },
        me: {
            height: '200px',
        },
        hello: {
            fontSize: '30px',
        },
        pop: {
            color: 'white',
        }
    };
    return (
        <section style={styles.top}>
            <div className="about-me">
                <br />
                <h1 style={styles.pop} className="text-center">About Page</h1>
                <br />
            </div>
            <div>
                <div style={styles.aboutMe} className="about-me">
                    <img style={styles.me} src={Me} className="rounded-circle img-thumbnail"
                        alt="Avni Patel" />
                </div>
                <br />
                <div style={styles.hello} className="text-center">
                    Hello, I'm Avni Patel.
                    <br />
                    I'm a full stack web developer.
                </div>
            </div>
            <br />
            <div className="bio">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-12">
                            <p>
                                Welcome to my story as a full stack web developer! I have a background in finance and mathematics, as well as training from University of Pennsylvania in full stack web development. I have experience building projects using JavaScript, Node, SQL, MongoDB, React, and other technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
