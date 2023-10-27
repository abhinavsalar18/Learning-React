import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";

// import exportDemo from "./utils/constants";
// exportDemo();
const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         {/* Outlet will get replaced from children component based on the crnt route */}
        <Outlet />
        
      </div>
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
            element : <About />
         },
         {
            path : "/contact" ,
            element : <Contact />
         },
         {
            path : "/restaurants/:resId",
            element : <RestaurantMenu />
         }
      ]
   }
]);
const root = ReactDOM.createRoot(document.getElementsByClassName('cont')[0]);

root.render(<RouterProvider router={appRouter} />); // by seeing angular bracket the Babel came to know that this is a Component


