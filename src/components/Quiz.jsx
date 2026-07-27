import React from "react";
import Header from "./Header";
import Progress from "./Progress";
import QuestionBox from "./QuestionBox";
import Footer from "./Footer";
const Quiz = () => {
  return (
    <div className="quiz">
      <Header />
      <Progress />
      <QuestionBox />
      <Footer />
    </div>
  );
};

export default Quiz;
