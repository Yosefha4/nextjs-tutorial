"use client";
import React, { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  // console.log("client comp"); // Note: This will run on the client side
  return (
    <div className="flex flex-col w-full text-center">
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <div className="flex flex-row gap-4 justify-center mt-6">
        <button className="btn btn-success" onClick={() => setCount(count + 1)}>
          Increase +
        </button>
        <button className="btn btn-warning" onClick={() => setCount(count - 1)}>
          Decrease -
        </button>
      </div>
    </div>
  );
};

export default ClientPage;
