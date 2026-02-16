import React from 'react';
import ContactSection from "../components/contactSection";

function Contact() {
    return (
        <div className='page-grid mx-auto max-w-[1440px]'>
            <ContactSection 
                action="https://formspree.io/f/abcdwxyz"
                method="POST"
            />
        </div>
    );
}

export default Contact;
