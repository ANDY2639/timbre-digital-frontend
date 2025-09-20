# Timbre Digital Frontend

## English

### Overview
**Timbre Digital** is a modern digital doorbell application built with React, TypeScript, and Socket.IO. This frontend application provides a seamless experience for visitors to announce their arrival and for reception staff to receive notifications in real-time.

### Features
- **Digital Doorbell Interface**: Clean, intuitive interface for visitors to ring the doorbell
- **Real-time Notifications**: Instant audio and visual notifications using WebSocket connections
- **Visitor Registration**: Modal system for visitors to enter their name before ringing
- **Reception Dashboard**: Administrative interface to monitor all doorbell events
- **Audio Feedback**: Automatic doorbell sound when visitors ring (with user interaction requirement)
- **Event Logging**: Complete history of all doorbell events with timestamps
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS

### Technology Stack
- **Frontend Framework**: React 19 with TypeScript
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4
- **Real-time Communication**: Socket.IO Client
- **Build Tool**: Vite
- **State Management**: React Context API
- **Audio**: HTML5 Audio API

### Project Structure
```
src/
├── components/
│   └── Icons/
│       └── DoorbellIcon.tsx      # Custom doorbell SVG icon
├── context/
│   └── base/                     # Global state management
├── pages/
│   ├── Ring/                     # Visitor doorbell interface
│   │   └── components/
│   │       └── VisitorModal/     # Name input modal
│   └── Reception/                # Admin dashboard
├── config/
│   └── index.ts                  # Application configuration
└── socket.ts                     # Socket.IO client setup
```

### Key Components
1. **Ring Page** (`/`): Main doorbell interface where visitors can announce their arrival
2. **Reception Page** (`/reception`): Administrative dashboard showing event logs and audio status
3. **Visitor Modal**: Modal for visitors to enter their name before ringing
4. **Socket Integration**: Real-time communication with backend server

### Getting Started

#### Prerequisites
- Node.js (v18 or higher)
- pnpm package manager

#### Installation
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

#### Environment Variables
Create a `.env` file in the root directory:
```
VITE_WS_URL=ws://localhost:4000
```

### Usage
1. **For Visitors**: Navigate to the home page (`/`) and click the doorbell button
2. **For Reception**: Navigate to `/reception` to monitor incoming visitors and events
3. **Audio Setup**: Click anywhere on the reception page to enable audio notifications

---

## Español

### Descripción General
**Timbre Digital** es una aplicación moderna de timbre digital construida con React, TypeScript y Socket.IO. Esta aplicación frontend proporciona una experiencia fluida para que los visitantes anuncien su llegada y para que el personal de recepción reciba notificaciones en tiempo real.

### Características
- **Interfaz de Timbre Digital**: Interfaz limpia e intuitiva para que los visitantes toquen el timbre
- **Notificaciones en Tiempo Real**: Notificaciones instantáneas de audio y visuales usando conexiones WebSocket
- **Registro de Visitantes**: Sistema modal para que los visitantes ingresen su nombre antes de tocar el timbre
- **Panel de Recepción**: Interfaz administrativa para monitorear todos los eventos del timbre
- **Retroalimentación de Audio**: Sonido automático del timbre cuando los visitantes tocan (requiere interacción del usuario)
- **Registro de Eventos**: Historial completo de todos los eventos del timbre con marcas de tiempo
- **Diseño Responsivo**: Interfaz compatible con dispositivos móviles construida con Tailwind CSS

### Stack Tecnológico
- **Framework Frontend**: React 19 con TypeScript
- **Enrutamiento**: React Router DOM v7
- **Estilos**: Tailwind CSS v4
- **Comunicación en Tiempo Real**: Socket.IO Client
- **Herramienta de Construcción**: Vite
- **Gestión de Estado**: React Context API
- **Audio**: HTML5 Audio API

### Estructura del Proyecto
```
src/
├── components/
│   └── Icons/
│       └── DoorbellIcon.tsx      # Icono SVG personalizado del timbre
├── context/
│   └── base/                     # Gestión de estado global
├── pages/
│   ├── Ring/                     # Interfaz del timbre para visitantes
│   │   └── components/
│   │       └── VisitorModal/     # Modal de entrada de nombre
│   └── Reception/                # Panel de administración
├── config/
│   └── index.ts                  # Configuración de la aplicación
└── socket.ts                     # Configuración del cliente Socket.IO
```

### Componentes Principales
1. **Página Ring** (`/`): Interfaz principal del timbre donde los visitantes pueden anunciar su llegada
2. **Página Reception** (`/reception`): Panel administrativo que muestra registros de eventos y estado de audio
3. **Modal de Visitante**: Modal para que los visitantes ingresen su nombre antes de tocar el timbre
4. **Integración Socket**: Comunicación en tiempo real con el servidor backend

### Comenzando

#### Prerrequisitos
- Node.js (v18 o superior)
- Gestor de paquetes pnpm

#### Instalación
```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build
```

#### Variables de Entorno
Crea un archivo `.env` en el directorio raíz:
```
VITE_WS_URL=ws://localhost:4000
```

### Uso
1. **Para Visitantes**: Navega a la página principal (`/`) y haz clic en el botón del timbre
2. **Para Recepción**: Navega a `/reception` para monitorear visitantes entrantes y eventos
3. **Configuración de Audio**: Haz clic en cualquier parte de la página de recepción para habilitar las notificaciones de audio

### Funcionalidad Técnica
- **Gestión de Estado**: Utiliza React Context para manejar el estado global de la aplicación
- **Persistencia**: Los nombres de visitantes se guardan en localStorage
- **Audio**: Requiere interacción del usuario para habilitar la reproducción de audio (política del navegador)
- **Tiempo Real**: Comunicación bidireccional con el servidor backend usando Socket.IO
- **Responsive**: Diseño adaptativo que funciona en dispositivos móviles y de escritorio
