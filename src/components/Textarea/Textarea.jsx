import React from 'react';
import './Textarea.scss';

const Textarea = ({ name, label, error, ...rest }) => {
    return (
        <div className='textarea'>
            <label className='textarea__label' htmlFor={name}>{label}</label>
            <textarea name={name} id={name} cols="30" rows="5" {...rest}></textarea>
            {error && <span className='textarea__error'>{error}</span>}
        </div>
    )
}

export default Textarea;