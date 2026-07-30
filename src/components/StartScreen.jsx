import React, { useContext } from "react";
import Header from "./Header";
import Button from "./Button";
import { AppContext } from "../App";
const StartScreen = () => {
  const { questions, dispatch } = useContext(AppContext);
  const points = questions.reduce((totalPoints, currentPoint) => {
    return totalPoints + currentPoint.points;
  }, 0);
  function nexQuestion() {
    dispatch({ type: "startQuiz" });
  }
  return (
    <div className="start-screen">
      <Header />

      <p className="description">
        Test your React knowledge with{" "}
        <strong>{questions.length} questions</strong>.
        <br />
        Each correct answer gives you <strong>10 points</strong>.
      </p>

      <div className="info">
        <div className="card">
          <span>📚</span>
          <p>{questions.length} Questions</p>
        </div>

        <div className="card">
          <span>⏱️</span>
          <p>15 Minutes</p>
        </div>

        <div className="card">
          <span>🏆</span>
          <p> {points} points</p>
        </div>
      </div>

      <Button className="start-btn" onClickHandel={nexQuestion}>
        Start Quiz →
      </Button>
    </div>
  );
};

export default StartScreen;
