// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// let name = "Varn";
// const bye = (
//   <h2>bye bye</h2>
// );

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState('light');

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '	#042743';
      showAlert("Dark Mode has been enabled.", "success");
      document.title = 'TextUtils - Home (Dark)';

      // blinks the title
      // setInterval(() => {
      //   document.title = 'TextUtils - Home';
      // }, 500);
      // setInterval(() => {
      //   document.title = 'TextUtils - Install Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Home';
      showAlert("Light Mode has been disabled.", "success");
    }
  }

  const toggleRedTheme = () => {
    if(theme!=='red'){
      setTheme('danger');
      document.body.style.backgroundColor = 'red';
      showAlert("Red Mode has been enabled.", "success");
    }
    else{
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "success");
    }
  }

  const toggleGreenTheme = () => {
    if(theme!=='green'){
      setTheme('success');
      document.body.style.backgroundColor = 'green';
      showAlert("Green Mode has been enabled.", "success");
    }
    else{
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "success");
    }
  }

  const toggleYellowTheme = () => {
    if(theme!=='yellow'){
      setTheme('warning');
      document.body.style.backgroundColor = 'yellow';
      showAlert("Yellow Mode has been enabled.", "success");
    }
    else{
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "success");
    }
  }

  const toggleDarkTheme = () => {
    if(theme!=='dark'){
      setTheme('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled.", "success");
    }
    else{
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "success");
    }
  }

  const toggleLightTheme = () => {
    if(theme!=='light'){
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Yellow Mode has been enabled.", "success");
    }
    else{
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "success");
    }
  }

  return (
    <>
      <Router>
      <Navbar 
        title="VarnGupta"
        mode={mode}
        toggleMode={toggleMode}
        // toggleRed={toggleRedTheme}
        // toggleGreen={toggleGreenTheme}
        // toggleYellow={toggleYellowTheme}
        // toggleDark={toggleDarkTheme}
        // toggleLight={toggleLightTheme}
        // aboutText="About Us" 
        // serviceText="Services" 
      />

      <Alert alert={alert}/>

      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm 
              showAlert={showAlert} 
              heading="Enter the text to analyze below" 
              mode={mode}/>} />
          <Route exact path="/about" element={<About />} /> 
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
