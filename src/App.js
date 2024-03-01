import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Nav from './componenets/Nabaar';
import Home from './componenets/Home';
// import About from './componenets/About';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';







function App(props) {
  return (

    <div>

      
    {/* // <Router>

    
    //     <Nav/>   

    //     <Routes>


    //     <Route path='/Home' element={<Home/>}/>
    //     <Route path='About' element={<About/>}/>



    //      </Routes>


    //      </Router> */}



    <Nav/>

    <Home/>




      {/* i try to do routing */}

    {/* <About/> */}
         

    
    </div>
    
    
  );
}


export default App;
