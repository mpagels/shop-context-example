import React from "react";
import { useBuy } from "../../contexts/CartContext";

function Item({ name, price }) {
  const buy = useBuy();

  return (
    <article onClick={() => buy(price)}>
      {name}: {price.toFixed(2)}€
    </article>
  );
}

export default Item;
