import React from 'react';
import { BsGoogle } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
    const styles = {
        footer: {
            backgroundColor: '#274C77',
            textAlign: "center",
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
            height: '40px',
        },
        icons: {
            height: '30px',
            width: '30px',
            marginTop: '5px',
        }
    };
    return (
        <div>
            <footer style={styles.footer}>
                <a class="contact" href="mailto: avni0000patel@gmail.com">
                    <BsGoogle style={styles.icons} className='ms-3' />
                </a>
                <a class="contact" href="https://www.linkedin.com/in/avni-patel0000/">
                    <BsLinkedin style={styles.icons} className='ms-3' />
                </a>
                <a class="contact" href="https://github.com/avni0000patel">
                    <BsGithub style={styles.icons} className='ms-3' />
                </a>
            </footer >
        </div >
    );
}