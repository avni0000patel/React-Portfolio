import React from 'react';

import { Tabs, Tab } from 'react-bootstrap-tabs';

import Portfolio from '../../assets/images/portfolio.png';
import Wanderlist from '../../assets/images/wanderlist.png';
import RigMatchMe from '../../assets/images/rig-match-me-screenshot.png';
import Horiseon from '../../assets/images/challenge01.png'
import PasswordGenerator from '../../assets/images/password-generator-area.png';
import CodeQuiz from '../../assets/images/code-quiz-area.png';
import WorkDayScheduler from '../../assets/images/work-day-scheduler-area.png';
import WeatherDashboard from '../../assets/images/search.png';
import ProfessionalREADMEGenerator from '../../assets/images/professional-readme-generator-picture.png';
import TeamProfileGenerator from '../../assets/images/team-profile-generator.png';
import NoteTaker from '../../assets/images/note-taker.png';
import EmployeeTracker from '../../assets/images/employee-tracker.png';
import ECommerceBackEnd from '../../assets/images/e-commerce-back-end-screenshot.png';
import TechBlog from '../../assets/images/tech-blog-screenshot.png';

export default function Work() {
    const styles = {
        card: {
            backgroundColor: '#6096ba',
        },
        cardHeader: {
            backgroundColor: '#274C77',
        },
        project: {
            textAlign: 'center',
        },
        img: {
            height: '300px',
            width: '300px',
        }
    }
    return (
        <section>
            <div id="work" class="work">
                <h1 class="text-center">Work Page</h1>
            </div>
            <div class="work">
                <div class="container">
                    <div class="row justify-center justify-content-around">
                        {/* Professional portfolio */}
                        <div style={styles.card} class="card col-12 col-md-6 col-lg-4">
                            <br />
                            <div class="professional-portfolio">
                                <div style={styles.cardHeader} class="container card-header text-center text-light border border-1 border-light">
                                    <div class="row align-items-center h-100">
                                        <div class="mx-auto">
                                            <div>
                                                Professional Portfolio
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
                                        <p class="description text-light">
                                            Description: In this project my professional portfolio has been created to show my skills and talents.
                                            <br />
                                            <br />
                                            Technologies: HTML, CSS
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a class="github" href="https://github.com/avni0000patel/Professional-Portfolio">
                                            <p class="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div style={styles.project}>
                                            <a style={styles.project} class="project" href="https://avni0000patel.github.io/Professional-Portfolio/">
                                                <img style={styles.img} src={Portfolio}
                                                    alt="Professional Portfolio" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        {/* Wanderlist */}
                        <div style={styles.card} class="card col-12 col-md-6 col-lg-4">
                            <br />
                            <div class="wanderlist">
                                <div style={styles.cardHeader} class="container card-header text-center text-light border border-1 border-light">
                                    <div class="row align-items-center h-100">
                                        <div class="mx-auto">
                                            <div>
                                                Wanderlist
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
                                        <p class="description text-light">
                                            Description: In this project we have created a website that helps travelers find a safe country to visit and find information about prerequisites for travelling to that country.
                                            <br />
                                            <br />
                                            Technologies: HTML, CSS, Bulma, JavaScript, jQuery, jQuery UI, Travel Briefing API, Google API, Google fonts
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a class="github" href="https://github.com/KayHancock/Wanderlist">
                                            <p class="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div style={styles.project}>
                                            <a style={styles.project} class="project" href="https://kayhancock.github.io/Wanderlist/">
                                                <img style={styles.img} src={Wanderlist}
                                                    alt="Wanderlist" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        {/* Rig Match Me */}
                        <div style={styles.card} class="card col-12 col-md-6 col-lg-4">
                            <br />
                            <div class="rig-match-me">
                                <div style={styles.cardHeader} class="container card-header text-center text-light border border-1 border-light">
                                    <div class="row align-items-center h-100">
                                        <div class="mx-auto">
                                            <div>
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
                                        <p class="description text-light">
                                            Description: In this project we have created an application that provides a guided tour of instruments to help steer the user towards getting properly setup for the genre of music they are interested in playing.
                                            <br />
                                            <br />
                                            Technologies: HTML, CSS, Bootstrap, JavaScript, Node JS, Express, Express-handlebars, MySQL, Sequelize, Dotenv, Bycrypt, Connect-session-sequelize, Nodemailer
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a class="github" href="https://github.com/avni0000patel/Rig-Match-Me">
                                            <p class="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div style={styles.project}>
                                            <a style={styles.project} class="project" href="https://evening-fjord-11816.herokuapp.com/">
                                                <img style={styles.img} src={RigMatchMe}
                                                    alt="Rig Match Me" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        {/* Code Refractor*/}
                        <div style={styles.card} class="card col-12 col-md-6 col-lg-4">
                            <div class="code-refractor">
                                <br />
                                <div style={styles.cardHeader} class="container card-header text-center text-light border border-1 border-light">
                                    <div class="row align-items-center h-100">
                                        <div class="mx-auto">
                                            <div>
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
                                        <p class="description text-light">
                                            Description: In this project code has been refactored to meet accessibility standards.
                                            <br />
                                            <br />
                                            Technologies: HTML, CSS
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a class="github" href="https://github.com/avni0000patel/Code-Refractor">
                                            <p class="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div style={styles.project}>
                                            <a style={styles.project} class="project" href="https://avni0000patel.github.io/Code-Refractor/">
                                                <img style={styles.img} src={Horiseon}
                                                    alt="Horiseon Website" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        {/* Password Generator */}
                        <div style={styles.card} class="card col-12 col-md-6 col-lg-4">
                            <div class="password-generator">
                                <br />
                                <div style={styles.cardHeader} class="container card-header text-center text-light border border-1 border-light">
                                    <div class="row align-items-center h-100">
                                        <div class="mx-auto">
                                            <div>
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
                                        <p class="description text-light">
                                            Description: In this project I have created a password generator to improve security and protect secure data.
                                            <br />
                                            <br />
                                            Technologies: HTML, CSS, JavaScript
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a class="github" href="https://github.com/avni0000patel/Password-Generator">
                                            <p class="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div style={styles.project}>
                                            <a style={styles.project} class="project" href="https://avni0000patel.github.io/Password-Generator/">
                                                <img style={styles.img} src={PasswordGenerator}
                                                    alt="Password Generator" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        {/* Code Quiz */}
                        <div style={styles.card} class="card col-12 col-md-6 col-lg-4">
                            <div class="code-quiz">
                                <br />
                                <div style={styles.cardHeader} class="container card-header text-center text-light border border-1 border-light">
                                    <div class="row align-items-center h-100">
                                        <div class="mx-auto">
                                            <div>
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
                                        <p class="description text-light">
                                            Description:  In this project I have created a code quiz because coding assessments are an important part of the interview process for developers.
                                            <br />
                                            <br />
                                            Technologies:  HTML, CSS, JavaScript
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a class="github" href="https://github.com/avni0000patel/Code-Quiz">
                                            <p class="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div style={styles.project}>
                                            <a style={styles.project} class="project" href="https://avni0000patel.github.io/Code-Quiz/">
                                                <img style={styles.img} src={CodeQuiz}
                                                    alt="Code Quiz" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        {/* Work Day Scheduler */}
                        <div style={styles.card} class="card col-12 col-md-6 col-lg-4">
                            <div class="work-day-scheduler">
                                <br />
                                <div style={styles.cardHeader} class="container card-header text-center text-light border border-1 border-light">
                                    <div class="row align-items-center h-100">
                                        <div class="mx-auto">
                                            <div>
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
                                        <p class="description text-light">
                                            Description:  In this project I have created a work day scheduler so I can manage my time effectively.
                                            <br />
                                            <br />
                                            Technologies:  HTML, CSS, Bootstrap, JavaScript, jQuery, jQuery UI
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a class="github" href="https://github.com/avni0000patel/Work-Day-Scheduler">
                                            <p class="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div style={styles.project}>
                                            <a style={styles.project} class="project" href="https://avni0000patel.github.io/Work-Day-Scheduler/">
                                                <img style={styles.img} src={WorkDayScheduler}
                                                    alt="Work Day Scheduler" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Weather Dashboard */}
                        < div style={styles.card} class="card col-12 col-md-6 col-lg-4">
                            <div class="weather-dashboard">
                                <br />
                                <div style={styles.cardHeader} class="container card-header text-center text-light border border-1 border-light">
                                    <div class="row align-items-center h-100">
                                        <div class="mx-auto">
                                            <div>
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
                                        <p class="description text-light">
                                            Description:  In this project I have created a weather dashboard that uses the OpenWeather API to show the forecast for different cities.
                                            <br />
                                            <br />
                                            Technologies:  HTML, CSS, Bootstrap, JavaScript, jQuery, jQuery UI, OpenWeatherMap API
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a class="github" href="https://github.com/avni0000patel/Weather-Dashboard">
                                            <p class="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div style={styles.project}>
                                            <a style={styles.project} class="project" href="https://avni0000patel.github.io/Weather-Dashboard/">
                                                <img style={styles.img} src={WeatherDashboard}
                                                    alt="Weather Dashboard" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Professional README Generator */}
                        < div style={styles.card} class="card col-12 col-md-6 col-lg-4">
                            <div class="professional-readme-generator">
                                <br />
                                <div style={styles.cardHeader} class="container card-header text-center text-light border border-1 border-light">
                                    <div class="row align-items-center h-100">
                                        <div class="mx-auto">
                                            <div>
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
                                        <p class="description text-light">
                                            Description:  In this project I have created an application using node that creates a professional README for a user's project based on the user's input.
                                            <br />
                                            <br />
                                            Technologies:  JavaScript, Node JS, Inquirer
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a class="github" href="https://github.com/avni0000patel/Professional-README-Generator">
                                            <p class="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div style={styles.project}>
                                            <img style={styles.img} src={ProfessionalREADMEGenerator}
                                                alt="Professional README Generator" />
                                        </div>
                                        <p class="description text-light">
                                            Note:  Application is not deployed
                                        </p>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Team Profile Generator */}
                        < div style={styles.card} class="card col-12 col-md-6 col-lg-4">
                            <div class="team-profile-generator">
                                <br />
                                <div style={styles.cardHeader} class="container card-header text-center text-light border border-1 border-light">
                                    <div class="row align-items-center h-100">
                                        <div class="mx-auto">
                                            <div>
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
                                        <p class="description text-light">
                                            Description:  In this project I have created a team profile generator that displays summaries for each person.
                                            <br />
                                            <br />
                                            Technologies:  HTML, CSS, Bootstrap, JavaScript, Node JS, Inquirer, Jest
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a class="github" href="https://github.com/avni0000patel/Team-Profile-Generator">
                                            <p class="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div style={styles.project}>
                                            <img style={styles.img} src={TeamProfileGenerator}
                                                alt="Team Profile Generator" />
                                        </div>
                                        <p class="description text-light">
                                            Note:  Application is not deployed
                                        </p>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Note Taker */}
                        < div style={styles.card} class="card col-12 col-md-6 col-lg-4">
                            <div class="note-taker">
                                <br />
                                <div style={styles.cardHeader} class="container card-header text-center text-light border border-1 border-light">
                                    <div class="row align-items-center h-100">
                                        <div class="mx-auto">
                                            <div>
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
                                        <p class="description text-light">
                                            Description:  In this project I have created a Note Taker application to create and store notes.
                                            <br />
                                            <br />
                                            Technologies:  HTML, CSS, Bootstrap, JavaScript, Node JS, Inquirer, Express, UUID
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a class="github" href="https://github.com/avni0000patel/Note-Taker">
                                            <p class="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <a style={styles.project} class="project" href="https://fathomless-dawn-16383.herokuapp.com/">
                                            <img style={styles.img} src={NoteTaker}
                                                alt="Note Taker" />
                                        </a>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Employee Tracker */}
                        < div style={styles.card} class="card col-12 col-md-6 col-lg-4">
                            <div class="employee-tracker">
                                <br />
                                <div style={styles.cardHeader} class="container card-header text-center text-light border border-1 border-light">
                                    <div class="row align-items-center h-100">
                                        <div class="mx-auto">
                                            <div>
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
                                        <p class="description text-light">
                                            Description:  In this project I have created an application that allows you to view and manage the departments, roles, and employees in a company.
                                            <br />
                                            <br />
                                            Technologies:  JavaScript, Node JS, Inquirer, Console Table, MySQL
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a class="github" href="https://github.com/avni0000patel/Employee-Tracker">
                                            <p class="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div style={styles.project}>
                                            <img style={styles.img} src={EmployeeTracker}
                                                alt="Employee Tracker" />
                                        </div>
                                        <p class="description text-light">
                                            Note:  Application is not deployed
                                        </p>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* E-Commerce Back End */}
                        < div style={styles.card} class="card col-12 col-md-6 col-lg-4">
                            <div class="e-commerce-back-end">
                                <br />
                                <div style={styles.cardHeader} class="container card-header text-center text-light border border-1 border-light">
                                    <div class="row align-items-center h-100">
                                        <div class="mx-auto">
                                            <div>
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
                                        <p class="description text-light">
                                            Description:  In this project I have built the back end for an e-commerce site.
                                            <br />
                                            <br />
                                            Technologies:  JavaScript, Node JS, Express, MySQL, Sequelize, Dotenv
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a class="github" href="https://github.com/avni0000patel/E-commerce-Back-End">
                                            <p class="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div style={styles.project}>
                                            <img style={styles.img} src={ECommerceBackEnd}
                                                alt="E-commerce Back End" />
                                        </div>
                                        <p class="description text-light">
                                            Note:  Application is not deployed
                                        </p>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                        {/* Tech Blog */}
                        < div style={styles.card} class="card col-12 col-md-6 col-lg-4">
                            <div class="tech-blog">
                                <br />
                                <div style={styles.cardHeader} class="container card-header text-center text-light border border-1 border-light">
                                    <div class="row align-items-center h-100">
                                        <div class="mx-auto">
                                            <div>
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
                                        <p class="description text-light">
                                            Description:  In this project I have created a tech blog that is a CMS-style blog site similar to a Wordpress site.
                                            <br />
                                            <br />
                                            Technologies:  HTML, CSS, Bootstrap, JavaScript, Node JS, Express, Express-handlebars, MySQL, Sequelize, Dotenv, Bycrypt, Connect-session-sequelize
                                        </p>
                                    </Tab>
                                    <Tab eventKey="github" title="Github" label="GitHub">
                                        <a class="github" href="https://github.com/avni0000patel/Tech-Blog">
                                            <p class="text-light">Click here to see the github repo for this project!</p>
                                        </a>
                                    </Tab>
                                    <Tab eventKey="project" title="Project" label="Project">
                                        <div style={styles.project}>
                                            <a style={styles.project} class="project" href="https://boiling-tor-98375.herokuapp.com/">
                                                <img style={styles.img} src={TechBlog}
                                                    alt="Tech Blog" />
                                            </a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div >
                        </div >
                    </div >
                </div>
            </div>
        </section >
    );
}