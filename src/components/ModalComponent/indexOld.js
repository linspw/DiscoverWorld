import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { showModal } from '../../redux/actions/modal_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize ,faTimes } from '@fortawesome/free-solid-svg-icons';
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

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({ showModal }, dispatch);
}
const mapStateToProps = state => {
  return { modalIsActive: state.modalIsActive };
};

const ModalMapComponent = (props) => {
  const _onClick = () => {
    console.log("Props:",props)
    props.showModal(false)
    navigate("/");
  }
  props?console.log(props):console.log("Funcionou")
  return (
    <div className={"modal-map-full "+(props.modalIsActive?'fadeIn':'fadeOut')}>
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
          <button className="modal-fliper-item" onClick={()=>buttonInteractive_onClick()}>Interativo</button>
          <button className="modal-fliper-item" onClick={()=>buttonInformation_onClick()}>Informações</button>
          <button className="modal-fliper-item" onClick={()=>buttonTravelGuide_onClick()}>Guia de Viagem</button>
        </div>
        <Router>
          <InteractiveContainer path="painel/country/brazil/interactive"/>
          <InformationContainer path="painel/country/brazil/information"/>
          <TravelGuideContainer path="painel/country/brazil/travelguide"/>
        </Router>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalMapComponent);