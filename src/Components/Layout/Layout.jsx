import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/buscar">buscar</Link>
          </li>
          <li>
            <Link to="/ativas">ativas</Link>
          </li>
          <li>
            <Link to="/disponiveis">disponiveis</Link>
          </li>
          <li>
            <Link to="/historico">historico</Link>
          </li>
          <li>
            <Link to="/oferecer">oferecer</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;