import React, { useEffect } from "react";
import "./SplashScreen.css"; 

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer); 
  }, [onComplete]);

  return (
    <div className="splash-container">
      <h1>Welcome to My Portfolio</h1>
      <p>Loading...</p>
    </div>
  );
};

export default SplashScreen;
