
// import './App.css';
// import Navbar from './components/Navbar';
// import   { Routes, Route } from 'react-router-dom';
// import About from './components/About';
// import Home from './components/Home';
// function App() {
//   return (
//     <>
//     <Navbar />
//       <Routes>
        
        
//           <Route path='/' element={<Home/>}  />
//           <Route path='/about' element={<About />}  />
      
//       </Routes>

//     </>
//   );
// }

// export default App;
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

// import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

import {Routes,Route} from 'react-router-dom'

import HeroSection from './components/HeroSection';
import Home from './components/pages/Home';
function App() {
  return (
    <>
     <Navbar />
      <Home />
      <Routes>
     
        
          <Route path='/' exact   />
      
        
      </Routes>
    </>
  );
}

export default App;