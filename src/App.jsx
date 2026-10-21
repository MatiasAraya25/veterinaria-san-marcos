import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import DetalleServicio from './pages/Detalle-de-servicio';
import SolicitarCita from './pages/Solicitar-cita';
import CitaConfirmada from './pages/Cita-confirmada-o-no-agendada';
import AdminCitas from './pages/Admin-citas';
import MisCitas from './pages/Mis-citas';
import { CitasProvider } from './context/CitasContext';

export default function App() { 
  return <BrowserRouter><CitasProvider><Routes>
 <Route path="/" element={<Inicio/>}/>
 <Route path="/servicios" element={<Servicios/>}/>
 <Route path="/servicios/:codigo" element={<DetalleServicio/>}/>
 <Route path="/solicitar-cita" element={<SolicitarCita/>}/>
 <Route path="/solicitar-cita/:codigo" element={<SolicitarCita/>}/>
 <Route path="/cita/:id" element={<CitaConfirmada/>}/>
 <Route path="/mis-citas" element={<MisCitas/>}/>
 <Route path="/admin/citas" element={<AdminCitas/>}/>
 <Route path="*" element={<Navigate to="/" replace/>}/>
 </Routes></CitasProvider></BrowserRouter>; 
 }