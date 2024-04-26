import React from 'react'
import { useSelector } from "react-redux";

export default function Cart() {
    const products = useSelector((state) => state.prodReducer.cart);
    console.log(products);
  if(products.length === 0){
    return(
      <h1>Cart is Empty</h1>
    )
  } 
//   else {
//     return (
//       <>
//         <h1>Cart</h1>
//         {
//           products.map((card, index) => (
//             <div key={index}>
//               <h1>{card.title}</h1>
//               <p>{card.description}</p>
//               <img src={require(`../src/${card.img}`)} alt={card.title}/>
//             </div>
//           ))
//         }
//       </>
//     )
//   }
}
