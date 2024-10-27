import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyles'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <GlobalStyle/>
  <RouterProvider router={router}/>
  </StrictMode>,
)
