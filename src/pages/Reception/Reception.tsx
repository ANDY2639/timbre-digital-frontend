import type { Log } from "../../context/base/BaseContext";
import DoorbellIcon from "../../components/Icons/DoorbellIcon";
import { cn } from "clsx-for-tailwind";

type Props = {
  logs: Log[];
  isAudioActive: boolean;
}

const Reception: React.FC<Props> = ({ logs, isAudioActive }) => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-2xl font-bold">📡 Recepción</h1>
        <p className={cn("flex flex-col justify-center items-center", "text-sm font-medium", { 'text-green-600': isAudioActive, 'text-gray-500': !isAudioActive })}>
          <DoorbellIcon width={20} height={20} />
          {isAudioActive ? 'Audio Activo' : 'Audio Inactivo'}
        </p>
      </div>
      <p className="text-gray-500 mb-2">
        {isAudioActive 
          ? "El timbre está habilitado y funcionando 🔔" 
          : "Haz click en cualquier parte de la página para habilitar el timbre 🔔"
        }
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
