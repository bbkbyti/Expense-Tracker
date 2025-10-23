import React from "react";
import './index.css';
import Button from "./components/Button";

function App() {
  return (
    <div className="app-root">
      <header className="app-header" style={{ background: "#fff", borderBottom: `1px solid var(--border)` }}>
        <div className="container row-spread">
          <h1 style={{ margin: 0 }}> Expense Tracker</h1>
        </div>
        <div className="row">
          <Button variant="ghost">Placeholder</Button>
        </div>
      </header>

      <main className="container">
        <p>TEST CONTAINER</p>
      </main>
    </div>
  );
}
export default App;
