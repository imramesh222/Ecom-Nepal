import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Myroute from './Myroute.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Myroute/>
  </StrictMode>
)
