import React from 'react';

import { Tabs, Tab } from 'react-bootstrap-tabs';

import RigMatchMe from '../../assets/images/rig-match-me-screenshot.png';
import Horiseon from '../../assets/images/challenge01.png'
import PasswordGenerator from '../../assets/images/password-generator.png';
import CodeQuiz from '../../assets/images/code-quiz-area.png';
import WorkDayScheduler from '../../assets/images/work-day-scheduler-area.png';
import WeatherDashboard from '../../assets/images/search.png';
import ProfessionalREADMEGenerator from '../../assets/images/professional-readme-generator-picture.png';
import TeamProfileGenerator from '../../assets/images/team-profile-generator.png';
import NoteTaker from '../../assets/images/note-taker.png';
import EmployeeTracker from '../../assets/images/employee-tracker.png';
import ECommerceBackEnd from '../../assets/images/e-commerce-back-end-screenshot.png';
import TechBlog from '../../assets/images/tech-blog-screenshot.png';
import RegexTutorial from '../../assets/images/regex-tutorial.png';
import SocialNetworkAPI from '../../assets/images/social-network-API.png';
import BookSearchEngine from '../../assets/images/book-search-engine.png';
import ReduxStore from '../../assets/images/redux-store.png';
import AutismFY from '../../assets/images/autismfylogo.png';
import './Portfolio.css';

