import { useEffect, useMemo, useState, type PropsWithChildren } from "react";
import BaseContext, { type Log } from "./BaseContext";

const BaseContextProvider = ({ children }: PropsWithChildren) => {
  const [name, setName] = useState("");
  const [logs, setLogs] = useState<Log[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getVisitor = () => {
    const name = localStorage.getItem("visitorName");
    setName(name ?? "")
  }

  useEffect(() => {
    getVisitor();
  }, []);

  const contextValue = useMemo(() => ({
    name,
    logs,
    isModalOpen,
    setName,
    setLogs,
    setIsModalOpen,
    getVisitor,
  }), [name, logs, isModalOpen]);

  return <BaseContext value={contextValue}>{children}</BaseContext>;
};

export default BaseContextProvider;