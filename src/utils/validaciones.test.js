import { describe, it, expect } from 'vitest'
import { validarCorreo } from './validaciones'

describe('validarCorreo', () => {

  it('rechaza un correo sin @', () => {
    expect(validarCorreo('ana.correo.cl')).toBe('Ingresa un correo válido (ej. nombre@correo.cl)')
  })
})