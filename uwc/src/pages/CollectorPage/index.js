import NavBarCollector from "./NavBarInCollectorPage/NavBar"
import HeadBarInformation from "../../components/HeadBarComponent/HeadBarInformation"
import {SingleBoxContainer} from '../DashboardPage/styled.ts'

const objArray = [
    {
      static: "3/8",
      content: "Working Hours",
      color: "DarkCyan"
    },{
      static: "0",
      content: "Days Off/Week",
      color: "DarkOliveGreen"
    },{
      static: "111006",
      content: "Vehicle Id",
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


const CollectorPage = ()=>{

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



    return(
        <div className='dashboard' style={{fontFamily:"Poppins",position:"relative"}}>
        <HeadBarInformation/>
        <NavBarCollector></NavBarCollector>

        <div style={{display:"flex", flexWrap:"wrap", marginLeft:"250px"}}>
          {arrayToDisplay}
        </div>


        </div>
    )
}
export default CollectorPage