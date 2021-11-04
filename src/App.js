import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";
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
