import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethod";

export default function WidgetSm() {

  const [users, setUsers] = useState([])

  useEffect(() =>{
    const getUsers = async () =>{
      try{
        const res = await userRequest.get("users/?new=true")
        setUsers(res.data)
      }catch {}
    };
    getUsers();
  },[]);
  
    return (
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
          {users.map(user=>(
            <li className="widgetSmListItem" key={user._id}>
              <img
                src={
                  user.img ||"https://i.pinimg.com/474x/2b/8e/66/2b8e66b2a2d164b25d53cc63f673b144.jpg" 
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}

