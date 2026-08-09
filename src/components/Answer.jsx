import React, { useContext } from "react";
import { AppContext } from "../App";

const Answer = ({ option, index }) => {
  const { dispatch, userAnswer, questions, activeQuestion } =
    useContext(AppContext);
  const hasAnswer = userAnswer !== null;
  return (
    <button
      className={`answer ${index === userAnswer ? "active" : ""} ${hasAnswer ? (index === questions[activeQuestion].correctOption ? "correct" : "wrong") : ""}`}
      onClick={() => dispatch({ type: "userAnswerRecive", payload: index })}
      disabled={hasAnswer}
    >
      {option}
    </button>
  );
};

export default Answer;
