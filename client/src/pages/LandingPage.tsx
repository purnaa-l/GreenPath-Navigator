import { Button } from "@/components/ui/button";
import { useState } from "react";

const LandingPage = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    // Add more functionality here as needed
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-5xl font-extrabold text-green-800 mb-4 tracking-wide">
          Welcome to Green Path Navigator
        </h1>
        <p className="text-xl text-green-800 max-w-xl mx-auto leading-relaxed">
          Your guide to sustainable and eco-friendly routes, helping you travel
          with a minimal carbon footprint.
        </p>
      </div>

      {/* 3D Image Section */}
      <section className="mt-8 relative">
        <div className="relative w-full max-w-lg mx-auto">
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-xl"></div>
          {/* Image */}
          <img
            src="https://map.philau.edu/maps/UMAP_2008082711625_3_2_2.jpg"
            alt="3D Eco-Friendly Journey"
            className="w-full max-w-lg mx-auto shadow-xl rounded-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-3"
          />
        </div>
        <p className="text-center text-green-900 mt-4 text-lg">
          Discover the beauty of eco-friendly travel in 3D!
        </p>
      </section>

      {/* Call to Action */}
      <section className="mt-8">
        <Button
          onClick={handleClick}
          className="px-8 py-4 bg-green-600 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:bg-green-700 hover:scale-105"
        >
          Get Started
        </Button>
        {clicked && (
          <p className="text-green-900 mt-4 text-lg transition-opacity duration-500 opacity-100">
            Thank you for joining the green path journey!
          </p>
        )}
      </section>

      {/* Feature Sections */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          "Eco-Friendly routes",
          "Real-Time Navigation",
          "Environmental Impact",
        ].map((feature, idx) => (
          <div
            key={idx}
            className="bg-white bg-opacity-80 shadow-xl rounded-lg p-6 transform transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-green-700">{feature}</h2>
            <p className="text-gray-600 mt-2">
              {idx === 0
                ? "Discover paths that minimize your carbon footprint."
                : idx === 1
                ? "Find the most sustainable way to reach your destination."
                : "Track and improve your eco-footprint with every journey."}
            </p>
          </div>
        ))}
      </section>

      {/* Additional Campus Sustainability Programs */}
      <section className="mt-12 max-w-5xl">
        <h2 className="text-3xl font-extrabold text-green-800 mb-6 text-center">
          Campus Sustainability Programs
        </h2>
        <div className="flex flex-col space-y-6">
          {[
            {
              title: "Campus Recycling Initiative",
              img: "https://schaeferwaste.com/wp-content/uploads/2021/08/AdobeStock_259789720-scaled.jpeg",
              desc: "Join efforts to recycle waste and reduce campus litter.",
            },
            {
              title: "Solar Energy Initiative",
              img: "https://www.eriereader.com/image/scale/auto/auto/articles/047998_adobestock_198469856-med-thinapob.jpg",
              desc: "Harness solar energy to power parts of our campus facilities.",
            },
            {
              title: "Campus Community Garden",
              img: "https://www.suffolk.edu/-/media/suffolk/images/launch-point-boston/our-campus/2017/10/20171005_roofgarden_pg_95.jpg?la=en&hash=D6D7E8A9AD0FB9008BD3AA2E3BFBECD55D4FBACF",
              desc: "Engage with sustainable agriculture and grow organic produce.",
            },
            {
              title: "Water Conservation Initiative",
              img: "https://th.bing.com/th/id/OIP.ZxGGH9dYAR7kTcwXf-np9gHaE8?rs=1&pid=ImgDetMain",
              desc: "Reduce water usage on campus by installing low-flow fixtures and promoting water-saving practices.",
            },
            {
              title: "Campus Tree Planting Program",
              img: "https://www.mysoorunews.com/wp-content/uploads/2023/06/Workshop-pic.jpg",
              desc: "Participate in tree planting events to create a greener and more beautiful campus.",
            },
            {
              title: "Bike to Campus Program",
              img: "https://th.bing.com/th/id/OIP.1G8SzVYGoYzYfEoATgtCzgAAAA?rs=1&pid=ImgDetMain",
              desc: "Encourage biking to campus by providing bike racks and organizing bike-to-campus days.",
            },
          ].map((program, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-row transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={program.img}
                alt={program.title}
                className="w-40 h-40 object-cover"
              />
              <div className="p-4 flex-1">
                <h3 className="text-xl font-semibold text-green-700">
                  {program.title}
                </h3>
                <p className="text-gray-600 mt-2">{program.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
