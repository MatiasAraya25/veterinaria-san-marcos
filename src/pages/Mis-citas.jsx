<<<<<<< HEAD
import { Link } from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import EtiquetaEstadoCita from '../components/atoms/EtiquetaEstadoCita';
import { useCitas } from '../context/CitasContext';

function MisCitas() {
    const { citas } = useCitas(); 
    return <PlantillaPublica>
        <h1 className="mb-4">Mis citas</h1>
        <p className="text-muted">En esta versión de demostración se muestran las citas guardadas en este navegador.</p>{!citas.length ? 
        <div className="alert alert-info">Todavía no hay citas. 
        <Link to="/solicitar-cita">Solicita la primera aquí.</Link>
        </div> : <div className="table-responsive">
            <table className="table table-striped">
                <thead><tr><th>N.º</th>
                <th>Mascota</th><th>Servicio</th>
                <th>Fecha</th><th>Hora</th>
                <th>Estado</th>
                </tr></thead>
                <tbody>{citas.map(c=><tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.mascota}</td>
                    <td>{c.servicio}</td>
                    <td>{c.fecha}</td>
                    <td>{c.hora}</td>
                    <td>
                        <EtiquetaEstadoCita estado={c.estado}/></td>
                        </tr>)}
                        </tbody>
                        </table>
                        </div>}
                        <Link className="btn btn-primary" to="/solicitar-cita">Solicitar cita</Link>
                        </PlantillaPublica>; }
export default MisCitas;
=======
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
>>>>>>> f82cdbf29a2bc97836a998d51dac0f39961ab2d5
