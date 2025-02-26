import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import AboutMe from './Components/Aboutme'
import Resume from './Components/Resume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Profile/>
     <AboutMe/>
     <Resume/>
    </>
  )
}


export default App
