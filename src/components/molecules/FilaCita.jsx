import Boton from '../atoms/Boton';
import EtiquetaEstadoCita from '../atoms/EtiquetaEstadoCita';

function FilaCita({
  cita,
  mostrarAcciones = false,
  onConfirmar,
  onProponer,
  onCancelar,
}) {
  return (
    <tr>
      <td>{cita.id}</td>
      <td>{cita.mascota}</td>
      <td>{cita.servicio}</td>
      <td>{cita.fecha}</td>
      <td>{cita.hora}</td>

      <td>
        <EtiquetaEstadoCita estado={cita.estado} />
      </td>

      {mostrarAcciones && (
        <td>
          <div className="d-flex gap-2 flex-wrap">
            <Boton
              texto="Confirmar"
              variante="success"
              onClick={() => onConfirmar?.(cita)}
              disabled={cita.estado === 'confirmada'}
            />

            <Boton
              texto="Proponer horario"
              variante="warning"
              onClick={() => onProponer?.(cita)}
            />

            <Boton
              texto="Rechazar"
              variante="outline-danger"
              onClick={() => onCancelar?.(cita)}
            />
          </div>
        </td>
      )}
    </tr>
  );
}

export default FilaCita;
