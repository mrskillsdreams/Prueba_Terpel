import type { Service, Station, StationService } from '../types/station'

const bathroomIcon = 
  `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
    <path d="M220-80v-300h-60v-220q0-33 23.5-56.5T240-680h120q33 0 56.5 23.5T440-600v220h-60v300H220Zm23.5-663.5Q220-767 220-800t23.5-56.5Q267-880 300-880t56.5 23.5Q380-833 380-800t-23.5 56.5Q333-720 300-720t-56.5-23.5ZM600-80v-240H480l102-306q8-26 29.5-40t48.5-14q27 0 48.5 14t29.5 40l102 306H720v240H600Zm3.5-663.5Q580-767 580-800t23.5-56.5Q627-880 660-880t56.5 23.5Q740-833 740-800t-23.5 56.5Q693-720 660-720t-56.5-23.5Z"/>
  </svg>`

const ATMIcon = 
  `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF">
    <path d="M440-280h80v-40h40q17 0 28.5-11.5T600-360v-120q0-17-11.5-28.5T560-520H440v-40h160v-80h-80v-40h-80v40h-40q-17 0-28.5 11.5T360-600v120q0 17 11.5 28.5T400-440h120v40H360v80h80v40ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
  </svg>`

const soatIcon = 
  `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
    <path d="M480-480Zm80 240q100 0 170-70t70-170q0-101-73.5-170.5T550-720q-48 0-93 11t-87 33l100 40q41 17 65.5 52.5T560-504q0 60-41.5 102T418-360H162q-2 24-2 54.5v65.5h400ZM176-440h240q27 0 45.5-18.5T480-504q0-19-10.5-34.5T440-562l-148-60q-42 37-71.5 84T176-440Zm384 280H160q-33 0-56.5-23.5T80-240v-90q0-98 37-183.5t100.5-149Q281-726 367-763t183-37q68 0 128 25t105 68.5Q828-663 854-605t26 125q0 66-25 124.5t-68.5 102Q743-210 684.5-185T560-160Z"/>
  </svg>`

const storeIcon = 
  `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
    <path d="M321-240h120v-40h-80v-40h80v-120H321v40h80v40h-80v120Zm280 0h40v-200h-40v80h-40v-80h-40v120h80v80Zm240-278v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z"/>
  </svg>`

export const stations: Station[] = [
  { id: 1, name: "Estación Prueba 1", stationId: "001"},
  { id: 2, name: "Estación Prueba 2", stationId: "002"},
  { id: 3, name: "Estación Prueba 3", stationId: "003"},
  { id: 4, name: "Estación Prueba 4", stationId: "004"}
];

export const rel_stations_services: StationService[] = [
  { id: 1, stationId: "001", serviceId: "s1"},
  { id: 2, stationId: "001", serviceId: "s2"},
  { id: 3, stationId: "002", serviceId: "s1"},
  { id: 4, stationId: "003", serviceId: "s3"},
  { id: 5, stationId: "003", serviceId: "s1"},
  { id: 6, stationId: "004", serviceId: "s4"}
];

export const services: Service[] = [
  { id: 1, serviceId: "s1", serviceName: "Baño", icon: bathroomIcon },
  { id: 2, serviceId: "s2", serviceName: "Cajeros", icon: ATMIcon},
  { id: 3, serviceId: "s3", serviceName: "Soat", icon: soatIcon},
  { id: 4, serviceId: "s4", serviceName: "Tienda", icon: storeIcon}
];
