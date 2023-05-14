import React from "react";
import "./GoalList.css";
function GoalList(props) {
  console.log(props.goals);
  return (
    <ul className="goal-list">
      {
        props.goals.map( (g) => {
            return <li key= {g.id}>{g.text}</li>;
        })
      }
    </ul>
  );
}

export default GoalList;
