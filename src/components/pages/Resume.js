import React from 'react';
import PDF from '../../assets/Avni_Patel_Resume.pdf'

export default function Resume() {
    return (
        <section>
            <div id="resume">
                <h1 class="text-center">Resume Page</h1>
            </div>
            <a href={PDF}>Click here to download resume!</a>
        </section >
    );
}
