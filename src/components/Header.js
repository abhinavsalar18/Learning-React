import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

// Do not do this mistake ⚠⚠⚠ declaring useState variables outside the component
// const [buttonNameReact, setButtonNameReact] = useState("Login");
const Header = () => {
   // console.log("Header rendered");
   const [buttonNameReact, setButtonNameReact] = useState("Login");
   
   
   useEffect(() => {
      // console.log("useEffect called");
   }, [buttonNameReact])
   
   return (
       <div className="header">
          <div className="logo-container">
             <img className="logo" src={LOGO_URL} />
          </div>
          <div className="nav-items">
             <ul>
                <li><Link className="links" to="/">Home</Link></li>
                <li><Link className="links" to="/about">About Us</Link></li>
                <li><Link className="links" to="/contact">Contact Us</Link></li>
                <li><Link className="links" to="/cart">Cart</Link></li>
                <button className="log-btn"
                  onClick={(() => {
                     setButtonNameReact(buttonNameReact === "Login" ? "Logout" : "Login");   
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