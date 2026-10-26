import CampoTexto from '../atoms/CampoTexto';
import Boton from '../atoms/Boton';
import Icono from '../atoms/Icono'

function BuscadorServicios(props) {
  function enviar(e) {
    e.preventDefault()
    props.onBuscar(props.value)
  }

  return (
    <form className="d-flex align-items-center gap-2" onSubmit={enviar}>
      <label htmlFor="buscador-servicios" className="visually-hidden">
        Buscar servicio
      </label>
      <Icono simbolo="🔍" />
      <CampoTexto
        id="buscador-servicios"
        type="search"
        placeholder="Buscar servicio"
        value={props.value}
        onChange={props.onChange}/>
      <Boton type="submit" texto="Buscar" variante="outline-primary" />
    </form>
  )
}

export default BuscadorServicios