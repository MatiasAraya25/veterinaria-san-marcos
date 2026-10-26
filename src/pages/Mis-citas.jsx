import { useNavigate } from 'react-router-dom'
import PlantillaPublica from '../components/templates/PlantillaPublica'
import ListaMisCitas from '../components/organisms/ListaMisCitas'
import { useCitas } from '../context/CitasContext'

export default function MisCitas() {
  const navigate = useNavigate()
  const { citas } = useCitas()

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