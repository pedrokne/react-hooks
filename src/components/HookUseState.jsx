import { useState } from "react";

const HookUseState = () => {
  let userName = "João";

  const [name, setName] = useState("Pedro");

  const changeName = () => {
    userName = "Pedro";

    if (name === "Pedro") {
      setName("João");
    } else {
      setName("Pedro");
    }

    console.log(name);
    console.log(userName);
  };

  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    //envio à API
    console.log(age);
  };

  return (
    <div>
      {/* useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeName}>Mudar state</button>
      {/* useState input */}
      <p>Digite sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos!</p>
      <hr />
    </div>
  );
};

export default HookUseState;
