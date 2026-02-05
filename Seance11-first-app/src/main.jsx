import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App.jsx'
import NewComponent from './Components/NewComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <NewComponent/>
  </StrictMode>,
)
