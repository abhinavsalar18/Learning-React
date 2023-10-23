import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// ReactElement - JS Object -> rendered as html
const heading = React.createElement("h1", {id : "heading"}, "ISRO Rocks🚀");
// console.log(heading);

//due to this long syntax developers comes with jsx which makes the syntax easy
//React and JSX are completely different things Also JSX is not html inside javascript
// This syntax is like html but not html
//React element using JSX
//the above code is not a part of js therefore js can not understand it
// JSX (Babel transpiled before it reaches the JS) - Parcel(Manager) - Babel(Package) done this 
// JSX => Raect.createElement => ReactElement - JS Object -> rendered as html
const jsxHeading = <h1 id="heading">JSX Heading!</h1>
const jsxElement = (
   <>
      <h1 className="heading" tabIndex={2}>ISRO Rocks🚀</h1>
      <h2>Learning React</h2>
   </>
)

// console.log(heading);

//====================================================================================
//React Components
// (i) Class Based Components
// (ii) Functional  Components -> a normal js function which returns a piece of jsx

//Creating functional component

const Title = () => (
   <h1 id="title">ISRO Rocks🚀🚀</h1>
)


const HeadingComponent1 = function () {
   return <h1>Heading using Function Component</h1>
}

const number = 10000;
const HeadingComponent2 =  () => {
   return ( 
      <div id="container">
         <h2>{number}</h2>
         <h2>{100 * 189}</h2>
         <h2>{console.log("He he he he.....")}</h2>
         <h1>Heading using Function Component</h1>
      </div>
   );
}

// Jargon -> Component Composition -> Component inside a component
const HeadingComponent3 = () => (
   <div className="container">
      <Title />
      <h1>Heading using Functional Component</h1>
   </div>
)

const HeadingComponent4 = () => <h1>Heading using Functional Component</h1>


//How to use React element inside a React Component
const reactElement = (
   <h1>
      This is React Element
   </h1>
)



//React Element inside React Element
const reactElement1 = (
   <>
      <h2>React Element inside React</h2>
      <HeadingComponent1 />
      {HeadingComponent1()}
      <HeadingComponent1></HeadingComponent1>
   </>
)

const HeadingComponent5 = () => {
   return (
      <div id="Container">
         <h1>React Component</h1>
         {reactElement1}
      </div>
   );
}
// all 4 codes are ultimately same and a part of javascript not React

const root = ReactDOM.createRoot(document.getElementsByClassName('cont')[0]);
// root.render(heading);

// root.render(HeadingComponent1); // this will not work bcz render can only render the Raect Element not Component

root.render(<HeadingComponent5 />); // by seeing angular bracket the Babel came to know that this is a Component
// root.render(reactElement1); // by seeing angular bracket the Babel came to know that this is a Component

