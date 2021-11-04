import React from "react";

function AppHeader({ children }) {
  return (
    <header>
      <h1>My awesome shop</h1>
      {children}
    </header>
  );
}

export default AppHeader;
