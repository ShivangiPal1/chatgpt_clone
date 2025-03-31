import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './SignUpPage.css'
import App from './App.jsx'
import './chatbot.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
