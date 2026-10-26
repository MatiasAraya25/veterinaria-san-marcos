function CampoTexto(props) {
  const clases = props.invalido ? 'form-control campo-error' : 'form-control'

  return (
    <input
      id={props.id}
      type={props.type || 'text'}
      className={clases}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      min={props.min}
    />
  )
}

export default CampoTexto
