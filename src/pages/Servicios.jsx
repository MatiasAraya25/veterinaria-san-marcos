import ListaServicios from "../components/organisms/ListaServicios";
import { servicios } from "../data/servicios";

function Servicios() {
    const manejarSolicitud = (codigo) => {
        console.log('Solicitar cita para:', codigo);
    };

    return (
        <main className="container py-4">   
            <h1 className="mb-4">Servicios Veterinaria San Marcos</h1>
            <ListaServicios servicios={servicios} onSolicitar={manejarSolicitud}/>
        </main>
    );
}

export default Servicios;