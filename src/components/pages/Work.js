import React from 'react';

export default function Work() {
    return (
        <section>
            <div id="work" class="work">
                <h1 class="text-center">Work Page</h1>
            </div>

            <div class="row justify-center justify-content-around">
                {/* Professional portfolio */}
                <div class="card col-12 col-md-6 col-lg-4">
                    <div class="professional-portfolio">
                        <div class="container card-header text-center bg-dark text-light border border-5 border-light">
                            <div class="row align-items-center h-100">
                                <div class="mx-auto">
                                    <div>
                                        Professional Portfolio
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br />

                        <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                            <ul class="nav nav-tabs justify-content-center">
                                <li class="nav-item px-4"><a href="#a" data-toggle="tab">Description</a></li>
                                <li class="nav-item px-4"><a href="#b" data-toggle="tab">GitHub Repo</a></li>
                                <li class="nav-item px-4"><a href="#c" data-toggle="tab">Project</a></li>
                            </ul>
                        </div>

                        <br />

                        <div class="tab-content">
                            <div class="tab-pane active" id="a">
                                <p class="description">
                                    <span>Description: </span> In this project my professional
                                    portfolio has been created to show my skills
                                    and talents.
                                    <br />
                                    <br />
                                    <span>Technologies: </span> HTML, CSS
                                </p>
                            </div>
                            <div class="tab-pane" id="b">
                                <a class="github" href="https://github.com/avni0000patel/Professional-Portfolio">
                                    <p>Click here to see the github repo for this project!</p>
                                </a>
                            </div>
                            <div class="tab-pane" id="c">
                                <a class="project" href="https://avni0000patel.github.io/Professional-Portfolio/">
                                    <img class="img-fluid col-12" src="./assets/images/portfolio.png"
                                        alt="Professional Portfolio" />
                                </a>
                            </div>
                        </div>

                        <br />
                    </div>
                </div>
            </div>
        </section>
    );
}