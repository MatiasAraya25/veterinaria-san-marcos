import { createContext, useContext, useState } from 'react'
import * as servicioService from '../data/servicioService'

const ServiciosContext = createContext(null)

export function ServiciosProvider({ children }) {
  const [servicios, setServicios] = useState(() => servicioService.listarServicios())

  function crear(datos) {
    servicioService.crearServicio(datos)
    setServicios(servicioService.listarServicios())
  }

  function actualizar(codigo, cambios) {
    servicioService.actualizarServicio(codigo, cambios)
    setServicios(servicioService.listarServicios())
  }

  function eliminar(codigo) {
    servicioService.eliminarServicio(codigo)
    setServicios(servicioService.listarServicios())
  }

  function recargar() {
    setServicios(servicioService.listarServicios())
  }

  return (
    <ServiciosContext.Provider value={{ servicios, crear, actualizar, eliminar, recargar }}>
      {children}
    </ServiciosContext.Provider>
  )
}

export function useServicios() {
  const contexto = useContext(ServiciosContext)
  if (!contexto) throw new Error('useServicios debe usarse dentro de un ServiciosProvider')
  return contexto
}
