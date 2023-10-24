import {useState} from "react";

import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body = () => {
    //State Variable - Super powerful variable
    // Local state varible
    // this is array de-structuring
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    // Both the syntax is exactly same as the above 
    // The above is way to destructure on the fly as we do in case of objects
    const arr = useState(resList);
    const [list, setList] = arr;

    const list1 = arr[0];
    const setList1 = arr[1];
    
    // normal JS variable
    // var listOfRestaurants = resList;
    return (
       <div className="body">
          <div className="filter">
             <button 
                className="filter-btn" onClick={() => {
                    console.log("Button clicked");
                    // let arr = [];
                    const filterdListOfRestaurants = listOfRestaurants.filter((restaurant) =>{
                        const data = restaurant.card.card.info.avgRating;
                        return data > 4;
                    });

                    // updating the restaurants list
                    setListOfRestaurants(filterdListOfRestaurants);


                    // console.log(arr);
                    console.log(listOfRestaurants);
                }}

                onMouseOver={() => {
                    console.log("Mouse hovered!!!");
                }}
             >Top Rated Restaurant</button>
             {/* <input className="search-box" />
              <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40">
 <linearGradient id="-2suTD81jP2ew0CFO8L6Qa_p8VkXMjDOpcE_gr1" x1="31.916" x2="25.088" y1="31.849" y2="26.05" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#b2b2b2"></stop><stop offset=".999"></stop></linearGradient><polygon fill="url(#-2suTD81jP2ew0CFO8L6Qa_p8VkXMjDOpcE_gr1)" points="29.976,27 24.451,27.176 33.95,36.778 36.778,33.95"></polygon><path fill="#b2b2b2" d="M24.313,27c-1.788,1.256-3.962,2-6.313,2c-6.075,0-11-4.925-11-11S11.925,7,18,7s11,4.925,11,11	c0,2.659-0.944,5.098-2.515,7h4.776C32.368,22.909,33,20.53,33,18c0-8.284-6.716-15-15-15S3,9.716,3,18c0,8.284,6.716,15,15,15	c4.903,0,9.243-2.363,11.98-6H24.313z"></path>
 </svg> */}
          </div>
          <div className="res-container">
             {
                listOfRestaurants.map(function (restaurant) {
                   return <RestaurantCard key={restaurant.card.card.info} resData={restaurant}/>
                })
             }
          </div>
       </div>
    );
 }

 export default Body;