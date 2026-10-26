import { useState } from 'react'
import CampoFormulario from '../molecules/CampoFormulario'
import Boton from '../atoms/Boton'
import {
  validarObligatorio,
  validarCorreo,
  validarClave,
  validarConfirmacion,
  hayErrores,
} from '../../utils/validaciones'

function FormularioRegistro(props) {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [clave, setClave] = useState('')
  const [confirmacion, setConfirmacion] = useState('')
  const [errores, setErrores] = useState({})

  function enviar(e) {
    e.preventDefault()

    const nuevosErrores = {
      nombre: validarObligatorio(nombre, 'Ingresa tu nombre'),
      email: validarCorreo(email),
      clave: validarClave(clave),
      confirmacion: validarConfirmacion(clave, confirmacion),
    }
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    props.onEnviar({ nombre: nombre.trim(), email: email.trim() })
  }

  return (
    <form onSubmit={enviar} noValidate>
      <h2 className="h4 mb-3">Crear cuenta</h2>

      <CampoFormulario
        id="registro-nombre"
        etiqueta="Nombre completo"
        placeholder="Ej. Camila Rojas"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        error={errores.nombre}/>

      <CampoFormulario
        id="registro-email"
        etiqueta="Correo electrónico"
        type="email"
        placeholder="nombre@correo.cl"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errores.email}/>

      <CampoFormulario
        id="registro-clave"
        etiqueta="Contraseña"
        type="password"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
        error={errores.clave}/>

      <CampoFormulario
        id="registro-confirmacion"
        etiqueta="Repite la contraseña"
        type="password"
        value={confirmacion}
        onChange={(e) => setConfirmacion(e.target.value)}
        error={errores.confirmacion}/>

      <Boton type="submit" texto="Crear cuenta"/>
    </form>
  )
}

export default FormularioRegistro
