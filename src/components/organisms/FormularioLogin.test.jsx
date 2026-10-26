import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormularioLogin from './FormularioLogin'

describe('FormularioLogin', () => {

  it('no llama a onEnviar y muestra los errores si los campos están vacíos', async () => {
    const onEnviar = vi.fn()
    render(<FormularioLogin onEnviar={onEnviar}/>)

    await userEvent.click(screen.getByRole('button', { name: 'Ingresar' }))

    expect(onEnviar).not.toHaveBeenCalled()
    expect(screen.getByText('Ingresa tu correo')).toBeInTheDocument()
    expect(screen.getByText('La contraseña debe tener al menos 6 caracteres')).toBeInTheDocument()
  })

  it('llama a onEnviar con el correo cuando todo es válido', async () => {
    const onEnviar = vi.fn()
    render(<FormularioLogin onEnviar={onEnviar}/>)

    await userEvent.type(screen.getByLabelText('Correo electrónico'), 'ana@correo.cl')
    await userEvent.type(screen.getByLabelText('Contraseña'), '123456')
    await userEvent.click(screen.getByRole('button', { name: 'Ingresar' }))

    expect(onEnviar).toHaveBeenCalledWith({ email: 'ana@correo.cl' })
  })
})
