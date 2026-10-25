import Boton from '../atoms/Boton'
import EtiquetaEspecie from '../atoms/EtiquetaEspecie'
import { formatoCLP } from '../../utils/formato'

function TablaServicios(props) {
  if (props.servicios.length === 0) {
    return <p className="text-muted">No hay servicios registrados.</p>
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead className="tabla-encabezado">
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Nombre</th>
            <th scope="col">Categoría</th>
            <th scope="col">Especie</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {props.servicios.map((s) => (
            <tr key={s.codigo}>
              <td>{s.codigo}</td>
              <td>{s.nombre}</td>
              <td>{s.categoria}</td>
              <td>
                <EtiquetaEspecie especie={s.especie}/>
              </td>
              <td>{formatoCLP(s.precio)}</td>
              <td>
                <div className="d-flex gap-2">
                  <Boton texto="Editar" variante="outline-primary" onClick={() => props.onEditar(s)}/>
                  <Boton texto="Eliminar" variante="outline-danger" onClick={() => props.onEliminar(s)}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablaServicios
