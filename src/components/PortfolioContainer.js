import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume'

export default function PortfolioContainer() {
    const styles = {
        all: {
            backgroundColor: '#6096BA',
            color: '#ffffff',
            minHeight: '100vh',
        },
    }
    const [currentPage, setCurrentPage] = useState('About');

    // TODO: Add a comment describing the functionality of this method
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Work') {
            return <Work />;
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
