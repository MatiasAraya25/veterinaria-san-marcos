function CampoFormulario(props) {
  return (
    <div className="mb-3">
      <label className="form-label">{props.etiqueta}</label>
      {props.children}
      {props.error && <div className="text-danger small mt-1">{props.error}</div>}
    </div>
  );
}

export default CampoFormulario;


