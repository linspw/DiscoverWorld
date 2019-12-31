import React from 'react';
import './Painel-Searcher.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const PainelSearcher = (props) => {
    return(
        <>
            <div className="painel-searcher bx-shadow-p2-c1">
                <input type="text" name="map-searcher"/><button className="search"><FontAwesomeIcon icon={faSearch}/></button>
            </div>
        </>
    );
}

export default PainelSearcher;