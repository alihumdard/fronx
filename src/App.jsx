import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OverOns from "./pages/OverOns";
import Service from "./pages/Service";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
