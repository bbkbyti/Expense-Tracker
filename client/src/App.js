import React, { useMemo, useState } from "react";
import './index.css';
import Button from "./components/Button";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Summary from "./components/Summary";

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleClearAll = () => {
    if (window.confirm("This will remove all transactions. Continue?")) setTransactions([]);
  }
  return (
    <div className="app-root">
      <Header onClearAll={handleClearAll} />
      <main className="container">
        <Summary income={0} expense={0} balance={0} />
        <Card title="Welcome">
          <p>Transactions coming next</p>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
export default App;
