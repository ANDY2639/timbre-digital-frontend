import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ring from "./pages/Ring";
import Reception from "./pages/Reception";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ring />} />
        <Route path="/reception" element={<Reception />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
