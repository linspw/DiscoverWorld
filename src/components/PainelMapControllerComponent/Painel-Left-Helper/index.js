import React from 'react';
import './Painel-Left-Helper.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBed, faSubway, faFeather, faChartBar, faMap, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const PainelLeftHelper = (props) => {
    return(
        <>
            <div className="painel-left-helper bx-shadow-p2-c1">
                <button className="top"><FontAwesomeIcon icon={faChevronRight}/><FontAwesomeIcon icon={faChevronRight}/></button>
                <button className="item"><FontAwesomeIcon icon={faChartBar}/></button>
                <button className="item"><FontAwesomeIcon icon={faGlobeAmericas}/></button>
                <button className="item"><FontAwesomeIcon icon={faSubway}/></button>
                <button className="item"><FontAwesomeIcon icon={faFeather}/></button>
                <button className="item"><FontAwesomeIcon icon={faBed}/></button>
            </div>
        </>
    );
}

export default PainelLeftHelper;