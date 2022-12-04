import React from "react";
import NavBar from "../../components/NavBar";
import VehicleInformationComponent from "../../components/VehicleInformation";
import HeadBarInformation from "../../components/HeadBarComponent/HeadBarInformation";
import { Container, SingleNumber } from "../WorkerPage/styled.ts";
import { useNavigate } from "react-router-dom";




const vehicleArray = [
  {
    id : "111000",
    type : "Front Loader Garbage Trucks",
    status : "Assigned"
  },{
    id : "111001",
    type : "Side Loader Garbage Trucks",
    status : "Assigned"
  },{
    id : "111002",
    type : "Rear Loader Garbage Trucks",
    status : "Assigned"
  },{
    id : "111003",
    type : "Roll Off Trucks",
    status : "Not Assigned"
  },{
    id : "111004",
    type : "Side Loader Garbage Trucks",
    status : "Not Assigned"
  },{
    id : "111005",
    type : "Roll Off Trucks",
    status : "Not Assigned"
  },{
    id : "111006",
    type : "Front Loader Garbage Trucks",
    status : "Not assigned"
  }
]









function VehiclePage() {

  const navigate= useNavigate()

  const arrayToDisplay = vehicleArray.map((element)=>{
    return(
      // <div style={{display:"flex", borderBottom:"solid", borderLeft:"solid", borderRight:"solid",borderRadius:"10px", width:"100%"}}>
      <div onClick={()=>{navigate("/vehicle/singleVehicle")}}>
      <Container>
        <div style={{width:"20%", height:"50px",display:"flex", alignItems:"center"}}>
          <div style={{paddingLeft:"10px"}}>
            {element.id}
          </div>
        </div>
        <div style={{width:"40%", height:"50px",display:"flex", alignItems:"center"}}>
          <div>
            {element.type}
          </div>
        </div>
        <div style={{width:"20%", height:"50px",display:"flex", alignItems:"center"}}>
          <div>
            {element.status}
          </div>
        </div>
        <div style={{width:"150px",height:"50px", display:"flex"}}>
          <div style={{display:"flex", alignItems:"center"}}>
            <div style={{backgroundImage:"url(https://cdn-icons-png.flaticon.com/512/32/32355.png)", width:"30px", height:"30px", backgroundSize:"cover", marginRight:"10px", cursor:"pointer"}}></div>
          </div>
          <div style={{display:"flex", alignItems:"center"}}>
            <div style={{backgroundImage:"url(https://cdn-icons-png.flaticon.com/512/1345/1345874.png)", width:"30px", height:"30px", backgroundSize:"cover", marginRight:"10px", cursor:"pointer"}}></div>
          </div>
          <div style={{display:"flex", alignItems:"center"}}>
            <div style={{backgroundImage:"url(https://cdn-icons-png.flaticon.com/512/14/14558.png)", width:"30px", height:"30px", backgroundSize:"cover", marginRight:"10px", cursor:"pointer"}}></div>
          </div>
        </div>
      </Container>
      </div>
    )})


    const paginationList = ["1","2","3","4","...","8","9"].map((element)=>{
    
      if (element==="9"){
        return(
        <SingleNumber style={{border:"solid","width":"20px", "height":"20px",
        "border":"solid",
        "borderWidth":"thin",
        "borderRadius":"5px",
        "display":"flex",
        "justifyContent":"center",
        "cursor":"pointer",
        "alignItems":"center"}}>{element}</SingleNumber>
        )
      }
      else{
        return(
         <SingleNumber>{element}</SingleNumber>
        )
      }
    })

  return (
    <div className="vehicle" style={{position:"relative", fontFamily:"Poppins"}}>
      <NavBar />
      <HeadBarInformation/>

      <div style={{display:"flex",justifyContent:"center", padding:"10px 0px", fontSize:"xx-large"}}>
        <div>VEHICLE INFOMATION</div>
      </div>
      <div style={{display:"flex", backgroundColor:"gray", width:"calc(100% - 250px)", padding:"10px 0px", border:"solid", borderRadius:"10px", marginLeft:"250px"}}>
        <div style={{width:"20%", fontSize:"large"}}>
          <div style={{paddingLeft:"10px", position:"relative", left:"0px"}}>Id</div>
        </div>
        <div style={{width:"40%", fontSize:"large", position:"relative", }}>Type</div>
        <div style={{width:"20%", fontSize:"large", position:"relative", left:"0px"}}>Status</div>
        <div style={{width:"150px"}}></div>
      </div>
      <div style={{width:"calc(100% - 250px)",marginLeft:"250px"}}>
        {arrayToDisplay}
      </div>
      <div style={{width:"calc(100% - 250px)",marginLeft:"250px"}}>
              <div style={{display:"flex", padding:"10px 0px", justifyContent:"center"}}>
                  {paginationList}
              </div>
      </div>  
      
    </div>
  );
}

export default VehiclePage;
