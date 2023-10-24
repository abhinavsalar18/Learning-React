import { CDN_URL } from "../utils/constants";

const RestaurantCard = (resData) => {
    // console.log(resData.resData.card.card.info);
   //  console.log(resData);
    const {info} = resData?.resData?.card?.card;
    const {sla} = info;
    // console.log(resData.resData.card.card);
    // console.log(resData.resData.card.card.info);
    // for( const key in resData.resData.card.card.info){
    //    console.log(key + " " + info[key])
    // }
    // console.log(data);
    const {name, cuisines, areaName, avgRating, cloudinaryImageId} = info;
    const {deliveryTime} = sla;
    return (
       <div className="res-card">
          <img className="res-logo" src={CDN_URL + cloudinaryImageId}/>
          <h3 className="res-name">{name}</h3>
          <span className="rating" style={{fontWeight : "bold"}}>{avgRating} star</span>
          <span className="delivery-time" style={{fontWeight : "bold"}}>{deliveryTime} minutes</span>
          <h4 className="cuisine" >{cuisines.join(", ")}</h4>
          <h4 className="location" >{areaName}</h4>
 
       </div>
    );
 }

 export default RestaurantCard;