
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
    const params = useParams();
    const {resId} = params;
    // console.log("params", params);

    const resInfo =  useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    // console.log("Restaurant Menu rendered!");
    // console.log("resInfo: ",resInfo, resInfo?.data?.cards[0]?.card?.card?.info.name);
    
    if(resInfo === null || resInfo === undefined) return <Shimmer />

    // console.log("Got the data", resInfo);
    console.log("resData: ", resInfo?.data?.cards)
    const {name, cuisines, areaName, avgRating, costForTwoMessage, sla} = resInfo?.data?.cards[2]?.card?.card?.info;
    
    // Due to this code data of some restaurants are not showing bcz they do not posses itemCard 
    // so removing this fixed the error
    // const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;
    // const {info} = itemCards;
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
            return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    // console.log("RestaurantMenu Rendered ..", showIndex);
    
    // console.log(categories);
    // console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    return (
        <div>
            <div className="text-center">
                <h1 className="font-bold my-6 text-2xl">{name}</h1>
                <p className="text-xl font-bold m-4">
                {cuisines.join(", ")} - {costForTwoMessage}</p>
            </div>
            <div>
                {/* categories */}
                {
                    categories.map((category, index) => (
                        //controlled component parent is controlling children
                         <RestaurantCategory
                            key={category.card?.card?.title}  
                            data={category.card?.card}
                            showItems={index === showIndex ? true : false}
                            showIndex={showIndex}
                            // initially on Clicking accordion it was not toggling means kept open every 
                            // so to toggle that I have passed the currentIndex and compared with the commponent index if matches then collapse otherwise expand
                            setShowIndex={function (idx){ 
                                console.log(idx, index);
                                if(idx !== index) {
                                    setShowIndex(index);
                                }
                                else 
                                    setShowIndex();
                            }}

                            setShowIndex2={() => setShowIndex(index === showIndex ? null : index)}
                         />
                    )
                    

                    )
                }
            </div>
            
        </div>
    );
}

export default RestaurantMenu;