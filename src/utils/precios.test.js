import { describe, it, expect } from 'vitest'
import { calcularPrecioCita } from './precios'

const consultaGeneral = { codigo: 'SV001', nombre: 'Consulta general', precio: 15000 }
const consultaUrgencia = { codigo: 'SV002', nombre: 'Consulta urgencia', precio: 25000 }

describe('calcularPrecioCita', () => {
  // PU 1
  it('suma $10.000 a una urgencia fuera de horario', () => {
    const precio = calcularPrecioCita(consultaUrgencia, '20:00') // Act
    expect(precio).toBe(35000) // Assert
  })

  // PU 2
  it('no suma recargo a un servicio normal aunque sea tarde', () => {
    expect(calcularPrecioCita(consultaGeneral, '20:00')).toBe(15000)
  })

  // PU 3
  it('FALLA A PROPÓSITO: espera que una urgencia a las 19:00 no tenga recargo', () => {
    expect(calcularPrecioCita(consultaUrgencia, '19:00')).toBe(25000)
  })
})
