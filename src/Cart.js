import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { removeProd } from './Redux/actions/prodactions';
import { useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import '../src/CSS/cart.css'
export default function Cart() {
  const dispatch = useDispatch();
    const products = useSelector((state) => state.prodReducer.cart);
    const quant = useSelector((state) => state.prodReducer.quant);
    const sum = useSelector((state) => state.prodReducer.sum);
    const product ={
      padding: '10px',
    }
    const container = {
      padding: '7%',
    }
    console.log(products);
  if(products.length === 0){
    return(
      <h1>Cart is Empty</h1>
    )
  } 
  else {
    return (
      <>
      <div style={container}>
      <Table responsive border >
        <thead>
          <tr>
            <th className='title'>Title</th>
            <th></th>
           
            <th>Price</th>
        
          </tr>
        </thead>
        <tbody>
          {
            products.map((card, index) => (
              <tr key={index}>
                <td ><img src={require(`../src/${card.img}`) } alt="" /></td>
                 <td >{card.title}</td> 
                <td >₹ {card.price}</td>
                <td><button onClick={()=>{dispatch(removeProd(card.title))}}>X</button></td>
              </tr>
            ))
          }
          <tr>
            <td></td>
            <td >Total</td>
  
            <td>₹ {sum} <br />(total quantity) {quant}</td>
          </tr>
        </tbody>
      </Table>
      </div>
      </>
    )
  }
}
