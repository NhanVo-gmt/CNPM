import NavBar from "../../components/NavBar"
import HeadBarInformation from "../../components/HeadBarComponent/HeadBarInformation"
import { Container, SingleNumber } from "../WorkerPage/styled.ts"




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
    },
    {
      id : "MN1000",
      location : "Hopskin School",
      status : "Not assigned"
    }
  ]
  


  const collectorArray = [
    {
      name : "Alumi Tom",
      task : "Learn the process of collecting garbage",
      status : "Available"
    },{
      name : "Kimbebe Rodrigo",
      task : "Work around Gudison Park Street",
      status : "Available"
    },{
      name : "Zeka Lalana",
      task : "Collect garbage at Demongo Street",
      status : "Available"
    },{
      name : "Kihnam Jonny",
      task : "Work around Alatsca Park Street",
      status : "Available"
    },{
      name : "Luis Vu",
      task : "Collect garbage at Poronto Street",
      status : "Available"
    },{
      name : "Joanthan Ken",
      task : "Work around Alicia Park Street",
      status : "Available"
    },{
      name : "Josua Kimich",
      task : "Collect garbage at Gorden Street",
      status : "Available"
    }
  ]







const RoutePlanningPage = ()=>{


    const arrayToDisplay = mcpArray.map((element)=>{
        return(
          // <div style={{display:"flex", borderBottom:"solid", borderLeft:"solid", borderRight:"solid",borderRadius:"10px", width:"100%"}}>
          <Container>
            <div style={{width:"10%", height:"50px",display:"flex", alignItems:"center", justifyContent:"center"}}>
              <input type="checkbox" style={{width:"20px", height:"20px"}}>
                
              </input>
            </div>  

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
    
        )})
    
    
        
        const anotherArrayToDisplay = collectorArray.map((element)=>{
          return(
            // <div style={{display:"flex", borderBottom:"solid", borderLeft:"solid", borderRight:"solid",borderRadius:"10px", width:"100%"}}>
            <Container>
              <div style={{width:"10%", height:"50px",display:"flex", alignItems:"center", justifyContent:"center"}}>
                <input type="checkbox" style={{width:"20px", height:"20px"}}>
                  
                </input>
              </div>  
  
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
    





    return(
        <div style={{position:"relative", fontFamily:"Poppins"}}>
            <NavBar />
            <HeadBarInformation/>

            <div style={{display:"flex",justifyContent:"center", padding:"10px 0px 40px 0px", fontSize:"xx-large", borderBottom:"solid"}}>
                <div>ROUTE PLANNING</div>
            </div>
            <div style={{display:"flex", padding:"10px 0px"}}>
                <div style={{position:"relative", left:"250px", fontSize:"x-large",padding:"20px 0px 0px 0px"}}>ROUTE CREATING</div>
            </div>
            <div style={{display:"flex", padding:"10px 0px", position:"relative", left:"250px"}}>
                <input type="text" style={{height:"40px", fontSize:"x-large", width:"40%", borderRadius:"5px", paddingLeft:"5px"}}></input>
                <div style={{cursor:"pointer",width:"46px",height:"46px",backgroundColor:"dodgerblue",backgroundImage:"url(https://static.thenounproject.com/png/424965-200.png)", backgroundSize:"cover", borderRadius:"10px"}}></div>
            </div>
            <div style={{display:"flex", backgroundColor:"gray", width:"calc(100% - 250px)", padding:"10px 0px", border:"solid", borderRadius:"10px", marginLeft:"250px"}}>
                <div style={{width:"10%", fontSize:"large"}}/>
                <div style={{width:"20%", fontSize:"large"}}>
                    <div style={{paddingLeft:"10px"}}>Id</div>
                </div>
                <div style={{width:"40%", fontSize:"large", position:"relative", }}>Location</div>
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
           

            <div style={{marginLeft:"250px",width:"calc(100% - 250px)", position:"relative", paddingTop:"10px", display:"flex", justifyContent:"end"}}>
              <button style={{position:"relative",right:"50px",borderRadius:"5px",width:"100px", height:"50px", marginLeft:"40px", backgroundColor:"dodgerblue", fontFamily:"Poppins"}}>
                Add To List
              </button>
            </div>
            {/* //this is thin line/// */}
            <div style={{marginLeft:"250px", height:"10px",width:"50%", position:"relative",left:"200px" ,borderBottom:"solid", borderWidth:"thin"}}></div>
            {/* ///////////////////// */}
            <div style={{display:'flex', marginLeft:"250px", position:"relative", top:"30px"}}>
              <div style={{display:"flex", flexDirection:"column", paddingRight:"40px"}}>
                <label style={{paddingBottom:"5px"}}>Current Route</label>
                <input type="text" style={{height:"30px", borderRadius:"5px", paddingLeft:"5px", width:"220px"}}></input>
              </div>

              
              <button style={{fontFamily:"Poppins",position:"absolute",top:"70px",borderRadius:"5px",width:"100px", height:"50px", marginLeft:"30px", backgroundColor:"black",color:"white"}}>
                Clear
              </button>
             

              <div style={{display:"flex", flexDirection:"column"}}>
                <label style={{paddingBottom:"5px"}}>Route Name</label>
                <input type="text" style={{height:"30px", borderRadius:"5px", paddingLeft:"5px", width:"220px"}}></input>
              </div>
            </div>






            {/* COLLECTOR////////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
            <div style={{ padding:"100px 0px 0px 0px", fontSize:"xx-large", borderBottom:"solid"}}></div>



            <div style={{display:"flex", padding:"10px 0px"}}>
                <div style={{position:"relative", left:"250px", fontSize:"x-large",padding:"20px 0px 0px 0px"}}>COLLECTOR ASSIGNMENT</div>
            </div>
            <div style={{display:"flex",position:"relative",left:"250px", padding:"10px 0px"}}>
                <input type="text" style={{height:"40px", fontSize:"x-large", width:"40%", borderRadius:"5px", paddingLeft:"5px"}}></input>
                <div style={{cursor:"pointer",width:"46px",height:"46px",backgroundColor:"dodgerblue",backgroundImage:"url(https://static.thenounproject.com/png/424965-200.png)", backgroundSize:"cover", borderRadius:"10px"}}></div>
            </div>
            <div style={{display:"flex", backgroundColor:"gray", width:"calc(100% - 250px)", padding:"10px 0px", border:"solid", borderRadius:"10px", marginLeft:"250px"}}>
                <div style={{width:"10%", fontSize:"large"}}/>
                <div style={{width:"20%", fontSize:"large"}}>
                    <div style={{paddingLeft:"10px"}}>Name</div>
                </div>
                <div style={{width:"40%", fontSize:"large", position:"relative", }}>Task Description</div>
                <div style={{width:"20%", fontSize:"large", position:"relative"}}>Status</div>
                <div style={{width:"150px"}}></div>
            </div>
            <div style={{width:"calc(100% - 250px)",marginLeft:"250px"}}>
                {anotherArrayToDisplay}
            </div>
            <div style={{width:"calc(100% - 250px)",marginLeft:"250px"}}>
              <div style={{display:"flex", padding:"10px 0px", justifyContent:"center"}}>
                  {paginationList}
              </div>
            </div>  
            <div style={{marginLeft:"250px",width:"calc(100% - 250px)", position:"relative", paddingTop:"10px", display:"flex", justifyContent:"end"}}>
              <button style={{position:"relative",right:"50px",borderRadius:"5px",width:"100px", height:"50px", marginLeft:"40px", fontFamily:"Poppins"}}>
                Cancel
              </button>
              <button style={{position:"relative",right:"50px",borderRadius:"5px",width:"100px", height:"50px", marginLeft:"40px", backgroundColor:"dodgerblue", fontFamily:"Poppins"}}>
                Assign
              </button>
            </div>
















        </div>
    )
}

export default RoutePlanningPage