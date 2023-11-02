import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (resData) => {
   
    const {name,cuisines, areaName, avgRating, costForTwo, cloudinaryImageId, id} = resData?.resData?.card?.card?.info;
    const {sla} = resData?.resData?.card?.card?.info;
    const{deliveryTime} = sla;
   
   
    return (
      // transition ease-in-out delay-150 hover:-scale-[0.975]
       <div className="m-[10px] p -[5px] w-[200px]  rounded-lg border-[.1px] border-solid border-lightGray ">
          <img className="p-[4px] rounded-lg w-[100%] h-[150px]  shadow-custom bg-lightGray" src={CDN_URL + cloudinaryImageId}/>
          {/* creating a link on card to go to the particular restaurant */}
          <div className="py-[5px]">
            <h3 className="mx-2 pr-[5px] font-bold text-lg"><Link className="links" to={"/restaurants/" + id}>{name}</Link></h3>
            <h4 className="mx-2 pr-[5px]" >{avgRating} star</h4>
            <h4 className="mx-2 pr-[5px]" >{costForTwo} star</h4>
            <h4 className="mx-2 pr-[5px]" >{areaName}</h4>
            <h4 className="mx-2 pr-[5px]" >{deliveryTime} minutes</h4>
            <h4 className="mx-2 pr-[5px]" >{cuisines.join(", ")}</h4>
          </div>
 
       </div>
    );
 }

 export default RestaurantCard;