import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { showModal } from '../../redux/actions/modal_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach, faCompass, faPassport, faTree, faPaperPlane, faMap, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import './PainelMapControllerComponent.css';

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ showModal }, dispatch);
}
const mapStateToProps = state => {
    return { modalIsActive: state.modalIsActive };
};


const PainelMapControllerComponent = (props) => {
    const _onClickMainButton = () => {
        console.log("Props:",props)
        props.showModal(!props.modalIsActive)
    }
    return (
        <div className="painel-map-controller">
            <button className="painel-map-item map-item-border map-item-border-left"><FontAwesomeIcon icon={faGlobeAmericas}/></button>
            <button className="painel-map-item map-item-border"><FontAwesomeIcon icon={faPassport}/></button>
            <button className="painel-map-item map-item-border"><FontAwesomeIcon icon={faMap}/></button>
            <div className="painel-map-item map-item-border logo">
                <button className="context bx-shadow-p2-c1" onClick={()=>_onClickMainButton()}><FontAwesomeIcon icon={faPaperPlane}/></button>
            </div>
            <button className="painel-map-item map-item-border"><FontAwesomeIcon icon={faUmbrellaBeach}/></button>
            <button className="painel-map-item map-item-border"><FontAwesomeIcon icon={faCompass}/></button>
            <button className="painel-map-item map-item-border-right"><FontAwesomeIcon icon={faTree}/></button>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(PainelMapControllerComponent);