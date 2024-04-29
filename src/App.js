// import logo from './logo.svg';
import Navbar1 from "./Navbar";
import Catalog from "./Catalog";
import "./App.css";
// import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <BrowserRouter>
      <Navbar1 />
      </BrowserRouter>
      {/* <h1>hello world</h1>
    <h2>Count: {count}</h2>
    <button onClick={()=>{setCount(count+1)}} class='btn'>Add {count}</button> */}
    </>
  );
}

export default App;
