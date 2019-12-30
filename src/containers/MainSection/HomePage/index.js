import React from 'react';
import MapComponent from '../../../components/MapComponent/indexFunctional';
import ModalComponent from '../../../components/ModalComponent';
import PainelMapControllerComponent from '../../../components/PainelMapControllerComponent';
import PainelLeftHelper from '../../../components/PainelMapControllerComponent/Painel-Left-Helper';
import PainelRightHelper from '../../../components/PainelMapControllerComponent/Painel-Right-Helper';
import 'mapbox-gl/dist/mapbox-gl.css';

class HomePage extends React.Component{
    render(){
        return(
            <>
                <ModalComponent/>
                <MapComponent/>
                <PainelMapControllerComponent/>
                <PainelLeftHelper/>
                <PainelRightHelper/>

            </>
        );
    }
}

export default HomePage;