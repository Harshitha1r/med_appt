import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar"
import Layout from './components/Landing_Page/Landing_page'
function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <NavBar/>
              <Routes>
              <Route path="/" element={<Layout/>}/> 
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;