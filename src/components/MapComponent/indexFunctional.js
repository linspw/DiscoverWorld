import React from 'react';
import ReactMapGL, {Popup, Source, Layer} from 'react-map-gl';
import {countriesLayer, highlightedLayer} from './mapStyle';
import LoaderSpinner from '../LoaderSpinner';
import ReactResizeDetector from 'react-resize-detector';
import { navigate } from '@reach/router';

const openModal = () => {
  navigate("/painel/country/brazil/interactive");
}

const MapComponent = (props) => {
  const filterBase = ['all', ['in', 'ADM0_A3_IS']];
  const [state, setState] = React.useState({
    viewport: {
      width: '100%',
      height: '100%',
      latitude: 25,
      longitude: 0,
      zoom: 2 },
      filter: filterBase,
      mounted: false
  });
  const _onload = (event) => {
    setState({...state, mounted:true})
  }
  const _onClick = (event) => {
    if(event.features.length > 0){
      console.log(event.features, "País:", event.features[0].properties.NAME_PT);
      openModal();
    }
  }
  const _onHover = (event) => {
    //console.log(event)
    if(state.mounted){
      let country = event.features[0];
      if(country && country.properties.ADM0_A3_IS!==state.filter){
        setState({...state, filter: ['all', ['in', 'ADM0_A3_IS', country.properties.ADM0_A3_IS]]});
      }
      else{
        setState({...state, filter: filterBase[1]});
      }
    }
  }
  const _onViewportChange = (viewport) => {
    //console.log("Viewport: ",viewport)
    if(state.mounted){
      setState({...state, viewport})
    }
  }
  const _onResize = (w, h) => {
    //console.log("Resize:")
    if(state.mounted){      
      setState({...state, viewport:{...state.viewport, width: w.width, height:h.height} })
      //console.log(w, h)
    }
  }
  return (
    <>
      <ReactResizeDetector className="map-container" onResize={_onResize} handleWidth handleHeight>
        <ReactMapGL {...state.viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPS_API_KEY}
          mapStyle={'mapbox://styles/linspw/ck2zjmqg704f81cokutacqju2?optimize=true'}
          filter={state.filter} interactiveLayerIds={['countries']}
          onViewportChange={viewport => _onViewportChange(viewport)}
          onHover={(e)=>_onHover(e)}
          onLoad={(e)=>_onload(e)}
          onClick={(e)=>_onClick(e)}
        >
          <Source id="source-highlighted" type="vector" url="mapbox://linspw.3wdxyikf">
            <Layer {...countriesLayer} />
            <Layer {...highlightedLayer} filter={state.filter}/>
          </Source>
        </ReactMapGL>
      </ReactResizeDetector>
      {state.isMounted==false && <LoaderSpinner/>}
    </>
  );
};

export default MapComponent;


