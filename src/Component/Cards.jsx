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
    <div>
      <div className="flex flex-row items-start gap-6 flex-wrap mt-8 space-x-12">
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

      </div>
    <div className="grid place-items-center mt-10"> 
      <form onSubmit={newExpense} className="flex flex-col gap-3  w-64">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded p-2 w-full"
          step="0.01"
        />
        <input
          type="text"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <div className="flex ml-10">
            <button
                type="submit"
                className="bg-gray-500 text-black font-bold p-2 rounded hover:bg-gray-600"
             >
                Add Expense
            </button>

            <button 
                    type="button"
                    onClick={Resetexpense}
                    className="ml-4 bg-gray-500 text-black font-bold p-2 rounded hover:bg-gray-600"
                >
                Reset
            </button>
        </div>
      </form>
  </div>  
    </div>
  );
};

export default Cards;
