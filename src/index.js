import React from "react";
import ReactDOM from "react-dom";

// babel will convert this element to React.createElement()
const element = <h1>Hello World</h1>;
console.log(element); // here the element on the virtual DOM
// render in the real DOM
ReactDOM.render(element, document.getElementById("root"));
