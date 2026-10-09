import EtiquetaEspecie from '../atoms/EtiquetaEspecie';
import Boton from '../atoms/Boton';
import { formatoCLP } from '../../utils/formato';

function TarjetaServicio({ servicio, onSolicitar, onVerDetalle  }) {
  const { codigo, categoria, nombre, especie, duracion, precio, observaciones } = servicio;

  return (
    <article className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <header className="d-flex justify-content-between align-items-start mb-2">
          <p className="text-muted small mb-0">{categoria}</p>
          <EtiquetaEspecie especie={especie} />
        </header>

        <h3 className="card-title h5">
          <a
            href={`/servicios/${codigo}`}
            className="text-reset text-decoration-none"
            onClick={(e) => {
              e.preventDefault()
              onVerDetalle?.(codigo)
            }}
         >
            {nombre}
          </a>
        </h3>

        <dl className="d-flex gap-2 mb-1">
          <dt className="fw-normal">Duración:</dt>
          <dd className="mb-0">{duracion}</dd>
        </dl>

        {observaciones && (
          <p className="card-text small text-muted">{observaciones}</p>
        )}

        <footer className="mt-auto pt-3 d-flex justify-content-between align-items-center">
          <data value={precio} className="fw-bold fs-5">
            {formatoCLP(precio)}
          </data>
          <Boton texto="Solicitar cita" onClick={() => onSolicitar?.(codigo)} />
        </footer>
      </div>
    </article>
  );
}

export default TarjetaServicio;