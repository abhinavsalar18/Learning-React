import {useEffect, useState} from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { RES_LIST } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";


const Body = () => {
    //State Variable - Super powerful variable -> Local state varible
    // this is array de-structuring
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    // useState for keeping track of input field
    const [searchText, setSearchText] = useState("");
   
    // Both the syntax is exactly same as the above. The above is way to destructure on the fly as we do in case of objects
   //  const arr = useState([]); const [list, setList] = arr;
   //  const list1 = arr[0]; const setList1 = arr[1];
  
   
   const fetchData = async () => {
      console.log(RES_LIST);
      const data = await fetch(RES_LIST);
     
      const jsonData = await data.json();
      
      //data of cards starts from index 3 
       jsonData?.data?.cards?.splice(0,3);
      const resList = jsonData?.data?.cards;
      console.log(resList);
      setListOfRestaurants(resList);
      setFilteredList(resList);

   }

   // const listOfRestaurants = useRestaurantList();
   // setFilteredList(listOfRestaurants);
   //  // let's use another hook useEffect 
   useEffect(() => {
      fetchData();
   }, []);

   
   if(useOnlineStatus() === false){
      return <h1>Looks like you are offline! Try to reconnect.</h1>
   }
   //  if(listOfRestaurants.length === 0){
   //    return <Shimmer />
   //  }
   
   // it's a way to write the above code and instead of : write return get back the original code
   return  listOfRestaurants === undefined || listOfRestaurants.length === 0 ? (
      <Shimmer />
      ) : (
       <div className="body">
          <div className="filter">
             <div className="search">
               {/* value has been bind with the useState variable searchText */}
               {/* currently the input field will not work bcz every time value attrib will be set to {searchText} var => no change */}
               <input className="search-box" value={searchText}
                  onChange={(e) => {
                     // now working fine!
                     setSearchText(e.target.value);
                  }}
               />
               <button className="search-btn" onClick={() => {
                     //filter functionality
                     const crntFilteredList = listOfRestaurants.filter((restaurant) => {
                        return restaurant.card.card.info.name.toLowerCase().includes(searchText.toLowerCase());
                     }) 

                     setFilteredList(crntFilteredList);
                  }}
               >
                Search  
               </button>
               <button 
                className="filter-btn" onClick={() => {
                    const filterdListOfRestaurants = filteredList.filter((restaurant) =>{
                        const data = restaurant.card.card.info.avgRating;
                        return data > 4;
                    });

                    // updating the restaurants list
                    setFilteredList(filterdListOfRestaurants);

                    console.log(listOfRestaurants);
                }}
             >Top Rated Restaurant</button>
             </div>
             
          </div>
          <div className="res-container">
             {
                filteredList.map(function (restaurant) {
                   return <RestaurantCard key={restaurant?.card?.card?.info?.id} resData={restaurant}/>
                })
             }
          </div>
       </div>
    );
 }

 export default Body;