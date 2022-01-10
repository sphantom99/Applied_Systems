/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import ReactMapGL, {
  Source, Layer, Marker, Popup,
} from 'react-map-gl';
import Image from 'next/image';

const mapBoxToken = 'pk.eyJ1IjoicmF2ZW45OXAiLCJhIjoiY2tzdDAwOHBwMHU0aTMxcG5wdWZ0OW9mMSJ9.Pnc_9xkS8B72aotWuUEoiQ';

const geojson = {
  type: 'FeatureCollection',
  features: [
    // {
    //   type: 'Feature',
    //   geometry: { type: 'Point', coordinates: [21.823, 38.314] },
    // },
    // {
    //   type: 'Feature',
    //   geometry: { type: 'Point', coordinates: [21.75251713943854, 38.24866462990946] },
    // },
    // {
    //   type: 'Feature',
    //   geometry: { type: 'Point', coordinates: [21.593547923314887, 38.934630783882035] },
    // },
    // {
    //   type: 'Feature',
    //   geometry: { type: 'Point', coordinates: [22.995520420961906, 38.311819911645394] },
    // },
  ],
};

const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf',
  },
};

const clearCoordinates = [
  { lat: 38.24866462990946, long: 22.995520420961906, name: 'some random name1' },
  { lat: 38.934630783882035, long: 21.75251713943854, name: 'some random name2' },
  { lat: 38.215077447853716, long: 21.73439262611655, name: 'some random name3' },
];

export default function lineMap() {
  const [viewport, setViewport] = React.useState({
    longitude: 21.823,
    latitude: 38.314,
    zoom: 9,
  });
  const [popupInfo, setPopupInfo] = useState(null);
  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      onViewportChange={setViewport}
      mapboxApiAccessToken={mapBoxToken}
    >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
      {clearCoordinates.map((item) => (
        <Marker
          latitude={item.lat}
          longitude={item.long}
          offsetLeft={-14}
          offsetTop={-30}
          onClick={() => setPopupInfo({ lat: item.lat, long: item.long, name: item.name })}
        >
          <Image src="/mapMarker.png" height={50} width={50} alt="Picture of the author" />
        </Marker>
      ))}
      {popupInfo && (
        <Popup
          tipSize={60}
          anchor="top"
          longitude={popupInfo.long}
          latitude={popupInfo.lat}
          closeOnClick={false}
          onClose={setPopupInfo}
        >
          <h4>{popupInfo.name}</h4>
          <Image src="/sample.jpg" height={170} width={170} alt="Picture of the author" />
        </Popup>
      )}
    </ReactMapGL>
  );
}
