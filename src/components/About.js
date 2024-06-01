// import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import User from "./User"
import UserContext from "../utils/UserContext";

class About extends React.Component{
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
    }
    render(){
        return (
            <div>
             <h1>About Us class component</h1>
             <User name={"Abhinav Salar"} location={"Prayagraj"} contact={"abhinavsalar@gamil.com"}/>
             <div>
                <UserContext.Consumer>
                    {(data) => (<h2 className="font-bold text-md">LoggedIn User: {data.loggedInUser}</h2>)}
                </UserContext.Consumer>
             </div>
            </div>
        );
    }
}

export default About;