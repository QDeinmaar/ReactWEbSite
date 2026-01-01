import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const ExpenseChart = ({ expenses }) => {
  const data = expenses.map((e, index) => ({
    name: `#${index + 1}`,
    amount: e.amount,
  }));

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 h-80">
      <h2 className="text-lg font-semibold mb-4">Expenses Over Time</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="amount"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
