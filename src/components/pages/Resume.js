import React from 'react';
import PDF from '../../assets/Avni_Patel_Resume.pdf'

export default function Resume() {
    const styles = {
        top: {
            paddingTop: '40px',
            paddingBottom: '60px',
        },
        pop: {
            color: '#274C77',
        }
    }
    return (
        <section style={styles.top}>
            <div className="resume">
                <br />
                <h1 style={styles.pop} className="text-center">Resume Page</h1>
                <br />
            </div>
            <div className="download">
                <div className="container">
                    <div className="row">
                        <div>
                            <div>Resume:</div>
                            <ul>
                                <li>
                                    <a className="card text-dark" href={PDF}>Click here to download resume!</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="technical-skills">
                <div className="container">
                    <div className="row d-flex justify-content-around">
                        <div>
                            Git, HTML, CSS, JavaScript, Bootstrap, The DOM, APIs, jQuery, JSON, AJAX, Node, ES6, Object-Oriented Programming, Express, MySQL, MVC paradigm, Sequelize, Testing, and Agile Development, NoSQL, React, MERN Stack, and fundamentals in Computer Science.
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="proficiences">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div>Front-End Proficiencies:</div>
                            <ul>
                                <li>
                                    <div className="card text-dark">HTML</div>
                                </li>
                                <li>
                                    <div className="card text-dark">CSS</div>
                                </li>
                                <li>
                                    <div className="card text-dark">JavaScript</div>
                                </li>
                                <li>
                                    <div className="card text-dark">Bootstrap</div>
                                </li>
                                <li>
                                    <div className="card text-dark">jQuery</div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6">
                            <div>Back-End Proficiencies:</div>
                            <ul>
                                <li>
                                    <div className="card text-dark">APIs</div>
                                </li>
                                <li>
                                    <div className="card text-dark">Node</div>
                                </li>
                                <li>
                                    <div className="card text-dark">Express</div>
                                </li>
                                <li>
                                    <div className="card text-dark">MySQL</div>
                                </li>
                                <li>
                                    <div className="card text-dark">Sequelize</div>
                                </li>
                                <li>
                                    <div className="card text-dark">MongoDB</div>
                                </li>
                                <li>
                                    <div className="card text-dark">Mongoose</div>
                                </li>
                                <li>
                                    <div className="card text-dark">REST</div>
                                </li>
                                <li>
                                    <div className="card text-dark">GraphQL</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
