import React from 'react'
import { useState } from 'react';

import './FormInp.css'

export const FormInp = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, errorMessage, onChange, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

  return (
    <div className='formInp'>
        <label>{label}</label>
        <input {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
            }
            focused={focused.toString()}
        />
        <span>{errorMessage}</span>
    </div>
  )
}
