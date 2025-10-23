import React from 'react';
import Button from './Button';
import "./Header.css"

export default function Header({ onClearAll }) {
    return (
        <header className='app-header'>
            <div className='container row-spread'>
                <h1 className='brand'>Expense Tracker</h1>
                <div className='row'>
                    <Button variant='ghost' onClick={onClearAll}>Clear All</Button>
                </div>
            </div>
        </header>
    )
}
