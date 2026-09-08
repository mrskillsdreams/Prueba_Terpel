import { QueryClient } from '@tanstack/react-query';
import type { StationWithServices } from '../types/station';

export const toggleStationInCache = (queryClient: QueryClient, stationId: string) => {
    queryClient.setQueryData<StationWithServices[]>(['stations'], (oldStations) => {
        if (!oldStations) return [];

        return oldStations.map(oldStation =>
            oldStation.stationId === stationId
                ? {
                    ...oldStation,
                    status: oldStation.status === 'published' ? 'draft' : 'published',
                    updatedAt: new Date().toISOString(),
                }
                : oldStation
        );
    });
};
