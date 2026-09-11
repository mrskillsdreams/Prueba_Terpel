// Mock de la capa de datos (services/): así el test no depende de las estaciones reales.
jest.mock('../services/getStationsServices', () => ({
  stations: [{ id: 1, name: 'Estación Mock', stationId: '999' }],
  services: [{ id: 1, serviceId: 's1', serviceName: 'Baño', icon: '<svg></svg>' }],
  rel_stations_services: [{ id: 1, stationId: '999', serviceId: 's1' }],
}))

import { fetchServices, fetchStations, fetchStationService } from './getStationsServices'

describe('getStationsServices (mock API)', () => {
  it('fetchStations resuelve con las estaciones mockeadas', async () => {
    await expect(fetchStations()).resolves.toEqual([
      { id: 1, name: 'Estación Mock', stationId: '999' },
    ])
  })

  it('fetchServices resuelve con los servicios mockeados', async () => {
    await expect(fetchServices()).resolves.toEqual([
      { id: 1, serviceId: 's1', serviceName: 'Baño', icon: '<svg></svg>' },
    ])
  })

  it('fetchStationService resuelve con la relación estación-servicio mockeada', async () => {
    await expect(fetchStationService()).resolves.toEqual([
      { id: 1, stationId: '999', serviceId: 's1' },
    ])
  })
})
