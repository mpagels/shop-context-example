import React from "react";
import { useTotalPrice } from "../contexts/CartContext";

function Cart() {
  const totalPrice = useTotalPrice();

  return <div>Cart: {totalPrice.toFixed(2)}€</div>;
}

export default Cart;
