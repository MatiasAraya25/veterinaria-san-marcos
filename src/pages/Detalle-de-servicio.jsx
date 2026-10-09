import { useNavigate, useParams } from 'react-router-dom'
import { PlantillaPublica } from '../components/templates/PlantillaPublica/PlantillaPublica'
import EtiquetaEspecie from '../components/atoms/EtiquetaEspecie'
import Boton from '../components/atoms/Boton'
import { servicios } from '../data/servicios'
import { formatoCLP } from '../utils/formato'

export default function DetalleServicio() {
  const navigate = useNavigate()
  const params = useParams()
  const servicio = servicios.find((s) => s.codigo === params.codigo)

  function ir(evento, ruta) {
    evento.preventDefault()
    navigate(ruta)
  }

  if (!servicio) {
    return (
      <PlantillaPublica>
        <h1 className="h3">Servicio no encontrado</h1>
        <p>No existe un servicio con el código "{params.codigo}".</p>
        <Boton texto="Ir a servicios" onClick={() => navigate('/servicios')} />
      </PlantillaPublica>
    )
  }

  const { codigo, categoria, nombre, especie, duracion, precio, observaciones } = servicio

  return (
    <PlantillaPublica>
      <nav aria-label="Ruta de navegación">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" onClick={(e) => ir(e, '/')}>Inicio</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/servicios" onClick={(e) => ir(e, '/servicios')}>Servicios</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">{nombre}</li>
        </ol>
      </nav>

      <article className="card shadow-sm">
        <div className="card-body">
          <header className="d-flex justify-content-between align-items-start mb-3">
            <p className="text-muted mb-0">{categoria}</p>
            <EtiquetaEspecie especie={especie} />
          </header>

          <h1 className="h2">{nombre}</h1>

          <dl className="row mt-3">
            <dt className="col-sm-3">Código</dt>
            <dd className="col-sm-9">{codigo}</dd>
            <dt className="col-sm-3">Duración</dt>
            <dd className="col-sm-9">{duracion}</dd>
            <dt className="col-sm-3">Precio</dt>
            <dd className="col-sm-9">
              <data value={precio} className="fw-bold">{formatoCLP(precio)}</data>
            </dd>
            {observaciones && (
              <>
                <dt className="col-sm-3">Observaciones</dt>
                <dd className="col-sm-9">{observaciones}</dd>
              </>
            )}
          </dl>

          <footer className="d-flex gap-2">
            <Boton texto="Solicitar cita" onClick={() => navigate(`/solicitar-cita/${codigo}`)} />
            <Boton texto="Volver" variante="outline-secondary" onClick={() => navigate(-1)} />
          </footer>
        </div>
      </article>
    </PlantillaPublica>
  )
}