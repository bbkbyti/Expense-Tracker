import React from 'react';
import './Input.css';

export default function Input({ id, type = 'text', value, onChange, placeholder, min, step, className = '' }) {
    return (
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            min={min}
            step={step}
            className={`input ${className}`}
        />
    );
}
