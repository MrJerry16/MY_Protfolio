import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Eye, X, ExternalLink } from 'lucide-react';
import './Certificates.css';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        {
            title: 'Java',
            issuer: 'HackerRank',
            date: 'Nov 2025',
            pdf: '/certificates/java_certificate.pdf', // Path to your PDF in public folder

        }
    ]

    return (
        <section id="certificates" className="cert-section">
            <div className="container">
                <h2 className="section-title">Certifications</h2>

                <div className="cert-grid">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="cert-card card"
                        >
                            <div className="cert-icon">
                                <Award size={32} />
                            </div>
                            <div className="cert-details">
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                                <p className="cert-date">{cert.date}</p>
                            </div>
                            <button
                                className="btn btn-outline btn-sm"
                                onClick={() => setSelectedCert(cert)}
                            >
                                <Eye size={16} /> View Certificate
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Certificate Modal */}
                <AnimatePresence>
                    {selectedCert && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="cert-modal-overlay"
                            onClick={() => setSelectedCert(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="cert-modal-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="modal-header">
                                    <div className="modal-header-info">
                                        <h3 className="modal-title">{selectedCert.title}</h3>
                                        <p className="modal-subtitle">{selectedCert.issuer} • {selectedCert.date}</p>
                                    </div>
                                    <button className="modal-close-inline" onClick={() => setSelectedCert(null)}>
                                        <X size={24} />
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="cert-pdf-viewer">
                                        <iframe
                                            src={`${selectedCert.pdf}#toolbar=0`}
                                            title={selectedCert.title}
                                            width="100%"
                                            height="100%"
                                        ></iframe>
                                    </div>
                                </div>
                                {/* <div className="modal-footer">
                                    <a href={selectedCert.verifyLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                        Verify Credential <ExternalLink size={16} />
                                    </a>
                                </div> */}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Certificates;
