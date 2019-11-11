import React from 'react';
import MapComponent from '../../../components/MapComponent';
import 'mapbox-gl/dist/mapbox-gl.css';

class HomePage extends React.Component{
    render(){
        return(
            <>
                <MapComponent/>
            </>
        );
    }
}

export default HomePage;