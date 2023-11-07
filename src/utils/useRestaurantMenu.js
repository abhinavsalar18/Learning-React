import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

// this is a custom hook which is using inbuilts hooks 
// console.log("OutSide useRestaurantMenu");
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    
    useEffect(() => {
        // console.log("useRestaurantMenu useEffect");
        fetchData();
    }, []);

    const fetchData = async () => {
        const menu = await fetch(MENU_API + resId);

        const menuData = await menu.json();
        // console.log(menuData);
        setResInfo(menuData);
    }

    // console.log("Before return");
    return resInfo;
}

export default useRestaurantMenu;