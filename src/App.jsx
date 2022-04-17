import React from "react";

import "./styles/App.css";

import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/app-router/AppRouter";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRouter/>
    </div>
  );
}

export default App;
