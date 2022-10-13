import React, { useState } from 'react';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/2ffb6220-4aa0-11ed-8970-6943e4ac8982";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <div>Thank you!</div>
        );
    }

    return (
        <section>
            <div id="work">
                <h1 class="text-center">Contact Page</h1>
            </div>
            <form
                id="contact-form"
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
            >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        placeholder="Message"
                        name="message"
                        className="form-control"
                        rows="5"
                        required
                    />
                </div>
                <br />
                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <br />
            </form >
        </section >
    );
};