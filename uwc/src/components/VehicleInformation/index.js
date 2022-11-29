import { useState } from "react"


const VehicleInformationComponent = ()=>{

    const [bigBoxValue,updateBigBoxValue] = useState("(Currently no description)")



    return(
        <div style={{position:"relative", left:"25%", width:"60%"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
                <div style={{position:"relative", fontSize:"xx-large", padding:"15px", fontWeight:"bold"}}>Vehicle Id</div>
            </div>
            <div style={{border: "solid", borderRadius:"10px"}}>
               
                <div style={{ fontSize:"x-large", paddingBottom:"15px", paddingLeft:"10px"}}>Vehicle Information</div>
                
                <div style={{display:"flex", justifyContent:"flex-start", padding:"15px 0px", paddingLeft:"10px", paddingBottom:"25px"}}>
                    <div style={{display  : "flex", flexDirection : "column"}}>
                        <label style={{paddingBottom:"5px"}}>Weight</label>
                        <input type="text" style={{height:"30px", borderRadius:"5px", paddingLeft:"5px"}}></input>
                    </div>

                    <div style={{paddingLeft: "20%", display  : "flex", flexDirection : "column"}}>
                        <label style={{paddingBottom:"5px"}}>Capacity</label>
                        <input type="text" style={{height:"30px", borderRadius:"5px", paddingLeft:"5px"}}></input>
                    </div>
                </div>
                <div style={{paddingLeft:"10px"}}>
                    <div style={{ display : "flex", flexDirection : "column"}}>
                        <label style={{paddingBottom:"5px"}}>Description</label>
                        <input value={bigBoxValue} onChange={(e)=>{updateBigBoxValue(e.currentTarget.value)}} onClick={()=>{updateBigBoxValue("")}} type="text" style={{height:"100px", width:"300px", borderRadius:"5px", paddingBottom:"50px",paddingLeft:"5px"}}></input>
                    </div>
                </div>
                <div style={{padding:"40px 0px 20px 0px", display:"flex", position:"relative", left:"60%"}}>
                    <button style={{borderRadius:"5px",width:"70px", height:"50px"}}>Cancel</button>
                    <button style={{borderRadius:"5px",width:"70px", height:"50px", marginLeft:"40px", backgroundColor:"dodgerblue"}}>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default VehicleInformationComponent