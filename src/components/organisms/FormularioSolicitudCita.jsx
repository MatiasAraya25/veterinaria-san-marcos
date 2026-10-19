import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { servicios } from '../../data/servicios';
import CampoFormulario from '../molecules/CampoFormulario';
import SelectorFechaHora from '../molecules/SelectorFechaHora';
function FormularioSolicitudCita({ onSubmit }) {
  const { codigo } = useParams(); const navigate = useNavigate();
  const [mascota, setMascota] = useState(''); const [servicio, setServicio] = useState(codigo || '');
  const [fechaHora, setFechaHora] = useState({ fecha: '', hora: '' }); const [error, setError] = useState('');
  function enviar(e) { e.preventDefault(); if (!mascota.trim() || !servicio || !fechaHora.fecha || !fechaHora.hora) { setError('Completa todos los campos para solicitar la cita.'); return; }
    const seleccionado = servicios.find(s => s.codigo === servicio); const nueva = onSubmit?.({ mascota: mascota.trim(), servicio: seleccionado?.nombre || servicio, codigoServicio: servicio, ...fechaHora }); if (nueva?.id) navigate(`/cita/${nueva.id}`);
  }
  return <form onSubmit={enviar} className="card shadow-sm"><div className="card-body">
    <CampoFormulario etiqueta="Nombre de la mascota"><input className="form-control" value={mascota} onChange={e=>setMascota(e.target.value)} placeholder="Ej. Luna" /></CampoFormulario>
    <CampoFormulario etiqueta="Servicio"><select className="form-select" value={servicio} onChange={e=>setServicio(e.target.value)}><option value="">Selecciona un servicio</option>{servicios.map(s=><option key={s.codigo} value={s.codigo}>{s.nombre}</option>)}</select></CampoFormulario>
    <SelectorFechaHora fecha={fechaHora.fecha} hora={fechaHora.hora} onChange={setFechaHora} />
    {error && <div className="alert alert-danger" role="alert">{error}</div>}
    <button className="btn btn-primary" type="submit">Enviar solicitud</button>
  </div></form>;
}
export default FormularioSolicitudCita;
