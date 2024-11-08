import CarbonFootprintForm from "@/components/CarbonFootPrint";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Carbon_Img1 from "../assets/carbon1.jpg";
import Carbon_Img2 from "../assets/carbon2.jpg";
import Carbon_Img3 from "../assets/carbon3.gif";

const CarbonFootprintPage = () => {
  return (
    <div className="space-y-10">
      <CarbonFootprintForm />

      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-center text-forestGreen">
          Learn About Carbon Footprint
        </h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card className="flex flex-col items-center p-6 shadow-lg rounded-lg">
            <img
              src={Carbon_Img1}
              alt="Carbon Footprint"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-forestGreen">
              What is Carbon Footprint?
            </h3>
            <p className="text-md text-mossGreen">
              A carbon footprint is the amount of carbon dioxide (CO2) and other
              greenhouse gases emitted due to human activities. It includes
              transportation, energy consumption, food production, and more.
            </p>
            <Button className="bg-forestGreen text-white mt-4 w-full hover:bg-leafGreen">
              Learn More
            </Button>
          </Card>

          {/* Card 2 */}
          <Card className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
            <img
              src={Carbon_Img2}
              alt="Impact of Carbon Footprint"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-forestGreen">
              Impact of Carbon Footprint
            </h3>
            <p className="text-md text-mossGreen">
              Carbon emissions contribute to global warming and climate change.
              They lead to rising temperatures, extreme weather events, and loss
              of biodiversity. Reducing carbon emissions is critical to
              mitigating climate change.
            </p>
            <Button className="bg-forestGreen text-white mt-4 w-full hover:bg-leafGreen">
              Learn More
            </Button>
          </Card>

          {/* Card 3 */}
          <Card className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
            <img
              src={Carbon_Img3}
              alt="Reducing Carbon Footprint"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-forestGreen">
              Reducing Your Carbon Footprint
            </h3>
            <ul className="list-disc list-inside text-mossGreen space-y-2">
              <li>Use public transport or carpool.</li>
              <li>Choose walking or biking for short distances.</li>
              <li>Switch to energy-efficient appliances.</li>
              <li>Reduce waste by recycling and composting.</li>
            </ul>
            <Button className="bg-forestGreen text-white mt-4 w-full hover:bg-leafGreen">
              Learn More
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CarbonFootprintPage;
