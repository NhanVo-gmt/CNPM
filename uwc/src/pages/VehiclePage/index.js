import React from 'react'
import NavBar from '../../components/NavBar'
import VehicleInformationComponent from '../../components/VehicleInformation'

function VehiclePage() {
  return (
    <div className='vehicle'>
      <NavBar />
      Vehicle Page
      <VehicleInformationComponent>
        
      </VehicleInformationComponent>
    </div>
  )
}

export default VehiclePage