import { useEffect, useMemo, useRef, useState } from "react";
import { useBase } from "../../context/base";
import Reception from "./Reception";
import socket from "../../socket";

const ReceptionContainer = () => {
  const { logs, setLogs } = useBase();
  const userInteracted = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isAudioActive, setIsAudioActive] = useState(false);

  const logList = useMemo(() => [...logs].sort((a, b) => b.date.getTime() - a.date.getTime()), [logs]);

  useEffect(() => {
    const handleInit = () => {
      if (!userInteracted.current) {
        audioRef.current = new Audio("/doorbell.mp3");
        audioRef.current
          .play()
          .then(() => {
            audioRef.current?.pause();
            audioRef.current!.currentTime = 0;
            userInteracted.current = true;
            setIsAudioActive(true);
          })
          .catch((err) => console.warn("Autoplay bloqueado:", err));
      }
    };

    document.addEventListener("click", handleInit, { once: true });
    return () => {
      document.removeEventListener("click", handleInit);
    };
  }, []);

  useEffect(() => {
    socket.on("ring-event", (name: string) => {
      setLogs((prevLogs) => [...prevLogs, { message: `${name} tocó el timbre`, date: new Date() }]);

      if (audioRef.current) {
        audioRef.current.currentTime = 0;
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

  return <Reception logs={logList} isAudioActive={isAudioActive} />
}

export default ReceptionContainer
