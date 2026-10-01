function Selector (props) {
    return (
        <select className="form-select" value={props.value} onChange={props.onChange}>
        <option value="">{props.placeholder || 'Seleccione una opción'}</option>

        {props.opciones.map((opcion)) => (
            option key = {opcion} value = {opcion}>
            {opcion}
            </opcion>
            
        )
        }
        </select>
    )
}

