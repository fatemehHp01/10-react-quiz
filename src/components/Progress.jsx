import React, { useContext } from "react";
import { AppContext } from "../App";

const Progress = () => {
  const { activeQuestion, points } = useContext(AppContext);
  return (
    <div className="progress">
      <progress max={10} className="progress-bar" value={points}></progress>

      <div className="progress-info">
        <span>Question {activeQuestion + 1} / 15</span>
        <span>{points} Points</span>
      </div>
    </div>
  );
};

export default Progress;
