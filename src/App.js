import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// import exportDemo from "./utils/constants";
// exportDemo();
const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         <Body />
         {/* Footer */}
      </div>
   );
}
const root = ReactDOM.createRoot(document.getElementsByClassName('cont')[0]);

root.render(<AppLayout />); // by seeing angular bracket the Babel came to know that this is a Component


