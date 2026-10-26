import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CampoFormulario from './CampoFormulario'

describe('CampoFormulario', () => {
  it('muestra el mensaje de error y marca el campo con la clase campo-error', () => {
    render(
      <CampoFormulario
        id="cita-mascota"
        etiqueta="Nombre de la mascota"
        value=""
        onChange={() => {}}
        error="Ingresa el nombre de tu mascota"/>
    )
    expect(screen.getByText('Ingresa el nombre de tu mascota')).toBeInTheDocument()

    expect(screen.getByLabelText('Nombre de la mascota')).toHaveClass('campo-error')
  })
})
