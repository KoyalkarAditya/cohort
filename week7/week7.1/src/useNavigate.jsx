import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/DashBoard";
import Landing from "./components/Landing";
//useNavigate lets us navigate through pages without actually fetching fresh index.html from backend and is pretty instant
// when using useNavigate the hook and its respective route handler should be written inside the BrowserRouter as the parent component ,or else it won't work
//so we created a AppBar component which is a child of Browse router and handles routes and has useNavigate hook
function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        DashBoard
      </button>
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>Fixed Top Bar</h1>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
