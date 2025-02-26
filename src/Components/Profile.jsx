import React, { useState, useEffect } from 'react';
import profileimg from "../assets/profile.jpg";
import './Profile.css';


function Profile() {
  const [text, setText] = useState('');
  const staticText = "Hi! I am a"; 
  const typingText = " Frontend Developer";
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(typingText.slice(0, index + 1));
      index++;

      if (index > typingText.length) {
        setTimeout(() => { 
          index = 0; 
          setText('');
        }, 1000); 
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="profile" className='Profile'> 
      
      <div className="profile-text">
        <h3 className="typing-text">
          {staticText}<span>{text}</span> 
        </h3>
        <p>
          I am a passionate Front-End Developer with a keen interest in building responsive, 
          user-friendly, and visually appealing websites. With a strong foundation in HTML, CSS, JavaScript, 
          and React, I specialize in creating dynamic and interactive web applications.
        </p>
        
        <div className='profile-action'>
          <a href="/Jannat_s_Resume (1).pdf" download="My_Resume.pdf" className='resume'>Download My Resume</a>
        </div>
        
      </div>

      <div className="profile-image">
        <img src={profileimg} alt="Profile" />
      </div>
    </div>
  );
}

export default Profile;
