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
                <h1 className="page-name">Portfolio Page</h1>
            </div>
            <div className="container">
                <div className="projects row">
                    {/* AutismFY */}
                    <div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            AutismFY
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>This project aims to empower parents and caregivers of young children with autism by providing a user-friendly and intuitive application. This application offers the ability to create personalized routine To-Do Lists, document important information in a dedicated Notes section, and fostering a supportive community through the ability to share and connect with other parents and caregivers through interactive posts. It is designed to streamline daily tasks and provide a sense of organization and structure for both parents and caregivers of children with autism.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>Apollo client, Apollo-server-express, Axios, Bcrypt, Bootstrap, Bootstrap-icons, Concurrently, Connect-busboy, Cors, CSS, Express, Framer-motion, Graphql, HTML, JavaScript, Jest-dom testing library, Jsonwebtoken, Jwt-decode, Material UI, Mongoose, Nodemon, Prettier, Randomcolor, Randomstring, React, React-bootstrap, React-dom, React-draggable, React-icons, React-redux, React-router-dom, React-scripts, Redux, User-event testing library, UUID, Web-vitals
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://github.com/avni0000patel/AutismFY">
                                    <p className="project-github">Click here to see the github repo for this project!</p>
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
                    {/* Rig Match Me */}
                    <div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            Rig Match Me
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>In this project we have created an application that provides a guided tour of instruments to help steer the user towards getting properly setup for the genre of music they are interested in playing.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>HTML, CSS, Bootstrap, JavaScript, Node JS, Express, Express-handlebars, MySQL, Sequelize, Dotenv, Bcrypt, Connect-session-sequelize, Nodemailer
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://github.com/avni0000patel/Rig-Match-Me">
                                    <p className="project-github">Click here to see the github repo for this project!</p>
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
                    {/* Redux Store */}
                    < div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            Redux Store
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>In this project I refactored an e-commerce platform that uses React's Context API to use Redux.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>Apollo client, Redux toolkit, Stripe, Jest-dom testing library, React testing library, User-event testing library, Apollo-server-express, Bcrypt, Concurrently, Express, Graphql, Jsonwebtoken, Jwt-decode, Mongoose, Nodemon, React, React-bootstrap, React-dom, React-redux, React-router-dom, React-scripts
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://github.com/avni0000patel/Redux-Store">
                                    <p className="project-github">Click here to see the github repo for this project!</p>
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
                    {/* Book Search Engine */}
                    < div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            Book Search Engine
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>In this project I have taken a fully functioning Google Books API search engine built with a RESTful API, and refactored it to be a GraphQL API built with Apollo Server.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>Apollo client, Jest-dom testing library, React testing library, User-event testing library, Apollo-server-express, Bcrypt, Bootstrap, Concurrently, Express, Graphql, Jsonwebtoken, Jwt-decode, Mongoose, Nodemon, React, React-bootstrap, React-dom, React-router-dom, React-scripts
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://github.com/avni0000patel/Book-Search-Engine">
                                    <p className="project-github">Click here to see the github repo for this project!</p>
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
                    {/* Social Network API */}
                    < div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            Social Network API
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>In this project I have built a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>Javascript, Node JS, Express, Moment, Nodemon
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://github.com/avni0000patel/Social-Network-API">
                                    <p className="project-github">Click here to see the github repo for this project!</p>
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
                    {/* Regex Tutorial */}
                    < div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            Regex Tutorial
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>In this project I have created a regex tutorial that writes about code.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>GitHub Gist
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://gist.github.com/avni0000patel/3ba423acbc4236b858409caa4486d6cb">
                                    <p className="project-github">Click here to see the github gist for this project!</p>
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
                    {/* Tech Blog */}
                    < div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            Tech Blog
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>In this project I have created a tech blog that is a CMS-style blog site similar to a Wordpress site.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>HTML, CSS, Bootstrap, JavaScript, Node JS, Express, Express-handlebars, MySQL, Sequelize, Dotenv, Bycrypt, Connect-session-sequelize
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://github.com/avni0000patel/Tech-Blog">
                                    <p className="project-github">Click here to see the github repo for this project!</p>
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
                    {/* E-Commerce Back End */}
                    < div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            E-commerce Back End
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>In this project I have built the back end for an e-commerce site.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>JavaScript, Node JS, Express, MySQL, Sequelize, Dotenv
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://github.com/avni0000patel/E-commerce-Back-End">
                                    <p className="project-github">Click here to see the github repo for this project!</p>
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
                    {/* Employee Tracker */}
                    < div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            Employee Tracker
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>In this project I have created an application that allows you to view and manage the departments, roles, and employees in a company.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>JavaScript, Node JS, Inquirer, Console Table, MySQL
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://github.com/avni0000patel/Employee-Tracker">
                                    <p className="project-github">Click here to see the github repo for this project!</p>
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
                    {/* Note Taker */}
                    < div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            Note Taker
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>In this project I have created a Note Taker application to create and store notes.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>HTML, CSS, Bootstrap, JavaScript, Node JS, Inquirer, Express, UUID
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://github.com/avni0000patel/Note-Taker">
                                    <p className="project-github">Click here to see the github repo for this project!</p>
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
                    {/* Team Profile Generator */}
                    < div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            Team Profile Generator
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>In this project I have created a team profile generator that displays summaries for each person.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>HTML, CSS, Bootstrap, JavaScript, Node JS, Inquirer, Jest
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://github.com/avni0000patel/Team-Profile-Generator">
                                    <p className="project-github">Click here to see the github repo for this project!</p>
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
                    {/* Professional README Generator */}
                    < div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            Professional README Generator
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>In this project I have created an application using node that creates a professional README for a user's project based on the user's input.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>JavaScript, Node JS, Inquirer
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://github.com/avni0000patel/Professional-README-Generator">
                                    <p className="project-github">Click here to see the github repo for this project!</p>
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
                    {/* Weather Dashboard */}
                    < div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            Weather Dashboard
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>  In this project I have created a weather dashboard that uses the OpenWeather API to show the forecast for different cities.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>HTML, CSS, Bootstrap, JavaScript, jQuery, jQuery UI, OpenWeatherMap API
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://github.com/avni0000patel/Weather-Dashboard">
                                    <p className="project-github">Click here to see the github repo for this project!</p>
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
                    {/* Work Day Scheduler */}
                    <div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            Work Day Scheduler
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>In this project I have created a work day scheduler so I can manage my time effectively.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>HTML, CSS, Bootstrap, JavaScript, jQuery, jQuery UI
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://github.com/avni0000patel/Work-Day-Scheduler">
                                    <p className="project-github">Click here to see the github repo for this project!</p>
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
                    {/* Code Quiz */}
                    <div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            Code Quiz
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>In this project I have created a code quiz because coding assessments are an important part of the interview process for developers.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>HTML, CSS, JavaScript
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://github.com/avni0000patel/Code-Quiz">
                                    <p className="project-github">Click here to see the github repo for this project!</p>
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
                    {/* Password Generator */}
                    <div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            Password Generator
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>In this project I have created a password generator to improve security and protect secure data.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>HTML, CSS, JavaScript
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://github.com/avni0000patel/Password-Generator">
                                    <p className="project-github">Click here to see the github repo for this project!</p>
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
                    {/* Code Refractor*/}
                    <div className="project-card card-body col-12 col-md-4 col-lg-3">
                        <br />
                        <div className="project-name">
                            Code Refractor
                        </div>
                        <br />
                        <Tabs
                            defaultActiveKey="description"
                            transition={false}
                            id="justify-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="description" title="Description" label="Description">
                                <p className="project-description">
                                    <span className="green">Description: </span>In this project code has been refactored to meet accessibility standards.
                                    <br />
                                    <br />
                                    <span className="green">Technologies: </span>HTML, CSS
                                </p>
                            </Tab>
                            <Tab eventKey="github" title="Github" label="GitHub">
                                <a className="github" href="https://github.com/avni0000patel/Code-Refractor">
                                    <p className="project-github">Click here to see the github repo for this project!</p>
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
                </div >
            </div>
        </section >
    );
}