import React from 'react';
import './index.css';

const LoadingButton = (props) => {
    return (
        <button onClick={props.onClick} type='button'>
            {props.loading ? <div className='loader' /> : props.label} 
        </button>
    );
};

export default LoadingButton;