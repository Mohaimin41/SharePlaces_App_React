// import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

function App() {
  const [goalList, setGoalList] = useState([
    { id: "g1", text: "finish it 🤲" },
    { id: "g2", text: "get React somewhat" },
    { id: "g3", text: "somewhat get frontend dev works" },
  ]);

  function addNewGoalHandler(newGoal) {
    setGoalList((prevCourseGoal) => {
      return prevCourseGoal.concat(newGoal);
    });
  }

  return (
    <div className="course-goals">
      <h2>Course goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={goalList} />
    </div>
  );
}

export default App;
