import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import PlantillaAdmin from '../components/templates/PlantillaAdmin'
import FormularioServicio from '../components/organisms/FormularioServicio'
import TablaServicios from '../components/organisms/TablaServicios'
import Boton from '../components/atoms/Boton'
import { useServicios } from '../context/ServiciosContext'
import { useTituloPagina } from '../hooks/useTituloPagina'

export default function AdminServicios() {
  const { servicios, crear, actualizar, eliminar } = useServicios()
  const [enEdicion, setEnEdicion] = useState(null)
  const [porEliminar, setPorEliminar] = useState(null)
  const [mensaje, setMensaje] = useState('')
  const [guardados, setGuardados] = useState(0) 

  useTituloPagina('Admin: servicios')

  function guardar(datos) {
    if (enEdicion) {
      actualizar(enEdicion.codigo, datos)
      setMensaje(`Servicio "${datos.nombre}" actualizado.`)
      setEnEdicion(null)
    } else {
      crear(datos)
      setMensaje(`Servicio "${datos.nombre}" creado.`)
    }
    setGuardados(guardados + 1)
  }

  function confirmarEliminacion() {
    eliminar(porEliminar.codigo)
    setMensaje(`Servicio "${porEliminar.nombre}" eliminado.`)
    if (enEdicion && enEdicion.codigo === porEliminar.codigo) setEnEdicion(null)
    setPorEliminar(null)
  }


  const claveFormulario = enEdicion ? `editar-${enEdicion.codigo}` : `nuevo-${guardados}`

  return (
    <PlantillaAdmin>
      <h1 className="mb-4">Administrar servicios</h1>

      {mensaje && <div className="alert alert-success">{mensaje}</div>}

      {porEliminar && (
        <div className="alert alert-warning">
          <p>¿Seguro que quieres eliminar "{porEliminar.nombre}"? Esta acción no se puede deshacer.</p>
          <div className="d-flex gap-2">
            <Boton texto="Sí, eliminar" variante="danger" onClick={confirmarEliminacion} />
            <Boton texto="Cancelar" variante="secondary" onClick={() => setPorEliminar(null)}/>
          </div>
        </div>
      )}

      <Row className="g-4">
        <Col xs={12} lg={5}>
          <FormularioServicio
            key={claveFormulario}
            servicio={enEdicion}
            codigosExistentes={servicios.map((s) => s.codigo)}
            onSubmit={guardar}
            onCancelar={enEdicion ? () => setEnEdicion(null) : undefined}
          />
        </Col>
        <Col xs={12} lg={7}>
          <TablaServicios servicios={servicios} onEditar={setEnEdicion} onEliminar={setPorEliminar}/>
        </Col>
      </Row>
    </PlantillaAdmin>
  )
}
