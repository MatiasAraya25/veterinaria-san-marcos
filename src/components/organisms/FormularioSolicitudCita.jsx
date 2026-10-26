import { useState } from 'react'
import CampoFormulario from '../molecules/CampoFormulario'
import SelectorFechaHora from '../molecules/SelectorFechaHora'
import Selector from '../atoms/Selector'
import Boton from '../atoms/Boton'
import { validarObligatorio, hayErrores } from '../../utils/validaciones'
import { esUrgencia, calcularPrecioCita, RECARGO_URGENCIA, HORAS_URGENCIA } from '../../utils/precios'
import { formatoCLP } from '../../utils/formato'


function FormularioSolicitudCita(props) {

  const elegido = props.servicios.find((s) => s.codigo === props.codigoInicial)

  const [mascota, setMascota] = useState('')
  const [nombreServicio, setNombreServicio] = useState(elegido ? elegido.nombre : '')
  const [fechaHora, setFechaHora] = useState({ fecha: '', hora: '' })
  const [errores, setErrores] = useState({})

  const servicio = props.servicios.find((s) => s.nombre === nombreServicio)
  const urgencia = servicio ? esUrgencia(servicio) : false

  function cambiarServicio(e) {
    setNombreServicio(e.target.value)
    setFechaHora({ fecha: fechaHora.fecha, hora: '' })
  }

  function enviar(e) {
    e.preventDefault()

    const nuevosErrores = {
      mascota: validarObligatorio(mascota, 'Ingresa el nombre de tu mascota'),
      servicio: validarObligatorio(nombreServicio, 'Selecciona un servicio'),
      fecha: validarObligatorio(fechaHora.fecha, 'Selecciona una fecha'),
      hora: validarObligatorio(fechaHora.hora, 'Selecciona una hora'),
    }
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    props.onEnviar({
      mascota: mascota.trim(),
      servicio: servicio.nombre,
      codigoServicio: servicio.codigo,
      fecha: fechaHora.fecha,
      hora: fechaHora.hora,
      precio: calcularPrecioCita(servicio, fechaHora.hora),
    })
  }

  return (
    <form onSubmit={enviar} noValidate className="card shadow-sm">
      <div className="card-body">
        <CampoFormulario
          id="cita-mascota"
          etiqueta="Nombre de la mascota"
          placeholder="Ej. Luna"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
          error={errores.mascota}/>

        <CampoFormulario id="cita-servicio" etiqueta="Servicio" error={errores.servicio}>
          <Selector
            id="cita-servicio"
            placeholder="Selecciona un servicio"
            opciones={props.servicios.map((s) => s.nombre)}
            value={nombreServicio}
            onChange={cambiarServicio}
            invalido={errores.servicio ? true : false}/>
        </CampoFormulario>

        <SelectorFechaHora
          fecha={fechaHora.fecha}
          hora={fechaHora.hora}
          onChange={setFechaHora}
          horasDisponibles={urgencia ? HORAS_URGENCIA : undefined}
        />
        {errores.fecha && <small className="error-msg">{errores.fecha}</small>}
        {errores.hora && <small className="error-msg">{errores.hora}</small>}

        {servicio && (
          <div className="resumen-precio">
            <p className="mb-1">
              Total a pagar: <strong>{formatoCLP(calcularPrecioCita(servicio, fechaHora.hora))}</strong>
            </p>
            {urgencia && (
              <small>
                Las urgencias desde las 19:00 tienen un recargo de {formatoCLP(RECARGO_URGENCIA)}.
              </small>
            )}
          </div>
        )}

        <Boton type="submit" texto="Enviar solicitud"/>
      </div>
    </form>
  )
}

export default FormularioSolicitudCita
