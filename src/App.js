// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextCmp from './components/TextCmp';

// let name = "Avnish";

function App() {
  const [mode,setMode] = useState("light");

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#042743"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutProp="About Us" mode={mode} toggleMode={toggleMode}/>
      <TextCmp heading="Enter The Text To Analyze" mode={mode}/>
      {/* <About/> */}
    </>
  );
}

export default App;
