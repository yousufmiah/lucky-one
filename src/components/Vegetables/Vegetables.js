import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Chosed from "../Chosed/Chosed";
import Questions from "../Questions/Questions";
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

  //cart to add button====================
  const addToCartHandler = (vegetable) => {
    if (carts.length <= 3) {
      const newVegetable = [...carts, vegetable];
      setCarts(newVegetable);
    } else {
      alert("Sorry, No allow above 4 items.");
    }
  };

  //emptyItem button===================================
  const emptyItem = () => {
    setCarts([]);
  };

  // chose 1 item button ===============================
  const choseOne = () => {
    if (carts.length > 0) {
      const randomId = Math.floor(Math.random() * carts.length);
      const lucky = carts[randomId];
      setCarts([lucky]);
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
        <div>
          {carts.map((cart) => (
            <Cart cart={cart}></Cart>
          ))}
        </div>

        <Chosed choseOne={choseOne}></Chosed>
        <Selected emptyItem={emptyItem}></Selected>
      </div>
      <div className="ps-5">
        <Questions></Questions>
      </div>
    </div>
  );
};

export default Vegetables;
