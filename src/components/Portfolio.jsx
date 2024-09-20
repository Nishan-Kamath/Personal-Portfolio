import React from 'react'
import '../styles.css';
import mainImage from '../assets/main.png';

const Portfolio = () => {
  return (
    <div>
      <div>
            <header>
                <a href="#" className="logo">Nishan</a>
                <nav>
                    <a href="#home" className="active">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#education">Education</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <section className="home" id="home">
                <div className="home-img">
                    <img src={mainImage} alt="Main" />
                </div>
                <div className="home-content-wrapper">
                    <div className="home-content">
                        <h1>Hi It's <span>Nishan H Kamath</span> </h1>
                        <p>An innovative Information Science student focused on AI/ML and Android development.</p>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/nishan-kamath-b2891b26b/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/Nishan-Kamath" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.youtube.com/@NishanKamath" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://www.instagram.com/nishankamath/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                    <a href="#" className="btn">Hire me</a>
                </div>
            </section>

            <section id="skills">
                <h2 className="section-title">Skills</h2>
                <div className="skills-container">
                    <div className="skill-card">
                        <i className="fas fa-brain"></i>
                        <h3>AI/ML</h3>
                    </div>
                    <div className="skill-card">
                        <i className="fas fa-code"></i>
                        <h3>Fullstack Development</h3>
                    </div>
                    <div className="skill-card">
                        <i className="fab fa-android"></i>
                        <h3>Android Application Development</h3>
                    </div>
                    <div className="skill-card">
                        <i className="fas fa-database"></i>
                        <h3>Database Management Systems</h3>
                    </div>
                    <div className="skill-card">
                        <i className="fas fa-chart-line"></i>
                        <h3>Data Analytics</h3>
                    </div>
                    <div className="skill-card">
                        <i className="fab fa-docker"></i>
                        <h3>Docker</h3>
                    </div>
                    <div className="skill-card">
                        <i className="fas fa-eye"></i>
                        <h3>Computer Vision</h3>
                    </div>
                    <div className="skill-card">
                        <i className="fas fa-network-wired"></i>
                        <h3>Data Communication & Networking</h3>
                    </div>
                </div>
            </section>

            <section id="projects">
                <h2 className="section-title">Projects</h2>
                <div className="projects-container">
                    <div className="project-card">
                        <h3>Farmer Support Application</h3>
                        <p>Technologies: Flask, ML, OpenWeatherAPI</p>
                    </div>
                    <div className="project-card">
                        <h3>AI Virtual Mouse</h3>
                        <p>Technologies: MediaPipe, OpenCV (cv2), PyAutoGUI</p>
                    </div>
                    <div className="project-card">
                        <h3>Student Placement Predictor Application</h3>
                        <p>Technologies: Android, Java, Flask, ML</p>
                    </div>
                    <div className="project-card">
                        <h3>Amazon Sales Analysis</h3>
                        <p>Technologies: Data Analytics, ML</p>
                    </div>
                    <div className="project-card">
                        <h3>Recipe Blogging Application</h3>
                        <p>Technologies: Flask, HTML, CSS, SQL</p>
                    </div>
                    <div className="project-card">
                        <h3>Password Strength Prediction and Suggestion</h3>
                        <p>Technologies: Streamlit, ML</p>
                    </div>
                </div>
            </section>

            <section id="education">
                <h2 className="section-title">Education</h2>
                <div className="education-container">
                    <div className="education-box">
                        <h3>B.Tech in Information Science & Engineering</h3>
                        <p>NMAMIT Nitte</p>
                        <span>2023-26</span>
                    </div>
                    <div className="education-box">
                        <h3>Diploma in Computer Science - AI/ML</h3>
                        <p>NRAMP Nitte</p>
                        <span>2020-23</span>
                    </div>
                    <div className="education-box">
                        <h3>SSLC</h3>
                        <p>GPUC Bajagoli</p>
                        <span>2020</span>
                    </div>
                </div>
            </section>

            <section id="contact">
                <h2 className="section-title">Contact</h2>
                <div className="contact-container">
                    <div className="contact-box">
                        <h3>Contact Information</h3>
                        <p>Email: <a href="mailto:nishankamath@gmail.com">nishankamath@gmail.com</a></p>
                        <p>Phone: <a href="tel:+919380719446">+91 9380719446</a></p>
                    </div>
                    <div className="contact-download">
                        <a href="nishan_resume.pdf" download="Nishan_H_Kamath_Resume.pdf" className="btn">Download Resume</a>
                    </div>
                </div>
            </section>

            <footer>
                <h3>Copyright &#169; 2024 Nishan Kamath - All rights reserved</h3>
            </footer>
        </div>
    </div>
  )
}

export default Portfolio
