import React from 'react';
import MapComponent from '../../../components/MapComponent/indexFunctional';
import ModalComponent from '../../../components/ModalComponent';
import 'mapbox-gl/dist/mapbox-gl.css';

class HomePage extends React.Component{
    render(){
        return(
            <>
                <ModalComponent/>
                <MapComponent/>
            </>
        );
    }
}

export default HomePage;