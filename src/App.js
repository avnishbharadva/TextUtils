// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextCmp from './components/TextCmp';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import { Link } from 'react-router-dom';

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
      {/* <TextCmp heading="Enter The Text To Analyze" mode={mode}/> */}
      <BrowserRouter>
      <Navbar title="TextUtils" aboutProp="About Us" mode={mode} toggleMode={toggleMode}/>

      <Routes>
             <Route path="/about" element={<About mode={mode}/>}>
             </Route>
             <Route path="/" element={<TextCmp heading="Enter The Text To Analyze" mode={mode}/>}>
             </Route>
           </Routes>
           </BrowserRouter>
    </>
  );
}

// function App() {

  

//   return (
//     <div>

      

        

//         <Routes>
//             <Route path="/about" element={<About/>}>
//             </Route>
//             <Route path="/" element={}>
//             </Route>
//           </Routes>
          
//           </div>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

export default App;
