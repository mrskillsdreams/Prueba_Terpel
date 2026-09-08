export interface Station {
  id: number
  name: string
  stationId: string
}

export interface Service {
  id: number
  serviceId: string
  serviceName: string
  icon: string
}

// La tabla de relación N a N: qué servicios ofrece cada estación.
export interface StationService {
  id: number
  stationId: string
  serviceId: string
}

export type StationStatus = 'draft' | 'published'

export interface StationWithServices {
  id: number
  name: string
  stationId: string
  status: StationStatus
  updatedAt: string
  services: Service[]
}
