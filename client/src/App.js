import React, { useMemo, useState } from "react";
import './index.css';
import Button from "./components/Button";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import useLocalStorage from "./hooks/useLocalStorage";
import TransactionList from "./components/TransactionList";
import EmptyState from "./components/EmptyState";

const LS_KEY = "et_transactions_v1";

function App() {
  const [transactions, setTransactions] = useLocalStorage(LS_KEY, []);

  const totals = useMemo(() => {
    const income = transactions.filter(t => t.kind === "income").reduce((s, t) => s + (t.amount || 0), 0);
    const expense = transactions.filter(t => t.kind === " expense").reduce((s, t) => s + (t.amount || 0), 0);
    return { income, expense, balance: income - expense };
  }, [transactions])

  const handleAdd = (tx) => setTransactions(prev => [tx, ...prev]);

  const handleClearAll = () => {
    if (window.confirm("This will remove all transactions. Continue?")) setTransactions([]);
  }
  return (
    <div className="app-root">
      <Header onClearAll={handleClearAll} />
      <main className="container">
        <Summary income={totals.income} expense={totals.expense} balance={totals.balance} />
        <div className="grid">
          <section className="left">
            <Card title="Add Transaction">
              <TransactionForm onAdd={handleAdd} />
            </Card>
          </section>
          <section className="right">
            <Card title="Transactions">
              {transactions.length === 0 ? (
                <EmptyState message="No Transaction yet. Add one to get started." />
              ) : (
                <TransactionList items={transactions} onDelete={(id) => setTransactions(prev => prev.filter(t => t.id !== id))} />
              )}
            </Card>
          </section>
        </div>
        <p className="note"> Your data is saved in your browser (local storage)</p>
      </main>
      <Footer />
    </div>
  );
}
export default App;
