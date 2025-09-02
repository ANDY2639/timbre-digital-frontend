import Ring from "./Ring";
import { useBase } from "../../context/base";
import socket from "../../socket";
import { useState } from "react";

const RingContainer = () => {
  const { name, setName, isModalOpen, setIsModalOpen, getVisitor } = useBase();
  const [isActive, setisActive] = useState(false);

  const handleRing = () => {
    getVisitor();

    if (!name) {
      setIsModalOpen(true);
      return;
    }
    
    socket.emit("ring", name);
    setisActive(true);
    setTimeout(() => {
      setisActive(false);
    }, 7000);
  };

  return <Ring isActive={isActive} name={name} setName={setName} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onClickRing={handleRing} />
}

export default RingContainer
