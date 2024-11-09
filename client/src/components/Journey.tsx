import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirecting to map page

// Define types for static data
interface BusRoute {
  name: string;
  time: string;
  pickup: string;
}

interface SustainableData {
  energySaved: string;
  co2Reduced: string;
  path: string;
}

const GreenpathNavigator: React.FC = () => {
  const navigate = useNavigate();

  // Static data for buildings and routes
  const buildings = ["CSE", "ECE", "EEE", "CIVIL", "MECH"];
  const routes = {
    bikeSharing: ["CSE to EEE", "CSE to CIVIL", "ECE to MECH", "EEE to CSE"],
    campusBus: [
      { name: "CSE Bus", time: "08:00 AM", pickup: "CSE Station" },
      { name: "ECE Bus", time: "08:30 AM", pickup: "ECE Station" },
      { name: "MECH Bus", time: "09:00 AM", pickup: "MECH Station" },
    ],
    sustainablePaths: ["CSE to EEE", "ECE to MECH", "EEE to CIVIL", "CSE to CIVIL"],
    campusBike: ["Bike Station 1", "Bike Station 2", "Bike Station 3"],
  };

  // Static data for sustainable paths and CO2 reductions
  const sustainableData: SustainableData[] = [
    { energySaved: "5 kWh", co2Reduced: "3.5 kg", path: "CSE to EEE" },
    { energySaved: "10 kWh", co2Reduced: "7 kg", path: "ECE to MECH" },
    { energySaved: "15 kWh", co2Reduced: "10 kg", path: "EEE to CIVIL" },
    { energySaved: "20 kWh", co2Reduced: "13 kg", path: "CSE to CIVIL" },
    { energySaved: "25 kWh", co2Reduced: "18 kg", path: "CSE to EEE" },
    { energySaved: "30 kWh", co2Reduced: "20 kg", path: "ECE to MECH" },
  ];

  // Data for users
  const bikers = ["Ravi", "Arun", "Pooja", "Neha", "Vikas"];
  const waitingBikers = [...bikers]; // Users waiting for bike
  const readyBikers = ["Manoj", "Priya", "Ashok"]; // Users ready for bike

  // States
  const [source, setSource] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [urgency, setUrgency] = useState<string>("no");
  const [hasVehicle, setHasVehicle] = useState<string>("no");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [finalChoices, setFinalChoices] = useState<{ label: string; action: string }[]>([]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urgency === "no" && hasVehicle === "no") {
      navigate("/map"); // Redirect to map page if no urgency and no vehicle
      return;
    }
    setFinalChoices([]);
    showOptions();
  };

  const showOptions = () => {
    let options = [];
    if (urgency === "no" && hasVehicle === "yes") {
      options = [
        { label: "Walk to Destination", action: "walk" },
        { label: "Lend your vehicle for bike sharing", action: "lend" },
      ];
    } else if (urgency === "yes" && hasVehicle === "no") {
      options = [
        { label: "Show available bus routes", action: "busRoutes" },
        { label: "Show available bikers", action: "bikers" },
      ];
    } else if (urgency === "yes" && hasVehicle === "yes") {
      options = [
        { label: "Travel alone", action: "travelAlone" },
        { label: "Willing to share bike with another user", action: "shareBike" },
      ];
    }
    setFinalChoices(options);
  };

  const handleOptionSelect = (action: string) => {
    setSelectedOption(action);
  };

  const renderFurtherOptions = () => {
    if (selectedOption === "busRoutes") {
      return (
        <div className="space-y-4 mt-6">
          <h3 className="text-xl font-semibold mb-2">Available Bus Routes</h3>
          {routes.campusBus.map((bus, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
              <p><strong>{bus.name}</strong></p>
              <p>Timings: {bus.time}</p>
              <p>Pickup: {bus.pickup}</p>
            </div>
          ))}
        </div>
      );
    } else if (selectedOption === "bikers") {
      return (
        <div className="space-y-4 mt-6">
          <h3 className="text-xl font-semibold mb-2">Available Bikers</h3>
          <ul className="list-disc pl-6">
            {bikers.map((biker, index) => (
              <li key={index}>{biker}</li>
            ))}
          </ul>
        </div>
      );
    } else if (selectedOption === "walk") {
      return (
        <div className="space-y-4 mt-6">
          <h3 className="text-xl font-semibold mb-2">Sustainable Path</h3>
          <div className="bg-green-100 p-6 rounded-md shadow-md">
            <p>Your path is sustainable! 🌱</p>
            <p>Energy Saved: {getWalkingPathData().energySaved}</p>
            <p>CO₂ Reduced: {getWalkingPathData().co2Reduced}</p>
            <p>Keep up the good work! You're making a big difference. 💚</p>
          </div>
        </div>
      );
    } 
    else if (selectedOption === "lend") {
      return (
        <div className="space-y-4 mt-6">
          <h3 className="text-xl font-semibold mb-2">Sustainable Path</h3>
          <div className="bg-green-100 p-6 rounded-md shadow-md">
            <p>Your path is sustainable! 🌱</p>
            <p>Energy Saved: {getBikingPathData().energySaved}</p>
            <p>CO₂ Reduced: {getBikingPathData().co2Reduced}</p>
            <p>Keep up the good work! You're making a big difference. 💚 We hope you will try walking next time! </p>
          </div>
        </div>
      );
    }
    else if (selectedOption === "travelAlone" || selectedOption === "shareBike") {
      return (
        <div className="space-y-4 mt-6">
          <h3 className="text-xl font-semibold mb-2">Bike Sharing Options</h3>
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <p>{selectedOption === "travelAlone" ? "Travel alone" : "Willing to share bike"}</p>
          </div>
        </div>
      );
    }
  };

  const getWalkingPathData = (): SustainableData => {
    // Ensure the walking path always has more energy saved and CO2 reduced
    return {
      energySaved: "20 kWh",
      co2Reduced: "0.05 kg",
      path: "Walk to Destination",
    };
  };

  const getBikingPathData=(): SustainableData => {
    return{
      energySaved: "11 kWh",
      co2Reduced: "0.02 kg",
      path: "Bike to Destination",
    };
  };

  const getRandomSustainableData = (): SustainableData => {
    // Randomly select data from sustainable data
    return sustainableData[Math.floor(Math.random() * sustainableData.length)];
  };

  const renderBikerPairing = () => {
    if (waitingBikers.length > 0 && readyBikers.length > 0) {
      const waitingBiker = waitingBikers[Math.floor(Math.random() * waitingBikers.length)];
      const readyBiker = readyBikers[Math.floor(Math.random() * readyBikers.length)];
      return (
        <div className="bg-yellow-100 p-6 rounded-md shadow-md mt-6">
          <h3 className="text-xl font-semibold">Biker Pairing</h3>
          <p>{waitingBiker} is waiting for a bike. {readyBiker} is ready for a bike!</p>
          <p>They have been paired for bike sharing! 🚴‍♂️🚴‍♀️</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">New Journey</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Choose Source</label>
          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Source</option>
            {buildings.map((building, index) => (
              <option key={index} value={building}>
                {building}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Choose Destination</label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            disabled={!source} // Disable if no source is selected
          >
            <option value="">Select Destination</option>
            {buildings
              .filter((building) => building !== source) // Filter out source from destination
              .map((building, index) => (
                <option key={index} value={building}>
                  {building}
                </option>
              ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Urgency</label>
          <div className="flex items-center">
            <input
              type="radio"
              id="urgentYes"
              name="urgency"
              value="yes"
              checked={urgency === "yes"}
              onChange={() => setUrgency("yes")}
              className="mr-2"
            />
            <label htmlFor="urgentYes" className="mr-4">Yes</label>
            <input
              type="radio"
              id="urgentNo"
              name="urgency"
              value="no"
              checked={urgency === "no"}
              onChange={() => setUrgency("no")}
              className="mr-2"
            />
            <label htmlFor="urgentNo">No</label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Do you have a vehicle?</label>
          <div className="flex items-center">
            <input
              type="radio"
              id="vehicleYes"
              name="vehicle"
              value="yes"
              checked={hasVehicle === "yes"}
              onChange={() => setHasVehicle("yes")}
              className="mr-2"
            />
            <label htmlFor="vehicleYes" className="mr-4">Yes</label>
            <input
              type="radio"
              id="vehicleNo"
              name="vehicle"
              value="no"
              checked={hasVehicle === "no"}
              onChange={() => setHasVehicle("no")}
              className="mr-2"
            />
            <label htmlFor="vehicleNo">No</label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>

      <div className="mt-6">
        {finalChoices.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Choose an Option:</h3>
            {finalChoices.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option.action)}
                className="bg-gray-100 p-4 rounded-md shadow-md w-full text-left"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {renderFurtherOptions()}
        {renderBikerPairing()}
      </div>
    </div>
  );
};

export default GreenpathNavigator;