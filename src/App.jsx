import { createContext, useEffect, useReducer } from "react";
import Quiz from "./components/Quiz";
import StartScreen from "./components/StartScreen";
import Spinner from "./components/Spinner";
import Error from "./components/Error";
import QuestionBox from "./components/QuestionBox";

export const AppContext = createContext();

const initialState = {
  questions: [],
  status: "loading",
  activeQuestion: 0,
  userAnswer: null,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived": {
      return { ...state, questions: action.payload, status: "ready" };
    }
    case "startQuiz": {
      return { ...state, status: "active" };
    }
    case "dataFeild": {
      return { ...state, status: "error" };
    }
    case "userAnswerRecive": {
      const isTrue =
        action.payload === state.questions[state.activeQuestion].correctOption;
      return {
        ...state,
        userAnswer: action.payload,
        points: isTrue
          ? state.points + state.questions[state.activeQuestion].points
          : state.points,
      };
    }
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, questions, activeQuestion, userAnswer, points } = state;

  useEffect(function () {
    async function getData() {
      try {
        const response = await fetch("http://localhost:3000/questions");
        if (!response.ok) {
          throw new Error("Something went wrong while loading the questions.");
        }
        const data = await response.json();
        dispatch({ type: "dataRecived", payload: data });
      } catch (e) {
        dispatch({ type: "dataFeild" });
      }
    }
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{ questions, dispatch, activeQuestion, userAnswer, points }}
    >
      <div className="app">
        {status === "ready" && <StartScreen />}
        {status === "loading" && <Spinner />}
        {status === "error" && <Error />}
        {status === "active" && <QuestionBox />}
      </div>
    </AppContext.Provider>
  );
}
