

import { useEffect, useState } from "react"

// procedure -> what is the input, what is the output
// here no input is needed
const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", (event) => { 
            setOnlineStatus(false);
            console.log(onlineStatus);
        })

        window.addEventListener("online", (event) => {
            setOnlineStatus(true);
            console.log(onlineStatus);
        })
        
    }, []);

    return onlineStatus;
}

export default useOnlineStatus;