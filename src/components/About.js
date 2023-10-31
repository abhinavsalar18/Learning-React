// import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import User from "./User"


class About extends React.Component{
    
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent componentDidMount");
    }
    render(){
        console.log("Parent render");
        const userInfo = {
            name: "Abhinav Salar",
            location: "Prayagraj",
            contact: "abhinavsalar@gamil.com"
        }
        return (
            <div>
             <h1>About Us class component</h1>
             {/* <UserClass name={"Abhinav Salar"} location={"Prayagraj"} contact={"abhinavsalar@gamil.com"}/> */}
             <User name={"Abhinav Salar"} location={"Prayagraj"} contact={"abhinavsalar@gamil.com"}/>
             {/* <UserClass name={"John Wick"} location={"US"} contact={"johnwick@gamil.com"}/> */}
             
            </div>
        );
    }
}

export default About;