import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal } from '../../redux/actions/modal_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';



class HeaderSection extends React.Component{
    _onClick = () => {
        //console.log("Props:",this.props)
        //console.log("Clickado")
        this.props.showModal(!this.props.modalIsActive)
    }
    render(){
        return(
            <div className="header-section">
                <div className="bar-group">
                    <button className="btn-logo">DiscoverWorld <FontAwesomeIcon className="plane" color="#6266a9" icon={faPaperPlane}/></button>
                </div>
                <div className="bar-group">
                    <div className="title-bar">
                        Mapa global
                    </div>
                </div>
                <div className="bar-group">
                    <button className="button-menu-right bg-color-p2-c2">Login</button>
                    <button className="button-menu-right bg-color-p2-c1" onClick={()=>this._onClick()}><FontAwesomeIcon className="plane" color="#fff" icon={faBars}/> Menu</button>
                </div>
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