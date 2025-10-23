import React, { useMemo, useState } from 'react';
import Input from "./Input";
import Select from "./Select";
import TransactionRow from "./TransactionRow";
import "./TransactionList.css";


export default function TransactionList({ items, onDelete }) {
    const [filter, setFilter] = useState("all");
    const [q, setQ] = useState("");

    const filtered = useMemo(() => {
        const base = filter === "all" ? items : items.filter((t) => (filter === "income" ? t.kind === "income" : t.kind === "expense"));
        const ql = q.trim().toLowerCase();
        if (!ql) return base;
        return base.filter((t) =>
            [t.category, t.note, t.date, t.kind, String(t.amount)].some((v) => String(v).toLowerCase().includes(ql))
        );
    }, [items, filter, q]);
    return (
        <div className='tx-list'>
            <div className='tx-list-controls'>
                <Select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)} className="w-40">
                    <option value="all">All</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </Select>
                <Input id="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search..." />
            </div>

            <div className='table-wrap'>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th className='text-right'>Amount</th>
                            <th>Note</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((t) => (
                            <TransactionRow key={t.id} item={t} onDelete={onDelete} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
