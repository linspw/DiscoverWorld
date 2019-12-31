import React from 'react';
import ReactCountryFlag from "react-country-flag";
import './FlagComponent.css';

const FlagComponent = () => {
    let wS = 1*4;
    let hS = 1*3;
    return (
        <div className="flag-modal-main">
            <ReactCountryFlag  code="br" styleProps={{ width: wS+"rem", height: hS+"rem" }} svg />
        </div>
    );
}

export default FlagComponent;