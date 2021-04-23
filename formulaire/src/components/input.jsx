import React, { Component } from 'react';

const Input = ({ name, value, onChange, label }) => {
    return (
        <div>

            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                className="form-control"
                id={name}
                placeholder={label}
                value={value}
                onChange={onChange}
                name={name}
            />

        </div>

    )
    
}

export default Input;