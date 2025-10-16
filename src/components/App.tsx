import { useMemo } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import type { Coordinate } from '@/components/Coordinate.ts';
import type { CoordinateDto } from '@/components/CoordinateDto.ts';
import type { MapContainer as MapContainerObject } from '@/components/MapContainer.ts';
import MapMarker from '@/components/MapMarker.tsx';
import coordinatesJson from '@/coordinates.example.json';
import mapContainerJson from '@/map-container.example.json';

import 'leaflet/dist/leaflet.css';

const App = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
  });

  const mapContainerObject: MapContainerObject = useMemo(
    () => ({
      title: mapContainerJson[0].title,
      initialLatitude: parseFloat(mapContainerJson[0].initialLatitude),
      initialLongitude: parseFloat(mapContainerJson[0].initialLongitude),
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

  const { title, initialLatitude, initialLongitude, zoom } = mapContainerObject;

  return (
    <div className="map-wrapper">
      <MapContainer
        center={[initialLatitude, initialLongitude]}
        zoom={zoom}
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
      <h1 className="map-title">{title}</h1>
    </div>
  );
};

export default App;
