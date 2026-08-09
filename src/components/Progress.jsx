import React, { useContext } from "react";
import { AppContext } from "../App";

const Progress = () => {
  const { activeQuestion, points, questions } = useContext(AppContext);
  const totalPoints = questions.reduce((total, cur) => {
    return total + cur.points;
  }, 0);
  return (
    <div className="progress">
      <progress
        max={totalPoints}
        className="progress-bar"
        value={points}
      ></progress>

      <div className="progress-info">
        <span>Question {activeQuestion + 1} / 15</span>
        <span>{points} Points</span>
      </div>
    </div>
  );
};

export default Progress;
