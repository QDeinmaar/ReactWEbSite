import React, { useEffect, useState } from "react";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses =
      JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
  }, []);

  return (
    <main className="bg-gray-100 w-screen p-8">
      <h1 className="text-3xl font-bold mb-6 justify-center flex">Expenses</h1>

      {expenses.length === 0 ? (
        <p className="text-gray-500 flex justify-center">No expenses recorded yet.</p>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-3 text-sm text-gray-500">
                  Description
                </th>
                <th className="text-right px-6 py-3 text-sm text-gray-500">
                  Amount (€)
                </th>
              </tr>
            </thead>

            <tbody>
              {expenses.map((expense) => (
                <tr
                  key={expense.id}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  <td className="px-6 py-4 text-gray-700">
                    {expense.description || "—"}
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-gray-800">
                    €{expense.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default Expenses;

