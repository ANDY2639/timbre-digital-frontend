import { useEffect, useMemo, useRef } from "react";
import { useBase } from "../../context/base";
import Reception from "./Reception";
import socket from "../../socket";

const ReceptionContainer = () => {
  const { logs, setLogs } = useBase();
  const userInteracted = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const logList = useMemo(() => logs.sort((a, b) => b.date.getTime() - a.date.getTime()), [logs]);

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
      setLogs((prevLogs) => [...prevLogs, { message: `${name} tocó el timbre`, date: new Date() }]);

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
     
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Reception logs={logList} />
}

export default ReceptionContainer
