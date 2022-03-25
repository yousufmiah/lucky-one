import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Selected from "../Selected/Selected";
import SelectItem from "../SelectItem/SelectItem";
import Vegetable from "../Vegetable/Vegetable";
import "./Vegetables.css";

const Vegetables = () => {
  const [vegetables, setVegetables] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("vegetablesData.json")
      .then((res) => res.json())
      .then((data) => setVegetables(data));
  }, []);

  const addToCartHandler = (vegetable) => {
    if (carts.length < 4) {
      const newVegetable = [...carts, vegetable];
      setCarts(newVegetable);
    } else {
      alert("Sorry, not allow above 4 items.");
    }
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
        <SelectItem></SelectItem>
        {carts.map((cart) => (
          <Cart cart={cart}></Cart>
        ))}
        <Selected></Selected>
      </div>
    </div>
  );
};

export default Vegetables;
