import React from 'react'
import HeadBarInformation from '../../components/HeadBarComponent/HeadBarInformation'
import NavBar from '../../components/NavBar'
import { Container,SingleNumber } from '../WorkerPage/styled.ts'
import {useNavigate} from 'react-router-dom'

const mcpArray = [
  {
    id : "DC1231",
    location : "123 Hopskin Street",
    status : "Assigned"
  },{
    id : "HN1010",
    location : "89 Lolotino Street",
    status : "Assigned"
  },{
    id : "DM9801",
    location : "12 Alabama Street",
    status : "Assigned"
  },{
    id : "AB0101",
    location : "12/1/4 Robertson Street",
    status : "Not Assigned"
  },{
    id : "KO1111",
    location : "Revenue Park",
    status : "Not Assigned"
  },{
    id : "BO1005",
    location : "Haan GateWay Street",
    status : "Not Assigned"
  },{
    id : "LH1006",
    location : "Peery School",
    status : "Not assigned"
  }
]





function MCPPage() {

  const navigate = useNavigate()
  const arrayToDisplay = mcpArray.map((element)=>{
    return(
      // <div style={{display:"flex", borderBottom:"solid", borderLeft:"solid", borderRight:"solid",borderRadius:"10px", width:"100%"}}>
      <div onClick={()=>{navigate("/mcp/singleMCP")}}>
      <Container>
        <div style={{width:"20%", height:"50px",display:"flex", alignItems:"center"}}>
          <div style={{paddingLeft:"10px"}}>
            {element.id}
          </div>
        </div>
        <div style={{width:"40%", height:"50px",display:"flex", alignItems:"center"}}>
          <div>
            {element.location}
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
    <div className='mcp' style={{position:"relative", fontFamily:"Poppins"}}>
      <NavBar />
      <HeadBarInformation/>

      <div style={{display:"flex",justifyContent:"center", padding:"10px 0px", fontSize:"xx-large"}}>
        <div>MCP INFORMATION</div>
      </div>
      <div style={{display:"flex", backgroundColor:"gray", width:"calc(100% - 250px)", padding:"10px 0px", border:"solid", borderRadius:"10px", marginLeft:"250px"}}>
        <div style={{width:"20%", fontSize:"large"}}>
          <div style={{paddingLeft:"10px", position:"relative"}}>Id</div>
        </div>
        <div style={{width:"40%", fontSize:"large", position:"relative" }}>Location</div>
        <div style={{width:"20%", fontSize:"large", position:"relative"}}>Status</div>
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
  )
}

export default MCPPage