import { fetchServices, fetchStations, fetchStationService } from "../hooks/getStationsServices"
import { StationWithServices } from "../types/station";
import StationCard from "../components/StationCard";
import { useQuery } from "@tanstack/react-query";

function Consultar() {
  const { data: stationsWithServices = [] } = useQuery({
    queryKey: ['stations'],
    queryFn: async (): Promise<StationWithServices[]> => {
      const [stationsRS, servicesRS, stationsServicesRS] = await Promise.all([
        fetchStations(),
        fetchServices(),
        fetchStationService(),
      ]);

      return stationsRS.map(station => {
        const serviceIdsForStation = stationsServicesRS
          .filter(stationService => stationService.stationId === station.stationId)
          .map(stationService => stationService.serviceId);

        const servicesForStation = servicesRS.filter(service =>
          serviceIdsForStation.includes(service.serviceId)
        );

        return {
          ...station,
          services: servicesForStation,
          status: 'published' as const,
          updatedAt: new Date().toISOString(),
        };
      });
    },
    staleTime: Infinity,
  });

  return (
    <div className="mx-auto max-w-3xl px-6 pb-16">
      <h1 className="text-2xl font-bold text-white">Gestión de Estaciones</h1>
      <p className="mt-1 text-sm text-slate-400">
        Activa o desactiva la disponibilidad de servicio en cada estación de la red en tiempo real.
      </p>
      <hr className="mt-5 border-slate-800" />

      <div className="mt-6 space-y-3">
        {stationsWithServices.map(station => (
          <StationCard key={station.stationId} station={station} />
        ))}
      </div>
      </div>
  )
}

export default Consultar
