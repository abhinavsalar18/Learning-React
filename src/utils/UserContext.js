import { createContext } from "react";

// useContext creation using creatContext to use the data in whole app 
const UserContext = createContext({
    loggedInUser: "Default User"
});

export default UserContext;