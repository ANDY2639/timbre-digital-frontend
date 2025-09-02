import React, { useEffect, useState, useRef } from "react";
import socket from "../socket";

const ReceptionPage: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userInteracted = useRef(false);

  // preparar audio cuando el usuario hace click por primera vez
  useEffect(() => {
    const handleInit = () => {
      if (!userInteracted.current) {
        audioRef.current = new Audio("/doorbell.mp3");
        // hacemos un play + pause para "desbloquear" el audio
        audioRef.current
          .play()
          .then(() => {
            audioRef.current?.pause();
            audioRef.current!.currentTime = 0;
            userInteracted.current = true;
          })
          .catch((err) => console.warn("Autoplay bloqueado:", err));
      }
    };

    document.addEventListener("click", handleInit, { once: true });
    return () => {
      document.removeEventListener("click", handleInit);
    };
  }, []);

  // escuchar socket
  useEffect(() => {
    socket.on("ring-event", (name: string) => {
      const now = new Date();
      const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      setLogs((prev) => [...prev, `${name} tocó el timbre - ${formattedDate}`]);

      // reproducir sonido solo si ya fue "habilitado" por interacción
      if (audioRef.current) {
        audioRef.current.currentTime = 0; // reiniciar al inicio
        audioRef.current.play().catch((err) => {
          console.warn("No se pudo reproducir:", err);
        });
      }
    });

    return () => {
      socket.off("ring-event");
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📡 Recepción</h1>
      <p className="text-gray-500 mb-2">
        Haz click en cualquier parte de la página para habilitar el timbre 🔔
      </p>
      <ul className="space-y-2">
        {logs.map((log) => (
          <li key={`log-${log}-${new Date().getTime()}`} className="bg-gray-200 p-2 rounded">
            {log}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReceptionPage;
