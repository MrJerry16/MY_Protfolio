import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: 'Web Developer Intern',
            company: 'Silgate Solutions Pvt. Ltd.',
            period: 'Dec 2025 - Present',
            location: 'Thane, India',
            highlights: [
                'Contributing to the development of a React-based admin panel for internal management.',
                'Created and tested REST APIs using Java and Spring Boot for data processing.',
                'Collaborated with senior developers to optimize database queries for better performance.',
                'Participated in daily stand-ups and code reviews to ensure high-quality software delivery.'
            ]
        },
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
        },
        {
            role: 'Store Management Assistant',
            company: 'Dry Cleaning Store',
            period: 'Jun 2025- Oct 2025',
            location: 'Mumbai, India',
            highlights: [
                'Optimized daily operational workflows by tracking work status and coordinating with staff, ensuring 100% on-time order completion.',
                'Enhanced customer retention and satisfaction through proactive communication, effectively resolving requirements and streamlining service delivery.',
                'Managed end-to-end order lifecycles and addressed complex service requests to maintain high standards of operational excellence.'
            ]
        },
        {
            role: 'Intern',
            company: 'Ardent Computech Pvt. Ltd.',
            period: 'Feb 2025 - Jun 2025',
            location: 'Mumbai, India',
            highlights: [
                'Developed backend services using Java and Spring Boot for a modular web application.',
                'Worked on RESTful API creation and integration with frontend components.',
                'Gained hands-on experience in debugging and troubleshooting complex backend issues.'
            ]
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
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
            </div>
        </section>
    );
};

export default Experience;
