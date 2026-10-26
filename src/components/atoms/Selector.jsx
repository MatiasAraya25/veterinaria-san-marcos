function Selector (props) {
    const clases = props.invalido ? 'form-select campo-error' : 'form-select'

    return (
    <select id={props.id} className={clases} value={props.value} onChange={props.onChange}>
      <option value="">{props.placeholder || 'Seleccione una opción'}</option>
      {props.opciones.map((opcion) => (
        <option key={opcion} value={opcion}>
          {opcion}
        </option>
      ))}
    </select>
  )
}

export default Selector;
