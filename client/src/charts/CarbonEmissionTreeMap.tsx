import React from "react";
import { Treemap, Tooltip } from "recharts";

// Sample Data for Carbon Emissions Reduction
const carbonData = [
  {
    name: "Transportation",
    children: [
      { name: "Electric Vehicles", value: 400 },
      { name: "Public Transport", value: 250 },
    ]
  },
  {
    name: "Buildings",
    children: [
      { name: "Energy Efficient Appliances", value: 300 },
      { name: "Solar Panels", value: 200 },
    ]
  },
  {
    name: "Agriculture",
    children: [
      { name: "Sustainable Farming", value: 150 },
      { name: "Plant-Based Diets", value: 100 },
    ]
  },
];

const CarbonEmissionTreeMap = () => (
  <div className="chart-container">
    <Treemap
      width={600}
      height={400}
      data={carbonData}
      dataKey="value"
      stroke="#fff"
      fill="#82ca9d"
    >
      <Tooltip />
    </Treemap>
  </div>
);

export default CarbonEmissionTreeMap;
