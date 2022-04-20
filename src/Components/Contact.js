import React, { useState } from 'react';

const Contact = ({ data }) => {
    const [message, setMessage] = useState('');

    console.log(data)

    const handleClick = (e) => {
        e.preventDefault();
        window.open(`mailto:ramandeepksihra@gmail.com?subject=Contact From Ramandeep's Portfolio&body=${message}`);
    }


    return (
        <section id="contact">
            <div className="row section-head">
                <div className="two columns header-col">
                    <h1><span>Get In Touch.</span></h1>
                </div>
                <div className="ten columns">
                    <p className="lead">{data?.contactmessage}</p>
                </div>
            </div>
            <div className="row">
                <div className="eight columns">
                    <form id="contactForm" name="contactForm">
                        <fieldset>
                            <div>
                                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                <textarea value={message} onChange={e => setMessage(e.target.value)} cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                            </div>

                            <div>
                                <button type='submit' onClick={handleClick} className="submit">Submit</button>
                            </div>
                        </fieldset>
                    </form>

                    <div id="message-warning">Error</div>
                    <div id="message-success">
                        <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
