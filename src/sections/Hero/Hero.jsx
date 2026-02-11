import React from 'react';
import { Download, ArrowRight, Code, Database, Globe, Cpu, BarChart3, Terminal, PieChart, CheckSquare, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const skillGroups = [
        {
            title: 'Backend',
            icon: <Cpu size={20} />,
            skills: ['Java', 'Spring Boot', 'REST APIs']
        },
        {
            title: 'Frontend',
            icon: <Globe size={20} />,
            skills: ['React.js', 'JavaScript']
        },
        {
            title: 'Databases',
            icon: <Database size={20} />,
            skills: ['MySQL', 'PostgreSQL', 'MongoDB']
        },
        {
            title: 'Data Analysis',
            icon: <BarChart3 size={20} />,
            skills: ['SQL', 'Python (Pandas, EDA)', 'Tableau Dashboards', 'Microsoft Excel (Basics)']
        },
        {
            title: 'Tools & Core Concepts',
            icon: <Code size={20} />,
            skills: ['Git', 'Microservices', 'OOPS', 'SDLC']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-text"
                    >

                        <h1 className="hero-title">
                            Hi, I'm <span className="text-gradient">Gautam Nandakumar</span>
                        </h1>
                        <p className="hero-description">
                            A versatile professional with expertise in software engineering and data analytics.
                            Dedicated to building robust backend systems, developing scalable applications,
                            and extracting actionable insights from complex data with a focus on impact and effective project coordination.
                        </p>

                        <div className="willing-roles hero-willing-roles">
                            <h3>Roles open for: <span className="available-status">Immediate joiner</span></h3>
                            <div className="roles-tags">
                                <span>Software Developer</span>
                                <span>Java Developer</span>
                                <span>Data Analyst</span>
                                <span>Project Management Roles</span>
                            </div>
                        </div>

                        <div className="hero-cta">
                            <a href="/Gautam_Nandakumar_Resume.pdf" download="Gautam_Nandakumar_Resume" className="btn btn-primary">
                                Download Resume <Download size={18} />
                            </a>
                            <a href="#contact" className="btn btn-outline">
                                Contact Me <ArrowRight size={18} />
                            </a>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="hero-image-container"
                    >
                        {/* Visual element like a structured grid or abstract developer icon */}
                        <div className="career-cards-container">
                            <div className="career-deck">
                                {/* Card 1: Java Developer */}
                                <div className="career-card card-java">
                                    <div className="card-top">
                                        <Cpu size={24} />
                                        <span>Java Developer</span>
                                    </div>
                                    <div className="card-body">
                                        <div className="code-hint">public class Backend { }</div>
                                        <div className="skill-tag">Spring Boot</div>
                                    </div>
                                </div>

                                {/* Card 2: Software Dev */}
                                <div className="career-card card-sw">
                                    <div className="card-top">
                                        <Terminal size={24} />
                                        <span>Software Dev</span>
                                    </div>
                                    <div className="card-body">
                                        <div className="code-hint">git commit -m "feat"</div>
                                        <div className="skill-tag">Systems</div>
                                    </div>
                                </div>

                                {/* Card 3: Data Analyst */}
                                <div className="career-card card-data">
                                    <div className="card-top">
                                        <PieChart size={24} />
                                        <span>Data Analyst</span>
                                    </div>
                                    <div className="card-body">
                                        <div className="chart-bars">
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                        </div>
                                        <div className="skill-tag">Insights</div>
                                    </div>
                                </div>

                                {/* Card 4: SDLC / Project Management */}
                                <div className="career-card card-pm">
                                    <div className="card-top">
                                        <RefreshCcw size={24} />
                                        <span>SDLC</span>
                                    </div>
                                    <div className="card-body">
                                        <div className="sdlc-visual">
                                            <div className="sdlc-circle"></div>
                                            <div className="sdlc-line"></div>
                                            <div className="sdlc-circle"></div>
                                            <div className="sdlc-line"></div>
                                            <div className="sdlc-circle"></div>
                                        </div>
                                        <div className="skill-tag">SDLC</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="skills-grid"
                >
                    {skillGroups.map((group, index) => (
                        <motion.div key={index} variants={itemVariants} className="skill-card">
                            <div className="skill-icon-header">
                                <div className="skill-icon">{group.icon}</div>
                                <h3>{group.title}</h3>
                            </div>
                            <ul className="skill-list">
                                {group.skills.map((skill, sIdx) => (
                                    <li key={sIdx}>{skill}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
