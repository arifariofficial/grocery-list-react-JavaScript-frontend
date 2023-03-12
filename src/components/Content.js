import React, { useState } from "react";

export const Content = () => {
  const [name, setName] = useState("Arif");

  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const name = ["Arif", "Samiya", "Rimi", "Ridi"];
    const number = Math.floor(Math.random() * name.length);
    return name[number];
  };
  const handleNameChange2 = () => {
    const name = ["Arif", "Samiya", "Rimi", "Ridi"];
    const number = Math.floor(Math.random() * name.length);
    setName(name[number]);
  };

  const handleClick = () => {
    console.log("You clicked");
  };
  const handleClick4 = () => {
    setCount(count + 1);
    console.log(`You clicked ${count} times`);
  };
  const handleClick2 = (name) => {
    console.log(`${name} clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target);
  };

  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center">
        <div onDoubleClick={handleClick}>
          4. Hello, {handleNameChange()}!, double click
        </div>

        <div>5. Hello, {name}! (useState)</div>
        <button onClick={handleNameChange2}>Change name</button>

        <button onClick={handleClick}>
          1. Click me (Calls handleClick function)
        </button>

        <button onClick={handleClick4}>
          6. Click me (Calls handleClick function)
        </button>

        <button onClick={() => handleClick2(handleNameChange())}>
          2. Click me (Calls handleClick2 function with args)
        </button>

        <button onClick={(e) => handleClick3(e)}>
          3. Click me (pass event)
        </button>
      </div>
    </div>
  );
};
