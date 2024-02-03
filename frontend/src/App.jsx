import React from "react";
import {
  Navbar,
  Login,
  Register,
  Complaint,
  Dashboard,
  Categories,
  Details,
  Tabledata,
} from "./components/components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home, Admin, Contact } from "./sections/sections";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/tabledata" element={<Tabledata />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/complaint" element={<Complaint />} />
      </Routes>
    </Router>
    // <Tabledata />
  );
};

export default App;
