import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// Do not do this mistake ⚠⚠⚠ declaring useState variables outside the component
// const [buttonNameReact, setButtonNameReact] = useState("Login");
const Header = () => {
   // console.log("Header rendered");
   const [buttonNameReact, setButtonNameReact] = useState("Login");
   const {loggedInUser, setUser} = useContext(UserContext);
   // console.log("data-", data);
   
   useEffect(() => {
      // setUser("John");
      // console.log("useEffect called");
   }, [buttonNameReact])
   
   return (
       <div className="flex bg-green-200 justify-between shadow-lg">
          <div className="logo-container">
             <img className=" w-20 " src={LOGO_URL} />  
          </div>
          <div className="flex items-center">
             <ul className="flex p-2 m-1">
                <li className="px-2">Online Status: {useOnlineStatus() === true ? "🟢" : "🔴"}</li>
                <li className="px-4"><Link className="links" to="/">Home</Link></li>
                <li className="px-4"><Link className="links" to="/about">About Us</Link></li>
                <li className="px-4"><Link className="links" to="/contact">Contact Us</Link></li>
                <li className="px-4"><Link className="links" to="/grocery">Grocery</Link></li>
                <li className="px-4"><Link className="links" to="/cart">Cart</Link></li>
                <div>
                  <button className="px-2 rounded-md border-4 bg-green-300 border-solid border-green-300"
                     onClick={(() => {
                        setButtonNameReact(buttonNameReact === "Login" ? "Logout" : "Login");   
                     })}
                  >
                     {buttonNameReact}
                  </button>
                </div>
                  <span className="text-xs font-bold mx-2 px-2">{loggedInUser}</span>
             </ul>
          </div>
       </div>
    );
 }

 export default Header;