import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { validateEmail } from '../../utils/helper';
import './Contact.css';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/2ffb6220-4aa0-11ed-8970-6943e4ac8982";

export default function Contact() {

    const [formInput, setFormInput] = useState({
        fullname: '',
        email: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event) {
        const { name, value } = event.target;
        console.log(`the name of the field being types in is ${name}, it's value is ${value}`)
        setFormInput(priev => ({ ...priev, [name]: value }))
    };

    function handleCursor(event) {
        const { name, value } = event.target;
        if (name === 'email') {
            const isValid = validateEmail(value);

            if (!isValid) {
                setErrorMessage('please enter a valid email');
            } else {
                setErrorMessage('');
            }

        } else {
            if (!value.length) {
                setErrorMessage(`${name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormInput({ ...formInput, [name]: value })
        }
    }

    const [show, setShow] = useState(true);

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);

        if (submitted) {
            return (
                <div>Thank you!</div>
            );
        }

    };

    return (
        <section className="top">
            <div className="contact-page">
                <h1 className="page-name">Contact Page</h1>
            </div>
            <div className="contact">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-12">
                            <form
                                id="contact-form"
                                action={FORM_ENDPOINT}
                                onSubmit={handleSubmit}
                                method="POST"
                                target="_blank"
                            >
                                <div className="form-group">
                                    <label className="label" htmlFor="fullname">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        name="fullname"
                                        className="form-control"
                                        required
                                        value={formInput.name}
                                        onChange={handleChange}
                                        onBlur={handleCursor}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        className="form-control"
                                        required
                                        value={formInput.email}
                                        onChange={handleChange}
                                        onBlur={handleCursor}

                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" htmlFor="message">Message</label>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        className="form-control"
                                        rows="5"
                                        required
                                        value={formInput.message}
                                        onChange={handleChange}
                                        onBlur={handleCursor}
                                    />
                                </div>
                                <br />
                                {errorMessage && (
                                    <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
                                        <p>{errorMessage}</p>
                                    </Alert>
                                )}
                                <div submit>
                                    <button type="submit" className="submit-btn">Submit</button>
                                </div>
                                <br />
                            </form >
                        </div>
                    </div>
                </div>
            </div >

        </section >
    );
};