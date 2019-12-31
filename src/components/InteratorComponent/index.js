import React from 'react';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InteratorComponent.css';

const dataExample = {
    dataSlug: [
        {index: 0, text: "Próxima Pagina", command: null},
        {index: 1, text: "Próxima Pagina", command: null},
        {index: 2, text: "Próxima Pagina", command: null},
        {index: 3, text: "Finalizar", command: function(){ console.log("Processo Finalizado") }},
    ],
    callback: function(page){
        console.log("Ativar pagina", page)
    }
}

const InteratorComponent = (props) => {
    return (
        <div className="painel-interator bg-color-p2-c1 bx-shadow-p2-c1">
            <div className="interator bg-color-p2-c1">
            <button className="element-pointer active"><FontAwesomeIcon icon={faCircle} /></button>
            <button className="element-pointer"><FontAwesomeIcon icon={faCircle} /></button>
            <button className="element-pointer"><FontAwesomeIcon icon={faCircle} /></button>
            <button className="element-pointer"><FontAwesomeIcon icon={faCircle} /></button>
            </div>
            <div className="content">
                <div className="text font-p1-c1">Next</div>
                <button className="circle-page">1</button>
            </div>
        </div>
    );
} 

export default InteratorComponent;