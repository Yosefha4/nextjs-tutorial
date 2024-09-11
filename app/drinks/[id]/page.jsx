import React from "react";

const DrinkItem = ({ params }) => {
  return (
    <div>
      <h1 className="text-7xl">{params.id}</h1>
    </div>
  );
};

export default DrinkItem;
