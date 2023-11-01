
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
   
    const params = useParams();
    const {resId} = params;
    // console.log(params);

    const resInfo =  useRestaurantMenu(resId);
    console.log("Restaurant Menu rendered!")
    // console.log(resInfo);
    if(resInfo === null || resInfo === undefined) return <Shimmer />

    // console.log("Got the data", resInfo);
    const {name, cuisines, areaName, avgRating, costForTwoMessage, sla} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;
    const {info} = itemCards;
    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <p>{areaName}, {sla.lastMileTravelString}</p>
            <h2>Menu List</h2>
            <ul>
                    {/* <li>{itemCards[0]?.card?.info?.name} :- {itemCards[0]?.card?.info?.price / 100 || itemCards[0]?.card?.info?.defaultPrice / 100}</li> */}
                {itemCards?.map((card) => (
                        <li key={card?.card?.info?.id}>{card?.card?.info?.name} - &nbsp;&nbsp;Rs.{card?.card?.info.price / 100 || card.card.info.defaultPrice / 100}</li>
                ))}
                
            </ul>
        </div>
    );
}

export default RestaurantMenu;