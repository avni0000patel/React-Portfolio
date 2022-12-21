import React from 'react';
import backgroundh from '../assets/images/background2.webp';

function NavTabs({ currentPage, handlePageChange }) {
    const styles = {
        header: {
            // backgroundColor: 'black',
            backgroundImage: `url(${backgroundh})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'fixed',
            top: '0',
            width: '100%',
            zIndex: '1',
            borderBottom: '1px solid white',
        },
        float: {
            position: 'absolute',
            right: '25px',
            marginTop: '5px',
        },
        link: {
            color: 'white'
        }
    }
    return (
        <header>
            <ul style={styles.header} className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        style={styles.link}
                        href="#about"
                        onClick={() => handlePageChange('About')}

                        className={currentPage === 'About' ? 'nav-link' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        style={styles.link}
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}

                        className={currentPage === 'Portfolio' ? 'nav-link' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        style={styles.link}
                        href="#contact"

                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        style={styles.link}
                        href="#resume"

                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default NavTabs;
