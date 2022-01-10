/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ReactMapGL, { Source, Layer } from 'react-map-gl';

const mapBoxToken = 'pk.eyJ1IjoicmF2ZW45OXAiLCJhIjoiY2tzdDAwOHBwMHU0aTMxcG5wdWZ0OW9mMSJ9.Pnc_9xkS8B72aotWuUEoiQ';

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [21.823, 38.314] },
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [21.75251713943854, 38.24866462990946] },
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [21.593547923314887, 38.934630783882035] },
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [22.995520420961906, 38.311819911645394] },
    },
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

export default function lineMap() {
  const [viewport, setViewport] = React.useState({
    longitude: 21.823,
    latitude: 38.314,
    zoom: 7,
  });
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
    </ReactMapGL>
  );
}
