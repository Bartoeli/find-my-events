import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Events } from "./pages/Events/Events";

function App() {
  return (
    <div className="App">
      <header className="App-header">Navigation</header>
      <Routes>
        <Route path="/" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
