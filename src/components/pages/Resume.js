import React from 'react';
import PDF from '../../assets/Avni_Patel_Resume.pdf'

export default function Resume() {
    const styles = {
        top: {
            paddingTop: '40px',
            paddingBottom: '40px',
        },
    }
    return (
        <section style={styles.top}>
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
        </section >
    );
}
