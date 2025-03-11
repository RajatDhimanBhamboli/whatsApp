import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Auth from './authenctication/Auth'
import App from './App'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  {/* <App/> */}
  <Auth/>
  </BrowserRouter>

  
)
