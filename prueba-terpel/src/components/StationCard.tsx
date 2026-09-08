import { StationWithServices } from "../types/station";
import { toggleStationInCache } from "../hooks/toggleActiveStations";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
    station: StationWithServices;
};

function StationCard({ station }: Props) {
    const queryClient = useQueryClient();
    const buttonText = station.isActive ? 'Desactivar' : 'Activar';
    const statusLabel = station.isActive ? 'Activado' : 'Desactivado';

    const toggleActiveStations = () => {
        toggleStationInCache(queryClient, station.stationId);
    };

    return (
        <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="flex items-start gap-4">
                <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-xl ${
                        station.isActive ? 'bg-emerald-500/15' : 'bg-slate-800 grayscale'
                    }`}
                >
                    <span aria-hidden="true">⛽</span>
                </div>

                <div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-white">{station.name}</span>
                        <span
                            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                                station.isActive
                                    ? 'bg-emerald-500/15 text-emerald-400'
                                    : 'bg-rose-500/15 text-rose-400'
                            }`}
                        >
                            <span aria-hidden="true" className="text-[8px]">●</span>
                            {statusLabel}
                        </span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                        <span className="text-slate-500">Servicios:</span>
                        {station.services.map(service => (
                            <span key={service.serviceName} className="flex items-center gap-1">
                                <span
                                    className="[&>svg]:h-4 [&>svg]:w-4 [&_path]:fill-slate-400"
                                    dangerouslySetInnerHTML={{ __html: service.icon }}
                                />
                                {service.serviceName}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <button
                onClick={toggleActiveStations}
                className={`shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                    station.isActive
                        ? 'bg-rose-500/15 text-rose-400 hover:bg-rose-500/25'
                        : 'bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25'
                }`}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default StationCard
