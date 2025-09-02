import React, { useState, useEffect } from "react";
import socket from "../socket";

const RingPage: React.FC = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("visitorName");
    if (saved) setName(saved);
  }, []);

  const handleSave = () => {
    localStorage.setItem("visitorName", name);
  };

  const handleRing = () => {
    if (!name) {
      alert("Por favor ingresa tu nombre");
      return;
    }
    socket.emit("ring", name);
    alert("🔔 Timbre tocado!");
  };

  return (
    <div className="p-6 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold underline">🚪 Timbre Digital</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tu nombre"
        className="border p-2 rounded"
      />
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Guardar Nombre
      </button>
      <button
        onClick={handleRing}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Tocar Timbre
      </button>
    </div>
  );
};

export default RingPage;
