import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import AboutMe from './Components/Aboutme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Profile/>
     <AboutMe/>
    </>
  )
}


export default App
