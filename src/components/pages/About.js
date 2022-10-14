import React from 'react';

import Me from '../../assets/images/profilePicture.jpg';

export default function About() {
    const styles = {
        aboutMe: {
            textAlign: 'center',
        },
        me: {
            height: '200px',
        },
        hello: {
            fontSize: '30px',
        }
    };
    return (
        <section>
            <div className="about-me">
                <h1 className="text-center">About Page</h1>
                <br />
            </div>
            <div>
                <div style={styles.aboutMe} class="about-me">
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
                {/* <h6 class="bio header font-weight-bold">Bio:</h6> */}
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-12">
                            <p>
                                Welcome to my story as a full stack web developer! I have a passion for solving puzzles and solving intriguing problems that others haven't solved yet. My motivation is my desire to transition to a field that provides job satisfaction from having the flexibility to be creative, seeing the result from start to end, and the wide range of opportunities in this field. My goal is to continuously learn. There is always something to learn and through my achievements, the opportunity to boost my career prospects is available.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
