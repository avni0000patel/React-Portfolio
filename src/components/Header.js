import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const styles = {
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            position: 'fixed',
            top: '0',
            width: '100%',
            height: '50px',
            zIndex: '1',
            borderBottom: '1px solid white',
        },
        app__button: {
            color: "green",
            fontWeight: 'bold',
            fontSize: '22px',
            textDecoration: 'none',
        },
    };
    return (
        <header
            className="header"
            style={styles.header}
        >
            <div>
                <Link
                    className="app__button btn btn-lg"
                    style={styles.app__button}
                    to="/"
                >
                    About
                </Link>
                <Link
                    className="app__button btn btn-lg"
                    style={styles.app__button}
                    to="/portfolio"
                >
                    Portfolio
                </Link>
                <Link
                    className="app__button btn btn-lg"
                    style={styles.app__button}
                    to="/contact"
                >
                    Contact
                </Link>
                <Link
                    className="app__button btn btn-lg"
                    style={styles.app__button}
                    to="/resume"
                >
                    Resume
                </Link>
            </div>
        </header>
    );
};

export default Header;
