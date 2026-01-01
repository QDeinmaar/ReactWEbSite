import { useEffect, useState } from "react";
import { CurrencyEuroIcon, BanknotesIcon, ChartBarIcon } from "@heroicons/react/24/outline";


export default function Stats() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(data);
  }, []);

  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
  const count = expenses.length;
  const average = count === 0 ? 0 : (total / count).toFixed(2);

  const highest =
    expenses.length > 0
      ? expenses.reduce((max, e) =>
          Number(e.amount) > Number(max.amount) ? e : max
        )
      : null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-8  w-screen justify-center flex">Insights 📈</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl ml-45">
        <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center space-x-2">
                <CurrencyEuroIcon  className="h-7 w-7 text-gray-500 flex-row"/>
                <p className="font-bold text-gray-500">Total Expenses</p>
            </div>
          <p className="text-2xl font-bold flex justify-center">{count}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center space-x-2">
                <BanknotesIcon className="h-7 w-7 text-gray-500 flex-row"/>
                <p className="font-bold text-gray-500">Average Expense</p>
            </div>
          <p className="text-2xl font-bold justify-center flex">{average} euro</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="font-bold text-gray-500">Highest Expense</p>
          {highest ? (
            <>
              <p className="font-semibold">{highest.title || "Expense"}</p>
              <p className="text-xl font-bold">{highest.amount} euro</p>
            </>
          ) : (
            <p className="text-gray-400">No data</p>
          )}
        </div>
      </div>

      {count > 0 && (
        <p className="mt-6 text-gray-600 justify-center flex">
          💡 You spend on average <strong>{average} euro, </strong> per expense.
        </p>
      )}
    </div>
  );
}
