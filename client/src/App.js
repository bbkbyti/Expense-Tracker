import React, { useMemo, useState } from "react";
import './index.css';
import Button from "./components/Button";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleClearAll = () => {
    if (window.confirm("This will remove all transactions. Continue?")) setTransactions([]);
  }
  return (
    <div className="app-root">
      <Header onClearAll={handleClearAll} />
      <main className="container">
        <Card title="Welcome">
          <p>Adding Features</p>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
export default App;
