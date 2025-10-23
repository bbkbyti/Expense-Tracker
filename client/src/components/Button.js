import React from 'react';
import "./Button.css";

export default function Button({ type = "button", variant = "primary", className = "", children, ...rest }) {
    return (
        <button type={type} className={`btn btn-${variant} ${className}`} {...rest}>
            {children}
        </button>
    )
}
