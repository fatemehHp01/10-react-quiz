import React, { useContext } from "react";
import Header from "./Header";
import Button from "./Button";
import { AppContext } from "../App";
const StartScreen = () => {
  const { dispatch } = useContext(AppContext);
  function changeStatus() {
    dispatch({ type: "statusChange" });
  }
  return (
    <div className="start-screen">
      <Header />

      <p className="description">
        Test your React knowledge with <strong>15 questions</strong>.
        <br />
        Each correct answer gives you <strong>10 points</strong>.
      </p>

      <div className="info">
        <div className="card">
          <span>📚</span>
          <p>15 Questions</p>
        </div>

        <div className="card">
          <span>⏱️</span>
          <p>15 Minutes</p>
        </div>

        <div className="card">
          <span>🏆</span>
          <p>150 Points</p>
        </div>
      </div>

      <Button className="start-btn" handelCick={changeStatus}>
        Start Quiz →
      </Button>
    </div>
  );
};

export default StartScreen;
