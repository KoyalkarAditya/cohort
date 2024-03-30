import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// run npm install react-router-dom
import "./App.css"
import DashBoard from "./components/DashBoard"
import Landing from "./components/Landing"

export function Route11() {
  return (
    <div>
      <h1>Fixed Top Bar</h1>
      <button
        onClick={() => {
          window.location.href = "/"
          // this is dumb way to change route as this causes to fetch again whole index.html from backend and causes re-load the file
          // so we use useNavigate hook
        }}
      >
        Landing page
      </button>
      <button
        onClick={() => {
          window.location.href = "/dashboard"
        }}
      >
        DashBoard
      </button>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
