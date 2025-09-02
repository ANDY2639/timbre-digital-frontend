import type { Log } from "../../context/base/BaseContext";

type Props = {
  logs: Log[];
}

const Reception: React.FC<Props> = ({ logs }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📡 Recepción</h1>
      <p className="text-gray-500 mb-2">
        Haz click en cualquier parte de la página para habilitar el timbre 🔔
      </p>
      <ul className="space-y-2">
        {logs.map((log) => (
          <li key={`log-${log.date.getTime()}`} className="bg-gray-200 p-2 rounded">
            {log.message} - {log.date.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reception;
