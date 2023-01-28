import React from 'react';
import PDF from '../../assets/AvniPatelResume.pdf';
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { DiBootstrap } from "react-icons/di";
import { DiJqueryLogo } from "react-icons/di";
import { AiFillApi } from "react-icons/ai";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import './Resume.css';

export default function Resume() {
    return (
        <section className="top">
            <div className="resume-page">
                <h1 className="page-name">Resume Page</h1>
            </div>
            <div className="container">
                <div className="resume row">
                    <div className='resume-card row card-body'>
                        <div className='col-sm-12'>
                            <h3 className='resume-card-title'>
                                Resume:
                            </h3>
                            <hr className="text-light"></hr>

                            <div className='card-description row'>
                                <a className="card-description-text" href={PDF}>Click here to download resume!</a>
                            </div>
                        </div>
                    </div>
                    <div className='resume-card row card-body'>
                        <div className='col-sm-12'>
                            <h3 className='resume-card-title'>
                                Front-End Proficiencies:
                            </h3>
                            <hr className="text-light"></hr>

                            <div className='icons'>
                                <IoLogoHtml5 className='icon ms-3' />
                                <IoLogoCss3 className='icon ms-3' />
                                <IoLogoJavascript className='icon ms-3' />
                                <DiBootstrap className='icon ms-3' />
                                <DiJqueryLogo className='icon ms-3' />
                            </div>
                        </div>
                    </div>
                    <div className='resume-card row card-body'>
                        <div className='col-sm-12'>
                            <h3 className='resume-card-title'>
                                Back-End Proficiencies:
                            </h3>
                            <hr className="text-light"></hr>

                            <div className='icons'>
                                <AiFillApi className='icon ms-3' />
                                <IoLogoNodejs className='icon ms-3' />
                                <SiExpress className='icon ms-3' />
                                <SiMysql className='icon ms-3' />
                                <SiSequelize className='icon ms-3' />
                                <SiMongodb className='icon ms-3' />
                                <SiGraphql className='icon ms-3' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
