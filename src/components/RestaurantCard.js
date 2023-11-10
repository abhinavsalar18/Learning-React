import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (resData) => {
   const {loggedInUser} = useContext(UserContext);
  
    const {name,cuisines, areaName, avgRating, costForTwo, cloudinaryImageId, id} = resData?.resData?.card?.card?.info;
    const {sla} = resData?.resData?.card?.card?.info;
    const{deliveryTime} = sla;
   
   
    return (
      
       <div className="m-[10px] p -[5px] w-[200px] h-[410px] rounded-lg border-[.1px] border-solid border-lightGray hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-gray-100">
          <img className=" rounded-lg w-[100%] h-[150px]  shadow-custom bg-lightGray" src={CDN_URL + cloudinaryImageId}/>
          {/* creating a link on card to go to the particular restaurant */}
          <div className="py-[5px]">
            <h3 className="mx-2 pr-[5px] font-bold text-lg"><Link className="links" to={"/restaurants/" + id}>{name}</Link></h3>
            <h4 className="mx-2 pr-[5px]" >{avgRating} star</h4>
            <h4 className="mx-2 pr-[5px]" >{costForTwo} star</h4>
            <h4 className="mx-2 pr-[5px]" >{areaName}</h4>
            <h4 className="mx-2 pr-[5px]" >{deliveryTime} minutes</h4>
            <h4 className="mx-2 pr-[5px]" >{cuisines.join(", ")}</h4>
            {/* Just to display loggedIN User on each card */}
            {/* <h4 className="mx-2 pr-[5px] font-bold" >User: {loggedInUser}</h4> */}
          </div>
 
       </div>
    );
 }

//Higher Order Components
// input RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
   return function (props) {
      return (
         <div>
            <label className="absolute bg-black text-white m-2 p-[2px] rounded-md z-10 text-center">Promoted</label>
            <RestaurantCard {...props} />
         </div>
      );
   }
}

 export default RestaurantCard;