import { useState } from 'react'
import CampoFormulario from '../molecules/CampoFormulario'
import Boton from '../atoms/Boton'
import { validarCorreo, validarClave, hayErrores } from '../../utils/validaciones'

function FormularioLogin(props) {
  const [email, setEmail] = useState('')
  const [clave, setClave] = useState('')
  const [errores, setErrores] = useState({})

  function enviar(e) {
    e.preventDefault()

    const nuevosErrores = {
      email: validarCorreo(email),
      clave: validarClave(clave),
    }
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    props.onEnviar({ email: email.trim() })
  }

  return (
    <form onSubmit={enviar} noValidate>
      <h2 className="h4 mb-3">Iniciar sesión</h2>

      <CampoFormulario
        id="login-email"
        etiqueta="Correo electrónico"
        type="email"
        placeholder="nombre@correo.cl"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errores.email}/>

      <CampoFormulario
        id="login-clave"
        etiqueta="Contraseña"
        type="password"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
        error={errores.clave}/>

      <Boton type="submit" texto="Ingresar"/>
    </form>
  )
}

export default FormularioLogin
