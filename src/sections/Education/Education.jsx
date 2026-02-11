import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import './Education.css';

const Education = () => {
    const education = [
        {
            degree: 'Master of Computer Applications (MCA)',
            institution: 'SIES College of Management Studies',
            score: 'CGPA: 7.38',
            year: '2023 - 2025',
            description: 'Focusing on Advanced Java, Software Engineering, and Database Management Systems.'
        },
        {
            degree: 'Bachelor of Computer Applications (BCA)',
            institution: 'Dr. D. Y. Patil College of Arts Commerce and Science',
            score: 'SGPA: 8.61',
            year: '2020 - 2023',
            description: 'Foundations of Computer Science, Programming in C/C++, and Web Development.'
        }
    ];

    return (
        <section id="education" className="edu-section">
            <div className="container">
                <h2 className="section-title">Education</h2>

                <div className="edu-grid">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="edu-card card"
                        >
                            <div className="edu-icon-box">
                                <GraduationCap size={28} />
                            </div>
                            <div className="edu-content">
                                <div className="edu-header">
                                    <h3 className="edu-degree">{edu.degree}</h3>
                                    <span className="edu-year">{edu.year}</span>
                                </div>
                                <h4 className="edu-inst">{edu.institution}</h4>
                                <div className="edu-score">
                                    <Award size={16} /> <span>{edu.score}</span>
                                </div>
                                <p className="edu-desc">{edu.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
