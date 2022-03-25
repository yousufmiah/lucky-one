import React from "react";

const Selected = (props) => {
  const { emptyItem } = props;
  return (
    <div className="text-center">
      <button className=" text-white mb-3 btn bg-primary">Chose Item</button>
      <br />
      <button onClick={emptyItem} className="text-white btn bg-primary">
        Chose Again
      </button>
    </div>
  );
};

export default Selected;
