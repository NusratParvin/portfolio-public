import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-3 bg-transparent shadow-none">
      <Logo />
      <Menu />
    </nav>
  );
};

export default Nav;
