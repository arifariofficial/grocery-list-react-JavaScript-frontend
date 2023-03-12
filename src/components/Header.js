import React from "react";

const Header = ({ title }) => {
  return (
    <nav className="bg-blue-500 fixed top-0 w-full text-2xl text-center">
      <h1>{title}</h1>
    </nav>
  );
};
export default Header;
