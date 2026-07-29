import React, { useContext, useEffect } from "react";
import Header from "./Header";
import { AppContext } from "../App";
import AnswerButton from "./AnswerButton";
const QuestionBox = () => {
  const { questions, dispatch } = useContext(AppContext);
  useEffect(function () {
    async function getData() {
      try {
        const response = await fetch("http://localhost:8000/questions");
        const data = await response.json();
        dispatch({ type: "getData", payload: data });
      } catch (e) {}
    }
    getData();
  }, []);
  return (
    <div className="question-box">
      <Header />
      <h2>{questions[0]?.question}</h2>
      <div className="answers">
        {questions[0]?.options.map((option) => {
          return <AnswerButton option={option} />;
        })}
      </div>
    </div>
  );
};

export default QuestionBox;
