import React from "react";

const Chosed = (props) => {
  const { item, choseOne } = props;
  //   console.log(item);

  return (
    <div className="text-center">
      {/* <p>{item.name}</p> */}
      <button
        onClick={() => choseOne()}
        className=" text-white mb-3 btn bg-primary"
      >
        Chose 1 Item
      </button>
    </div>
  );
};

export default Chosed;
