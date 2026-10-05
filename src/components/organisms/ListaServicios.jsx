import TarjetaServicio from '../molecules/TarjetaServicio';

function ListaServicios({ servicios = [], onSolicitar }) {
  return (
    <section aria-labelledby="titulo-servicios">
      <h2 id="titulo-servicios" className="h4 mb-3">Nuestros servicios</h2>

      {servicios.length === 0 ? (
        <p className="text-muted">No hay servicios disponibles.</p>
      ) : (
        <div className="row g-3">
          {servicios.map((servicio) => (
            <div key={servicio.codigo} className="col-12 col-md-6 col-lg-4">
              <TarjetaServicio servicio={servicio} onSolicitar={onSolicitar} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ListaServicios;