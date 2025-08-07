import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FoodState from './context/FoodContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FoodState>
      <App />
    </FoodState>
  </StrictMode>
)
