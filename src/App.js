import { useState } from 'react';
import './App.css';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
 import TextArea from './components/TextArea';

//  import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

  const [mode,setMode]=useState("light");
  const toggleMode=()=>{
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
      document.title="TextUtlis";
      
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="gray";
      
      document.title="TextUtlis - Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtlis - Dark Mode";
      // }, 1500);

      // setInterval(() => {
      //   document.title="TextUtlis";
      // }, 2000);
    }
  }

  return (

    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About Us" mode ={mode} toggleMode={toggleMode}></Navbar> 
    <div className="container">
      <TextArea heading ="Enter the text to analyze" mode={mode} ></TextArea>
    {/* <Routes>
          <Route exact path="/about" element={<AboutUs/>}>
          </Route>
          <Route exact path="/" element={<TextArea heading ="Enter the text to analyze" mode={mode}></TextArea>}>
          </Route>
    </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
