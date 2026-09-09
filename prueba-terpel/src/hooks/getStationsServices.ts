import type { Service, Station, StationService } from '../types/station'
import { rel_stations_services, services, stations } from '../services/getStationsServices'

export function fetchStations(): Promise<Station[]> {
  return Promise.resolve(stations)
}

export function fetchServices(): Promise<Service[]> {
  return Promise.resolve(services)
}

export function fetchStationService(): Promise<StationService[]> {
  return Promise.resolve(rel_stations_services)
}
