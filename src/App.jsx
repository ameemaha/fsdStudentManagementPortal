import React from "react";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Create from "./Create";
import Update from "./Update";
import Dashboard from "./Dashboard";
import View from "./View";

const App = () => {
  const navStyle = ({ isActive }) => {
    return {
      color: isActive ? "white" : "black",
      textDecoration: "none",
    };
  };
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-info" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Student Management Portal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink style={navStyle} to="" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={navStyle}
                  to="register-student"
                  className="nav-link"
                >
                  Register Student
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={navStyle}
                  to="student-list"
                  className="nav-link"
                >
                  Student List
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/student-list" element={<Home />} />
        <Route path="/register-student" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
