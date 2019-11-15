import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { showModal } from '../../redux/actions/modal_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './ModalComponent.css';

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({ showModal }, dispatch);
}
const mapStateToProps = state => {
  return { modalIsActive: state.modalIsActive };
};

const ModalComponent = (props) => {
  const _onClick = () => {
    console.log("Props:",props)
    props.showModal(!props.modalIsActive)
  }
  props?console.log(props):console.log("Funcionou")
  return (
    <div className={"modal-full "+(props.modalIsActive?'fadeIn':'fadeOut')} /*style={{display: props.modalIsActive ? 'block' : 'none' }}*/>
      <button className="button-modal-close bg-color-p2-c1 bx-shadow-p2-c1" onClick={()=>_onClick()}><FontAwesomeIcon icon={faTimes} /></button>
      <div className="painel-interator bg-color-p2-c1 bx-shadow-p2-c1">
        <div className="interator bg-color-p2-c1"><div className="blank left"></div><div className="main bg-color-p2-c1"></div><div className="blank right"></div></div>
        <div className="content"></div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);