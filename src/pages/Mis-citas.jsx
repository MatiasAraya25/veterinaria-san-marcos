import { useNavigate } from 'react-router-dom'
import PlantillaPublica from '../components/templates/PlantillaPublica'
import ListaMisCitas from '../components/organisms/ListaMisCitas'
import { listarCitas } from '../data/citas'

export default function MisCitas() {
  const navigate = useNavigate()
  const citas = listarCitas()

  return (
    <PlantillaPublica>
      <h1 className="mb-4">Mis citas</h1>
      <ListaMisCitas
        citas={citas}
        onSolicitar={() => navigate('/solicitar-cita')}
      />
    </PlantillaPublica>
  )
}