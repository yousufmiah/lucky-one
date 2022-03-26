import React from "react";

const Selected = (props) => {
  const { emptyItem } = props;
  return (
    <div className="text-center">
      <br />
      <button onClick={emptyItem} className="text-white btn bg-primary">
        Clear Item
      </button>
    </div>
  );
};

export default Selected;
