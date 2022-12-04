import React from 'react'
import HeadBarInformation from '../../components/HeadBarComponent/HeadBarInformation'
import NavBar from '../../components/NavBar'
import { SingleBoxContainer } from './styled.ts'

const objArray = [
  {
    static: "20",
    content: "Total Employees",
    color: "DarkCyan"
  },{
    static: "15",
    content: "Total Vehical",
    color: "DarkOliveGreen"
  },{
    static: "30",
    content: "Total MCPs",
    color: "GoldenRod"
  },{
    static: "80%",
    content: "Satisfaction",
    color: "Pink"
  },{
    static: "+",
    content: "Add more to track",
    color:"darksalmon"
  }]

function DashboardPage() {
  
  const arrayToDisplay = objArray.map((element,index)=>{
    return(
      <div style={{padding:"40px"}}>
        <SingleBoxContainer backgroundColor={element.color}>
          <div style={{fontSize:`${element.static=== "+"? "xxx-large":"x-large"}`,fontFamily:"inherit",marginBottom:"10px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",backgroundColor:'white', width:"80px",height:"80px"}}>
            <div>{element.static}</div>
          </div>
          {element.content}
        </SingleBoxContainer>
      </div>
    )
  })

  
  return (
    <div className='dashboard' style={{fontFamily:"Poppins"}}>
        <NavBar />
        <HeadBarInformation/>
        
        <div style={{display:"flex", flexWrap:"wrap", marginLeft:"250px"}}>
          {arrayToDisplay}
        </div>
    </div>
  )
}

export default DashboardPage