import React from 'react';
import PDF from '../../assets/Avni_Patel_Resume.pdf'

export default function Resume() {
    return (
        <section>
            <div className="resume">
                <br />
                <h1 className="text-center">Resume Page</h1>
                <br />
            </div>
            <div className="download">
                <div className="container">
                    <div className="row justify-content-around">
                        <a href={PDF}>Click here to download resume!</a>
                    </div>
                </div>
            </div>
            <br />
            <div className="technical-skills">
                <div className="container">
                    <div className="row d-flex justify-content-around">
                        <div>
                            JavaScript, Node, SQL, MongoDB, React and other technologies.
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="education">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-12">
                            <p>
                                University of Pennsylvania
                                <br />
                                Full Stack Web Development
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-12">
                            <p>
                                Siena College
                                <br />
                                Bachelor of Science in Finance, Minor in Mathematics
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
