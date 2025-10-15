import { useMemo } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import type { Coordinate } from '@/components/Coordinate.ts';
import type { CoordinateDto } from '@/components/CoordinateDto.ts';
import type { InitialCoordinate } from '@/components/InitialCoordinate.ts';
import MapMarker from '@/components/MapMarker.tsx';
// TODO: Replace this import with your local JSON: '@/coordinates.json'
import coordinatesJson from '@/coordinates.example.json';
// TODO: Replace this import with your local JSON: '@/initial-coordinate.json'
import initialCoordinateJson from '@/initial-coordinate.example.json';

const App = () => {
  const initialCoordinate: InitialCoordinate = useMemo(
    () => ({
      latitude: parseFloat(initialCoordinateJson[0].latitude),
      longitude: parseFloat(initialCoordinateJson[0].longitude),
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
      center={
        [initialCoordinate.latitude, initialCoordinate.longitude] as [
          number,
          number,
        ]
      }
      zoom={14}
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
