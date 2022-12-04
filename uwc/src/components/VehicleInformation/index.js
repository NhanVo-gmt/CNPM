import { useState } from "react"


const VehicleInformationComponent = ()=>{

    const [bigBoxValue,updateBigBoxValue] = useState("(Currently no description)")



    return(
        <div style={{position:"relative"}}>
        <div style={{position:"relative", left:"250px", width:"calc(100% - 250px)", fontFamily:"Poppins"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
                <div style={{position:"relative", fontSize:"xx-large", padding:"15px", fontFamily:"Poppins"}}>VEHICLE ID: 11110101</div>
            </div>
            <div style={{border: "solid", borderRadius:"10px",display:"flex",justifyContent:"center", alignItems:"center" ,flexDirection:"column", position:"relative"}}>
               
                <div style={{width:"100%"}}>
                    <div style={{position:"relative", fontSize:"x-large", paddingBottom:"15px", paddingLeft:"10px"}}>VEHICLE INFOMATION</div>
                </div>

                <div style={{width:"600px",display:"flex", justifyContent:"flex-start", padding:"15px 0px", paddingLeft:"10px", paddingBottom:"25px"}}>
                    <div style={{display  : "flex", flexDirection : "column"}}>
                        <label style={{paddingBottom:"5px"}}>Weight</label>
                        <input type="text" style={{height:"30px", borderRadius:"5px", paddingLeft:"5px"}}></input>
                    </div>

                    <div style={{paddingLeft: "20%", display  : "flex", flexDirection : "column"}}>
                        <label style={{paddingBottom:"5px"}}>Capacity</label>
                        <input type="text" style={{height:"30px", borderRadius:"5px", paddingLeft:"5px"}}></input>
                    </div>
                </div>
                <div style={{paddingLeft:"10px", width:"600px", marginBottom:"100px"}}>
                    <div style={{ display : "flex", flexDirection : "column"}}>
                        <label style={{paddingBottom:"5px"}}>Description</label>
                        <input value={bigBoxValue} onChange={(e)=>{updateBigBoxValue(e.currentTarget.value)}} onClick={()=>{updateBigBoxValue("")}} type="text" style={{fontSize:"large",height:"100px", width:"540px", borderRadius:"5px", paddingBottom:"50px",paddingLeft:"5px"}}></input>
                    </div>
                </div>
                <div style={{padding:"40px 0px 20px 0px", display:"flex", position:"absolute", right:"30px", top:"340px"}}>
                    <button style={{borderRadius:"5px",width:"100px", height:"50px"}}>Cancel</button>
                    <button style={{borderRadius:"5px",width:"100px", height:"50px", marginLeft:"40px", backgroundColor:"dodgerblue"}}>Save</button>
                </div>
            </div>
        </div>
        </div>
    )
}
export default VehicleInformationComponent