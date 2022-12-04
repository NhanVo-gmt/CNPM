import React from 'react'
import HeadBarInformation from '../../components/HeadBarComponent/HeadBarInformation'
import NavBar from '../../components/NavBar'
import { SingleNumber } from './styled.ts'
import { Container } from './styled.ts'

const workerArray = [
  {
    name : "Ahse Brong",
    task : "Collect garbage at James Street",
    role : "Janitor",
    status : "Unavailable"
  },{
    name : "Alumi Tom",
    task : "Learn the process of collecting garbage",
    role : "Collector",
    status : "Available"
  },{
    name : "Baraoka Kim",
    task : "Collect garbage at Queens Park Area",
    role : "Janitor",
    status : "Available"
  },{
    name : "Chose Bush",
    task : "Collect garbage at Highland Area",
    role : "Janitor",
    status : "Available"
  },{
    name : "Kimbebe Rodrigo",
    task : "Work around Gudison Park Street",
    role : "Collector",
    status : "Available"
  },{
    name : "Tom Morio",
    task : "Collect garbage at Woodison Street",
    role : "Janitor",
    status : "Unavailable"
  },{
    name : "Zeka Lalana",
    task : "Collect garbage at Demongo Street",
    role : "Collector",
    status : "Available"
  }
]

function WorkerPage() {
  
  
  const arrayToDisplay = workerArray.map((element)=>{
    return(
      // <div style={{display:"flex", borderBottom:"solid", borderLeft:"solid", borderRight:"solid",borderRadius:"10px", width:"100%"}}>
      <Container>
        <div style={{width:"20%", height:"50px",display:"flex", alignItems:"center"}}>
          <div style={{paddingLeft:"10px"}}>
            {element.name}
          </div>
        </div>
        <div style={{width:"40%", height:"50px",display:"flex", alignItems:"center"}}>
          <div>
            {element.task}
          </div>
        </div>
        <div style={{width:"20%", height:"50px",display:"flex", alignItems:"center"}}>
          <div>
            {element.role}
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
      // </div>
    )
  })
  

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
    <div className='worker' style={{position:"relative", fontFamily:"Poppins"}}>
      <NavBar />
      <HeadBarInformation></HeadBarInformation>
      <div style={{display:"flex",justifyContent:"center", padding:"10px 0px", fontSize:"xx-large"}}>
        <div>WORKER INFOMATION</div>
      </div>
      <div style={{display:"flex", backgroundColor:"gray", width:"calc(100% - 250px)", justifyContent:"end", padding:"10px 0px", border:"solid", borderRadius:"10px", marginLeft:"250px"}}>
        <div style={{width:"20%", fontSize:"large"}}>
          <div style={{paddingLeft:"10px"}}>Name</div>
        </div>
        <div style={{width:"40%", fontSize:"large", textAlign:"center"}}>Task Overview</div>
        <div style={{width:"20%", fontSize:"large"}}>Role</div>
        <div style={{width:"20%", fontSize:"large"}}>Status</div>
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

export default WorkerPage