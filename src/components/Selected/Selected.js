import React from "react";

const Selected = (props) => {
  const { choseOne, emptyItem } = props;
  return (
    <div className="text-center">
      <button
        onClick={() => choseOne()}
        className=" text-white mb-3 btn bg-primary"
      >
        <strong>Chose 1 Item</strong>
      </button>
      <br />
      <button onClick={emptyItem} className="text-white btn bg-primary">
        <strong>Clear Item</strong>
      </button>
    </div>
  );
};

export default Selected;
