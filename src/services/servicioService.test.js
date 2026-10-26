import { describe, it, expect, beforeEach } from 'vitest'
import { listarServicios, obtenerServicio, crearServicio } from './servicioService'
import { servicios } from '../data/servicios'

describe('servicioService', () => {
 
  beforeEach(() => {
    localStorage.clear()
  })

  it('crea un servicio nuevo y lo guarda', () => {
    
    const nuevo = {
      codigo: 'OT010',
      categoria: 'Otros',
      nombre: 'Baño medicado',
      especie: 'Perro',
      duracion: '40 min',
      precio: 20000,
      observaciones: '',
    }
    crearServicio(nuevo)
    
    expect(listarServicios()).toHaveLength(servicios.length + 1)
    expect(obtenerServicio('OT010').nombre).toBe('Baño medicado')
  })
})
