import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Vegetable.css";

const Vegetable = (props) => {
  // console.log(props.vegetable);

  const { addToCartHandler, vegetable } = props;

  const { id, name, price, img } = vegetable;

  return (
    <div className="vegetable-size text-center">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5>
        <strong>Price:</strong> $ {price}
      </h5>
      <button
        onClick={() => addToCartHandler(vegetable)}
        className="btn bg-primary"
      >
        <strong className="text-white px-2">Add to Cart</strong>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Vegetable;
