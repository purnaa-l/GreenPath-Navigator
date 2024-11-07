import React from "react";
import "./Loader.css"; // Import custom styles

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
