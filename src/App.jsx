import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OverOns from "./pages/OverOns";
import Footer from "./main/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over-ons" element={<OverOns />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
};

export default App;
