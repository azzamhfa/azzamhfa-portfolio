import { useState } from 'react'
import NavBar from './components/NavBar'
import './index.css'
import Intro from './components/Intro'
import Portofolio from './components/Portofolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Portofolio/>
      <Timeline/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
