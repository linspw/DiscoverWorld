import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal } from '../../redux/actions/modal_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';


class HeaderSection extends React.Component{
    _onClick = () => {
        console.log("Props:",this.props)
        console.log("Clickado")
        this.props.showModal(!this.props.modalIsActive)
    }
    render(){
        return(
            <div className="header-section">
                <FontAwesomeIcon icon={faDragon}/>
                <button className="button-primary bg-color-p2-c1" onClick={()=>this._onClick()}>Ola</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ showModal }, dispatch);
}
const mapStateToProps = state => ({
    modalIsActive: state.modalIsActive
});
export default connect(mapStateToProps, mapDispatchToProps)(HeaderSection);