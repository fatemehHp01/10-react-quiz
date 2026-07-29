import { createContext, useReducer } from "react";
import Quiz from "./components/Quiz";
import StartScreen from "./components/StartScreen";
import QuestionBox from "./components/QuestionBox";

export const AppContext = createContext();

const initialState = {
  status: "ready",
  questions: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "statusChange": {
      return {
        ...state,
        status: "active",
      };
    }
    case "getData": {
      return {
        ...state,
        questions: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, questions } = state;
  return (
    <AppContext.Provider value={{ status, dispatch, questions }}>
      <div className="app">
        {status === "ready" && <StartScreen />}
        {status === "active" && <QuestionBox />}
      </div>
    </AppContext.Provider>
  );
}
