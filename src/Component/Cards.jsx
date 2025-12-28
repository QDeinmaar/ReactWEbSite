import React, { useState } from "react";
import Card from "./Card";
import { ChartBarIcon, CurrencyEuroIcon, BanknotesIcon } from "@heroicons/react/24/outline";


const Cards = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const newExpense = (e) => {
    e.preventDefault();
    if (!amount) return;

    const expense = {
      amount: parseFloat(amount),
      description: description
    };

    setExpenses([...expenses, expense]);
    setAmount("");
    setDescription("");
  };

  const Resetexpense = () => {

    setExpenses([]);
    setAmount(0);
    setDescription("");
  }

  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="flex flex-row items-start gap-6 flex-wrap">

      <Card
        title="Total Expenses"
        value={`€${totalExpenses.toFixed(2)}`}
        icon={<CurrencyEuroIcon className="flex w-6 h-6 text-gray-700" />}
      />

      <Card
        title="Last Expense"
        value={expenses.length > 0 ? `€${expenses[expenses.length - 1].amount}` : "€0.00"}
        icon= {<BanknotesIcon className="flex w-6 h-6 text-gray-700" />}
      />

      <Card
        title="Average Expense"
        value={expenses.length > 0 ? `€${(totalExpenses / expenses.length).toFixed(2)}` : "€0.00"}
        icon={<ChartBarIcon className="flex w-6 h-6 text-gray-700" />}
      />

      <form onSubmit={newExpense} className="flex flex-col gap-3 mt-4 w-64">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded w-full"
          step="0.01"
        />
        <input
          type="text"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <div>
            <button
                type="submit"
                className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
             >
                Add Expense
            </button>

            <button 
                    type="button"
                    onClick={Resetexpense}
                    className="ml-4 bg-green-600 text-white p-2 rounded hover:bg-green-700"
                >
                Reset
            </button>
        </div>
      </form>
    </div>
  );
};

export default Cards;
