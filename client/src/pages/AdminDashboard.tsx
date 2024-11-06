import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import AdminNavbar from "../components/AdminNavbar"; // Correct import
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts"; // Chart imports
import './AdminDashboard.css';
import EnergySourcePieChart from "@/charts/EnergySourcePieChart";
import SustainabilityGoalsRadarChart from "@/charts/SustainablityGoalsRadarChart";
import RenewableEnergyGrowthChart from "@/charts/RenewableEnergyGrowthChart";
import CarbonEmissionTreeMap from "@/charts/CarbonEmissionTreeMap";
import CO2EmissionReductionChart from "@/charts/CO2EmissionReductionChart";
import Loader from "@/components/Loader";

// Sample Data for the LineChart
const data = [
  { name: "June", uv: 3000, pv: 1398 },
  { name: "July", uv: 2000, pv: 9800 },
  { name: "August", uv: 2780, pv: 3908 },
  { name: "September", uv: 1890, pv: 4800 },
  { name: "October", uv: 2390, pv: 3800 },
  { name: "November", uv: 3490, pv: 4300 },
];

const AdminDashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(true);  // State to control loader visibility

  // Handle Date Change
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    // Simulate data loading or an API call
    setTimeout(() => {
      setLoading(false); // After 3 seconds, set loading to false
    }, 3000);
  }, []);

  return (
    loading ? (
      <Loader /> // Display loader while loading
    ) : (
      <div className="admin-dashboard-container">
        {/* Navbar */}
        <AdminNavbar /> {/* Correct Usage */}

        <div className="admin-content-container">
          {/* Main Content */}
          <div className="admin-main-content">
            {/* DatePicker Section */}
            <div className="date-picker-container">
              <h1 className="dashboard-title">GreenPath Admin Dashboard</h1>
              <div className="date-picker-section">
                <label className="date-picker-label">Select Date: </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MMMM d, yyyy"
                  className="date-picker-input"
                  maxDate={new Date()} // Disallow future dates
                />
              </div>
            </div>

            {/* Dashboard Cards */}
            <div className="sample">
              <div className="dashboard-card">
                <h3 className="card-title">Reduction in CO₂ Emissions</h3>
                <p className="card-percentage negative">-25%</p>
              </div>

              <div className="dashboard-card">
                <h3 className="card-title">Renewable Energy Deployment</h3>
                <p className="card-percentage positive">+15%</p>
              </div>

              <div className="dashboard-card">
                <h3 className="card-title">Energy Efficiency Improvements</h3>
                <p className="card-percentage positive">+8%</p>
              </div>

              <div className="dashboard-card">
                <h3 className="card-title">Carbon Footprint Reduction</h3>
                <p className="card-percentage negative">-32%</p>
              </div>
              <div className="dashboard-card">
                <h3 className="card-title">Cost Savings in Fuel Consumption</h3>
                <p className="card-percentage positive">+12%</p>
              </div>
            </div>

            {/* Chart Section with Text */}
            <div className="chart-section chart-one">
              <div className="chart-with-text">
                <div className="chart-container">
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                  </LineChart>
                </div>

                <div className="text-container">
                  <p>
                    <span className="highlight-text">Tracking Carbon Emissions</span> 
                    <main>A dynamic overview of carbon emissions from June to November.</main>
                  </p>
                  <p>
                    The <span className="highlight-text">blue line</span> illustrates the <strong>targeted amount</strong> of carbon emissions, while the 
                    <span className="highlight-text"> green line</span> shows the <strong>actual emissions</strong> over the same period.
                  </p>
                  <p>
                    Our goal is to reduce emissions by continuously monitoring the difference, aiming for a <span className="highlight-text">greener</span> future.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 - 2 Charts */}
            <div className="charts-row">
              <div className="chart-section">
                <h3 className="chart-title">CO2 Emission Reduction</h3>
                <CO2EmissionReductionChart />
              </div>
              <div className="chart-section">
                <h3 className="chart-title">Renewable Energy Growth</h3>
                <RenewableEnergyGrowthChart />
              </div>
            </div>

            {/* Row 3 - 2 Charts */}
            <div className="charts-row">
              <div className="chart-section">
                <h3 className="chart-title">Energy Sources Breakdown</h3>
                <EnergySourcePieChart />
              </div>
              <div className="chart-section">
                <h3 className="chart-title">Sustainability Goals</h3>
                <SustainabilityGoalsRadarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AdminDashboard;
