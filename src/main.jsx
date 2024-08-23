import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TemperatureInput from './Temperature/TemperatureInput'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TemperatureInput/>
  </StrictMode>,
)
