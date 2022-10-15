import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/2ffb6220-4aa0-11ed-8970-6943e4ac8982";

export default function Contact() {
    const styles = {
        top: {
            paddingTop: '40px',
            paddingBottom: '40px',
        },
    }

    const [formInput, setFormInput] = useState({
        fullname: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(`the name of the field being types in is ${name}, it's value is ${value}`)
        setFormInput(priev => ({ ...priev, [name]: value }))
    };

    const [isShown, setIsShown] = useState(false);

    const [show, setShow] = useState(true)

    // const mouseLeave = () => {
    //     console.log("This field is required.");

    // }

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
        <section style={styles.top}>
            <div className="portfolio">
                <br />
                <h1 className="text-center">Contact Page</h1>
                <br />
            </div>
            <div className="contact">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-12">
                            <p>
                                Feel free to reach out to me via email: avni0000patel@gmail.com
                            </p>
                            <form
                                id="contact-form"
                                action={FORM_ENDPOINT}
                                onSubmit={handleSubmit}
                                method="POST"
                                target="_blank"
                            >
                                <div className="form-group">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        name="fullname"
                                        className="form-control"
                                        required
                                        value={formInput.name}
                                        onChange={handleChange}
                                        // onMouseLeave={mouseLeave}
                                        onMouseEnter={() => setIsShown(false)}
                                        onMouseLeave={() => setIsShown(true)}
                                    />
                                </div>
                                {isShown && (
                                    <Alert show={show} variant="warning">
                                        <div>This field is required.</div>
                                        <div className="d-flex justify-content-end">
                                            <Button onClick={() => setShow(false)}>
                                                Close
                                            </Button>
                                        </div>
                                    </Alert>
                                )}
                                {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        className="form-control"
                                        required
                                        value={formInput.email}
                                        onChange={handleChange}
                                        // onMouseLeave={mouseLeave}
                                        onMouseEnter={() => setIsShown(false)}
                                        onMouseLeave={() => setIsShown(true)}
                                    />
                                </div>
                                {isShown && (
                                    <Alert show={show} variant="warning">
                                        <div>This field is required.</div>
                                        <div className="d-flex justify-content-end">
                                            <Button onClick={() => setShow(false)}>
                                                Close
                                            </Button>
                                        </div>
                                    </Alert>
                                )}
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        className="form-control"
                                        rows="5"
                                        required
                                        value={formInput.message}
                                        onChange={handleChange}
                                        // onMouseLeave={mouseLeave}
                                        onMouseEnter={() => setIsShown(false)}
                                        onMouseLeave={() => setIsShown(true)}
                                    />
                                </div>
                                {isShown && (
                                    <Alert show={show} variant="warning">
                                        <div>This field is required.</div>
                                        <div className="d-flex justify-content-end">
                                            <Button onClick={() => setShow(false)}>
                                                Close
                                            </Button>
                                        </div>
                                    </Alert>
                                )}
                                <br />
                                <div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
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