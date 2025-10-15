import { Marker, Popup } from 'react-leaflet';

import type { Coordinate } from '@/components/Coordinate.ts';

type Props = {
  coordinate: Coordinate;
};

const MapMarker = ({ coordinate }: Props) => {
  return (
    <Marker position={[coordinate.latitude, coordinate.longitude]}>
      <Popup>
        <h2>{coordinate.name}</h2>
        <p>{coordinate.address}</p>
        <p>{coordinate.status}</p>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
