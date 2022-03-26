import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
  const { name, img } = props.cart;

  return (
    <div className="cart text-center">
      <div className="d-flex ps-3">
        <img className="my-2" src={img} alt="" />
        <h6 className="px-3 pt-4">{name}</h6>
        <FontAwesomeIcon className="pt-4" icon={faTrash}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Cart;
