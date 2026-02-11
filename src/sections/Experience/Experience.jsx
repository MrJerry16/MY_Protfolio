import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const professionalExperiences = [
        {
            role: 'Web Developer Intern',
            company: 'Silgate Solutions Pvt. Ltd.',
            period: 'Dec 2025 - Present',
            location: 'Thane, India',
            highlights: [
                'Developed a React-based admin panel to enhance internal website management and operational efficiency.',
                'Debugged and resolved website issues to improve system performance and usability.',
                'Coordinated task allocation, tracked action items, and monitored status to ensure adherence to project timelines.',
                'Collaborated with backend developers to align frontend functionality with system requirements.',
                'Participated in Agile stand-ups and workflow discussions to support structured sprint execution.'
            ]
        },
        {
            role: 'Store Management Assistant',
            company: 'Dry Cleaning Store',
            period: 'Jun 2025- Oct 2025',
            location: 'Mumbai, India',
            highlights: [
                'Streamlined daily operations by tracking order lifecycles and coordinating staff activities.',
                'Maintained structured operational records using Microsoft Excel for status reporting and monitoring.',
                'Ensured timely service delivery through proactive workflow coordination.'
            ]
        },
        {
            role: 'Intern (Backend Development)',
            company: 'Ardent Computech Pvt. Ltd.',
            period: 'Feb 2025 - Jun 2025',
            location: 'Mumbai, India',
            highlights: [
                'Engineered backend services using Java and Spring Boot within a modular architecture.',
                'Delivered REST API integrations to support seamless frontend-backend communication.',
                'Diagnosed and resolved backend issues to maintain sprint timelines and structured SDLC execution.',
                'Gained exposure to Agile methodology and sprint-based development processes.'
            ]
        }
    ];

    const virtualExperiences = [
        {
            role: 'Data Analytics & Forensic Technology',
            company: 'Deloitte Australia (Forage)',
            period: 'Nov 2025',
            location: 'Virtual Experience',
            highlights: [
                'Completed a virtual internship focusing on forensic data analytics and problem-solving.',
                'Analyzed large datasets to identify patterns and anomalies using analytical tools.',
                'Presented findings in a structured report format, highlighting key insights.',
                'Developed a mindset for data-driven decision making and forensic investigation.'
            ]
        }
    ];

    const renderTimeline = (items) => (
        <div className="timeline">
            {items.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="timeline-item"
                >
                    <div className="timeline-dot"></div>
                    <div className="experience-card card">
                        <div className="exp-header">
                            <div className="exp-info">
                                <h3 className="exp-role">{exp.role}</h3>
                                <h4 className="exp-company">{exp.company}</h4>
                            </div>
                            <div className="exp-meta">
                                <span className="exp-period">
                                    <Calendar size={14} /> {exp.period}
                                </span>
                                <span className="exp-location">
                                    <MapPin size={14} /> {exp.location}
                                </span>
                            </div>
                        </div>
                        <ul className="exp-highlights">
                            {exp.highlights.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
    );

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>

                {renderTimeline(professionalExperiences)}

                <div style={{ marginTop: '5rem' }}>
                    <h3 className="experience-subtitle">Virtual Experience</h3>
                    {renderTimeline(virtualExperiences)}
                </div>
            </div>
        </section>
    );
};

export default Experience;
