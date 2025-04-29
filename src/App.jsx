import React from "react";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <header>HEADER COMES HERE</header>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER COMES HERE</footer>
    </div>
  );
};

export default App;
