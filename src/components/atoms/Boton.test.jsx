import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Boton from './Boton'

describe('Boton', () => {
  it('muestra su texto y avisa al padre al hacer clic', async () => {
    const onClick = vi.fn() 
    render(<Boton texto="Solicitar cita" onClick={onClick}/>)

    await userEvent.click(screen.getByRole('button', { name: 'Solicitar cita' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
