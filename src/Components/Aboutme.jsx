import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  
  return (
    <div id="about-me" className="about-me">
      <div className="about-content">
        
        <div className="about-left">
          <h2>About Me</h2>
          <h3>Make Your Dreams Come True With Me</h3>
          <p>
            A passionate front-end developer with a keen eye for design and a love for creating 
            responsive, user-friendly web applications. Skilled in HTML, CSS, JavaScript, and React, 
            with a strong focus on building seamless and engaging user experiences. Dedicated to 
            writing clean, maintainable code and continuously learning new technologies to stay ahead 
            in the ever-evolving world of web development.
          </p>
        </div>

        
        <div className="about-right">
          <blockquote>
            “Design is not just what it looks like and feels like. Design is how it works.”
          </blockquote>
          <p>
            Experienced in crafting modern UI components, optimizing website performance, and 
            collaborating with teams to bring ideas to life. Always excited to take on new challenges 
            and contribute to meaningful projects that make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
