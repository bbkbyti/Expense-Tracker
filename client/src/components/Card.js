import React from 'react';
import "./Card.css";

export default function Card({ title, children, footer }) {
    return (
        <section className='card'>
            {title && (
                <div className='card-hd'>
                    <h2 className='card-title'>{title}</h2>
                </div>
            )}
            <div className='card-bd'>{children}</div>
            {footer && <div className='card-ft'>{footer}</div>}
        </section>
    )
}
