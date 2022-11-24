import React from "react";
import NavBar from "../../components/NavBar";
import VehicleInformationComponent from "../../components/VehicleInformation";

function VehiclePage() {
  return (
    <div className="vehicle">
      <NavBar />
      <VehicleInformationComponent />
    </div>
  );
}

export default VehiclePage;
