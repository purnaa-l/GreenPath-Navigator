const calculateCarbonFootprint = (data) => {
    const emissionFactors = {
      car: 0.23,
      bike: 0.05,
      walk: 0,
    };
  
    const carbonFromDriving =
      parseFloat(data.distanceDriven) * emissionFactors.car;
    const carbonFromBiking =
      parseFloat(data.distanceBiked) * emissionFactors.bike;
    const carbonFromWalking =
      parseFloat(data.distanceWalked) * emissionFactors.walk;
  
    const totalCarbon = carbonFromDriving + carbonFromBiking + carbonFromWalking;
  
    return { value: totalCarbon.toFixed(2) };
  };
  
  export const calculateCarbonFootprintController = (req, res) => {
    const { distanceDriven, distanceBiked, distanceWalked } = req.body;
  
    if (isNaN(distanceDriven) || isNaN(distanceBiked) || isNaN(distanceWalked)) {
      return res.status(400).json({ error: "All inputs must be numbers" });
    }
  
    const result = calculateCarbonFootprint({
      distanceDriven,
      distanceBiked,
      distanceWalked,
    });
  
    return res.status(200).json(result);
  };
  