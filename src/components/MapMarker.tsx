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
        <p>
          <span style={{ fontWeight: 'bold' }}>Cím:</span> {coordinate.address}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Státusz:</span>{' '}
          {coordinate.status}
        </p>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
