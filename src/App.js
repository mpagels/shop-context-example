import React from "react";
import AppHeader from "./components/AppHeader";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartContextProvider>
      <div>
        <AppHeader>
          <Cart />
        </AppHeader>
        <Shop />
      </div>
    </CartContextProvider>
  );
}

export default App;
