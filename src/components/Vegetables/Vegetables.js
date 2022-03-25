import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Vegetable from "../Vegetable/Vegetable";
import "./Vegetables.css";

const Vegetables = () => {
  const [vegetables, setVegetables] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart);

  useEffect(() => {
    fetch("vegetablesData.json")
      .then((res) => res.json())
      .then((data) => setVegetables(data));
  }, []);

  const addToCartHandler = (vegetable) => {
    setCart(vegetable);
  };

  return (
    <div className="store-container">
      <div className="vegetables-container">
        {vegetables.map((vegetable) => (
          <Vegetable
            vegetable={vegetable}
            key={vegetable.id}
            addToCartHandler={addToCartHandler}
          ></Vegetable>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Vegetables;
