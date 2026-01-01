import React, { useState, useEffect } from "react";
import Card from "./Card";
import ExpenseChart from "./ExpenseChart";
import {
  CurrencyEuroIcon,
  BanknotesIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const Cards = () => {
  // Load expenses from localStorage
  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("expenses")) || [];
  });

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  // Save expenses whenever they change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (e) => {
    e.preventDefault();
    if (!amount) return;

    const newExpense = {
      id: Date.now(),
      amount: parseFloat(amount),
      description,
    };

    setExpenses([...expenses, newExpense]);
    setAmount("");
    setDescription("");
  };

  const resetExpenses = () => {
    setExpenses([]);
    localStorage.removeItem("expenses");
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const average = expenses.length ? total / expenses.length : 0;
  const last = expenses.length ? expenses[expenses.length - 1].amount : 0;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

      <div className="space-y-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Total Expenses"
            value={`€${total.toFixed(2)}`}
            icon={<CurrencyEuroIcon />}
          />
          <Card
            title="Last Expense"
            value={`€${last.toFixed(2)}`}
            icon={<BanknotesIcon />}
          />
          <Card
            title="Average Expense"
            value={`€${average.toFixed(2)}`}
            icon={<ChartBarIcon />}
          />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 w-full max-w-sm">
          <h2 className="text-lg font-semibold mb-4">Add Expense</h2>

          <form onSubmit={addExpense} className="flex flex-col gap-3">
            <input
              type="number"
              step="0.01"
              placeholder="Amount (€)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              placeholder="Description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <div className="flex gap-3 mt-2">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Add
              </button>

              <button
                type="button"
                onClick={resetExpenses}
                className="flex-1 bg-gray-200 py-2 rounded-lg hover:bg-gray-300"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      <ExpenseChart expenses={expenses} />
    </div>
  );
};

export default Cards;

