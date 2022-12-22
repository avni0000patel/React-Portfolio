import React from 'react';
import PDF from '../../assets/Avni_Patel_Resume.pdf'
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

export default function Resume() {
    const styles = {
        top: {
            paddingTop: '40px',
            paddingBottom: '60px',
        },
        pop: {
            color: 'white',
        },
        icons: {
            color: 'white',
            height: '30px',
            width: '30px',
            marginTop: '5px',
        },
        proficiencies: {
            display: 'flex',
            marginLeft: '20px',
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
        title: {
            marginLeft: '20px',
        },
        description: {
            marginLeft: '40px',
        }
    }
    return (
        <section style={styles.top}>
            <div className="resume">
                <br />
                <h1 style={styles.pop} className="text-center">Resume Page</h1>
                <br />
            </div>
            <div className="card bg-dark mb-3" style={styles.card}>
                <div className="download">
                    <div>
                        <div className="title" style={styles.title}>Resume:</div>
                        <a className="text-light description" style={styles.description} href={PDF}>Click here to download resume!</a>
                    </div>
                </div>
            </div>
            <div className="card bg-dark mb-3" style={styles.card}>
                <div className="title" style={styles.title}>Front-End Proficiencies:</div>
                <div className="proficiencies" style={styles.proficiencies}>
                    <div className="skill ms-3">
                        <IoLogoHtml5 style={styles.icons} className='ms-3' />
                        <div className="">HTML</div>
                    </div>
                    <div className="skill ms-3">
                        <IoLogoCss3 style={styles.icons} className='ms-3' />
                        <div className="">CSS</div>
                    </div>
                    <div className="skill ms-3">
                        <IoLogoJavascript style={styles.icons} className='ms-3' />
                        <div className="">JavaScript</div>
                    </div>
                    <div className="skill ms-3">
                        <DiBootstrap style={styles.icons} className='ms-3' />
                        <div className="">Bootstrap</div>
                    </div>
                    <div className="skill ms-3">
                        <DiJqueryLogo style={styles.icons} className='ms-3' />
                        <div className="">jQuery</div>
                    </div>
                </div>
            </div>
            <div className="card bg-dark mb-3" style={styles.card}>
                <div className="title" style={styles.title}>Back-End Proficiencies:</div>
                <div className="proficiencies" style={styles.proficiencies}>
                    <div className="skill ms-3">
                        <AiFillApi style={styles.icons} className='ms-3' />
                        <div className="">APIs</div>
                    </div>
                    <div className="skill ms-3">
                        <IoLogoNodejs style={styles.icons} className='ms-3' />
                        <div className="">Node</div>
                    </div>
                    <div className="skill ms-3">
                        <SiExpress style={styles.icons} className='ms-3' />
                        <div className="">Express</div>
                    </div>
                    <div className="skill ms-3">
                        <SiMysql style={styles.icons} className='ms-3' />
                        <div className="">MySQL</div>
                    </div>
                    <div className="skill ms-3">
                        <SiSequelize style={styles.icons} className='ms-3' />
                        <div className="">Sequelize</div>
                    </div>
                    <div className="skill ms-3">
                        <SiMongodb style={styles.icons} className='ms-3' />
                        <div className="">MongoDB</div>
                    </div>
                    <div className="skill ms-3">
                        <SiGraphql style={styles.icons} className='ms-3' />
                        <div className="">GraphQL</div>
                    </div>
                </div>
            </div>
        </section >
    );
}
