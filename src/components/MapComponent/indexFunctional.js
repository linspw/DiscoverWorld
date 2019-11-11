import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

const MapComponent = () => {
    const [state, setState] = React.useState({
      viewport: {
        width: '100%',
        height: '100%',
        latitude: 25,
        longitude: 0,
        zoom: 2
      }
    });
  
    return (
      <ReactMapGL {...state.viewport} onViewportChange={viewport => setState({ viewport })} mapboxApiAccessToken={process.env.REACT_APP_MAPS_API_KEY}/>
    );
  };

export default MapComponent;


