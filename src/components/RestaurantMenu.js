import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const params = useParams();
    const {resId} = params;
    // console.log(params);

    useEffect(() => {
        fetchMenu();
    }, [])
        
    const fetchMenu = async () => {
        const data = await fetch(
            MENU_API + resId
        );

        const jsonData = await data.json();
        setResInfo(jsonData);
    }

    if(resInfo === null) return <Shimmer />

    const {name, cuisines, areaName, avgRating, costForTwoMessage, sla} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;
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