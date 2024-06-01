import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";

const User = (props) => {
    const [userInfo, setUserInfo] = useState({login : "Abhinav", location: "Prayagraj", contact: "abhinav@gmail.com"});

    const getData = async () => {
        const data = await fetch("https://api.github.com/users/abhinavsalar04");
        const userData = await data.json();
        // setUserInfo(userData); // this will reset the userInfo Object completely
        // using this we can update only required data
        setUserInfo({
            login: userData.login,
            location: userData.location,
            contact: contact
        });
    }

    useEffect(() => {
        getData();
       const timer =  setInterval(() => {
        }, 1000)

        return () => {
            //here we will do cleaning work => componentWillUnmount()
            clearInterval(timer);
        }
    }, []);

    if(userInfo === undefined) return <Shimmer />;
    const {login, location, contact} = userInfo;
    return (
        <div className="main-container">
            <h3>Name: {login}</h3>
            <h4>Location: {location}</h4>
            <h4>Contact: {contact}</h4>
        </div>
    );
}

export default User;