export default function Portfolio() {
    return (
        <section className="top">
            <div className="portfolio-page">
                <h1>Portfolio Page</h1>
            </div>
            <div className="portfolio">
                <div className="container">
                    <div className="row gy-3 justify-center justify-content-around">
                        {/* AutismFY */}
                        <div className="project-card card col-12 col-md-6 col-lg-4">
                            <br />
                            <div className="rig-match-me">
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                AutismFY
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description: In this project we have created an application that is designed to help parents and caregivers of younger Autistic children create routine To-Do Lists, log important information in a Notes tab, share and connect with other parents and caregivers by creating posts.
                                            <br />
                                            <br />
                                            Technologies: Apollo client, Axios, Jest-dom testing library, React testing library, User-event testing library, Apollo-server-express, Bcrypt, Bootstrap, Bootstrap-icons, Concurrently, Connect-busboy, Cors,  Express, Framer-motion, Graphql, Jsonwebtoken, Jwt-decode, Material UI, Mongoose, Nodemon, Prettier, Randomcolor, Randomstring, React, React-bootstrap, React-dom, React-draggable, React-icons, React-redux, React-router-dom, React-scripts, Redux, UUID, Web-vitals

                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://github.com/avni0000patel/AutismFY">
                                            <p className="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <a href="https://hidden-beach-19071.herokuapp.com/">
                                                <img className="project-img" src={AutismFY}
                                                    alt="AutismFY" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        {/* Rig Match Me */}
                        <div className="project-card card col-12 col-md-6 col-lg-4">
                            <br />
                            <div className="rig-match-me">
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                Rig Match Me
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description: In this project we have created an application that provides a guided tour of instruments to help steer the user towards getting properly setup for the genre of music they are interested in playing.
                                            <br />
                                            <br />
                                            Technologies: HTML, CSS, Bootstrap, JavaScript, Node JS, Express, Express-handlebars, MySQL, Sequelize, Dotenv, Bcrypt, Connect-session-sequelize, Nodemailer
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://github.com/avni0000patel/Rig-Match-Me">
                                            <p className="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <a href="https://evening-fjord-11816.herokuapp.com/">
                                                <img className="project-img" src={RigMatchMe}
                                                    alt="Rig Match Me" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        {/* Redux Store */}
                        < div className="project-card card col-12 col-md-6 col-lg-4">
                            <div className="redux-store">
                                <br />
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                Redux Store
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description: In this project I refactored an e-commerce platform that uses React's Context API to use Redux.
                                            <br />
                                            <br />
                                            Technologies:  Apollo client, Redux toolkit, Stripe, Jest-dom testing library, React testing library, User-event testing library, Apollo-server-express, Bcrypt, Concurrently, Express, Graphql, Jsonwebtoken, Jwt-decode, Mongoose, Nodemon, React, React-bootstrap, React-dom, React-redux, React-router-dom, React-scripts
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://github.com/avni0000patel/Redux-Store">
                                            <p className="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <a href="https://fierce-wave-89071.herokuapp.com/">
                                                <img className="project-img" src={ReduxStore}
                                                    alt="Redux Store" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Book Search Engine */}
                        < div className="project-card card col-12 col-md-6 col-lg-4">
                            <div className="book-search-engine">
                                <br />
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                Book Search Engine
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description:  In this project I have taken a fully functioning Google Books API search engine built with a RESTful API, and refactored it to be a GraphQL API built with Apollo Server.
                                            <br />
                                            <br />
                                            Technologies:  Apollo client, Jest-dom testing library, React testing library, User-event testing library, Apollo-server-express, Bcrypt, Bootstrap, Concurrently, Express, Graphql, Jsonwebtoken, Jwt-decode, Mongoose, Nodemon, React, React-bootstrap, React-dom, React-router-dom, React-scripts
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://github.com/avni0000patel/Book-Search-Engine">
                                            <p className="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <a href="https://gentle-brook-85225.herokuapp.com/">
                                                <img className="project-img" src={BookSearchEngine}
                                                    alt="Book Search Engine" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Social Network API */}
                        < div className="project-card card col-12 col-md-6 col-lg-4">
                            <div className="social-network-API">
                                <br />
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                Social Network API
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description:  In this project I have built a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list.
                                            <br />
                                            <br />
                                            Technologies:  Javascript, Node JS, Express, Moment, Nodemon
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://github.com/avni0000patel/Social-Network-API">
                                            <p className="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <img className="project-img" src={SocialNetworkAPI}
                                                alt="Social Network API" />
                                        </div>
                                        <p className="description text-light">
                                            Note:  Application is not deployed
                                        </p>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Regex Tutorial */}
                        < div className="project-card card col-12 col-md-6 col-lg-4">
                            <div className="regex-tutorial">
                                <br />
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                Regex Tutorial
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description:  In this project I have created a regex tutorial that writes about code.
                                            <br />
                                            <br />
                                            Technologies:  GitHub Gist
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://gist.github.com/avni0000patel/3ba423acbc4236b858409caa4486d6cb">
                                            <p className="text-light">Click here to see the github gist for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <img className="project-img" src={RegexTutorial}
                                                alt="Regex Tutorial" />
                                        </div>
                                        <p className="description text-light">
                                            Note:  Application is not deployed
                                        </p>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Tech Blog */}
                        < div className="project-card card col-12 col-md-6 col-lg-4">
                            <div className="tech-blog">
                                <br />
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                Tech Blog
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description:  In this project I have created a tech blog that is a CMS-style blog site similar to a Wordpress site.
                                            <br />
                                            <br />
                                            Technologies:  HTML, CSS, Bootstrap, JavaScript, Node JS, Express, Express-handlebars, MySQL, Sequelize, Dotenv, Bycrypt, Connect-session-sequelize
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://github.com/avni0000patel/Tech-Blog">
                                            <p className="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <a href="https://boiling-tor-98375.herokuapp.com/">
                                                <img className="project-img" src={TechBlog}
                                                    alt="Tech Blog" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* E-Commerce Back End */}
                        < div className="project-card card col-12 col-md-6 col-lg-4">
                            <div className="e-commerce-back-end">
                                <br />
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                E-commerce Back End
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description:  In this project I have built the back end for an e-commerce site.
                                            <br />
                                            <br />
                                            Technologies:  JavaScript, Node JS, Express, MySQL, Sequelize, Dotenv
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://github.com/avni0000patel/E-commerce-Back-End">
                                            <p className="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <img className="project-img" src={ECommerceBackEnd}
                                                alt="E-commerce Back End" />
                                        </div>
                                        <p className="description text-light">
                                            Note:  Application is not deployed
                                        </p>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Employee Tracker */}
                        < div className="project-card card col-12 col-md-6 col-lg-4">
                            <div className="employee-tracker">
                                <br />
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                Employee Tracker
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description:  In this project I have created an application that allows you to view and manage the departments, roles, and employees in a company.
                                            <br />
                                            <br />
                                            Technologies:  JavaScript, Node JS, Inquirer, Console Table, MySQL
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://github.com/avni0000patel/Employee-Tracker">
                                            <p className="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <img className="project-img" src={EmployeeTracker}
                                                alt="Employee Tracker" />
                                        </div>
                                        <p className="description text-light">
                                            Note:  Application is not deployed
                                        </p>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Note Taker */}
                        < div className="project-card card col-12 col-md-6 col-lg-4">
                            <div className="note-taker">
                                <br />
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                Note Taker
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description:  In this project I have created a Note Taker application to create and store notes.
                                            <br />
                                            <br />
                                            Technologies:  HTML, CSS, Bootstrap, JavaScript, Node JS, Inquirer, Express, UUID
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://github.com/avni0000patel/Note-Taker">
                                            <p className="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <a href="https://fathomless-dawn-16383.herokuapp.com/">
                                                <img className="project-img" src={NoteTaker}
                                                    alt="Note Taker" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Team Profile Generator */}
                        < div className="project-card card col-12 col-md-6 col-lg-4">
                            <div className="team-profile-generator">
                                <br />
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                Team Profile Generator
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description:  In this project I have created a team profile generator that displays summaries for each person.
                                            <br />
                                            <br />
                                            Technologies:  HTML, CSS, Bootstrap, JavaScript, Node JS, Inquirer, Jest
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://github.com/avni0000patel/Team-Profile-Generator">
                                            <p className="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <img className="project-img" src={TeamProfileGenerator}
                                                alt="Team Profile Generator" />
                                        </div>
                                        <p className="description text-light">
                                            Note:  Application is not deployed
                                        </p>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Professional README Generator */}
                        < div className="project-card card col-12 col-md-6 col-lg-4">
                            <div className="professional-readme-generator">
                                <br />
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                Professional README Generator
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description:  In this project I have created an application using node that creates a professional README for a user's project based on the user's input.
                                            <br />
                                            <br />
                                            Technologies:  JavaScript, Node JS, Inquirer
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://github.com/avni0000patel/Professional-README-Generator">
                                            <p className="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <img className="project-img" src={ProfessionalREADMEGenerator}
                                                alt="Professional README Generator" />
                                        </div>
                                        <p className="description text-light">
                                            Note:  Application is not deployed
                                        </p>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Weather Dashboard */}
                        < div className="project-card card col-12 col-md-6 col-lg-4">
                            <div className="weather-dashboard">
                                <br />
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                Weather Dashboard
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description:  In this project I have created a weather dashboard that uses the OpenWeather API to show the forecast for different cities.
                                            <br />
                                            <br />
                                            Technologies:  HTML, CSS, Bootstrap, JavaScript, jQuery, jQuery UI, OpenWeatherMap API
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://github.com/avni0000patel/Weather-Dashboard">
                                            <p className="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <a href="https://avni0000patel.github.io/Weather-Dashboard/">
                                                <img className="project-img" src={WeatherDashboard}
                                                    alt="Weather Dashboard" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Work Day Scheduler */}
                        <div className="project-card card col-12 col-md-6 col-lg-4">
                            <div className="work-day-scheduler">
                                <br />
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                Work Day Scheduler
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description:  In this project I have created a work day scheduler so I can manage my time effectively.
                                            <br />
                                            <br />
                                            Technologies:  HTML, CSS, Bootstrap, JavaScript, jQuery, jQuery UI
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://github.com/avni0000patel/Work-Day-Scheduler">
                                            <p className="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <a href="https://avni0000patel.github.io/Work-Day-Scheduler/">
                                                <img className="project-img" src={WorkDayScheduler}
                                                    alt="Work Day Scheduler" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Code Quiz */}
                        <div className="project-card card col-12 col-md-6 col-lg-4">
                            <div className="code-quiz">
                                <br />
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                Code Quiz
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description:  In this project I have created a code quiz because coding assessments are an important part of the interview process for developers.
                                            <br />
                                            <br />
                                            Technologies:  HTML, CSS, JavaScript
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://github.com/avni0000patel/Code-Quiz">
                                            <p className="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <a href="https://avni0000patel.github.io/Code-Quiz/">
                                                <img className="project-img" src={CodeQuiz}
                                                    alt="Code Quiz" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        {/* Password Generator */}
                        <div className="project-card card col-12 col-md-6 col-lg-4">
                            <div className="password-generator">
                                <br />
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                Password Generator
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description: In this project I have created a password generator to improve security and protect secure data.
                                            <br />
                                            <br />
                                            Technologies: HTML, CSS, JavaScript
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://github.com/avni0000patel/Password-Generator">
                                            <p className="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <a href="https://avni0000patel.github.io/Password-Generator/">
                                                <img className="project-img" src={PasswordGenerator}
                                                    alt="Password Generator" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        {/* Code Refractor*/}
                        <div className="project-card card col-12 col-md-6 col-lg-4">
                            <div className="code-refractor">
                                <br />
                                <div className="container project-card-header text-center text-light border border-1 border-light">
                                    <div className="row align-items-center h-100">
                                        <div className="mx-auto">
                                            <div className="project-name">
                                                Code Refractor
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Tabs
                                    defaultActiveKey="description"
                                    transition={false}
                                    id="justify-tab"
                                    className="mb-3"
                                >
                                    <Tab eventKey="description" title="Description" label="Description">
                                        <p className="project-description text-light">
                                            Description: In this project code has been refactored to meet accessibility standards.
                                            <br />
                                            <br />
                                            Technologies: HTML, CSS
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a className="github" href="https://github.com/avni0000patel/Code-Refractor">
                                            <p className="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div className="project">
                                            <a href="https://avni0000patel.github.io/Code-Refractor/">
                                                <img className="project-img" src={Horiseon}
                                                    alt="Horiseon Website" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </section >
    );
}