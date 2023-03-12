import React from "react";

const Footer = ({ length }) => {
  const today = new Date();

  return (
    <div className="bg-blue-500 fixed flex flex-row bottom-0 w-full justify-between">
      <p>Copyright &copy; {today.getFullYear()}</p>
      <p className="mx-4">
        {length === 1 ? "item" : "items"}: {length}{" "}
      </p>
    </div>
  );
};

export default Footer;
