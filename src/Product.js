import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProd } from "./Redux/actions/prodactions";
export default function Product() {
  const products = useSelector((state) => state.prodReducer.products);
  let { detail } = useParams();
  // console.log(addProd);
  const dispatch = useDispatch();
  return (
    <>
      {products.map((card, index) => {
        if (card.title === detail) {
          return (
            <div key={index}>
              <h1>{card.title}</h1>
              <p>{card.description}</p>
              <img src={require(`../src/${card.img}`)} alt={card.title} />
              <button
                onClick={() => {
                  dispatch(addProd(card));
                }}
              >
                ADD to cart
              </button>
            </div>
          );
        }
      })}
    </>
  );
}
