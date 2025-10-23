import React from 'react'
import "./EmptyState.css";

export default function EmptyState({ message = "Nothing here yet..." }) {
    return (
        <div className='empty'>
            <div className='empty-icon' aria-hidden>💸</div>
            <p className='empty-text'>{message}</p>
        </div>
    )
}
