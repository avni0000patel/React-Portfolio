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
import background from '../../assets/images/background.webp';
import { BsFileX } from 'react-icons/bs';

export default function Resume() {
    const styles = {
        top: {
            paddingTop: '40px',
            paddingBottom: '60px',
        },
        pop: {
            color: 'white',
        },
        card: {
            // backgroundColor: '#274C77',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            border: '1px solid white',
            marginLeft: '20px',
            marginRight: '20px',
        },
        icons: {
            color: 'white',
            height: '60px',
            width: '60px',
            marginTop: '5px',
        },
        skill: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
    return (
        <section style={styles.top}>
            <div className="resume">
                <br />
                <h1 style={styles.pop} className="text-center">Resume Page</h1>
                <br />
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <div className='card' style={styles.card}>
                        <div className='row card-body'>
                            <div className='col-sm-12'>
                                <h3 className='card-title'>
                                    Resume:
                                </h3>
                                <hr></hr>

                                <div className='row'>
                                    <a className="text-light description" style={styles.description} href={PDF}>Click here to download resume!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <div className='card' style={styles.card}>
                        <div className='row card-body'>
                            <div className='col-sm-12'>
                                <h3 className='card-title'>
                                    Front-End Proficiencies:
                                </h3>
                                <hr></hr>

                                <div className='row'>
                                    <IoLogoHtml5 style={styles.icons} className='ms-3' />
                                    <IoLogoHtml5 style={styles.icons} className='ms-3' />
                                    <IoLogoCss3 style={styles.icons} className='ms-3' />
                                    <IoLogoJavascript style={styles.icons} className='ms-3' />
                                    <DiBootstrap style={styles.icons} className='ms-3' />
                                    <DiJqueryLogo style={styles.icons} className='ms-3' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <div className='card' style={styles.card}>
                        <div className='row card-body'>
                            <div className='col-sm-12'>
                                <h3 className='card-title'>
                                    Back-End Proficiencies:
                                </h3>
                                <hr></hr>

                                <div className='row'>
                                    <AiFillApi style={styles.icons} className='ms-3' />
                                    <IoLogoNodejs style={styles.icons} className='ms-3' />
                                    <SiExpress style={styles.icons} className='ms-3' />
                                    <SiMysql style={styles.icons} className='ms-3' />
                                    <SiSequelize style={styles.icons} className='ms-3' />
                                    <SiMongodb style={styles.icons} className='ms-3' />
                                    <SiGraphql style={styles.icons} className='ms-3' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
