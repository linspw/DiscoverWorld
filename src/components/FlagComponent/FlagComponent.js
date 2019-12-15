import React from 'react';
import ReactCountryFlag from "react-country-flag";
import './FlagComponent.css';

const FlagComponent = () => {
    let wS = 3*4;
    let hS = 3*3;
    return (
        <div className="flag-modal-main bx-shadow-p2-c1">
            <ReactCountryFlag  code="br" styleProps={{ width: wS+"rem", height: hS+"rem" }} svg />
        </div>
    );
}

export default FlagComponent;