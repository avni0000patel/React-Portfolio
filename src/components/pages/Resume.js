import React from 'react';
import PDF from '../../assets/Avni_Patel_Resume.pdf'

export default function Resume() {
    return (
        <section>
            <div id="resume">
                <h1 class="text-center">Resume Page</h1>
                <br />
            </div>
            <div class="download">
                {/* <h6 class="resume header font-weight-bold">Resume:</h6> */}
                <div class="container">
                    <div class="row justify-content-around">
                        <a href={PDF}>Click here to download resume!</a>
                    </div>
                </div>
            </div>
            <br />
            <div class="technical-skills">
                {/* <h6 class="technical-skills header font-weight-bold">Technical Skills:</h6> */}
                <div class="container">
                    <div class="row d-flex justify-content-around">
                        <div>
                            JavaScript, Node, SQL, MongoDB, React and other technologies.
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div class="education">
                {/* <h6 class="education header font-weight-bold">Education:</h6> */}
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
        </section >
    );
}
