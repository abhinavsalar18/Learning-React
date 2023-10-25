import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
// let buttonName = "Login";


// const [buttonNameReact, setButtonNameReact] = useState("Login");
let t;
// const buttonName = "Login";
const Header = () => {
   console.log("Rendering Header...");
   const [buttonNameReact, setButtonNameReact] = useState("Login");
    return (
       <div className="header">
          <div className="logo-container">
             <img className="logo" src={LOGO_URL} />
          </div>
          <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="log-btn"
                  onClick={(() => {
                     setButtonNameReact(buttonNameReact === "Login" ? "Logout" : "Login");
                     // console.log(buttonNameReact);               
                  })}
                >
                   {buttonNameReact}
                </button>
             </ul>
          </div>
       </div>
    );
 }

 export default Header;