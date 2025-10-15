import { MapContainer, TileLayer } from 'react-leaflet';

import type { Coordinate } from '@/components/Coordinate.ts';
import type { CoordinateDto } from '@/components/CoordinateDto.ts';
import MapMarker from '@/components/MapMarker.tsx';
import { appConfig } from '@/config/app.config.ts';
import data from '@/coordinates.json';

const App = () => {
  const { initialLatitude, initialLongitude } = appConfig;

  const coordinates: Coordinate[] = (data as CoordinateDto[]).map(
    (coordinateDto) => ({
      name: coordinateDto.name,
      latitude: parseFloat(coordinateDto.latitude),
      longitude: parseFloat(coordinateDto.longitude),
    })
  );

  return (
    <MapContainer
      center={[initialLatitude, initialLongitude]}
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
