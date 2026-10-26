import { useNavigate, useParams } from 'react-router-dom'
import PlantillaPublica from '../components/templates/PlantillaPublica'
import ListaServicios from '../components/organisms/ListaServicios'
import Boton from '../components/atoms/Boton'
import { categorias } from '../data/categorias'
import { useServicios } from '../context/ServiciosContext'
import { useTituloPagina } from '../hooks/useTituloPagina'


export default function Categorias() {
  const navigate = useNavigate()
  const params = useParams()
  const { servicios } = useServicios()

  let visibles = servicios
  let titulo = 'Categorías de servicios'

  if (params.nombre) {
    visibles = servicios.filter((s) => s.categoria === params.nombre)
    titulo = params.nombre
  }
  if (params.texto) {
    const buscado = params.texto.toLowerCase()
    visibles = servicios.filter((s) => s.nombre.toLowerCase().includes(buscado))
    titulo = `Resultados para "${params.texto}"`
  }

  useTituloPagina(titulo)

  return (
    <PlantillaPublica>
      <h1 className="mb-4">{titulo}</h1>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {categorias.map((c) => (
          <Boton
            key={c}
            texto={c}
            variante={c === params.nombre ? 'primary' : 'outline-primary'}
            onClick={() => navigate(`/categoria/${c}`)}/>
        ))}
      </div>

      <ListaServicios
        servicios={visibles}
        onSolicitar={(codigo) => navigate(`/solicitar-cita/${codigo}`)}
        onVerDetalle={(codigo) => navigate(`/servicios/${codigo}`)}/>
    </PlantillaPublica>
  )
}
