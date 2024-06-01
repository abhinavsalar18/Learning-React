
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
    const params = useParams();
    const {resId} = params;
    const resInfo =  useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    
    if(resInfo === null || resInfo === undefined) return <Shimmer />
    console.log("resData: ", resInfo?.data?.cards)
    const {name, cuisines, areaName, avgRating, costForTwoMessage, sla} = resInfo?.data?.cards[2]?.card?.card?.info;
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
            return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    return (
        <div>
            <div className="text-center">
                <h1 className="font-bold my-6 text-2xl">{name}</h1>
                <p className="text-xl font-bold m-4">
                {cuisines.join(", ")} - {costForTwoMessage}</p>
            </div>
            <div>
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