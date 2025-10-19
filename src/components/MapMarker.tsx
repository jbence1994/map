import { Marker, Popup } from 'react-leaflet';

import type { Coordinate } from '@/components/Coordinate.ts';

type Props = {
  coordinate: Coordinate;
};

const MapMarker = ({ coordinate }: Props) => {
  const renderBoldSpan = (content: string) => {
    return <span style={{ fontWeight: 'bold' }}>{content}</span>;
  };

  return (
    <Marker position={[coordinate.latitude, coordinate.longitude]}>
      <Popup>
        <h2>{coordinate.name}</h2>
        <p>
          {renderBoldSpan('Cím: ')}
          {coordinate.address}
        </p>
        <p>
          {renderBoldSpan('Státusz: ')}
          {coordinate.status}
        </p>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
