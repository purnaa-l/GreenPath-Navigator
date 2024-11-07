import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Legend } from "recharts";

// Sample Data for Sustainability Goals
const sustainabilityGoals = [
  { subject: "CO₂ Emissions", A: 80, fullMark: 100 },
  { subject: "Renewable Energy", A: 90, fullMark: 100 },
  { subject: "Water Conservation", A: 70, fullMark: 100 },
  { subject: "Waste Reduction", A: 60, fullMark: 100 },
  { subject: "Sustainable Agriculture", A: 75, fullMark: 100 },
];

const SustainabilityGoalsRadarChart = () => (
  <div className="chart-container">
    <RadarChart outerRadius={90} width={500} height={500} data={sustainabilityGoals}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 100]} />
      <Radar name="Progress" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Tooltip />
      <Legend />
    </RadarChart>
  </div>
);

export default SustainabilityGoalsRadarChart;
