import React, { useEffect, useState } from 'react';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import { DEFAULT_CATEGORIES } from '../data/categories';
import { uid } from '../utils/id';
import "./TransactionForm.css";

export default function TransactionForm({ onAdd }) {
    const [kind, setKind] = useState("expense");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [note, setNote] = useState("");
    const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
    const [err, setErr] = useState("");

    useEffect(() => {
        const list = DEFAULT_CATEGORIES[kind] || ["Other"];
        if (!list.includes(category)) setCategory(list[0]);
    }, [kind]);

    function handleSubmit(e) {
        e.preventDefault();
        setErr("");
        const amt = parseFloat(String(amount).replace(/,/g, ""));
        if (Number.isNaN(amt) || amt <= 0) return setErr("Please enter an amount greater than 0!");
        if (!date) return setErr("Please select a date.");

        const tx = { id: uid(), kind, amount: Number(amt.toFixed(2)), category: category || "Other", note: note.trim(), date };
        onAdd(tx);
        setAmount("");
        setNote("");
    }

    const categories = DEFAULT_CATEGORIES[kind] || ["Other"];


    return (
        <form className='tx-form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='kind'>Type</label>
                <Select id="kind" value={kind} onChange={(e) => setKind(e.target.value)}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </Select>
            </div>

            <div>
                <label htmlFor='amount'>Amount</label>
                <Input id="amount" type="number" step="0.01" min="0" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" />
            </div>
            <div>
                <label htmlFor='category'>Category</label>
                <Select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    {categories.map((c) => (<option key={c} value={c}>{c}</option>))};
                </Select>
            </div>
            <div>
                <label htmlFor='date'>Date</label>
                <Input id="id" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='wide'>
                <label htmlFor='note'>Note (optional)</label>
                <Input id="note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g., Gas" />
            </div>

            <div className='wide row'>
                <Button type='submit'>Add</Button>
                {err && <p className='error'>{err}</p>}
            </div>
        </form>
    )
}
