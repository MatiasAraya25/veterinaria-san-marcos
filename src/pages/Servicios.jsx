import { useNavigate } from 'react-router-dom'
import { PlantillaPublica } from '../components/templates/PlantillaPublica/PlantillaPublica'
import ListaServicios from '../components/organisms/ListaServicios'
import { servicios } from '../data/servicios'

export default function Servicios() {
  const navigate = useNavigate()

  return (
    <PlantillaPublica>
      <h1 className="mb-4">Servicios Veterinaria San Marcos</h1>
      <ListaServicios
        servicios={servicios}
        onSolicitar={(codigo) => navigate(`/solicitar-cita/${codigo}`)}
        onVerDetalle={(codigo) => navigate(`/servicios/${codigo}`)}
      />
    </PlantillaPublica>
  )
}