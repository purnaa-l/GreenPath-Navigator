import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Carbon_Img from "../assets/carbon-form.png";

function CarbonFootprintForm() {
  const [formData, setFormData] = useState({
    distanceDriven: "0",
    distanceBiked: "0",
    distanceWalked: "0",
  });
  const [carbonFootprint, setCarbonFootprint] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/carbon-footprint/calculate",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );

      // Check if the response is ok (status code 200-299)
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      // Try to parse the JSON response
      const data = await response.json();

      if (!data) {
        throw new Error("No data received from API");
      }

      setCarbonFootprint(data);
      console.log("Carbon footprint calculated:", data);
    } catch (error) {
      console.error("Error calculating carbon footprint:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-auto bg-lightSand p-4 overflow-auto">
      <div className="bg-yellow-50 p-8 rounded-xl shadow-xl w-full max-w-6xl flex flex-col lg:flex-row items-center lg:space-x-8">
        <div className="flex flex-col items-center mb-6 lg:mb-0">
          <img
            src={Carbon_Img}
            alt="Sustainability Icon"
            className="bg-white mx-auto mb-4 w-96 h-72 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-col w-full lg:w-2/3 space-y-6">
          <h2 className="text-3xl font-bold text-forestGreen text-center">
            Carbon Footprint Calculator
          </h2>
          <p className="text-lg text-mossGreen text-center">
            Calculate your carbon emissions based on daily activities.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8"
          >
            <div className="flex flex-col w-full lg:w-1/3 space-y-4">
              <label className="text-lg font-semibold text-forestGreen">
                Distance Driven (km)
              </label>
              <Input
                placeholder="0"
                type="number"
                onChange={(e) =>
                  setFormData({ ...formData, distanceDriven: e.target.value })
                }
                className="border-2 border-mossGreen rounded-lg p-3 w-full text-lg focus:ring-2 focus:ring-leafGreen transition duration-300"
              />
            </div>

            <div className="flex flex-col w-full lg:w-1/3 space-y-4">
              <label className="text-lg font-semibold text-forestGreen">
                Distance Biked (km)
              </label>
              <Input
                placeholder="0"
                type="number"
                onChange={(e) =>
                  setFormData({ ...formData, distanceBiked: e.target.value })
                }
                className="border-2 border-mossGreen rounded-lg p-3 w-full text-lg focus:ring-2 focus:ring-leafGreen transition duration-300"
              />
            </div>

            <div className="flex flex-col w-full lg:w-1/3 space-y-4">
              <label className="text-lg font-semibold text-forestGreen">
                Distance Walked (km)
              </label>
              <Input
                placeholder="0"
                type="number"
                onChange={(e) =>
                  setFormData({ ...formData, distanceWalked: e.target.value })
                }
                className="border-2 border-mossGreen rounded-lg p-3 w-full text-lg focus:ring-2 focus:ring-leafGreen transition duration-300"
              />
            </div>
          </form>

          <Button
            type="submit"
            onClick={handleSubmit}
            className={`w-full py-3 bg-forestGreen text-white rounded-lg hover:bg-leafGreen transition duration-300 mt-6 ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Calculating..." : "Calculate Carbon Footprint"}
          </Button>
        </div>
      </div>

      {carbonFootprint && (
        <div className="mt-8 p-6 bg-green-100 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold text-forestGreen">
            Your Carbon Footprint
          </h3>
          <p className="text-xl text-earthBrown mt-2">
            {carbonFootprint.value} kg CO2
          </p>
          <p className="text-md text-mossGreen mt-4">
            This is the estimated CO2 emissions based on your travel activities.
          </p>
        </div>
      )}
    </div>
  );
}

export default CarbonFootprintForm;
