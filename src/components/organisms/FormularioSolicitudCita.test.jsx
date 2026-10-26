import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormularioSolicitudCita from './FormularioSolicitudCita'

const servicios = [
  { codigo: 'SV001', nombre: 'Consulta general', precio: 15000 },
  { codigo: 'SV002', nombre: 'Consulta urgencia', precio: 25000 },
]

describe('FormularioSolicitudCita', () => {
  
  it('no llama a onEnviar y muestra el error si falta el nombre de la mascota', async () => {
    const onEnviar = vi.fn()
    render(<FormularioSolicitudCita servicios={servicios} onEnviar={onEnviar} />)

    await userEvent.click(screen.getByRole('button', { name: 'Enviar solicitud' }))

    expect(onEnviar).not.toHaveBeenCalled()
    expect(screen.getByText('Ingresa el nombre de tu mascota')).toBeInTheDocument()
  })
})
