import React from 'react';
import Button from './Button';
import { formatCurrency } from '../utils/currency';
import './TransactionRow.css';

export default function TransactionRow({ item, onDelete }) {
    return (
        <tr>
            <td>{item.date}</td>
            <td><span className={`pill ${item.kind === "income" ? "pill-income" : "pill-expense"}`}>{item.kind}</span></td>
            <td>{item.category}</td>
            <td className={`text-right ${item.kind === "income" ? "t-income" : "t-expense"}`}>
                {item.kind === "income" ? "+" : "-"}{formatCurrency(item.amount)}
            </td>
            <td>{item.note || "_"}</td>
            <td className="text-right">
                <Button variant="danger" onClick={() => onDelete(item.id)}>Delete</Button>
            </td>
        </tr>
    )
}
