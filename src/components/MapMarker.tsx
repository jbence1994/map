import { Marker, Popup } from 'react-leaflet';

import type { Coordinate } from '@/components/Coordinate.ts';

type Props = {
  coordinate: Coordinate;
};

const MapMarker = ({ coordinate }: Props) => {
  return (
    <Marker position={[coordinate.latitude, coordinate.longitude]}>
      <Popup>{coordinate.name}</Popup>
    </Marker>
  );
};

export default MapMarker;
