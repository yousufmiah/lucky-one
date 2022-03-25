import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { id, name, price, img } = props.cart;

  return (
    <div className="cart">
      <h3 className="ps-3">Selected Vegetables</h3>
      <div className="d-flex ps-3">
        <img src={img} alt="" />
        <h5 className="px-3 pt-3">{name}</h5>
        <p className="pt-3">delete</p>
      </div>
    </div>
  );
};

export default Cart;
