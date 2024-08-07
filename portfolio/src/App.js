import React, { useRef, useEffect } from 'react';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import './App.css';
import image1 from './Website1.jpg';
import image2 from './Website2.jpg';
import image3 from './Website3.jpg';

import link1 from './link.jpg';
import link2 from './github.png';
import link3 from './resume.jpg';

import major from './major.jpg';
import chart from './chart.png';
import travel from './travel.jpg';

import resume from './Pretam_Chowdhury_Resume_Final.pdf';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, observerOptions);

    fadeInSections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      fadeInSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App">
      <Navbar />

      <section id="home" className="fade-in-section">
        <h1>Welc✪me to My Portfolio!</h1>
        <div className="home-images">
          <div className="home-image" style={{ backgroundImage: `url(${major})` }}>
            <p>Computer Science</p>
          </div>
          <div className="home-image" style={{ backgroundImage: `url(${chart})` }}>
            <p>Data Science</p>
          </div>
          <div className="home-image" style={{ backgroundImage: `url(${travel})` }}>
            <p>Travel</p>
          </div>
        </div>
      </section>

      <section id="about" ref={aboutRef} className="fade-in-section">
        <div className="about-content">
          <div className="about-text">
            <span role="img" aria-label="waving hand">👋</span>
            <h1>Hello, I am Pretam Chowdhury</h1>
            <p>I am a rising senior at City College, pursuing a Bachelor of Science in Computer Science, looking to get into data science. I am skilled in Python, C/C++, and JavaScript, which are displayed by my various projects. I also mentor students as a Mathematics Tutor and enjoy playing soccer and traveling in my free time.</p>
          </div>
          <Slideshow />
        </div>
      </section>
      
      <section id="projects" ref={projectsRef} className="fade-in-section">
        <div className="project-content">
          <h2>Recent Projects</h2>
          <p>Below you can see some examples of my recent work. Check out my complete <a href="#">portfolio</a>. Have a project you would like to discuss? <a href="#">Let's make something great together!</a></p>
          <div className="project-list">
            <div className="project fade-in-section">
              <div className="project-image">
                <img src={image1} alt="Smooth Smoothies" />
              </div>
              <h3>ChitChat Website</h3>
              <p>ChitChat is a social media platform inspired by Twitter. It includes features such as user registration, posting posts, following/unfollowing users, and user profiles. Each user has distinct abilities to perform tasks, with a hierarchy from most to least power. This structure ensures efficient management and interaction among users.</p>
              <a href="https://github.com/Pretam07/ChitChat-Website" target="_blank" rel="noopener noreferrer" className="project-link">View project</a>
            </div>
            <div className="project fade-in-section">
              <div className="project-image">
                <img src={image2} alt="Snazzy Fashion" />
              </div>
              <h3>RepairWave Technologies</h3>
              <p>Repairwave Technologies provides a platform to locate and compare local repair shops, estimate repair costs, and book services at your convenience. It’s designed to assist consumers in finding reliable repair services and managing their repair needs efficiently.</p>
              <a href="https://github.com/SajedAtwa/database-final-projectfrontend" target="_blank" rel="noopener noreferrer" className="project-link">View project</a>
            </div>
            <div className="project fade-in-section">
              <div className="project-image">
                <img src={image3} alt="Hero Block Gallery" />
              </div>
              <h3>Tutor-Scheduler-Pro</h3>
              <p>The booking system is an online application for students and tutors to schedule sessions, register for classes, and handle payments. It’s an ideal website that would not only benefit student but also freelance tutors, tutors centers, and educational institutions.</p>
              <a href="https://tutor-scheduler-pro-frontend.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link">View project</a>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" ref={contactRef} className="fade-in-section">
        <div className='contact-container'>
          <div className="contact-content">
            <div className="contact-info">
              <h2>Let's chat. Tell me about your project.</h2>
              <p>Let's create something together <span role="img" aria-label="rocket">🚀</span></p>
              <p>Mail me at <a href="mailto:framesmillion@gmail.com">Chowdhurypretam@gmail.com</a></p>
            </div>
            <div className="contact-form">
              <h2>Send me a message<span role="img" aria-label="rocket">🚀</span></h2>
              <form>
                <input type="text" name="fullName" placeholder="Full name*" required />
                <input type="email" name="email" placeholder="Email address*" required />
                <input type="text" name="subject" placeholder="Subject" />
                <textarea name="message" placeholder="Tell me more about your project*" required></textarea>
                <button type="submit">Send message</button>
              </form>
            </div>
          </div>
          <div className="social-buttons">
            <a href="https://www.linkedin.com/in/pretamc/" target="_blank" rel="noopener noreferrer" className="social-button">
              <img src={link1} alt="LinkedIn" className="social-icon" />
              LinkedIn
            </a>
            <a href="https://github.com/Pretam07" target="_blank" rel="noopener noreferrer" className="social-button">
              <img src={link2} alt="GitHub" className="social-icon" />
              GitHub
            </a>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="social-button">
              <img src={link3} alt="Resume" className="social-icon" />
              Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;











