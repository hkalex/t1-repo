// src/App.tsx

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/hono.svg";
import "./App.css";
import FirstPage from "./pages/FirstPage";
import React from 'react';
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("unknown");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/first" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPagePage />} />
        <Route path="/fourth" element={<FourthPagePage />} />
        <Route
          path="/about"
          element={
            <div>
              <h2>About Page</h2>
              <p>This is a sample about page using react-router-dom.</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
