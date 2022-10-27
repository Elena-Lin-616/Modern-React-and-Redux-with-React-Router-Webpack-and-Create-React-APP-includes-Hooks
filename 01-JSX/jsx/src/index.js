// todo 1: import the React and ReactDOM libraries
import React from "react"; // understand what component is and make multiple components work together
import ReactDOM from "react-dom/client"; // know how to get a component turn into HTML to show up in the browser

// todo 2: get a reference to the div with ID root
const el = document.getElementById("root"); //place render into div

// todo 3: tell react to take control of that element
const root = ReactDOM.createRoot(el); // tell react show application inside this el

// todo 4: create a component, a function that return jsx
function App() {
  const message = "Hi there!";
  return <h1>{message}</h1>;
}

// todo 5: show the component on the screen
root.render(<App />); // input a App as a jsx element
