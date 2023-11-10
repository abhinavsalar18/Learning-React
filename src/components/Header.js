import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux/es/hooks/useSelector";

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
   
   // we are subscribing to the cart using selector
   // efficient approach
   const cartItems = useSelector((store) => {
      return store.cart.item
   } );

   // very inefficient approach 
   // const store = useSelector((store) => store);
   // const cartItems= store.card.item;
   // both of these works in similar manner but there is huge difference in performance
   // In 1st the Header subscribed only the cartSlice -> item means rendered only when there are some changes into that
   // but the 2nd one will always render if there is any change any slice of store
   console.log(cartItems);
   //  console.log(store);
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
                <li 
                  className="px-2">
                  <Link className="links flex flex-wrap justify-between" to="/cart">
                     <div className="px-2">
                       Cart
                     </div>
                     <div>
                        {cartItems.length !== 0 && <div className="text-center absolute top-4 text-xs rounded-[100%] w-[12px] bg-orange-500  text-gray-200">{cartItems.length}</div>}
                        <img width="24" height="24" src="https://img.icons8.com/color/48/shopping-cart--v1.png" alt="shopping-cart--v1"/>
                     </div>
                  </Link>
                  
               </li>
                <div>
                  <button className="px-2 rounded-md border-4 bg-green-300 border-solid border-green-300"
                     onClick={(() => {
                        setButtonNameReact(buttonNameReact === "Login" ? "Logout" : "Login");   
                     })}
                  >
                     {buttonNameReact}
                  </button>
                </div>
             </ul>
          </div>
       </div>
    );
 }

 export default Header;