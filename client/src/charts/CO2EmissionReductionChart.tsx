import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Sample Data for CO₂ Emission Reduction Over Time
const co2Data = [
  { year: 2020, co2Reduction: 10 },
  { year: 2021, co2Reduction: 15 },
  { year: 2022, co2Reduction: 20 },
  { year: 2023, co2Reduction: 25 },
  { year: 2024, co2Reduction: 30 },
];

const CO2EmissionReductionChart = () => (
  <div className="chart-container">
    <BarChart width={500} height={300} data={co2Data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="co2Reduction" fill="#8884d8" />
    </BarChart>
  </div>
);

export default CO2EmissionReductionChart;
