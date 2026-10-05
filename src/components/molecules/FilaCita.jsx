import EtiquetaEstadoCita from '../atoms/EtiquetaEstadoCita';

function FilaCita({ cita, mostrarAcciones = false, onConfirmar, onProponer, onCancelar }) {
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
            <button
              type="button"
              className="btn btn-sm btn-success"
              onClick={() => onConfirmar?.(cita)}
              disabled={cita.estado === 'confirmada'}
            >
              Confirmar
            </button>
            <button
              type="button"
              className="btn btn-sm btn-warning"
              onClick={() => onProponer?.(cita)}
            >
              Proponer horario
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={() => onCancelar?.(cita)}
            >
              Rechazar
            </button>
          </div>
        </td>
      )}
    </tr>
  );
}

export default FilaCita;
