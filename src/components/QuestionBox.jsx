import React from "react";

const QuestionBox = () => {
  return (
    <div className="question-box">
      <h2>Which Hook is used for managing state in React?</h2>

      <div className="answers">
        <button className="answer">useRef</button>

        <button className="answer active">useState</button>

        <button className="answer correct">useReducer</button>

        <button className="answer wrong">useMemo</button>
      </div>
    </div>
  );
};

export default QuestionBox;
