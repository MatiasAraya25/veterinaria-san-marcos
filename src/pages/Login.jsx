import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import PlantillaPublica from '../components/templates/PlantillaPublica'
import FormularioLogin from '../components/organisms/FormularioLogin'
import FormularioRegistro from '../components/organisms/FormularioRegistro'
import Icono from '../components/atoms/Icono'
import { useTituloPagina } from '../hooks/useTituloPagina'

export default function Login() {
  const navigate = useNavigate()
  const [mensaje, setMensaje] = useState('')
  const [usuario, setUsuario] = useState(null) 

  useTituloPagina('Login y registro')

  function alIngresar(datos) {
    setUsuario(datos.email) 
  }

  useEffect(() => {
    if (!usuario) return
    const temporizador = setTimeout(() => navigate('/servicios'), 1800)
    return () => clearTimeout(temporizador) 
  }, [usuario, navigate])

  function alRegistrar(datos) {
    setMensaje(`Cuenta creada para ${datos.nombre}. Ahora puedes iniciar sesión.`)
  }

  return (
    <PlantillaPublica>
      {usuario && (
        <div className="bienvenida" role="status">
          <Icono simbolo="✅" clase="bienvenida-icono"/>
          <p className="bienvenida-texto">¡Bienvenido, {usuario}! 🐾</p>
        </div>
      )}

      <h1 className="mb-4">Login y registro</h1>

      {mensaje && <div className="alert alert-success">{mensaje}</div>}

      <Row className="g-4">
        <Col xs={12} md={6}>
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <FormularioLogin onEnviar={alIngresar}/>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <FormularioRegistro onEnviar={alRegistrar}/>
            </div>
          </div>
        </Col>
      </Row>
    </PlantillaPublica>
  )
}
