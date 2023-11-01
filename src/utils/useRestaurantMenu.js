import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

// this is a custom hook which is using inbuilts hooks 
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const menu = await fetch(MENU_API + resId);

        const menuData = await menu.json();
        console.log(menuData);
        setResInfo(menuData);
    }

    console.log("resInfo:", resInfo);
    return resInfo;
}

export default useRestaurantMenu;