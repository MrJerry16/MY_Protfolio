import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Plant Disease Detection System",
      description:
        "An intelligent system that identifies diseases in plants using computer vision and machine learning techniques.",
      tech: ["Python", "OpenCV", "TensorFlow", "NumPy"],
      highlights: [
        "Developed an image classification system using Python and OpenCV.",
        "Applied preprocessing and computer vision techniques to improve feature extraction and model performance.",
        "Achieved 85%+ detection accuracy, ensuring reliable and consistent results.",
      ],
      link: "#",
      github: "#",
    },
    {
      title: "Temple Website Backend",
      description:
        "Robust backend architecture for a religious institution to manage donations, scheduling, and information sharing.",
      tech: ["Express.js", "Node.js", "MongoDB", "JWT"],
      highlights: [
        "Built RESTful APIs with full CRUD operations, ensuring efficient and scalable data handling.",
        "Tested and validated API endpoints using Postman to ensure performance and reliability",
        "Collaborated with stakeholders and cross-functional teams, improving API delivery and system reliability by 20%.",
      ],
      link: "#",
      github: "#",
    },
    {
      title: "Aviation Crisis Impact Analysis Dashboard",
      description:
        "Interactive data visualization dashboard analyzing aviation trends, cancellations, and recovery patterns to support business decision-making.",
      tech: ["Tableau", "Python", "Pandas"],
      highlights: [
        "Analyzed aviation datasets (10,000+ records) to identify traffic volume, cancellation rates, and recovery trends.",
        "Built interactive dashboards in Tableau to visualize KPIs and improve business reporting efficiency by 20%.",
      ],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="project-card card"
            >
              <div className="project-icon">
                <Layers size={24} />
              </div>
              <h3 className="project-title">{project.title}</h3>

              <div className="project-description-container">
                <p className="project-description">{project.description}</p>
                {(project.github !== "#" || project.link !== "#") && (
                  <div className="inline-project-links">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        className="project-link"
                        title="Source Code"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        className="project-link"
                        title="Live Demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-highlights">
                {project.highlights.map((h, i) => (
                  <div key={i} className="highlight-item">
                    <span className="dot"></span> {h}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
