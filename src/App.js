
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, 
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500);
      
  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#6c757d';
      showAlert("dark mode is enabled","success");
      document.title="TextUtils-Dark Mode";
    }

    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode is enabled","success");
      document.title="TextUtils-light Mode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
        <Route exact path="/about" element={<About />} />    {/*exact is used for not making ract know for partial matching*/ }
        <Route exact path="/" element={<div className="container my-3">
              <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          </div>} />
        </Routes>
      </Router>
    </>
);
}

export default App;
