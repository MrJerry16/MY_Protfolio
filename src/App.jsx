import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';
import Certificates from './sections/Certificates/Certificates';
import Education from './sections/Education/Education';
import Contact from './sections/Contact/Contact';
import './styles/globals.css';

function App() {
    useEffect(() => {
        const reveal = () => {
            const reveals = document.querySelectorAll('.reveal');
            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const revealTop = reveals[i].getBoundingClientRect().top;
                const revealPoint = 150;
                if (revealTop < windowHeight - revealPoint) {
                    reveals[i].classList.add('active');
                }
            }
        };

        window.addEventListener('scroll', reveal);
        // Initial check
        reveal();
        return () => window.removeEventListener('scroll', reveal);
    }, []);

    return (
        <div className="portfolio-app">
            <Navbar />
            <main>
                <section className="reveal fade-bottom" style={{ padding: 0 }}><Hero /></section>
                <section className="reveal fade-bottom" style={{ padding: 0 }}><Experience /></section>
                <section className="reveal fade-bottom" style={{ padding: 0 }}><Projects /></section>
                <section className="reveal fade-bottom" style={{ padding: 0 }}><Certificates /></section>
                <section className="reveal fade-bottom" style={{ padding: 0 }}><Education /></section>
                <section className="reveal fade-bottom" style={{ padding: 0 }}><Contact /></section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
