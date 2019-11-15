import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { modalIsActive: state.modalIsActive };
  };
const ModalComponent = (props) => {
    return <div className="modal-full" style={{display: props ? 'block' : 'none' }}></div>;
}

export default connect(mapStateToProps)(ModalComponent);