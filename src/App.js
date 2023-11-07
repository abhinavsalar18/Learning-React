import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import {lazy, Suspense} from "react"
import UserContext from "./utils/UserContext"

// App optimization => breakign big app (one js file by bundler) into chunks
// - Chunking
// - Code Splitting
// - Dynamic Bundling
// - *****Lazy Loading*******


const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
   const [userName, setUserName] = useState();
   const [user, setUser] = useState("John Wick");
   useEffect(() => {
      // Making an API call and by passing userName and password and getting userName as response
      const data = {
         name: "Abhinav Salar"
      }

      setUserName(data.name);
   }, []);

   // Context Provider enables us flow updated context information throughout the app
   return (
      // till here loggedInUser: Default User 
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
         {/* loggedInUser: Abhinav Salar */}
         <div className="app">
         <UserContext.Provider value={{loggedInUser: user, setUser}}>
            {/* loggedInUser:  John Wick*/}
            <Header />
         </UserContext.Provider>
            {/* Outlet will get replaced from children component based on the crnt route */}
         <Outlet />  
         </div>
      </UserContext.Provider>
   );
}

const appRouter = createBrowserRouter([
   {
      path : "/",
      element : <AppLayout />,
      // interesting fact -> if url is not correct then errorElement of root works
      // no other route's errElement works  {msg={"About"} <- verified using props} 
      errorElement : <Error />,
      children: [
         {
            path : "/",
            element : <Body />
         },
         {
            path : "/about",
            element : <Suspense fallback={<Shimmer />}><About /></Suspense>
         },
         {
            path : "/contact" ,
            element : <Contact />
         },
         {
            path : "/restaurants/:resId",
            element : <RestaurantMenu />
         },
         {
            path : "/grocery",
            element : <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
         }
      ]
   }
]);
const root = ReactDOM.createRoot(document.getElementsByClassName('cont')[0]);

root.render(<RouterProvider router={appRouter} />); // by seeing angular bracket the Babel came to know that this is a Component
