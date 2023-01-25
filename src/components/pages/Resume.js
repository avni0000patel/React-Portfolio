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
import background from '../../assets/images/background2.webp';
import './Resume.css';

export default function Resume() {
    const styles = {
        top: {
            paddingTop: '60px',
            paddingBottom: '60px',
        },
        title: {
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        card: {
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            border: '1px solid white',
            margin: '25px 25px',
            borderRadius: '15px',
        },
        cardTitle: {
            color: 'white',
            margin: '5px',
            fontSize: '30px',
        },
        cardDescription: {
            color: 'white',
            margin: '5px',
        },
        cardDescriptionText: {
            color: 'white',
            fontSize: '18px',
            textDecoration: 'none',
        },
        icons: {
            color: 'white',
            height: '60px',
            width: '60px',
            margin: '5px',
        },
        skill: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
    return (
        <section style={styles.top}>
            <div style={styles.title} className="resume-page">
                <br />
                <h1>Resume Page</h1>
                <br />
            </div>
            <div className='skill card' style={styles.card}>
                <div className='row card-body'>
                    <div className='col-sm-12'>
                        <h3 style={styles.cardTitle} className='card-title'>
                            Resume:
                        </h3>
                        <hr className="text-light"></hr>

                        <div style={styles.cardDescription} className='row'>
                            <a style={styles.cardDescriptionText} className="cardDescriptionText" href={PDF}>Click here to download resume!</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='skill card' style={styles.card}>
                <div className='row card-body'>
                    <div className='col-sm-12'>
                        <h3 style={styles.cardTitle} className='card-title'>
                            Front-End Proficiencies:
                        </h3>
                        <hr className="text-light"></hr>

                        <div className='row'>
                            <IoLogoHtml5 style={styles.icons} className='ms-3' />
                            <IoLogoCss3 style={styles.icons} className='ms-3' />
                            <IoLogoJavascript style={styles.icons} className='ms-3' />
                            <DiBootstrap style={styles.icons} className='ms-3' />
                            <DiJqueryLogo style={styles.icons} className='ms-3' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='skill card' style={styles.card}>
                <div className='row card-body'>
                    <div className='col-sm-12'>
                        <h3 style={styles.cardTitle} className='card-title'>
                            Back-End Proficiencies:
                        </h3>
                        <hr className="text-light"></hr>

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
        </section >
    );
}
