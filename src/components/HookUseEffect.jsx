import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  useEffect(() => {
    console.log("Sou executado sempre");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  const [anotherNumber, setAnotherNumber] = useState(0);

  const changeAnotherNumber = () => {
    setAnotherNumber(anotherNumber + 1);
  };

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado somente quando anotherNumber muda!");
    }
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={changeAnotherNumber}>Executar</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
