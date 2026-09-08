import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Consultar from './Consultar'

// Mockeamos la capa de "API" para no depender de los datos reales de services/.
jest.mock('../hooks/getStationsServices', () => ({
  fetchStations: () => Promise.resolve([{ id: 1, name: 'Estación Prueba 1', stationId: '001' }]),
  fetchServices: () =>
    Promise.resolve([{ id: 1, serviceId: 's1', serviceName: 'Baño', icon: '<svg></svg>' }]),
  fetchStationService: () => Promise.resolve([{ id: 1, stationId: '001', serviceId: 's1' }]),
}))

function renderConsultar() {
  const queryClient = new QueryClient()
  return render(
    <QueryClientProvider client={queryClient}>
      <Consultar />
    </QueryClientProvider>
  )
}

describe('Consultar', () => {
  it('renderiza la estación y permite desactivarla con un click', async () => {
    const user = userEvent.setup()
    renderConsultar()

    // Render: espera a que se resuelva el fetch (mockeado) y se pinte la estación.
    expect(await screen.findByText('Estación Prueba 1')).toBeInTheDocument()
    expect(screen.getByText('Baño')).toBeInTheDocument()
    expect(screen.getByText('Activado')).toBeInTheDocument()

    // Interacción: clic en el botón de estado.
    await user.click(screen.getByRole('button', { name: 'Desactivar' }))

    // Después del click, la UI debe reflejar el nuevo estado.
    expect(await screen.findByText('Desactivado')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Activar' })).toBeInTheDocument()
  })
})
