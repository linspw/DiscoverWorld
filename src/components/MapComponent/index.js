import React from 'react';
import ReactMapGL, {Popup, Source, Layer} from 'react-map-gl';
import {countriesLayer, highlightedLayer} from './mapStyle';

//filter: this.filterBase[1].concat(['USA', 'AUS', 'NGA']),

class MapComponent extends React.Component{
    filterBase = ['all', ['in', 'ADM0_A3_IS']]
    viewportBase = {
        width: '100%',
        height: '100%',
    }
    state = {
        filter: this.filterBase[1],
        viewport: {
            width: '100%',
            height: '100%',
            latitude: 25,
            longitude: 0,
            zoom: 2,
            minZoom: 2,
            bearing: 0,
            pitch: 0
          },
          mounted: false
    }
    _onViewportChange = (viewport) => {
        if(this.mounted){
            //console.log("Atualizou")
            this.setState({viewport})
        }   
    }
    _onHover = (event) => {
        if(this.mounted){
            let country = event.features[0];
            if(country && country.properties.ADM0_A3_IS!==this.state.filter){
                this.setState({...this.state, filter: ['all', ['in', 'ADM0_A3_IS', country.properties.ADM0_A3_IS]]});
            }
            else{
                this.setState({...this.state, filter: this.filterBase[1]});
            }
        }
    }
    setMountedTrue = async () => {
        this.mounted=true;
    }
    render(){
        return (
            <ReactMapGL mapboxApiAccessToken={process.env.REACT_APP_MAPS_API_KEY} {...this.state.viewport} onViewportChange={(viewpt)=>this._onViewportChange(viewpt)}
            mapStyle={'mapbox://styles/linspw/ck2tqvvm85mdc1do11uebu1q9?optimize=true'} onClick={(e)=>console.log(e)} filter={this.state.filter} onHover={(e)=>this._onHover(e)}
            onLoad={()=>this.setMountedTrue()} interactiveLayerIds={['countries']}
            >
                <Source id="source-highlighted" type="vector" url="mapbox://linspw.3wdxyikf">
                    <Layer {...countriesLayer} />
                    <Layer {...highlightedLayer} filter={this.state.filter}/>
                </Source>
            </ReactMapGL>
        );
    }
}

export default MapComponent;
//<Layer beforeId="waterway-label" {...countriesLayer} />
