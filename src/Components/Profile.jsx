import React, { useState, useEffect } from 'react';
import profileimg from "../assets/profile.jpg";
import './Profile.css';

function Profile() {
  const [text, setText] = useState('');
  const fullText = "Hi! I am a Frontend Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='Profile'>
      
      <div className="profile-text">
        <h1 className="typing-text">{text}</h1>
        <p>
          I am a passionate Front-End Developer with a keen interest in building responsive, 
          user-friendly, and visually appealing websites. With a strong foundation in HTML, CSS, JavaScript, 
          and React, I specialize in creating dynamic and interactive web applications.
        </p>
        
        <div className='profile-action'>
          <a href="/Jannat_s_Resume (1).pdf" download="My_Resume.pdf" className='resume'>My Resume</a>
        </div>
      </div>

      
      <div className="profile-image">
        <img src={profileimg} alt="Profile" />
      </div>
    </div>
  );
}

export default Profile;
