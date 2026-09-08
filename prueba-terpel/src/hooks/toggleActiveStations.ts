import { QueryClient } from '@tanstack/react-query';

// Recibe el queryClient y el ID de la estación a modificar
export const toggleStationInCache = (queryClient: QueryClient, stationId: string) => {
    queryClient.setQueryData(['stations'], (oldStations: any[] | undefined) => {
        if (!oldStations) return [];
        
        return oldStations.map(oldStation =>
            oldStation.stationId === stationId 
                ? { ...oldStation, isActive: !oldStation.isActive } 
                : oldStation
        );
    });
};