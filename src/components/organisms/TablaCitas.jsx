import FilaCita from '../molecules/FilaCita';
function TablaCitas({ citas = [], onConfirmar, onProponer, onCancelar }) {
  if (!citas.length) return <div className="alert alert-info">No hay solicitudes de citas registradas.</div>;
  return <div className="table-responsive"><table className="table table-striped table-hover align-middle"><thead className="table-dark"><tr><th>ID</th><th>Mascota</th><th>Servicio</th><th>Fecha</th><th>Hora</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>{citas.map(c=><FilaCita key={c.id} cita={c} mostrarAcciones onConfirmar={onConfirmar} onProponer={onProponer} onCancelar={onCancelar}/>)}</tbody></table></div>;
}
export default TablaCitas;