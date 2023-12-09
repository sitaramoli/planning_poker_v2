import React from 'react';
import './NoDataFound.scss';

const NoDataFound = ({ message }) => {
    return (
        <div className='no-data-found'>{message}</div>
    )
}

export default NoDataFound