import React from "react";
import "./Select.css";

export default function Select({ id, value, onChange, children, className = "" }) {
    return (
        <select id={id} value={value} onChange={onChange} className={`select ${className}`}>
            {children}
        </select>
    );
}
