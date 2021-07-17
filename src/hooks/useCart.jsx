import { AppContext } from "../App";
import React from "react";

export const useCart = () => {
  const { itemsInCard } = React.useContext(AppContext);
  const totalPrice = itemsInCard.reduce(
    (sum, obj) => Number(obj.price) + Number(sum),
    0
  );

  return { itemsInCard, totalPrice };
};
