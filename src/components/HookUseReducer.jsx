import React, { useReducer, useState } from "react";

const HookUseReducer = () => {
  //exemplo simples
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  //exemplo mais avançado
  const initialTalk = [
    { id: 1, text: "Uma coisa é uma coisa" },
    { id: 2, text: "Outra coisa é outra coisa" },
  ];

  const talkReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTalk = {
          id: Math.random(),
          text: talkText,
        };

        setTalkText("");

        return [...state, newTalk];

      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [talkText, setTalkText] = useState("");
  const [talks, dispatchTalks] = useReducer(talkReducer, initialTalk);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTalks({ type: "ADD" });
  };

  const removeTalk = (id) => {
    dispatchTalks({ type: "DELETE", id: id });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Altera número</button>
      <h3>Talk:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTalkText(e.target.value)}
          value={talkText}
        />
        <input type="submit" value="Adicionar mensagem" />
      </form>
      {talks.map((talk) => (
        <li key={talk.id} onDoubleClick={() => removeTalk(talk.id)}>
          {talk.text}
        </li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
