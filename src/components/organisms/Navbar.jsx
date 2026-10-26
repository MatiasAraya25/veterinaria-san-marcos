import { useState } from 'react'
import { Navbar as BsNavbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Icono from '../atoms/Icono'
import BuscadorServicios from '../molecules/BuscadorServicios'

function Navbar(props) {
  const [busqueda, setBusqueda] = useState('')

  function ir(evento, ruta) {
    evento.preventDefault()
    props.onNavegar(ruta)
  }

  function buscar(texto) {
    if (texto.trim() === '') return
    props.onBuscar(texto.trim())
    setBusqueda('')
  }

  return (
    <BsNavbar expand="lg" className="navbar-clinica mb-4">
      <Container>
        <BsNavbar.Brand href="/" onClick={(e) => ir(e, '/')}>
          <Icono simbolo="🐾" /> Veterinaria San Marcos
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="navbar-principal" />
        <BsNavbar.Collapse id="navbar-principal">
          <Nav className="me-auto">
            <Nav.Link href="/" onClick={(e) => ir(e, '/')}>Inicio</Nav.Link>
            <Nav.Link href="/servicios" onClick={(e) => ir(e, '/servicios')}>Servicios</Nav.Link>

            <NavDropdown title="Categorías" id="menu-categorias">
              <NavDropdown.Item href="/categorias" onClick={(e) => ir(e, '/categorias')}>
                Todas las categorías
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {props.categorias.map((c) => (
                <NavDropdown.Item key={c} href={`/categoria/${c}`} onClick={(e) => ir(e, `/categoria/${c}`)}>
                  {c}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link href="/solicitar-cita" onClick={(e) => ir(e, '/solicitar-cita')}>Solicitar cita</Nav.Link>
            <Nav.Link href="/mis-citas" onClick={(e) => ir(e, '/mis-citas')}>Mis citas</Nav.Link>

            <NavDropdown title="Administración" id="menu-admin">
              <NavDropdown.Item href="/admin/servicios" onClick={(e) => ir(e, '/admin/servicios')}>
                Servicios
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/citas" onClick={(e) => ir(e, '/admin/citas')}>
                Citas
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/login" onClick={(e) => ir(e, '/login')}>Iniciar sesión</Nav.Link>
          </Nav>

          <div className="mt-2 mt-lg-0">
            <BuscadorServicios
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              onBuscar={buscar}
            />
          </div>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  )
}

export default Navbar
