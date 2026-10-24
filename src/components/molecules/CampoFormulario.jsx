import CampoTexto from '../atoms/CampoTexto'

function CampoFormulario(props) {
  const hayError = props.error ? true : false

  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.etiqueta}
      </label>

      {props.children ? (
        props.children
      ) : (
        <CampoTexto
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          invalido={hayError}/>
      )}

      {hayError && <small className="error-msg">{props.error}</small>}
    </div>
  )
}

export default CampoFormulario