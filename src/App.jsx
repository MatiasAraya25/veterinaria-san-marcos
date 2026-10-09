import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import DetalleServicio from './pages/DetalleServicio'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/:codigo" element={<DetalleServicio />} />
      </Routes>
    </BrowserRouter>
  )
}