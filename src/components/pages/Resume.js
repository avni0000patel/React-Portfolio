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
                    <div className="row justify-content-around">
                        <a href={PDF}>Click here to download resume!</a>
                    </div>
                </div>
            </div>
            {/* <br />
            <div className="technical-skills">
                <div className="container">
                    <div className="row d-flex justify-content-around">
                        <div>
                            Git, HTML, CSS, JavaScript, Bootstrap, The DOM, APIs, jQuery, JSON, AJAX, Node, ES6, Object-Oriented Programming, Express, MySQL, MVC paradigm, Sequelize, Testing, and Agile Development, NoSQL, React, MERN Stack, and fundamentals in Computer Science.
                        </div>
                    </div>
                </div>
            </div> */}
            <br />
            <div className="front-end">
                <div className="container">
                    <div className="row d-flex justify-content-around">
                        <div>
                            <h6>Front-End Proficiencies:</h6>
                            <ul>
                                <li>
                                    HTML
                                </li>
                                <li>
                                    CSS
                                </li>
                                <li>
                                    JavaScript
                                </li>
                                <li>
                                    Bootstrap
                                </li>
                                <li>
                                    jQuery
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="back-end">
                <div className="container">
                    <div className="row d-flex justify-content-around">
                        <div>
                            <h6>Back-End Proficiencies:</h6>
                            <ul>
                                <li>
                                    APIs
                                </li>
                                <li>
                                    Node
                                </li>
                                <li>
                                    Express
                                </li>
                                <li>
                                    MySQL
                                </li>
                                <li>
                                    Sequelize
                                </li>
                                <li>
                                    MongoDB
                                </li>
                                <li>
                                    Mongoose
                                </li>
                                <li>
                                    REST
                                </li>
                                <li>
                                    GraphQL
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </section >
    );
}
