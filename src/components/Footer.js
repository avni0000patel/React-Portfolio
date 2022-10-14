import React from 'react';

export default function Footer() {
    const styles = {
        footer: {
            backgroundColor: '#274C77',
            textAlign: "center",
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%"
        },
    };
    return (
        <div>
            <footer style={styles.footer}>
                <a class="contact" href="mailto: avni0000patel@gmail.com">Email
                    <i class="devicon-google-plain"></i>
                </a>
                <a class="contact" href="https://www.linkedin.com/in/avni-patel0000/">LinkedIn
                    <i class="devicon-linkedin-plain"></i>
                </a>
                <a class="contact" href="https://github.com/avni0000patel">Github
                    <i class="devicon-github-original"></i>
                </a>
            </footer >
        </div >
    );
}