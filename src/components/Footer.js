import React from 'react';
import { BsGoogle } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
    const styles = {
        footer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            position: 'fixed',
            left: "0",
            bottom: "0",
            width: "100%",
            height: '50px',
            borderTop: '1px solid white'
        },
        icons: {
            color: 'white',
            height: '30px',
            width: '30px',
            margin: '0 15px',
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