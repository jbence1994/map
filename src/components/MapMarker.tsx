import { Marker, Popup } from 'react-leaflet';

import type { KeyValuePair } from '@/components/KeyValuePair.ts';

type Props = {
  markerLatitude: number;
  markerLongitude: number;
  popupTitle: string;
  popupContent: KeyValuePair<string, string>[];
};

const MapMarker = ({
  markerLatitude,
  markerLongitude,
  popupTitle,
  popupContent,
}: Props) => {
  return (
    <Marker position={[markerLatitude, markerLongitude]}>
      <Popup>
        <h2>{popupTitle}</h2>
        {popupContent.map((item, index) => (
          <p key={index}>
            <span style={{ fontWeight: 'bold' }}>{item.key}</span>
            {item.value}
          </p>
        ))}
      </Popup>
    </Marker>
  );
};

export default MapMarker;
