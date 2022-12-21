import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume'
import background from '../assets/images/background2.webp';

export default function PortfolioContainer() {
    const styles = {
        all: {
            // backgroundColor: '#6096BA',
            backgroundImage: `url(${background})`,
            color: '#ffffff',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            fontFamily: 'Playfair Display'
        },
    }
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div style={styles.all}>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}
