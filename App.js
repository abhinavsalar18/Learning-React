import React from "react";
import ReactDOM from "react-dom/client";

/**
 * App Layout
 * Header
 * - Logo
 * - Nav Itmes
 * Body
 * - Search bar
 * - RestaurantContainer
 * - Restaurant Card
 *    - image
 *    - Restaurant Name,Cuisines
 *    - Rating, Delivery Time
 * Footer
 * - Copywrite
 * - Links
 * - Contact
 */

const Header = () => {
   return (
      <div className="header">
         <div className="logo-container">
            <img className="logo" src="https://icon2.cleanpng.com/20180331/ezq/kisspng-catering-food-computer-icons-logo-event-management-catering-5abf487c5eb658.714031151522485372388.jpg" />
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
         </div>
      </div>
   );
}

const RestaurantCard = (resData) => {
   // console.log(resData.resData.card.card.info);
   console.log(resData);
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
         <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
         <h3 className="res-name">{name}</h3>
         <span className="rating" style={{"font-weight" : "bold"}}>{avgRating} star</span>
         <span className="delivery-time" style={{"font-weight" : "bold"}}>{deliveryTime} minutes</span>
         <h4 className="cuisine" >{cuisines.join(", ")}</h4>
         <h4 className="location" >{areaName}</h4>

      </div>
   );
}
const Body = () => {
   return (
      <div className="body">
         <div className="search">
            <input className="search-box" />
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40">
<linearGradient id="-2suTD81jP2ew0CFO8L6Qa_p8VkXMjDOpcE_gr1" x1="31.916" x2="25.088" y1="31.849" y2="26.05" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#b2b2b2"></stop><stop offset=".999"></stop></linearGradient><polygon fill="url(#-2suTD81jP2ew0CFO8L6Qa_p8VkXMjDOpcE_gr1)" points="29.976,27 24.451,27.176 33.95,36.778 36.778,33.95"></polygon><path fill="#b2b2b2" d="M24.313,27c-1.788,1.256-3.962,2-6.313,2c-6.075,0-11-4.925-11-11S11.925,7,18,7s11,4.925,11,11	c0,2.659-0.944,5.098-2.515,7h4.776C32.368,22.909,33,20.53,33,18c0-8.284-6.716-15-15-15S3,9.716,3,18c0,8.284,6.716,15,15,15	c4.903,0,9.243-2.363,11.98-6H24.313z"></path>
</svg>
         </div>
         <div className="res-container">
            {
               resList.map(function (restaurant) {
                  return <RestaurantCard key={restaurant.card.card.info} resData={restaurant}/>
               })
            }
         </div>
      </div>
   );
}
const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         <Body />
         {/* Footer */}
      </div>
   );
}
const root = ReactDOM.createRoot(document.getElementsByClassName('cont')[0]);

root.render(<AppLayout />); // by seeing angular bracket the Babel came to know that this is a Component


