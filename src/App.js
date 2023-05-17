import React from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
