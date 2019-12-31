import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { showModal } from '../../redux/actions/modal_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize ,faTimes, faMapMarkedAlt, faInfo, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import InteratorComponent from '../InteratorComponent';
import FlagComponent from '../FlagComponent/FlagComponent';
import './ModalComponent.css';
import image from '../../countryImages/rio1.jpg';
import { Router, Redirect, navigate } from "@reach/router";
import InformationContainer from "./InformationContainer";
import InteractiveContainer from "./InteractiveContainer";
import TravelGuideContainer from "./TravelGuideContainer";

const buttonInteractive_onClick = () => {
  navigate("/painel/country/brazil/interactive");
}
const buttonInformation_onClick = () => {
  navigate("/painel/country/brazil/information");
}
const buttonTravelGuide_onClick = () => {
  navigate("/painel/country/brazil/travelguide");
}
/*
const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({ showModal }, dispatch);
}
const mapStateToProps = state => {
  return { modalIsActive: state.modalIsActive };
};*/

const ModalMapComponent = (props) => {
  const [modalIsActive, setModalIsActive] = useState(true);
  const _onClick = async () => {
    setModalIsActive(false)
    await new Promise(r => setTimeout(r, 500));
    console.log("Props:",props)
    navigate("/");
  }
  return (
    <div className={"modal-map-full "+(modalIsActive?'fadeIn':'fadeOut')}>
      <div className="modal-group-top-bar-default">
        <button className="button-modal-top-bar bg-color-p2-c2" onClick={()=>_onClick()}><FontAwesomeIcon icon={faWindowMinimize} /></button>
        <button className="button-modal-top-bar bg-color-p2-c1" onClick={()=>_onClick()}><FontAwesomeIcon icon={faTimes} /></button>
      </div>
      <div className="modal-group-top-section">
        <FlagComponent />
        <img className="wallpaper" src={image}/>
        <div className="country-initial-description">
          <span className="country-title">Brazil</span>
          <span className="country-subtitle">"O país do samba"</span>
        </div>
      </div>
      <div className="modal-group-main-section">
        <div className="modal-fliper">
          <button className="modal-fliper-item" onClick={()=>buttonInteractive_onClick()}><FontAwesomeIcon icon={faGlobeAmericas}/><span className="mobileOff">Interativo</span></button>
          <button className="modal-fliper-item" onClick={()=>buttonInformation_onClick()}><FontAwesomeIcon icon={faInfo}/><span className="mobileOff">Informações</span></button>
          <button className="modal-fliper-item" onClick={()=>buttonTravelGuide_onClick()}><FontAwesomeIcon icon={faMapMarkedAlt}/><span className="mobileOff">Guia de Viagem</span></button>
        </div>
        <Router>
          <InteractiveContainer path="interactive"/>
          <Redirect from="/" to="painel/country/brazil/interactive" noThrow/>
          <InformationContainer path="information"/>
          <TravelGuideContainer path="travelguide"/>
        </Router>
      </div>
    </div>
  );
}

export default ModalMapComponent;