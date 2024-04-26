// import logo from './logo.svg';
import Navbar1 from "./Navbar";
import Catalog from "./Catalog";
import "./App.css";
import { useState } from "react";
function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <Navbar1 />
      {/* <h1>hello world</h1>
    <h2>Count: {count}</h2>
    <button onClick={()=>{setCount(count+1)}} class='btn'>Add {count}</button> */}
    </>
  );
}

export default App;
