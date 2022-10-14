import React from 'react';

export default function Footer() {
    const styles = {
        color: {
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
            <footer style={styles.color}>Insert footer contents here</footer>
        </div>
    );
}