import React from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth_reg from "./pages/Auth_reg";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/auth_reg" element={<Auth_reg />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
