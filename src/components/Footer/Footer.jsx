import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <span className="logo-text">Gautam</span><span className="logo-dot">.</span>
                    </div>
                    <p className="footer-tagline">Software Engineering & Data Analytics</p>
                    <div className="footer-socials">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub"><Github size={20} /></a>
                        <a href="https://linkedin.com/in/gautamnandakumar" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Gautam Nandakumar. All rights reserved.</p>
                    <button className="scroll-top" onClick={scrollToTop} title="Scroll to Top">
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
