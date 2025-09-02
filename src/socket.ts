import { io } from "socket.io-client";

// URL del backend (puedes mover a .env en producción)
const socket = io("http://localhost:3001");

export default socket;
