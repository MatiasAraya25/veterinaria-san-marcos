import { useState } from 'react';
import CampoTexto from '../atoms/CampoTexto';
import Selector from '../atoms/Selector';
import CampoFormulario from '../molecules/CampoFormulario';

const CATEGORIAS = ['Consultas', 'Vacunación', 'Cirugía', 'Desparasitación', 'Exámenes', 'Otros'];
const ESPECIES = ['Perro', 'Gato', 'Perra', 'Gata', 'Perro / Gato', 'Perra / Gata', 'Ave / Conejo', 'Todas'];

const VACIO = {
  codigo: '',
  categoria: '',
  nombre: '',
  especie: '',
  duracion: '',
  precio: '',
  observaciones: '',
};

function validar(valores, esEdicion, codigosExistentes) {
  const errores = {};
  const codigo = valores.codigo.trim().toUpperCase();

  if (!esEdicion) {
    if (!codigo) errores.codigo = 'Ingresa el código del servicio.';
    else if (codigosExistentes.includes(codigo)) errores.codigo = 'Ya existe un servicio con ese código.';
  }
  if (!valores.categoria) errores.categoria = 'Selecciona una categoría.';
  if (!valores.nombre.trim()) errores.nombre = 'Ingresa el nombre del servicio.';
  if (!valores.especie) errores.especie = 'Selecciona la especie.';
  if (!valores.duracion.trim()) errores.duracion = 'Ingresa la duración (ej. 30 min).';
  if (!(Number(valores.precio) > 0)) errores.precio = 'Ingresa un precio mayor a 0.';

  return errores;
}

function FormularioServicio({ servicio, codigosExistentes = [], onSubmit, onCancelar }) {
  const esEdicion = Boolean(servicio);
  const [valores, setValores] = useState({ ...VACIO, ...servicio });
  const [errores, setErrores] = useState({});

  const cambiar = (campo) => (e) =>
    setValores((anterior) => ({ ...anterior, [campo]: e.target.value }));

  function enviar(e) {
    e.preventDefault();
    const nuevosErrores = validar(valores, esEdicion, codigosExistentes);
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    onSubmit?.({
      ...valores,
      codigo: valores.codigo.trim().toUpperCase(),
      nombre: valores.nombre.trim(),
      duracion: valores.duracion.trim(),
      observaciones: valores.observaciones.trim(),
      precio: Number(valores.precio),
    });
  }

  return (
    <form onSubmit={enviar} noValidate className="card shadow-sm">
      <div className="card-body">
        <h2 className="h4 mb-3">{esEdicion ? 'Editar servicio' : 'Nuevo servicio'}</h2>

        <div className="row">
          <div className="col-12 col-md-6">
            <CampoFormulario etiqueta="Código" error={errores.codigo}>
              {esEdicion ? (
                <p className="form-control-plaintext fw-bold mb-0">{valores.codigo}</p>
              ) : (
                <CampoTexto placeholder="Ej. SV006" value={valores.codigo} onChange={cambiar('codigo')} />
              )}
            </CampoFormulario>
          </div>
          <div className="col-12 col-md-6">
            <CampoFormulario etiqueta="Categoría" error={errores.categoria}>
              <Selector
                opciones={CATEGORIAS}
                placeholder="Selecciona una categoría"
                value={valores.categoria}
                onChange={cambiar('categoria')}
              />
            </CampoFormulario>
          </div>
        </div>

        <CampoFormulario etiqueta="Nombre del servicio" error={errores.nombre}>
          <CampoTexto placeholder="Ej. Consulta general" value={valores.nombre} onChange={cambiar('nombre')} />
        </CampoFormulario>

        <div className="row">
          <div className="col-12 col-md-4">
            <CampoFormulario etiqueta="Especie" error={errores.especie}>
              <Selector
                opciones={ESPECIES}
                placeholder="Selecciona la especie"
                value={valores.especie}
                onChange={cambiar('especie')}
              />
            </CampoFormulario>
          </div>
          <div className="col-12 col-md-4">
            <CampoFormulario etiqueta="Duración" error={errores.duracion}>
              <CampoTexto placeholder="Ej. 30 min" value={valores.duracion} onChange={cambiar('duracion')} />
            </CampoFormulario>
          </div>
          <div className="col-12 col-md-4">
            <CampoFormulario etiqueta="Precio (CLP)" error={errores.precio}>
              <CampoTexto type="number" placeholder="Ej. 15000" value={valores.precio} onChange={cambiar('precio')} />
            </CampoFormulario>
          </div>
        </div>

        <CampoFormulario etiqueta="Observaciones (opcional)">
          <textarea
            className="form-control"
            rows="3"
            value={valores.observaciones}
            onChange={cambiar('observaciones')}
          />
        </CampoFormulario>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            {esEdicion ? 'Guardar cambios' : 'Crear servicio'}
          </button>
          {onCancelar && (
            <button type="button" className="btn btn-outline-secondary" onClick={onCancelar}>
              Cancelar
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default FormularioServicio;