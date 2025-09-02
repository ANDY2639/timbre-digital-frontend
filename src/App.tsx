import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RingPage from "./pages/RingPage";
import ReceptionPage from "./pages/ReceptionPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RingPage />} />
        <Route path="/reception" element={<ReceptionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
