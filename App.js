// this will return a javascript object
const heading = React.createElement('h1', {id: "heading"}, "Hello World from React!");
// 2nd and 3rd parameters becomes the props
//3rd one becomes children
// props: {id: 'heading', children: 'Hello World from React!'}
 
// console.log(heading);

// root from where the react starts rendering
//getElementsByClassName('cont') -> returns HTMLCollection => means array of DOM
// but the createRoot() requires only one DOM therefore we have to pass like arr[0]
 const root = ReactDOM.createRoot(document.getElementsByClassName('cont')[0]);
//  const root = ReactDOM.createRoot(document.getElementsByClassName('end')[0]);

 //let's create some nested html tags
 /**
  * <div id="parent">
  *     <div id="child">
  *         <h1>I'm an h1 tag!</h1>
  *     </div>
  * </div>
  */
 
// we can do this using 3rd parameter the children property
// let's create siblings also just pass array of ReactElements in 3rd parameter
const parent = React.createElement("div", 
    {id : "parent"},
    [React.createElement("div",
    {id: "child1"}, 
    [
       React.createElement("h1", {id : "heading"}, "I'm an h1 tag!"),
       React.createElement("h2", {}, "I'm an h1 tag!")
    ]
    ),
    React.createElement("div",
    {id: "child2"}, 
    [
       React.createElement("h1", {id : "heading"}, "I'm an h1 tag!"),
       React.createElement("h2", {}, "I'm an h1 tag!")
    ]
    )]
);
 
 console.log(parent);
 // render method creates the html tag which browser understoods from ReactElement (Object)
 // and put into the root 
 root.render(parent);