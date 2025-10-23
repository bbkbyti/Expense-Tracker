import React from 'react';
import Card from './Card';
import { formatCurrency } from '../utils/currency';
import "./Summary.css";

export default function Summary({ income, expense, balance }) {
    return (
        <div className="summary">
            <SummaryCard label="Total Income" value={income} tone="income" />
            <SummaryCard label="Total Expenses" value={expense} tone="expense" />
            <SummaryCard label="Balance" value={balance} tone={balance >= 0 ? "neutral" : "expense"} />
        </div>
    )
}

function SummaryCard({ label, value, tone }) {
    return (
        <Card>
            <div className="summary-card">
                <div className="summary-label">{label}</div>
                <div className={`summary-value ${tone}`}>{formatCurrency(value)}</div>
            </div>
        </Card>
    )
}
