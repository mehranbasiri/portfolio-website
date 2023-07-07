import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
        <div className="App">
<Navbar />
          <BrowserRouter>
            <Routes> 
              
          <Route path="/" element={<Home />}/>
            

      </Routes>
    </BrowserRouter>
  
        </div>
  )
}

export default App;
