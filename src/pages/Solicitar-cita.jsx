import {userNavigate} from "react-router-dom";
import PLantillaPublica from "../components/PLantillaPublica";
import FormularioSolicitudCita from "../components/FormularioSolicitudCita";
import {userCita} from "../context/CitaContext";

function SolicitarCita() {
    const {crear} = userCita();
    const navigate = userNavigate();

    //datos = mascota,servicio,fecha y hora

    function manejarEnvio(datos) {
        const nueva = crear(datos);
        navigate(`/cita/${nueva.id}`);
        
    }

    return (<PLantillaPublica>
        <h1 className="mb-4">Solicitar cita</h1>
        <FormularioSolicitudCita onSubmit={manejarEnvio} />
    </PLantillaPublica>
    );
}

export default SolicitarCita;
