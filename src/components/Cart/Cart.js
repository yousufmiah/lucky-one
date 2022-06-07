import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
  const { removeItemFromCart } = props;
  const { id, name, img } = props.cart;

  return (
    <div className="cart text-center ">
      <div className="d-flex ps-3">
        <div className="size d-flex">
          <img className="my-2" src={img} alt="" />
          <h6 className="px-2 pt-4">{name}</h6>

          <FontAwesomeIcon
            onClick={() => removeItemFromCart(id)}
            className="pt-4 icon"
            icon={faTrash}
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default Cart;
