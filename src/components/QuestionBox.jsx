import React, { useContext } from "react";
import Header from "./Header";
import { AppContext } from "../App";
import Answer from "./Answer";
const QuestionBox = () => {
  const { questions, activeQuestion } = useContext(AppContext);
  return (
    <div className="question-box">
      <Header />
      <h2>{questions[activeQuestion].question}</h2>

      <div className="answers">
        {questions[activeQuestion].options.map((option) => {
          return <Answer option={option} key={option} />;
        })}
      </div>
    </div>
  );
};

export default QuestionBox;
