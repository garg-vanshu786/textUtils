import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useContext, useState } from 'react'
import Alert from './components/Alert';
// import About from './components/About'
// import {
//   BrowserRouter ,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [ mode, setMode] = useState('light'); //whether mode enabled or not
  const [ alert, setAlert] = useState(null);

  const showAlert =(message, type )=>{
     setAlert({
        msg: message, //we can write  also message = message
        type: type
     })

     setTimeout(() => {
        setAlert(null);
     }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){    
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark Mode has been enabled", "success");
    document.title ='TextUtils - Dark Mode';
      setInterval(() => {
        document.title ='TextUtils - Amazing';
      }, 2000);
      // setInterval(() => {
      //   document.title ='TextUtils One stop Solution';
      // }, 1700);
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
     showAlert("Light Mode has been enabled", "success");
     document.title ='TextUtils - Light Mode';
     setInterval(() => {
      document.title ='TextUtils - Amazing';
    }, 2000);
    // setInterval(() => {
    //   document.title ='TextUtils One stop Solution';
    // }, 1700);
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
      <Alert alert={alert}/>
      <div className="container my-3">
      
    
   

    <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
    </div>
    </>
  ); 
} 

export default App;
