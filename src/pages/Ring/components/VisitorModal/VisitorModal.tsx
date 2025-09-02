type Props = {
  name: string,
  isModalOpen: boolean,
  setName: (name: string) => void,
  setIsModalOpen: (isOpen: boolean) => void,
}

const VisitorModal: React.FC<Props> = ({ name, isModalOpen, setName, setIsModalOpen }) => {
  const handleSave = () => {
    localStorage.setItem("visitorName", name);
    setIsModalOpen(false);
  };

  if (!isModalOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black opacity-100 flex items-center justify-center">
      <div className="flex flex-col bg-white p-6 rounded-lg shadow-xl w-80 z-50 gap-3">
        <h2 className="text-xl font-bold">Ingresa tu nombre</h2>
        <input
          id="visitor"
          name="visitor"
          type="text"
          value={name}
          placeholder="Tu nombre"
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <div className="flex justify-end gap-2">
          <button 
            onClick={() => setIsModalOpen(false)} 
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button 
            onClick={handleSave} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default VisitorModal
