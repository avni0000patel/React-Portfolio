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
                <h6 class="bio header font-weight-bold">Bio:</h6>
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
            <div class="technical-skills">
                <h6 class="technical-skills header font-weight-bold">Technical Skills:</h6>
                <div class="container">
                    <div class="row d-flex justify-content-around">
                        <p>
                            JavaScript, Node, SQL, MongoDB, React and other technologies.
                        </p>
                        {/* JavaScript */}
                        <div class="skill col-12 col-md-4 d-flex justify-content-around">
                            <div>
                                {/* <img class="tech"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /> */}
                            </div>
                        </div>
                        {/* Node */}
                        <div class="skill col-12 col-md-4 d-flex justify-content-around">
                            <p>
                                {/* <img class="tech"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /> */}
                            </p>
                        </div>
                        {/* MySQL */}
                        <div class="skill col-12 col-md-4 d-flex justify-content-around">
                            <p>
                                {/* <img class="tech"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" /> */}
                            </p>
                        </div>
                        {/* MongoDB  */}
                        <div class="skill col-12 col-md-4 d-flex justify-content-around">
                            <p>
                                {/* <img class="tech"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" /> */}
                            </p>
                        </div>
                        {/* React */}
                        <div class="skill col-12 col-md-4 d-flex justify-content-around">
                            <p>
                                {/* <img class="tech"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="education">
                <h6 class="education header font-weight-bold">Education:</h6>
                <div class="container">
                    <div class="row justify-content-around">
                        <div class="col-12">
                            <p>
                                University of Pennsylvania
                                <br />
                                Full Stack Web Development
                            </p>
                        </div>
                    </div>
                    <div class="row justify-content-around">
                        <div class="col-12">
                            <p>
                                Siena College
                                <br />
                                Bachelor of Science in Finance, Minor in Mathematics
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact">
                <h6 class="contact font-weight-bold">Contact Info:</h6>
                <div class="container">
                    <div class="row justify-content-around">
                        <div class="col-12">
                            <p>
                                Feel free to reach out to me via email: avni0000patel@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
