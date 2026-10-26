import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import DetalleServicio from './pages/Detalle-de-servicio'
import Categorias from './pages/Categorias'
import SolicitarCita from './pages/Solicitar-cita'
import CitaConfirmada from './pages/Cita-confirmada-o-no-agendada'
import AdminCitas from './pages/Admin-citas'
import AdminServicios from './pages/AdminServicios'
import MisCitas from './pages/Mis-citas'
import Login from './pages/Login'
import { CitasProvider } from './context/CitasContext'
import { ServiciosProvider } from './context/ServiciosContext'

export default function App() {
  return (
    <BrowserRouter>
      <ServiciosProvider>
        <CitasProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicios/:codigo" element={<DetalleServicio />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/categoria/:nombre" element={<Categorias />} />
            <Route path="/buscar/:texto" element={<Categorias />} />
            <Route path="/solicitar-cita" element={<SolicitarCita />} />
            <Route path="/solicitar-cita/:codigo" element={<SolicitarCita />} />
            <Route path="/cita/:id" element={<CitaConfirmada />} />
            <Route path="/mis-citas" element={<MisCitas />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/servicios" element={<AdminServicios />} />
            <Route path="/admin/citas" element={<AdminCitas />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </CitasProvider>
      </ServiciosProvider>
    </BrowserRouter>
  )
}
