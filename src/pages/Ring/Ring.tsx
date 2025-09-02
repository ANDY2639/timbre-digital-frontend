import { cn } from "clsx-for-tailwind";
import { DoorbellIcon } from "../../components/Icons";
import VisitorModal from "./components/VisitorModal";

type Props = {
  name: string,
  isActive: boolean,
  isModalOpen: boolean,
  setName: (name: string) => void,
  setIsModalOpen: (isOpen: boolean) => void,
  onClickRing: () => void,
}

const Ring: React.FC<Props> = ({ isActive, name, setName, isModalOpen, setIsModalOpen, onClickRing }) => {
  const buttonClass = cn(
    "flex items-center justify-center",
    "rounded-full shadow-2xl",
    "w-60 h-60 max-w-96 max-h-96 text-white",
    "bg-blue-500 hover:bg-blue-600",
    { "bg-green-500 hover:bg-green-600 cursor-not-allowed": isActive }
  );

  return (
    <div className="w-full max-w-screen min-h-screen flex flex-col justify-center items-center gap-4">
      {name && (
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">Hola {name}</h2>
          <p className="text-sm text-gray-600">Presiona el botón para notificar tu llegada</p>
        </div>
      )}
      <button onClick={onClickRing} disabled={isActive} className={buttonClass}>
        <DoorbellIcon />
      </button>
      <VisitorModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} name={name} setName={setName} />
    </div>
  );
};

export default Ring;
