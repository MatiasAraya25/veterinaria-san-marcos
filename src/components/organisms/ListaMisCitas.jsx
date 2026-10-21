import FilaCita from '../molecules/FilaCita';
import Boton from '../atoms/Boton';

function ListaMisCitas({ citas = [], onSolicitar }) {
  return (
    <section aria-labelledby="titulo-mis-citas">
      <h2 id="titulo-mis-citas" className="h4 mb-3">Mis citas</h2>

      {citas.length === 0 ? (
        <div className="alert alert-info">
          <p className="mb-2">Aún no tienes citas solicitadas.</p>
          {onSolicitar && <Boton texto="Solicitar cita" onClick={onSolicitar} />}
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <caption className="visually-hidden">Listado de tus citas y su estado</caption>
            <thead>
              <tr>
                <th scope="col">N°</th>
                <th scope="col">Mascota</th>
                <th scope="col">Servicio</th>
                <th scope="col">Fecha</th>
                <th scope="col">Hora</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita) => (
                <FilaCita key={cita.id} cita={cita} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default ListaMisCitas;