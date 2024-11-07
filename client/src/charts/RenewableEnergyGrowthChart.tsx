import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Sample Data for Renewable Energy Growth
const renewableGrowthData = [
  { year: 2018, renewableEnergy: 20 },
  { year: 2019, renewableEnergy: 25 },
  { year: 2020, renewableEnergy: 30 },
  { year: 2021, renewableEnergy: 35 },
  { year: 2022, renewableEnergy: 50 },
];

const RenewableEnergyGrowthChart = () => (
  <div className="chart-container">
    <AreaChart width={500} height={300} data={renewableGrowthData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="renewableEnergy" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </div>
);

export default RenewableEnergyGrowthChart;
