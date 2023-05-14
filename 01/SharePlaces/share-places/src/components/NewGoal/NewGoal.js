import React, { useState } from "react";
import "./NewGoal.css";

function NewGoal(props) {
  const [enteredText, setEnteredText] = useState("");

  function addGoalHandler(event) {
    event.preventDefault();

    const toBeAddedGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };

    setEnteredText("");
    props.onAddGoal(toBeAddedGoal);
  }

  function textChangeHandler(event) {
    setEnteredText(event.target.value);
  }

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default NewGoal;
