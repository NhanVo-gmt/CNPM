import "./HeadBar.css";
import chat from "../../assets/chat.jpg"
import language from "../../assets/language.png"
import calendar from "../../assets/calendar.png"
import notification from "../../assets/notification.jpg"
import ava from "../../assets/ava.png"

function HeadBarInformation() {
    return (
      <div className='headbar'>
        <div>
          <img className="avatar" src = {ava} alt = "Avatar" ></img>
        </div>
        <div className='imageContainer'>
          <img className="image" src = {language} alt = "Language" ></img>
          <img className="image" src = {calendar} alt = "Calendar" ></img>
          <img className="image" src = {notification} alt = "Notification" ></img>
          <img className="image" src = {chat} alt = "Chat" ></img>
        </div>
      </div>
    )
  }
  
  export default HeadBarInformation