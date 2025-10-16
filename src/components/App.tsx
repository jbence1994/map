import { useMemo } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import type { Coordinate } from '@/components/Coordinate.ts';
import type { CoordinateDto } from '@/components/CoordinateDto.ts';
import type { MapContainer as MapContainerObject } from '@/components/MapContainer.ts';
import MapMarker from '@/components/MapMarker.tsx';
// TODO: Replace this import with your local JSON: '@/coordinates.json'
import coordinatesJson from '@/coordinates.example.json';
// TODO: Replace this import with your local JSON: '@/map-container.json'
import mapContainerJson from '@/map-container.example.json';

const App = () => {
  const mapContainer: MapContainerObject = useMemo(
    () => ({
      latitude: parseFloat(mapContainerJson[0].latitude),
      longitude: parseFloat(mapContainerJson[0].longitude),
      zoom: parseInt(mapContainerJson[0].zoom),
    }),
    []
  );

  const coordinates: Coordinate[] = useMemo(
    () =>
      (coordinatesJson as CoordinateDto[]).map((coordinateDto) => ({
        name: coordinateDto.name,
        address: coordinateDto.address,
        status: coordinateDto.status,
        latitude: parseFloat(coordinateDto.latitude),
        longitude: parseFloat(coordinateDto.longitude),
      })),
    []
  );

  return (
    <MapContainer
      center={[mapContainer.latitude, mapContainer.longitude]}
      zoom={mapContainer.zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {coordinates.map((coordinate, index) => (
        <MapMarker key={index} coordinate={coordinate} />
      ))}
    </MapContainer>
  );
};

export default App;
