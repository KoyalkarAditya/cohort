import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
const DashBoard = lazy(() => import("./components/DashBoard"));
const Landing = lazy(() => import("./components/Landing"));
//Lazy load lets us load components lazy-ly when required
//Suspense lets us render Fallback message if data is not yet arrived
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
          <Route
            path="/dashboard"
            element={
              <Suspense fallback="Loading....">
                <DashBoard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback="Loading....">
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
