import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BaseContextProvider from './context/base/BaseProvider.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BaseContextProvider>
      <App />
    </BaseContextProvider>
  </StrictMode>,
)
