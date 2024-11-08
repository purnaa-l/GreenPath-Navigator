import { Button } from "@/components/ui/button";
import { useState } from "react";

const LandingPage = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    // Add more functionality here as needed
  };

  return (
    <div className="flex flex-col items-center bg-green-50 bg-opacity-25 min-h-screen p-8">
      {/* Hero Section */}
      <div className="bg-[rgba(255,255,255,0.50)]">
  <section className="text-center py-12">
    <h1 className="text-5xl font-bold  text-green-800 mb-4">
      Welcome to Green Path Navigator
    </h1>
    <p className="text-lg text-green-800 max-w-xl mx-auto">
      Your guide to sustainable and eco-friendly routes.
    </p>
  </section>
</div>

     
      {/* 3D Image Section */}
      <section className="mt-8">
        <img 
          src="https://map.philau.edu/maps/UMAP_2008082711625_3_2_2.jpg" 
          alt="3D Eco-Friendly Journey" 
          className="w-full max-w-lg mx-auto shadow-lg rounded-lg transform transition-transform duration-500 hover:scale-105" 
        />
        <p className="text-center text-green-900 mt-4">
          Discover the beauty of eco-friendly travel in 3D!
        </p>
      </section>

      {/* Call to Action */}
      <section className="mt-8">
        <Button onClick={handleClick} className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Get Started
        </Button>
        {clicked && <p className="text-green-900 mt-4">Thank you for joining the green path journey!</p>}
      </section>

      {/* Feature Sections */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        
  <div className="bg-white bg-opacity-75 shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-semibold text-green-700">Eco-Friendly routes</h2>
    <p className="text-gray-600 mt-2">
      Discover paths that minimize your carbon footprint.
    </p>
  </div>
  <div className="bg-white bg-opacity-75 shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-semibold text-green-700">Real-Time Navigation</h2>
    <p className="text-gray-600 mt-2">
      Find the most sustainable way to reach your destination.
    </p>
  </div>
  <div className="bg-white bg-opacity-75 shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-semibold text-green-700">Environmental Impact</h2>
    <p className="text-gray-600 mt-2">
      Track and improve your eco-footprint with every journey.
    </p>
  </div>
</section>
{/* Additional Campus Sustainability Programs */}
<section className="mt-12 max-w-5xl">
  <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
    Campus Sustainability Programs
  </h2>
  <div className="flex flex-col space-y-6">
    {/* Program 1 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-row">
      <img 
        src="https://schaeferwaste.com/wp-content/uploads/2021/08/AdobeStock_259789720-scaled.jpeg" 
        alt="Recycling Program" 
        className="w-40 h-40 object-cover"
      />
      <div className="p-4 flex-1">
        <h3 className="text-xl font-semibold text-green-700">Campus Recycling Initiative</h3>
        <p className="text-gray-600 mt-2">
          Join efforts to recycle waste and reduce campus litter.
        </p>
      </div>
    </div>

    {/* Program 2 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-row">
      <img 
        src="https://www.eriereader.com/image/scale/auto/auto/articles/047998_adobestock_198469856-med-thinapob.jpg" 
        alt="Solar Energy Program" 
        className="w-40 h-40 object-cover"
      />
      <div className="p-4 flex-1">
        <h3 className="text-xl font-semibold text-green-700">Solar Energy Initiative</h3>
        <p className="text-gray-600 mt-2">
          Harness solar energy to power parts of our campus facilities.
        </p>
      </div>
    </div>

    {/* Program 3 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-row">
      <img 
        src="https://www.suffolk.edu/-/media/suffolk/images/launch-point-boston/our-campus/2017/10/20171005_roofgarden_pg_95.jpg?la=en&hash=D6D7E8A9AD0FB9008BD3AA2E3BFBECD55D4FBACF" 
        alt="Community Garden Program" 
        className="w-40 h-40 object-cover"
      />
      <div className="p-4 flex-1">
        <h3 className="text-xl font-semibold text-green-700">Campus Community Garden</h3>
        <p className="text-gray-600 mt-2">
          Engage with sustainable agriculture and grow organic produce.
        </p>
      </div>
    </div>

    {/* New Program 4 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-row">
      <img 
        src="https://th.bing.com/th/id/OIP.ZxGGH9dYAR7kTcwXf-np9gHaE8?rs=1&pid=ImgDetMain" 
        alt="Water Conservation Program" 
        className="w-40 h-40 object-cover"
      />
      <div className="p-4 flex-1">
        <h3 className="text-xl font-semibold text-green-700">Water Conservation Initiative</h3>
        <p className="text-gray-600 mt-2">
          Reduce water usage on campus by installing low-flow fixtures and promoting water-saving practices.
        </p>
      </div>
    </div>

    {/* New Program 5 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-row">
      <img 
        src="https://www.mysoorunews.com/wp-content/uploads/2023/06/Workshop-pic.jpg" 
        alt="Tree Planting Program" 
        className="w-40 h-40 object-cover"
      />
      <div className="p-4 flex-1">
        <h3 className="text-xl font-semibold text-green-700">Campus Tree Planting Program</h3>
        <p className="text-gray-600 mt-2">
          Participate in tree planting events to create a greener and more beautiful campus.
        </p>
      </div>
    </div>

    {/* New Program 6 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-row">
      <img 
        src="https://th.bing.com/th/id/OIP.1G8SzVYGoYzYfEoATgtCzgAAAA?rs=1&pid=ImgDetMain" 
        alt="Bike to Campus Program" 
        className="w-40 h-40 object-cover"
      />
      <div className="p-4 flex-1">
        <h3 className="text-xl font-semibold text-green-700">Bike to Campus Program</h3>
        <p className="text-gray-600 mt-2">
          Encourage biking to campus by providing bike racks and organizing bike-to-campus days.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="mt-16 text-white-800">
        © 2024 Green Path Navigator. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
