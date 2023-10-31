import React from "react";
import Shimmer from "./Shimmer";
// create state variable in class based Component
// use them update the value setState()
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
           userInfo: {
                login: "Abhinav Salar",
                location: "Prayagraj",
                contact: "abhinavsalar@gmail.com"
           }
        };
        console.log("Child Constructor");
    }

    // it will be triggered only when the constrcutor and render function's execution got completed(means component got mounted)
    //{[parent] => constructor -> parent render -> {[child] => constructor -> render -> componentDidMount} -> componentDidMount}
    // it is used to make API call just like useEffect but
    // ****componentDidMount is nowhere equivalent or related to useEffect that a completely different thing******
    // why -> first render component as fast as possible then make API call as useEffect does
    // we can also make this method async

    async componentDidMount(){
        console.log("Child ComponentDidMount")
        // API call
        const data = await fetch("https://api.github.com/users/abhinavsalar04");
        const userData = await data.json();
        console.log(userData);
        this.setState({
            userInfo: userData,
        });
        
        console.log(this.state.userInfo);

        // most dangerous -> this component will stay in memory even if we move to next page
        // and the thing is each time user visit to this page a new setInterval will be started along with previous
        // and no one will notice it untill we do console. And ultimately app will get crash
        
        // storing to use this for clearing the component
        this.time = setInterval(() => {
            console.log("From userClass");
        }, 1000)
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate");
    }

    componentWillUnmount() {
       clearInterval(this.time); 
        console.log("Component umounted!");
    }
    render(){
        // if(this.state.userInfo === null) return <Shimmer />;

       const {login, location, avatar_url} = this.state.userInfo;
        console.log("Child Render");
        // console.log(this.userInfo);
        return(
            <div className="main-container">
                <img src={avatar_url} style={{width: "100px", height: "100px", borderRadius: "50%"}}></img>
                <h3>Name: {login}</h3>
                <h4>Location: {location}</h4>
                <h4>Contact: {"contact"}</h4>
            </div>
        );
    }
}

export default UserClass;