import React from 'react';
import MapComponent from '../../../components/MapComponent/indexFunctional';
import ModalMapComponent from '../../../components/ModalComponent';
import PainelMapControllerComponent from '../../../components/PainelMapControllerComponent';
import PainelLeftHelper from '../../../components/PainelMapControllerComponent/Painel-Left-Helper';
import PainelRightHelper from '../../../components/PainelMapControllerComponent/Painel-Right-Helper';
import PainelSearcher from '../../../components/PainelMapControllerComponent/Painel-Searcher';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Router, Redirect, navigate } from "@reach/router";


class HomePage extends React.Component{
    render(){
        return(
            <>
                <Router>
                    <ModalMapComponent path="painel/country/brazil/*"/>
                </Router>
                <MapComponent/>
                <PainelMapControllerComponent/>
                <PainelLeftHelper/>
                <PainelRightHelper/>
                <PainelSearcher/>
            </>
        );
    }
}

export default HomePage;