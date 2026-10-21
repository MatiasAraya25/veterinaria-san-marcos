import { useNavigate } from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import FormularioSolicitudCita from '../components/organisms/FormularioSolicitudCita';
import { useCitas } from '../context/CitasContext';

function SolicitarCita() { 
    const { crear } = useCitas();
    const navigate = useNavigate(); 
    
    function manejarEnvio(datos) { 
        const nueva = crear(datos); 
        navigate(`/cita/${nueva.id}`); 
        return nueva; 
    }

 return <PlantillaPublica><h1 className="mb-4">Solicitar cita</h1>
 <p className="text-muted">Completa los datos para enviar tu solicitud a la veterinaria.</p>
 <FormularioSolicitudCita onSubmit={manejarEnvio}/></PlantillaPublica>; }
export default SolicitarCita;
