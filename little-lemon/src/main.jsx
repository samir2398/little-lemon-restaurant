import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/login/Login.jsx'
import FormLayout from './components/layout/FormLayout.jsx'
import Reserve from './components/reserve/Reserve.jsx'
import Checkout from './components/checkout/Checkout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<App />} />
        <Route path='/form' element={<FormLayout />}>
            <Route path='login' element={<Login />} />
            <Route path='reserve' element={<Reserve />} />
            <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
