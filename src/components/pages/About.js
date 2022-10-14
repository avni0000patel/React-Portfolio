import React from 'react';

import Me from '../../assets/images/profilePicture.jpg';

export default function About() {
    const styles = {
        aboutMe: {
            textAlign: 'center',
        },
        me: {
            height: '150px',
        },
        skills: {
            width: '80px',
            height: '80px',
            // filter: 'invert(99%) sepia(99%) saturate(2%) hue-rotate(296deg) brightness(108%) contrast(101%)',
        }
    };
    return (
        <section>
            <div id="about-me">
                <h1 class="text-center">About Page</h1>
                <div style={styles.aboutMe} class="about-me">
                    <img style={styles.me} src={Me} class="rounded-circle img-thumbnail"
                        alt="Avni Patel" />
                </div>
                <p class="text-center">
                    Hello, I'm Avni Patel.
                    <br />
                    I'm a full stack web developer.
                </p>
            </div>
            <div class="bio">
                {/* <h6 class="bio header font-weight-bold">Bio:</h6> */}
                <div class="container">
                    <div class="row justify-content-around">
                        <div class="col-12">
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
