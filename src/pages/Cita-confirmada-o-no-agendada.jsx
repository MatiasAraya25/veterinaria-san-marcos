import { Link, useParams } from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import EtiquetaEstadoCita from '../components/atoms/EtiquetaEstadoCita';
import { useCitas } from '../context/CitasContext';

const MENSAJES = {
  pendiente: { clase: 'alert-info', titulo: 'Solicitud recibida', texto: 'La recepcionista revisará tu solicitud y la confirmará.' },
  confirmada: { clase: 'alert-success', titulo: '¡Cita confirmada!', texto: 'Te esperamos en el horario indicado.' },
  reprogramada: { clase: 'alert-warning', titulo: 'Te proponemos otro horario', texto: 'Revisa el nuevo horario propuesto.' },
  rechazada: { clase: 'alert-danger', titulo: 'Cita no agendada', texto: 'No pudimos agendar tu cita. Puedes solicitar otro horario.' },
  cancelada: { clase: 'alert-danger', titulo: 'Cita no agendada', texto: 'Esta cita fue cancelada. Puedes solicitar una nueva.' },
};

function CitaConfirmada() {
  const { id } = useParams();
  const { obtener } = useCitas();
  const cita = obtener(Number(id));

  if (!cita) {
    return (
      <PlantillaPublica>
        <div className="alert alert-warning">No encontramos esa cita.</div>
        <Link to="/solicitar-cita" className="btn btn-primary">Solicitar cita</Link>
      </PlantillaPublica>
    );
  }

  const mensaje = MENSAJES[cita.estado] ?? MENSAJES.pendiente;
  const sinAgendar = cita.estado === 'rechazada' || cita.estado === 'cancelada';

  return (
    <PlantillaPublica>
      <div className={`alert ${mensaje.clase}`}>
        <h2 className="h4">{mensaje.titulo}</h2>
        <p className="mb-0">{mensaje.texto}</p>
      </div>

      <div className="card">
        <div className="card-body">
          <h3 className="h5">Detalle de tu cita</h3>
          <ul className="list-unstyled mb-3">
            <li><strong>Mascota:</strong> {cita.mascota}</li>
            <li><strong>Servicio:</strong> {cita.servicio}</li>
            <li><strong>Fecha:</strong> {cita.fecha}</li>
            <li><strong>Hora:</strong> {cita.hora}</li>
            <li><strong>Estado:</strong> <EtiquetaEstadoCita estado={cita.estado} /></li>
          </ul>
          <Link to="/" className="btn btn-outline-primary me-2">Volver al inicio</Link>
          {sinAgendar && (
            <Link to="/solicitar-cita" className="btn btn-primary">Solicitar otra cita</Link>
          )}
        </div>
      </div>
    </PlantillaPublica>
  );
}

export default CitaConfirmada;
