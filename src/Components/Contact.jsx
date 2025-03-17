import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        
        const formData = new FormData(event.target);
        formData.append("access_key", "c8371a9d-db18-4249-8bc6-c54dac726723");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Network error:", error);
            setResult("An error occurred. Please try again.");
        }
    };

    return (
        <section id='contact' className='contact'>
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className='input-box'>
                    <label>Full name</label>
                    <input type="text" className="field" placeholder='Enter your name' name='name' required />
                </div>
                <div className='input-box'>
                    <label>Email Address</label>
                    <input type="email" className="field" placeholder='Enter your email' name='email' required />
                </div>
                <div className='input-box'>
                    <label>Your message</label>
                    <textarea name="message" className="field mess" placeholder='Enter your message' required></textarea>
                </div>
                
                <button type="submit">Send message</button>
                <p>{result}</p>
            </form>
        </section>
    );
};

export default Contact;
