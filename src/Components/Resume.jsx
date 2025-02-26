import React from "react";
import profileImage from "../assets/profile.jpg";
import "./Resume.css";

const Resume = () => {
  return (
    <section id='Resume' className="experience-section">
      <h2 className="section-title">Education & Experience</h2>
      
      <div className="experience-container">
      
        <div className="experience-left">
          <img src={profileImage} alt="Profile" className="profile-img" />
          <p className="profile-title">Frontend Designer & Developer</p>
        </div>

        
        <div className="experience-right">
          <div className="timeline">
            <div className="timeline-item">
              <span className="year">2013 - 2019</span>
              <h3>Framer Designer & Developer</h3>
              <p>Designed and developed interactive UI/UX experiences using Framer, blending creativity with functionality.</p>
            </div>

            <div className="timeline-item">
              <span className="year">2019 - 2020</span>
              <h3>Front-End WordPress Developer</h3>
              <p>Developed and customized WordPress themes and plugins to enhance website functionality and user experience.</p>
            </div>

            <div className="timeline-item">
              <span className="year">2020 - 2021</span>
              <h3>Leader of marketing team</h3>
              <p>Led a marketing team to develop and execute strategic campaigns, enhancing brand visibility and engagement.</p>
            </div>

            <div className="timeline-item">
              <span className="year">2021 - Present</span>
              <h3>React Developer</h3>
              <p>Built dynamic and responsive web applications using React, focusing on performance and user experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
