import React from 'react'
import HeadBarInformation from '../../components/HeadBarComponent/HeadBarInformation'
import NavBar from '../../components/NavBar'

function DashboardPage() {
  return (
    <div className='dashboard'>
        <NavBar />
        <HeadBarInformation></HeadBarInformation>
    </div>
  )
}

export default DashboardPage