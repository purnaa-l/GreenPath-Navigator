import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

// Sample Data for Renewable Energy Breakdown
const energyData = [
  { name: "Solar", value: 40 },
  { name: "Wind", value: 35 },
  { name: "Hydropower", value: 15 },
  { name: "Non-Renewable", value: 10 },
];

// Colors for each pie slice
const COLORS = ["#ff7300", "#00c49f", "#ffbb28", "#d0ed57"];

const EnergySourcePieChart = () => (
  <div className="chart-container">
    <PieChart width={400} height={400}>
      <Pie
        data={energyData}
        cx="50%" cy="50%" innerRadius={60} outerRadius={80}
        fill="#8884d8" paddingAngle={5}
        dataKey="value"
      >
        {energyData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </div>
);

export default EnergySourcePieChart;
