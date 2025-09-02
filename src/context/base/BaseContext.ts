import { createContext } from "react";

export type Log = {
  message: string,
  date: Date,
}

export type BaseContextType = {
  name: string,
  logs: Log[],
  isModalOpen: boolean,
  setName: (name: string) => void,
  setLogs: (logs: React.SetStateAction<Log[]>) => void,
  setIsModalOpen: (isOpen: boolean) => void,
  getVisitor: () => void,
}

const BaseContext = createContext<BaseContextType>({
  name: "",
  logs: [],
  isModalOpen: false,
  setName: () => {},
  setLogs: () => {},
  setIsModalOpen: () => {},
  getVisitor: () => {},
});

export default BaseContext;
