import { servicios as serviciosIniciales } from '../data/servicios'

const CLAVE = 'vsm_servicios'

function leer() {
  const guardado = localStorage.getItem(CLAVE)
  if (guardado === null) {
    localStorage.setItem(CLAVE, JSON.stringify(serviciosIniciales))
    return [...serviciosIniciales]
  }
  return JSON.parse(guardado)
}

function guardar(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista))
}

export function listarServicios() {
  return leer()
}

export function obtenerServicio(codigo) {
  return leer().find((s) => s.codigo === codigo) ?? null
}

export function crearServicio(datos) {
  const lista = leer()
  const nuevo = { ...datos }
  guardar([...lista, nuevo])
  return nuevo
}

export function actualizarServicio(codigo, cambios) {
  const lista = leer().map((s) => (s.codigo === codigo ? { ...s, ...cambios } : s))
  guardar(lista)
  return lista.find((s) => s.codigo === codigo) ?? null
}

export function eliminarServicio(codigo) {
  guardar(leer().filter((s) => s.codigo !== codigo))
}
