import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    const styles = {
        nav: {
            backgroundColor: '#274C77',
        },
    }
    return (
        <header>
            <ul style={styles.nav} className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}

                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#work"
                        onClick={() => handlePageChange('Work')}

                        className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                    >
                        Work
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"

                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#resume"

                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
                {/* <div>
                    <h3 className="float-end">Avni Patel</h3>
                </div> */}
            </ul>
        </header>
    );
}

export default NavTabs;
