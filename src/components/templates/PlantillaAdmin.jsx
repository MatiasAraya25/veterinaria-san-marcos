import { useNavigate } from 'react-router-dom'
import Navbar from '../organisms/Navbar'
import Footer from '../organisms/Footer'
import { categorias } from '../../data/categorias'

function PlantillaAdmin(props) {
  const navigate = useNavigate()

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        categorias={categorias}
        onNavegar={navigate}
        onBuscar={(texto) => navigate(`/buscar/${encodeURIComponent(texto)}`)}/>
      <main className="container flex-grow-1 py-4">
        <p className="etiqueta-admin">Panel de administración</p>
        {props.children}
      </main>
      <Footer/>
    </div>
  )
}

export default PlantillaAdmin
