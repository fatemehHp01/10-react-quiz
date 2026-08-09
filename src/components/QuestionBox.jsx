import React, { useContext } from "react";
import Header from "./Header";
import { AppContext } from "../App";
import Answer from "./Answer";
import Progress from "./Progress";
const QuestionBox = () => {
  const { questions, activeQuestion, userAnswer, dispatch } =
    useContext(AppContext);
  return (
    <div className="question-box">
      <Header />
      <Progress />
      <h2>{questions[activeQuestion].question}</h2>
      <div className="answers">
        {questions[activeQuestion].options.map((option, index) => {
          return <Answer option={option} key={option} index={index} />;
        })}
      </div>
      {userAnswer !== null ? (
        <button
          className="next-btn"
          onClick={() => dispatch({ type: "nexQuestion" })}
        >
          Next
          <span>→</span>
        </button>
      ) : null}
    </div>
  );
};

export default QuestionBox;
