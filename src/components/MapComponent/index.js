import React from 'react';
import ReactMapGL, {Popup, Source, Layer} from 'react-map-gl';
import {countriesLayer, highlightedLayer} from './mapStyle';

//filter: this.filterBase[1].concat(['USA', 'AUS', 'NGA']),

class MapComponent extends React.Component{
    filterBase = ['all', ['in', 'ADM0_A3_IS']]
    viewportBase = {
            width: '100%',
            height: '100%',
            latitude: 25,
            longitude: 0,
            zoom: 2,
            minZoom: 2,
            bearing: 0,
            pitch: 0
    }
    state = {
        filter: this.filterBase[1],
        viewport: this.viewportBase,
        mounted: false
    }
    _onViewportChange = (viewport) => {
        if(this.mounted){
            console.log(this.state.viewport)
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
    setMountedTrue = async (value = true) => {
        this.mounted=value;
    }
    setMapResize = async (e) => {   
        //console.log(e);
        if(this.mounted){
            console.log("Status:", this.state.viewport)
            console.log(e)
            let viewport = this.state.viewport;
            await this.setState({...this.state,  viewport:{...viewport, width: '100%', height: '100%'}})
        }
        
    }
    render(){
        return (
            <ReactMapGL 
            mapboxApiAccessToken={process.env.REACT_APP_MAPS_API_KEY}
            mapStyle={'mapbox://styles/linspw/ck2tqvvm85mdc1do11uebu1q9?optimize=true'} width="100%" height="100%"
            {...this.state.viewport} 
            filter={this.state.filter} interactiveLayerIds={['countries']} 
            onViewportChange={(viewpt)=>this._onViewportChange(viewpt)}
            onClick={(e)=>console.log(e)}
            onHover={(e)=>this._onHover(e)}
            onResize={(e)=>this.setMapResize(e)}
            onLoad={()=>this.setMountedTrue()} 
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
