function Boton(props) {
  const variante = props.variante || 'primary'
  const tipo = props.type || 'button'

  return (
    <button
      type={tipo}
      className={`btn btn-${variante} ${props.className || ''}`}
      onClick={props.onClick} disabled={props.disabled}>
      {props.texto}
    </button>
  )
}

export default Boton
