import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Components //
import InfoSection from './components/InfoSection'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InfoSection/>
  </StrictMode>,
)
