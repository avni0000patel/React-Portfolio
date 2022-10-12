import React from 'react';

export default function About() {
    return (
        <section>
            <div id="about-me">
                <h1 class="text-center">About Page</h1>
                <div class="about-me">
                    {/* <img src="./assets/images/profilePicture.jpg" class="rounded-circle img-thumbnail"
                        alt="Avni Patel" /> */}
                </div>
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
                            <p>
                                {/* <img class="tech"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /> */}
                            </p>
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
        </section>
    );
}
