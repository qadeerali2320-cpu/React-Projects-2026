import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import  {NavBar as Navbar}  from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  const [mode2, setMode2] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({

      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.background = 'linear-gradient(145deg, #0f172a 0%, #1e293b 100%)';
    document.body.style.color = '#f1f5f9';
    document.documentElement.setAttribute('data-theme', 'dark');
    showAlert("Dark mode enabled", "success");
  } else {
    setMode('light');
    document.body.style.background = 'linear-gradient(145deg, #f0f4f8 0%, #ffffff 100%)';
    document.body.style.color = '#0f172a';
    document.documentElement.removeAttribute('data-theme');
    showAlert("Light mode disabled", "success");
  }
};




  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} title="Text-Utilities" aboutText="About" />

        <Alert alert={alert} />

        <center><div className="container my-3">
          {/* <Textform heading="Enter your text to analyze" mode={mode} showAlert={showAlert} /> */}
        <Routes>
  <Route path="/About" element={<About mode={mode} showAlert={showAlert}/>} />
  <Route 
    path="/" 
    element={<Textform heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />} 

  />
</Routes>

          {/* <About mode={mode}/> */}

        </div></center>
       </Router>
    </>
  )
}

export default App
