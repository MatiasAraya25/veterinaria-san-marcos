import {useNavigate, useParams} from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import FormularioSolicitudCita from '../components/organisms/FormularioSolicitudCita';
import {useCitas} from '../context/CitasContext';
import {useServicios} from '../context/ServiciosContext';

function SolicitarCita() {
    const {crear} = useCitas();
    const {servicios} = useServicios();
    const {codigo} = useParams();
    const navigate = useNavigate();

    function manejarEnvio(datos) {
        const nueva = crear(datos);
        navigate(`/cita/${nueva.id}`);
    }

    return (
        <PlantillaPublica>
            <h1 className="mb-4">Solicitar cita</h1>
            <p className="text-muted">
                Completa los datos para enviar tu solicitud a la veterinaria.
            </p>
            <FormularioSolicitudCita
                servicios={servicios}
                codigoInicial={codigo}
                onEnviar={manejarEnvio}
            />
        </PlantillaPublica>
    );
}

export default SolicitarCita;
