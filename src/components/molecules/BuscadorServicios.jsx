import CampoTexto from '../atoms/CampoTexto';
import Boton from '../atoms/Boton';

function BuscadorServicios(props) {
    return (
        <div className = "d-flex gap-2 mb-3">
            <CampoTexto
                placeholder = "Buscar servicio"
                value = {props.value}
                onChange={props.onChange}
            />
            <Boton texto = "Buscar" onClick = {props.onBuscar}/>
        </div>
        
    );
}

export default BuscadorServicios;