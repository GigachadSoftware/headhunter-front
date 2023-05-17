import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Header from "./components/Header";

function App() {
  
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
    );
}

export default App;
