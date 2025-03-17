import { useContext, useState } from "react";
import { ThemeContext, ThemeProvider } from "./Context/ThemeContext";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import AboutMe from "./Components/AboutMe";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import SplashScreen from "./Components/SplashScreen"; 
import "./App.css";


function App() {
  const [isLoading, setIsLoading] = useState(true); 

  return (
    <ThemeProvider>
      {isLoading ? <SplashScreen onComplete={() => setIsLoading(false)} /> : <MainApp />}
    </ThemeProvider>
    
  );
}


function MainApp() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Profile />
      <AboutMe />
      <Resume />
      <Skills />
      <Contact />
      
    </div>
  );
}

export default App;

