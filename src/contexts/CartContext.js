import React, { useContext, useState } from "react";

export const CartContext = React.createContext({
  totalPrice: 0,
  buy: () => undefined,
});

export function CartContextProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState(0);

  function buy(price) {
    setTotalPrice(totalPrice + price);
  }

  return (
    <CartContext.Provider
      value={{
        totalPrice,
        buy,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useTotalPrice() {
  const { totalPrice } = useContext(CartContext);
  return totalPrice;
}

export function useBuy() {
  const { buy } = useContext(CartContext);
  return buy;
}
