import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Stake from "./screens/Stake";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/stake" element={<Stake/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
