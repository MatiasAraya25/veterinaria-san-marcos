import FilaCita from '../molecules/FilaCita';

function TablaCitas({ citas = [], onConfirmar, onProponer, onCancelar }) {
  return (
    <section aria-labelledby="titulo-tabla-citas">
      <h2 id="titulo-tabla-citas" className="h4 mb-3">Citas solicitadas</h2>

      {citas.length === 0 ? (
        <div className="alert alert-info">No hay solicitudes de citas registradas.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <caption className="visually-hidden">
              Citas solicitadas con acciones para confirmar, proponer otro horario o rechazar
            </caption>
            <thead className="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Mascota</th>
                <th scope="col">Servicio</th>
                <th scope="col">Fecha</th>
                <th scope="col">Hora</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita) => (
                <FilaCita
                  key={cita.id}
                  cita={cita}
                  mostrarAcciones
                  onConfirmar={onConfirmar}
                  onProponer={onProponer}
                  onCancelar={onCancelar}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default TablaCitas;