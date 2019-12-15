import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

var divStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', zIndex: '1000'
}
const LoadingSpinner = (props) => {
    return(
        <div style={divStyle}>
            <Loader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100}
            />
        </div>
    );
}

export default LoadingSpinner;