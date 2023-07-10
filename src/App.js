import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
function App() {
  const characterAnim = {
    hidden: {
      opacity: 0,
      y: 85,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.5,
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
  };
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home characterAnim={characterAnim} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
