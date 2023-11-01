import { useState, useEffect } from "react"
import { RES_LIST } from "./constants";

const useRestaurantList = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    const fetchRestaurantList = async () => {
        const data = await fetch(RES_LIST);
        const jsonData = await data.json();

        jsonData?.data?.cards?.splice(0,3);
        const resList = jsonData?.data?.cards;
        setRestaurantList(resList);
    }

    useEffect(() => {
        fetchRestaurantList();
    }, []);

    return restaurantList;
}

export default useRestaurantList;