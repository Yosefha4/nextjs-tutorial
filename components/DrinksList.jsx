"use client";
import Link from "next/link";
import React from "react";

const DrinksList = ({ drinks }) => {
  return (
    <ul className="menu menu-vertical pl-0">
      {drinks.map((drink) => {
        return (
          <li key={drink.idDrink} className="menu-item">
            <Link className="text-xl font-medium" href={`/drinks/${drink.idDrink}`}>
              {drink.strDrink}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DrinksList;
