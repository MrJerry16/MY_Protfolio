import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const contactLinks = [
        {
            icon: <Mail size={24} />,
            label: 'Email',
            value: 'gautamnandakumar118@gmail.com',
            href: null
        },
        {
            icon: <Phone size={24} />,
            label: 'Phone',
            value: '+91 91362 41463',
            href: null
        },
        {
            icon: <Linkedin size={24} />,
            label: 'LinkedIn',
            value: 'gautamnandakumar',
            href: 'https://linkedin.com/in/gautamnandakumar'
        },
        {
            icon: <MapPin size={24} />,
            label: 'Location',
            value: 'Mumbai, India',
            href: null
        }
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact-intro">
                        I'm always open to discussing new projects, creative ideas or opportunities and being part of your visions.
                    </p>
                </div>

                <div className="contact-links-grid">
                    {contactLinks.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`contact-card-item card ${item.href ? 'clickable' : 'static'}`}
                        >
                            {item.href ? (
                                <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact-card-link">
                                    <div className="contact-card-icon">{item.icon}</div>
                                    <div className="contact-card-content">
                                        <span className="contact-card-label">{item.label}</span>
                                        <span className="contact-card-value">{item.value}</span>
                                    </div>
                                </a>
                            ) : (
                                <div className="contact-card-link">
                                    <div className="contact-card-icon">{item.icon}</div>
                                    <div className="contact-card-content">
                                        <span className="contact-card-label">{item.label}</span>
                                        <span className="contact-card-value">{item.value}</span>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
